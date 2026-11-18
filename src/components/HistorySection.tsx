import React from 'react';
import { Building2, Factory } from 'lucide-react';
import { TIMELINE } from '../data/company';

export const HistorySection: React.FC = () => {
  return (
    <section id="historia" className="py-16 lg:py-20 bg-white border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
              História e solidez
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight mb-5">
              Mais de 30 anos de engenharia e precisão fabril
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                A <strong>LASEC / MALELO</strong> foi fundada em <strong>outubro de 1992</strong> com o propósito de oferecer serviços de usinagem mecânica, estamparia e confecção de ferramental técnico.
              </p>
              <p>
                No primeiro semestre de 2000, conquistamos nossa <strong>sede própria no Bairro do Limão, em São Paulo</strong>, consolidando a infraestrutura física e permitindo investimentos contínuos em tecnologia.
              </p>
              <p>
                Em 2003, incorporamos os primeiros equipamentos <strong>CNC</strong>, ingressando no mercado de produção seriada e especializando-nos em peças de alta complexidade em materiais ferrosos, não-ferrosos e polímeros.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <Building2 className="w-6 h-6 text-[#0B192C] mb-2" />
                <div className="text-sm font-bold text-[#0B192C]">Sede própria</div>
                <div className="text-xs text-slate-600 mt-1">Bairro do Limão — São Paulo</div>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <Factory className="w-6 h-6 text-[#0B192C] mb-2" />
                <div className="text-sm font-bold text-[#0B192C]">Parque CNC e 3D</div>
                <div className="text-xs text-slate-600 mt-1">Ferramenta acionada e metrologia</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative pl-8 border-l-2 border-slate-200 space-y-6 my-2">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-[#0B192C] border-2 border-white shadow-xs" />
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#0B192C] text-white">
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold text-[#0B192C]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
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
