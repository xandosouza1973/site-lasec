import React from 'react';
import { Car, Stethoscope, Radio, Cpu, ChevronRight } from 'lucide-react';
import { SECTORS } from '../data/company';

interface SectorsProps {
  onOpenQuoteModal: () => void;
}

export const Sectors: React.FC<SectorsProps> = ({ onOpenQuoteModal }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-[#0B192C]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#0B192C]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#0B192C]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#0B192C]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#0B192C]" />;
    }
  };

  return (
    <section id="setores" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
            Segmentos atendidos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight mb-3">
            Aplicações industriais
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Fornecimento contínuo para setores produtivos com padrões rigorosos de tolerância, acabamento e repetibilidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                  {getSectorIcon(sector.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#0B192C] mb-2">
                  {sector.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Aplicações comuns
                </span>
                <ul className="space-y-1.5">
                  {sector.examples.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Corporate CTA Banner */}
        <div className="rounded-xl bg-[#0B192C] text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
              Seu projeto exige tolerâncias específicas?
            </h4>
            <p className="text-sm sm:text-base text-slate-300">
              Nossa equipe técnica analisa o desenho e retorna com proposta comercial em até 24 horas úteis.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-md bg-white hover:bg-slate-100 text-[#0B192C] font-semibold text-sm shrink-0 transition-colors flex items-center gap-2"
          >
            <span>Falar com a engenharia</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
