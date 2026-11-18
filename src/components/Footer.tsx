import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, User, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-slate-300 text-xs py-14 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Logo LASEC"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block leading-none">
                  LASEC
                </span>
                <span className="text-xs text-slate-400 block mt-1">
                  Usinagem aliada à precisão
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Desde 1992 entregando precisão técnica em usinagem CNC, peças seriadas, centros Discovery com 4º eixo, tornos Doosan com ferramenta acionada e metrologia tridimensional TESA 3D.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#maquinario" className="hover:text-white transition-colors">Maquinário CNC</a></li>
              <li><a href="#metrologia" className="hover:text-white transition-colors">Metrologia 3D</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Peças usinadas</a></li>
              <li><a href="#historia" className="hover:text-white transition-colors">Nossa história</a></li>
              <li><a href="#orcamento" className="hover:text-white transition-colors">Solicitar orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Usinagem em pega única</li>
              <li>Tornos com ferramenta acionada</li>
              <li>Centros de usinagem 4º eixo</li>
              <li>Inspeção tridimensional TESA 3D</li>
              <li>Aços inox, carbono e ligas</li>
              <li>Latão CLA, alumínio e cobre</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contato direto
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-200">
                <User className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.contactPerson}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre.+Gostaria+de+solicitar+um+or%C3%A7amento+de+usinagem.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp: {COMPANY_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailOrcamento}`} className="hover:text-white truncate">
                  {COMPANY_INFO.emailOrcamento}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Bairro do Limão, São Paulo - SP</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.tradeName} — Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
