import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Small floating callout card */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700/80 p-3 rounded-xl shadow-2xl max-w-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 text-xs">
          <div className="flex-1">
            <span className="font-semibold text-white block text-[11px]">Dúvidas ou Desenho Técnico?</span>
            <span className="text-slate-300 text-[11px]">Fale diretamente com nossa engenharia no WhatsApp.</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-white p-0.5"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+estou+no+site+da+LASEC+e+gostaria+de+falar+sobre+usinagem+de+pe%C3%A7as.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all group relative"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>
    </div>
  );
};
