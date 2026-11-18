import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre%21+Gostaria+de+falar+sobre+usinagem+de+pe%C3%A7as+com+a+LASEC.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Engenharia no WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-black/50 hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-6 h-6 fill-white/10" />
      </a>
    </aside>
  );
};
