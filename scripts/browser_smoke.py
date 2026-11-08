"""Smoke tests do Premium V3 e das páginas legadas, servidas localmente."""
import os
import subprocess
import sys
import time
from pathlib import Path
from urllib.request import urlopen
from playwright.sync_api import sync_playwright

root=Path(__file__).resolve().parents[1]
capture=root/"browser-captures"
capture.mkdir(exist_ok=True)
base="http://127.0.0.1:4173"
server=subprocess.Popen([sys.executable,"-m","http.server","4173","--bind","127.0.0.1","--directory",str(root/"dist")],stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
try:
    for _ in range(60):
        try:
            with urlopen(base+"/",timeout=1) as resp:
                if resp.status == 200:
                    break
        except Exception:
            time.sleep(.2)
    else:
        raise AssertionError("Servidor estático não iniciou.")

    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
        for label,viewport in [("desktop",{"width":1366,"height":900}),("mobile",{"width":390,"height":844})]:
            page=browser.new_page(viewport=viewport,device_scale_factor=1)
            errors=[]
            page.on("pageerror",lambda e:errors.append(str(e)))
            page.goto(base+"/",wait_until="networkidle")
            assert "Conhecimento que" in page.locator("main").inner_text()
            assert not page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 3"),"Overflow horizontal na home"
            if label=="mobile":
                toggle=page.locator("[data-menu-button]")
                toggle.click()
                assert toggle.get_attribute("aria-expanded")=="true"
            page.screenshot(path=str(capture/f"home-{label}.png"),full_page=True)
            page.goto(base+"/noticias/",wait_until="networkidle")
            assert "Medicina" in page.locator("body").inner_text() or "medicina" in page.locator("body").inner_text().lower()
            page.screenshot(path=str(capture/f"noticias-{label}.png"),full_page=True)
            for route,needle in [("/materiais/","Materiais de Apoio"),("/flashcards/","Flashcards Doutor"),("/mentoria/","Mentoria")]:
                page.goto(base+route,wait_until="networkidle")
                assert needle.casefold() in page.locator("body").inner_text().casefold(),f"Texto ausente em {route}"
                assert page.locator("main").count()>=1,f"Sem main em {route}"
            page.goto(base+"/noticias/bacterias-lingua-velocidade-raciocinio-2026/",wait_until="networkidle")
            assert "bact" in page.locator("body").inner_text().casefold()
            page.screenshot(path=str(capture/f"artigo-{label}.png"),full_page=False)
            assert not errors, f"Erro Javascript em {label}: {errors[:8]}"
            print(f"Navegador {label}: home, notícias, materiais, flashcards, mentoria e artigo OK")
            page.close()
        browser.close()
finally:
    server.terminate()
    server.wait(timeout=10)
