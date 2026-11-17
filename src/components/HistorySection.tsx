import React from 'react';
import { Award, Building2, Factory } from 'lucide-react';
import { TIMELINE } from '../data/company';

export const HistorySection: React.FC = () => {
  return (
    <section id="historia" className="py-20 bg-slate-900/60 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Authority Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Nossa Trajetória de Solidez</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight mb-6">
              Mais de 30 Anos de Engenharia & Precisão Fabril
            </h2>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-8">
              <p>
                A <strong>LASEC / MALELO</strong> foi fundada em <strong>outubro de 1992</strong> com o propósito de oferecer serviços especializados em usinagem mecânica, estamparia e confecção de ferramental técnico.
              </p>
              <p>
                No primeiro semestre de 2000, conquistamos nossa <strong>sede própria no tradicional polo industrial do Bairro do Limão, em São Paulo</strong>, consolidando a estabilidade patrimonial e a capacidade logística da empresa.
              </p>
              <p>
                Em 2003, demos um salto tecnológico com a incorporação das nossas primeiras <strong>máquinas CNC</strong>, ingressando no mercado de produção seriada e especializando-nos em geometrias de alta complexidade em materiais ferrosos e não-ferrosos.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <Building2 className="w-6 h-6 text-blue-400 mb-2" />
                <div className="text-sm font-tech font-bold text-white">Sede Própria</div>
                <div className="text-xs text-slate-400 mt-1">Bairro do Limão - SP</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <Factory className="w-6 h-6 text-indigo-400 mb-2" />
                <div className="text-sm font-tech font-bold text-white">Parque CNC</div>
                <div className="text-xs text-slate-400 mt-1">Ferramenta Acionada</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/30 space-y-8 sm:space-y-10 my-4">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline point dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-400 group-hover:scale-125 transition-all shadow-md shadow-blue-500/50" />
                  
                  <div className="bg-slate-950 border border-slate-800/90 rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/60">
                        {item.year}
                      </span>
                      <h3 className="text-base font-tech font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
