from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
css=(root/'dist/assets/site.css').read_text()
js=(root/'dist/assets/site.js').read_text()
def html(p):
    text=(root/'dist'/p).read_text()
    text=text.replace('<link rel="stylesheet" href="/assets/site.css">','<style>'+css+'</style>')
    text=text.replace('<script src="/assets/site.js" defer></script>','<script>'+js+'</script>')
    return text
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
    for width,height,label in [(1440,900,'desktop'),(390,844,'mobile')]:
        page=browser.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
        page.set_content(html('index.html'),wait_until='domcontentloaded')
        page.screenshot(path=str(root/f'preview-{label}.png'),full_page=True)
        print(label,'home title',page.title(),'horizontal overflow',page.evaluate('document.documentElement.scrollWidth>window.innerWidth'))
        if label=='mobile':
            b=page.locator('[data-menu-button]')
            b.click();print('Mobile menu expanded',b.get_attribute('aria-expanded'))
            assert b.get_attribute('aria-expanded')=='true'
            page.set_content(html('artigos.html'),wait_until='domcontentloaded')
            field=page.locator('#article-search');field.fill('Barrett')
            print('Filtered cards',page.locator('[data-search-item]:visible').count());assert page.locator('[data-search-item]:visible').count()==1
            page.screenshot(path=str(root/'preview-search-mobile.png'),full_page=False)
        page.close()
    browser.close()
