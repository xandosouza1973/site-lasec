import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre%21+Gostaria+de+falar+sobre+usinagem+de+pe%C3%A7as+com+a+LASEC.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Engenharia no WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-black/40 hover:scale-105 active:scale-95 transition-all group relative"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white/10" />
      </a>
    </aside>
  );
};
