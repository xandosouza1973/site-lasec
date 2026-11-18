import React from 'react';
import { Cpu, Layers, Disc, Check, ArrowRight } from 'lucide-react';
import { MATERIALS_LIST } from '../data/company';

interface CapabilitiesProps {
  onOpenQuoteModal: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="capacidades" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
            Processos produtivos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight mb-3">
            Capacidades técnicas e usinagem de precisão
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Estrutura fabril equipada com tornos e centros de usinagem preparados para requisitos rigorosos de acabamento, concentricidade e tolerância geométrica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          <div className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 text-[#0B192C] flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">
                Tornos com ferramenta acionada
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Torneamento e fresamento em <strong>pega única</strong>. Executamos furos radiais e axiais, chavetas, fresamento de sextavados e figuras complexas sem troca de máquina.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Eliminação de erro acumulado por re-fixação</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Furação axial e transversal sincronizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Menor tempo de ciclo e entrega ágil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 text-[#0B192C] flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">
                Centro Discovery 760 com 4º eixo
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Centro de usinagem vertical Romi Discovery 760 equipado com mesa giratória de 4º eixo para geometrias prismáticas complexas e contornos cilíndricos.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Fresamento contínuo em múltiplos ângulos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Usinagem de blocos coletores e caixas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Interpolação helicoidal e canais espirais</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 text-[#0B192C] flex items-center justify-center mb-5">
                <Disc className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">
                Lotes seriados e metrologia 3D
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Capacidade instalada para lotes contínuos com repetibilidade dimensional assegurada pela máquina de medição por coordenadas TESA Micro-Hite 3D.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Entregas programadas conforme demanda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Inspeção em sala climatizada com laudo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>Homologação prévia de amostras (FAI)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Materials Technical Grid */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-800">Matérias-primas</p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
                Materiais ferrosos, não-ferrosos e polímeros de engenharia
              </h3>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950 transition-colors"
            >
              <span>Consultar liga específica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS_LIST.map((matGroup) => (
              <div key={matGroup.category} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="text-sm font-bold text-[#0B192C] mb-3">
                  {matGroup.category}
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {matGroup.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
