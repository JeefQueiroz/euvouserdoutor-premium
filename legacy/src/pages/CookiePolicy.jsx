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
  <a className="font-bold text-[#2E70CE] hover:text-[#A02070]" href={`mailto:${institutional.legalEmail}`}>
    {institutional.legalEmail}
  </a>
);

export const CookiePolicy = () => (
  <section className="animate-in">
    <div className="bg-[#0A192F] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#5CE1E6] text-xs font-black uppercase tracking-[0.35em] mb-5">Cookies</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">Política de Cookies</h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">
          Entenda como o Eu Vou Ser Doutor pode usar cookies e tecnologias semelhantes para funcionamento, análise e melhoria da experiência no site.
        </p>
        <p className="text-sm text-blue-200/80 mt-6">Última atualização: {updatedAt}</p>
      </div>
    </div>

    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-8 md:p-10 space-y-9">
        <Section title="1. O que são cookies">
          <p>
            Cookies são pequenos arquivos ou identificadores armazenados no navegador do usuário para permitir
            funcionamento técnico, lembrar preferências, medir navegação e, quando aplicável, apoiar ações de
            comunicação ou publicidade.
          </p>
        </Section>

        <Section title="2. Tipos de cookies que podem ser usados">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies necessários:</strong> essenciais para funcionamento, segurança, carregamento de páginas e navegação básica.</li>
            <li><strong>Cookies de análise/desempenho:</strong> usados para entender páginas acessadas, origem de tráfego, tempo de navegação e melhoria do conteúdo.</li>
            <li><strong>Cookies de funcionalidade:</strong> usados para lembrar preferências do usuário, quando existirem.</li>
            <li><strong>Cookies de marketing/publicidade:</strong> usados somente se houver ferramentas como Meta Pixel, Google Ads, remarketing, tags de campanhas ou similares.</li>
          </ul>
          <p>
            O código atual possui suporte condicional a Google Analytics ou Google Tag Manager por variáveis de ambiente.
            Essas ferramentas só devem carregar após consentimento para cookies de análise.
          </p>
        </Section>

        <Section title="3. Finalidade dos cookies">
          <p>Os cookies podem ser usados para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>permitir funcionamento técnico do site;</li>
            <li>melhorar a navegação;</li>
            <li>analisar desempenho de páginas;</li>
            <li>entender quais conteúdos são mais acessados;</li>
            <li>melhorar segurança;</li>
            <li>mensurar campanhas, se existirem;</li>
            <li>personalizar experiência, se aplicável.</li>
          </ul>
        </Section>

        <Section title="4. Cookies de terceiros">
          <p>
            Alguns cookies podem ser definidos por serviços de terceiros integrados ao site, como hospedagem, ferramentas
            de análise, vídeos incorporados, redes sociais, mapas, formulários, publicidade ou comunicação, caso esses
            recursos estejam ativos no projeto.
          </p>
        </Section>

        <Section title="5. Gerenciamento de cookies">
          <p>
            O usuário pode gerenciar ou bloquear cookies nas configurações do navegador. O site também exibe um banner
            com opções para aceitar todos os cookies, recusar cookies não essenciais ou gerenciar preferências. A
            preferência pode ser alterada pelo link “Preferências de Cookies” no rodapé.
          </p>
          <p>
            Cookies técnicos necessários não são bloqueados. Cookies de analytics ou marketing só devem ser ativados após
            consentimento, quando tecnicamente aplicável.
          </p>
        </Section>

        <Section title="6. Alterações desta política">
          <p>
            Esta Política de Cookies pode ser atualizada a qualquer momento para refletir mudanças no site, ferramentas
            usadas ou legislação aplicável.
          </p>
        </Section>

        <Section title="7. Contato">
          <p>Para dúvidas sobre esta Política de Cookies, entre em contato pelo e-mail: <ContactLink />.</p>
        </Section>
      </div>
    </article>
  </section>
);
