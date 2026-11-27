import React from 'react';
import { institutional } from '../institutional';

const updatedAt = '28 de junho de 2026';

const Section = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-xl md:text-2xl font-black text-[#0A192F]">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed">{children}</div>
  </section>
);

const ContactLink = () => (
  <>
    <a className="font-bold text-[#2E70CE] hover:text-[#A02070]" href={`mailto:${institutional.legalEmail}`}>
      {institutional.legalEmail}
    </a>
    {' '}ou{' '}
    <a className="font-bold text-[#2E70CE] hover:text-[#A02070]" href={`mailto:${institutional.legalAlternateEmail}`}>
      {institutional.legalAlternateEmail}
    </a>
  </>
);

export const IntellectualProperty = () => (
  <section className="animate-in">
    <div className="bg-[#0A192F] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#5CE1E6] text-xs font-black uppercase tracking-[0.35em] mb-5">Proteção de conteúdo</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">Propriedade Intelectual</h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">
          Informações sobre uso permitido, restrições e proteção dos conteúdos e marcas do Eu Vou Ser Doutor.
        </p>
        <p className="text-sm text-blue-200/80 mt-6">Última atualização: {updatedAt}</p>
      </div>
    </div>

    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-8 md:p-10 space-y-9">
        <Section title="1. Titularidade dos conteúdos">
          <p>
            Os conteúdos publicados no site Eu Vou Ser Doutor, incluindo textos, artigos, imagens, vídeos, materiais
            educacionais, identidade visual, logotipo, marca, design, organização das páginas e demais elementos,
            pertencem ao Eu Vou Ser Doutor ou são utilizados mediante autorização, licença ou direito legítimo de uso.
          </p>
        </Section>

        <Section title="2. Uso permitido">
          <p>
            O usuário pode acessar, ler e compartilhar links públicos do site para fins pessoais, educacionais e
            informativos, desde que preserve a autoria, a integridade do conteúdo e a referência ao site oficial
            {' '}<a className="font-bold text-[#2E70CE] hover:text-[#A02070]" href={institutional.site}>{institutional.site}</a>.
          </p>
        </Section>

        <Section title="3. Usos proibidos">
          <p>
            É proibida a reprodução integral, cópia sistemática, venda, adaptação, distribuição, republicação, uso
            comercial, raspagem automatizada, remoção de créditos, alteração de marca, uso de logotipo sem autorização
            ou qualquer exploração do conteúdo sem permissão prévia e expressa.
          </p>
        </Section>

        <Section title="4. Citações e compartilhamento">
          <p>
            Citações curtas são permitidas com indicação de fonte, desde que não haja alteração do sentido do conteúdo,
            uso enganoso, associação indevida, finalidade comercial não autorizada ou aparência de endosso oficial pelo
            Eu Vou Ser Doutor.
          </p>
        </Section>

        <Section title="5. Marca e identidade visual">
          <p>
            O nome Eu Vou Ser Doutor, logotipo, identidade visual, elementos gráficos, slogans e materiais de comunicação
            não podem ser usados para sugerir parceria, patrocínio, autorização, representação ou vínculo oficial sem
            autorização prévia.
          </p>
        </Section>

        <Section title="6. Conteúdos de terceiros">
          <p>
            O site pode conter imagens, referências, citações, links, incorporações ou materiais de terceiros, utilizados
            conforme autorização, licença, uso legítimo ou finalidade informativa. Os direitos desses materiais permanecem
            com seus respectivos titulares.
          </p>
        </Section>

        <Section title="7. Solicitação de remoção ou reclamação de direitos">
          <p>
            Titulares de direitos autorais, imagem, marca ou propriedade intelectual podem entrar em contato caso entendam
            que algum conteúdo viola seus direitos. Canal obrigatório: <ContactLink />.
          </p>
        </Section>

        <Section title="8. Medidas em caso de uso indevido">
          <p>
            O Eu Vou Ser Doutor poderá solicitar remoção de conteúdo, bloquear uso indevido, notificar plataformas, buscar
            reparação ou adotar medidas legais cabíveis em caso de violação de propriedade intelectual.
          </p>
        </Section>

        <Section title="9. Contato">
          <p>
            Para solicitações relacionadas a direitos autorais, uso de marca, remoção de conteúdo ou propriedade
            intelectual, entre em contato pelo e-mail: <ContactLink />.
          </p>
        </Section>
      </div>
    </article>
  </section>
);
