import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="Logo LASEC"
                className="w-10 h-10 rounded-lg object-contain bg-slate-900 p-1 border border-slate-700"
              />
              <div>
                <span className="text-xl font-tech font-bold text-white tracking-tight block">
                  LASEC
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                  Usinagem Aliada à Precisão
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Desde 1992 entregando excelência técnica em usinagem CNC, peças seriadas, estamparia e protótipos de alta precisão para a indústria brasileira.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Sede Própria • Parque de Tornos CNC com Ferramenta Acionada</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#capacidades" className="hover:text-white transition-colors">Capacidades Técnicas</a>
              </li>
              <li>
                <a href="#maquinario" className="hover:text-white transition-colors">Tornos CNC</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Peças Usinadas</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">Nossa História</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Services & Materials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Especialidades
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Usinagem em Pega Única</li>
              <li>Torno com Ferramenta Acionada</li>
              <li>Produção de Peças Seriadas</li>
              <li>Usinagem de Aço Inox e Carbono</li>
              <li>Usinagem de Latão, Alumínio e Cobre</li>
              <li>Polímeros Técnicos (POM, Delrin, PTFE)</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Contato Direto
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailOrcamento}`} className="hover:text-white truncate">
                  {COMPANY_INFO.emailOrcamento}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Bairro do Limão, São Paulo - SP</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.tradeName} — Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">São Paulo - SP • Brasil</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
