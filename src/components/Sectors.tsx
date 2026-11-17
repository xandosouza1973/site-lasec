import React from 'react';
import { Car, Stethoscope, Radio, Cpu, ShieldCheck, ChevronRight } from 'lucide-react';
import { SECTORS } from '../data/company';

interface SectorsProps {
  onOpenQuoteModal: () => void;
}

export const Sectors: React.FC<SectorsProps> = ({ onOpenQuoteModal }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-blue-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-emerald-400" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="setores" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Versatilidade e Atendimento B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight mb-4">
            Segmentos Industriais Atendidos
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Atendemos os mais exigentes setores produtivos brasileiros, entregando peças conformes às normas técnicas e tolerâncias de projeto de cada aplicação.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between hover:bg-slate-900/90 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getSectorIcon(sector.icon)}
                </div>

                <h3 className="text-lg font-tech font-bold text-white mb-2">
                  {sector.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {sector.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Exemplos comuns:
                  </span>
                  <ul className="space-y-1.5">
                    {sector.examples.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-indigo-950/70 border border-blue-800/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-xl font-tech font-bold text-white mb-1">
              Seu segmento precisa de usinagem com tolerâncias específicas?
            </h4>
            <p className="text-sm text-slate-300">
              Nossa equipe técnica avalia o desenho do seu projeto em até 24 horas úteis.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shrink-0 transition-colors shadow-lg shadow-blue-950 flex items-center gap-2"
          >
            <span>Falar com Engenharia de Aplicação</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
