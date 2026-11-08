import React from 'react';
import { AlertTriangle } from 'lucide-react';
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

export const MedicalDisclaimer = () => (
  <section className="animate-in bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
    <div className="bg-[#0A192F] border-b border-white/[0.08] py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.18),transparent_40%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Aviso Legal
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-[#F8FAFC]">Aviso de Responsabilidade Médica</h1>
        <p className="text-lg text-[#98A2B3] leading-relaxed max-w-3xl">
          Informações importantes sobre o caráter educacional dos conteúdos publicados no Eu Vou Ser Doutor.
        </p>
        <p className="text-xs text-[#98A2B3]/80 mt-6 font-bold uppercase tracking-widest">Última atualização: {updatedAt}</p>
      </div>
    </div>

    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-[#11141A] rounded-[32px] border border-white/[0.08] shadow-2xl p-8 md:p-12 space-y-10">
        <div className="rounded-2xl border border-[#4F8CFF]/30 bg-[#4F8CFF]/10 p-6 flex gap-4 items-start">
          <AlertTriangle className="text-[#4F8CFF] shrink-0 mt-1" size={24} />
          <p className="text-[#F8FAFC] font-bold leading-relaxed">
            O conteúdo do Eu Vou Ser Doutor possui finalidade exclusivamente educacional e informativa. As informações
            publicadas não substituem consulta médica, avaliação profissional, diagnóstico, tratamento ou acompanhamento individualizado.
          </p>
        </div>

        <Section title="1. Finalidade educacional">
          <p>
            O conteúdo do Eu Vou Ser Doutor tem finalidade exclusivamente educacional, informativa e científica. O site
            busca divulgar conhecimento médico de forma acessível, sem substituir a atuação de profissionais habilitados.
          </p>
        </Section>

        <Section title="2. Não substitui consulta médica">
          <p>
            As informações publicadas não substituem consulta, avaliação, diagnóstico, prescrição, tratamento ou acompanhamento médico.
          </p>
        </Section>

        <Section title="3. Contato">
          <p>
            Em caso de dúvidas sobre este Aviso de Responsabilidade Médica, entre em contato pelo e-mail: <ContactLink />.
          </p>
        </Section>
      </div>
    </article>
  </section>
);
