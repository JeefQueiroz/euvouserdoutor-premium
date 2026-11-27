import React from 'react';
import { institutional } from '../institutional';
import { COOKIE_CONSENT_OPEN_EVENT } from './CookieConsent';

const sections = [
  ['Descobrir', [['/noticias','Notícias e descobertas'],['/saude','Saúde'],['/ciencia','Pesquisa científica'],['/artigos','Biblioteca'],['/busca','Buscar conteúdo']]],
  ['Aprender', [['/vestibular','Vestibular de Medicina'],['/medicina','Vida acadêmica'],['/materiais','Materiais gratuitos'],['/flashcards','Flashcards'],['/questoes','Questões comentadas'],['/mentoria','Mentoria']]],
  ['Institucional', [['/sobre','Sobre o projeto'],['/politica-editorial','Política editorial'],['/aviso-medico','Aviso médico'],['/privacidade','Privacidade'],['/contato','Contato'],['/termos-de-uso','Termos de uso'],['/propriedade-intelectual','Propriedade intelectual'],['/politica-de-cookies','Política de cookies']]]
];
const socials = [['Instagram','instagram'],['YouTube','youtube'],['LinkedIn','linkedin'],['Pinterest','pinterest'],['Facebook','facebook'],['Telegram','telegram']];

export const Footer = () => (
  <footer className="evd-shared-footer">
    <div className="evd-footer-inner">
      <div className="evd-footer-grid">
        <div className="evd-footer-intro">
          <a className="evd-footer-brand" href="/">EuvouserDoutor<span>.</span></a>
          <p>Ciência explicada com fontes, educação médica e caminhos possíveis para estudar Medicina.</p>
          <div className="evd-footer-social">{socials.filter(([,key])=>institutional[key]).map(([label,key])=><a key={key} href={institutional[key]} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>
          <a href={'mailto:'+institutional.legalEmail}>{institutional.legalEmail}</a>
        </div>
        {sections.map(([title,links])=><div key={title} className="evd-footer-column"><strong>{title}</strong>{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}{title==='Institucional'&&<button type="button" onClick={()=>window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_OPEN_EVENT))}>Preferências de cookies</button>}</div>)}
      </div>
      <div className="evd-footer-bottom"><span>© {new Date().getFullYear()} EuvouserDoutor. Informação não substitui atendimento de saúde.</span><span>Conteúdo educacional · Português do Brasil</span></div>
    </div>
  </footer>
);
