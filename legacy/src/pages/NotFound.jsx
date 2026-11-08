import React from 'react';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export const NotFound = ({ setView }) => (
  <div className="animate-in bg-[#080A0F] text-[#F8FAFC] min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
    <div className="w-20 h-20 bg-[#4F8CFF]/10 rounded-3xl flex items-center justify-center mb-8 border border-[#4F8CFF]/20 shadow-[0_0_30px_rgba(79,140,255,0.1)]">
      <FileQuestion size={40} className="text-[#4F8CFF]" />
    </div>
    <span className="inline-flex items-center gap-2 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.25em] mb-4">
      Erro 404
    </span>
    <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4">
      Página não encontrada
    </h1>
    <p className="text-base md:text-lg text-[#98A2B3] max-w-md font-medium leading-relaxed mb-10">
      O conteúdo que você está procurando pode ter sido movido ou não existe mais.
    </p>
    <button
      onClick={() => setView('home')}
      className="bg-[#4F8CFF] text-[#080A0F] px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-[#7EA6FF] transition-all flex items-center gap-2 shadow-lg"
    >
      <ArrowLeft size={14} strokeWidth={3} /> Voltar ao Início
    </button>
  </div>
);
