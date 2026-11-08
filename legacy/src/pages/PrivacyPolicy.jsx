import React from 'react';
import { institutional } from '../institutional';

const updatedAt = '28 de junho de 2026';

const Section = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC]">{title}</h2>
    <div className="space-y-3 text-[#98A2B3] leading-relaxed">{children}</div>
  </section>
);

const ContactLink = () => (
  <a className="font-bold text-[#4F8CFF] hover:underline" href={`mailto:${institutional.legalEmail}`}>
    {institutional.legalEmail}
  </a>
);

export const PrivacyPolicy = () => (
  <section className="animate-in bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
    <div className="bg-[#0A192F] border-b border-white/[0.08] py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.18),transparent_40%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Privacidade & LGPD
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-[#F8FAFC]">Política de Privacidade</h1>
        <p className="text-lg text-[#98A2B3] leading-relaxed max-w-3xl">
          Como o Eu Vou Ser Doutor coleta, usa, protege e trata dados pessoais.
        </p>
        <p className="text-xs text-[#98A2B3]/80 mt-6 font-bold uppercase tracking-widest">Última atualização: {updatedAt}</p>
      </div>
    </div>

    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-[#11141A] rounded-[32px] border border-white/[0.08] shadow-2xl p-8 md:p-12 space-y-10">
        <Section title="1. Apresentação">
          <p>
            Esta Política de Privacidade descreve como o Eu Vou Ser Doutor coleta, usa, armazena, compartilha e protege
            dados pessoais dos usuários que acessam o site <a className="font-bold text-[#4F8CFF] hover:underline" href={institutional.site}>{institutional.site}</a>.
          </p>
        </Section>

        <Section title="2. Dados que podem ser coletados">
          <p>
            A coleta pode variar conforme os recursos ativados no site. Como o projeto possui carregamento condicional
            de Google Analytics ou Google Tag Manager por variáveis de ambiente, podem ser coletados dados técnicos e
            de navegação quando essas ferramentas estiverem configuradas em produção.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>dados fornecidos voluntariamente: nome, e-mail, telefone ou WhatsApp e mensagem enviada em contato;</li>
            <li>dados de navegação: endereço IP, dispositivo, navegador, páginas acessadas, data e hora de acesso, cookies e identificadores similares;</li>
            <li>dados de interação: cliques, origem de acesso, preferências de navegação e interações com páginas.</li>
          </ul>
        </Section>

        <Section title="3. Finalidades do uso dos dados">
          <p>Os dados podem ser usados para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>responder contatos e solicitações;</li>
            <li>enviar comunicações solicitadas pelo usuário;</li>
            <li>melhorar conteúdo, navegação e segurança;</li>
            <li>analisar desempenho do site;</li>
            <li>prevenir fraude, abuso e uso indevido;</li>
            <li>cumprir obrigações legais ou regulatórias;</li>
            <li>proteger direitos do site, dos usuários e de terceiros.</li>
          </ul>
        </Section>

        <Section title="4. Base legal">
          <p>
            O tratamento de dados pode ocorrer com base em consentimento, execução de solicitação feita pelo usuário,
            legítimo interesse, cumprimento de obrigação legal ou regulatória e exercício regular de direitos, conforme
            o caso e de acordo com a LGPD.
          </p>
        </Section>

        <Section title="5. Cookies e tecnologias semelhantes">
          <p>
            Cookies são pequenos arquivos ou identificadores usados para funcionamento do site, análise de navegação e,
            quando aplicável, publicidade. O site pode usar cookies necessários, cookies de análise/desempenho e cookies
            de marketing/publicidade quando ferramentas como Google Analytics ou Google Tag Manager estiverem ativadas.
          </p>
        </Section>

        <Section title="6. Compartilhamento de dados">
          <p>
            Dados podem ser compartilhados com provedores técnicos necessários ao funcionamento do site, como hospedagem,
            ferramentas de análise, formulários, e-mail, segurança, comunicação e infraestrutura. O Eu Vou Ser Doutor não
            vende dados pessoais.
          </p>
        </Section>

        <Section title="7. Direitos do titular">
          <p>Conforme a LGPD, o usuário pode solicitar confirmação, acesso, correção ou eliminação de seus dados.</p>
          <p>Canal para solicitações: <ContactLink />.</p>
        </Section>

        <Section title="8. Contato">
          <p>
            Para dúvidas, solicitações ou exercício de direitos relacionados a dados pessoais, entre em contato pelo e-mail:
            {' '}<ContactLink />.
          </p>
        </Section>
      </div>
    </article>
  </section>
);
