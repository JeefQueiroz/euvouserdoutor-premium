// Canonical public navigation shared by static and React pages.
export const navLinks = [['/','Home'],['/noticias','Notícias'],['/saude','Saúde'],['/medicina','Medicina'],['/vestibular','Vestibular'],['/materiais','Materiais'],['/mentoria','Mentoria']];
export const currentSection = (route, href) => route === href || (href !== '/' && route.startsWith(href + '/'));
