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

export const TermsOfUse = () => (
  <section className="animate-in bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
    <div className="bg-[#0A192F] border-b border-white/[0.08] py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.18),transparent_40%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Regras de Acesso
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-[#F8FAFC]">Termos de Uso</h1>
        <p className="text-lg text-[#98A2B3] leading-relaxed max-w-3xl">
          Regras de acesso, uso e responsabilidades relacionadas ao site Eu Vou Ser Doutor.
        </p>
        <p className="text-xs text-[#98A2B3]/80 mt-6 font-bold uppercase tracking-widest">Última atualização: {updatedAt}</p>
      </div>
    </div>

    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-[#11141A] rounded-[32px] border border-white/[0.08] shadow-2xl p-8 md:p-12 space-y-10">
        <Section title="1. Identificação do site">
          <p>
            O Eu Vou Ser Doutor é uma plataforma digital de conteúdo educacional, informativo e científico
            relacionado à medicina, saúde, estudo médico e temas correlatos.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Site oficial: <a className="font-bold text-[#4F8CFF] hover:underline" href={institutional.site}>{institutional.site}</a></li>
            <li>Responsável: Eu Vou Ser Doutor</li>
            <li>País: Brasil</li>
            <li>Contato: <ContactLink /></li>
          </ul>
        </Section>

        <Section title="2. Aceitação dos termos">
          <p>
            Ao acessar ou usar o site, o usuário declara que leu, compreendeu e concorda com estes Termos de Uso.
            Caso não concorde com qualquer condição, deve interromper o uso do site.
          </p>
        </Section>

        <Section title="3. Finalidade do site">
          <p>
            O conteúdo possui finalidade exclusivamente educacional, informativa e científica. O site não substitui
            consulta médica, diagnóstico, tratamento ou orientação profissional individualizada.
          </p>
        </Section>

        <Section title="4. Propriedade intelectual">
          <p>
            Textos, marcas, logotipos, imagens, layout e identidade visual pertencem ao Eu Vou Ser Doutor ou são usados
            com autorização, protegidos pelas leis de propriedade intelectual.
          </p>
        </Section>

        <Section title="5. Contato">
          <p>Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail: <ContactLink />.</p>
        </Section>
      </div>
    </article>
  </section>
);
