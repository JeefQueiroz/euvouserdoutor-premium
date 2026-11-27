import React from 'react';
import { BookOpen, Facebook, FileText, Linkedin, Mail, MessageCircle, Phone, ShieldCheck, Users } from 'lucide-react';
import { institutional } from '../institutional';

const contacts = [
  { icon: Mail, label: 'E-mail oficial', value: institutional.legalEmail, href: `mailto:${institutional.legalEmail}` },
  { icon: ShieldCheck, label: 'Site oficial', value: institutional.siteLabel, href: institutional.site },
  { icon: Linkedin, label: 'LinkedIn Pessoal', value: 'jeffqueiroz-med', href: institutional.linkedin },
  { icon: Facebook, label: 'Facebook oficial', value: 'facebook.com/Euvouserdoutor', href: institutional.facebook },
];

const intents = [
  { icon: Mail, title: 'Dúvidas gerais', text: 'Perguntas institucionais sobre o projeto e seus canais oficiais.' },
  { icon: Users, title: 'Mentoria', text: 'Informações comerciais sobre formato, disponibilidade e próximos ciclos.' },
  { icon: BookOpen, title: 'Materiais', text: 'Solicitações e dúvidas sobre guias, checklists e conteúdos gratuitos.' },
  { icon: MessageCircle, title: 'Parcerias', text: 'Propostas institucionais, educacionais, editoriais ou comerciais.' },
  { icon: ShieldCheck, title: 'Proteção de dados', text: 'Solicitações sobre privacidade, cookies e tratamento de dados.' },
  { icon: FileText, title: 'Direitos autorais', text: 'Pedidos sobre uso de marca, remoção de conteúdo e propriedade intelectual.' },
];

export const Contact = () => (
  <section className="animate-in bg-[#080A0F] text-[#F8FAFC] min-h-screen pb-24">
    <div className="bg-[#0A192F] border-b border-white/[0.05] py-12 md:py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(79,140,255,0.12),transparent_40%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em] mb-6">
          Canal Direto
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4 text-[#F8FAFC]">Contato</h1>
        <p className="text-base md:text-lg text-[#98A2B3] leading-relaxed max-w-2xl font-medium">
          Escolha o melhor canal para falar com o EuVouSerDoutor.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-8">
      <div className="bg-[#11141A] rounded-[24px] border border-white/[0.05] shadow-2xl p-6 md:p-8 premium-border">
        <h2 className="text-xl md:text-2xl font-black text-[#F8FAFC] tracking-tighter mb-3">Canais oficiais</h2>
        <p className="text-[#98A2B3] leading-relaxed text-sm md:text-base max-w-3xl font-medium">
          Para dúvidas institucionais, parcerias, solicitações relacionadas ao site, conteúdos, direitos autorais,
          proteção de dados ou assuntos comerciais, entre em contato pelos canais abaixo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {intents.map((item) => (
          <article key={item.title} className="bg-[#11141A] rounded-2xl border border-white/[0.05] p-5 hover:border-[#4F8CFF]/20 transition-all premium-border">
            <item.icon size={20} className="text-[#4F8CFF] mb-3" aria-hidden="true" />
            <h2 className="text-base font-black text-[#F8FAFC] mb-1.5">{item.title}</h2>
            <p className="text-[#98A2B3] text-xs leading-relaxed font-medium">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.map((item) => (
          <div key={item.label} className="bg-[#11141A] rounded-2xl border border-white/[0.05] p-5 hover:border-[#4F8CFF]/20 transition-all premium-border">
            <item.icon size={18} className="text-[#4F8CFF] mb-3" aria-hidden="true" />
            <p className="text-[9px] font-black uppercase tracking-widest text-[#98A2B3] mb-1.5">{item.label}</p>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="text-[#F8FAFC] text-xs font-bold hover:text-[#4F8CFF] transition-colors break-words"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-[#11141A] border border-[#4F8CFF]/20 rounded-2xl p-5 md:p-6">
        <p className="text-[#98A2B3] text-xs leading-relaxed font-medium italic">
          Este canal é institucional e comercial. Ele não oferece orientação clínica individualizada. Em caso de sintomas,
          urgência ou emergência, procure um serviço de saúde habilitado.
        </p>
      </div>
    </div>
  </section>
);
