import React from 'react';
import { Cpu, Layers, Wrench, Ruler, Building2, Handshake, ArrowUpRight } from 'lucide-react';

interface StrategicDifferentiatorsProps {
  onOpenQuoteModal: () => void;
}

const DIFFERENTIATORS = [
  {
    icon: Cpu,
    title: 'Tecnologia CNC multieixo',
    description: 'Centros de torneamento Doosan Lynx com ferramenta acionada em pega única e centros verticais Romi Discovery com 4º eixo sincronizado.',
  },
  {
    icon: Layers,
    title: 'Flexibilidade de manufatura',
    description: 'Atendimento ágil desde amostras e protótipos de alta complexidade até lotes seriados contínuos com repetibilidade dimensional.',
  },
  {
    icon: Wrench,
    title: 'Integração fabril completa',
    description: 'Usinagem CNC, estamparia técnica, ferramentaria própria e gestão integrada de tratamentos térmicos e superficiais.',
  },
  {
    icon: Ruler,
    title: 'Metrologia tridimensional TESA 3D',
    description: 'Sala de medição climatizada própria com máquina por coordenadas TESA Micro-Hite 3D e emissão formal de relatório dimensional.',
  },
  {
    icon: Building2,
    title: 'Solidez e sede própria',
    description: 'Mais de 30 anos de atuação sólida no mercado com sede própria no Bairro do Limão (SP), garantindo estabilidade e pontualidade.',
  },
  {
    icon: Handshake,
    title: 'Engenharia de aplicação DFM',
    description: 'Suporte técnico direto com o engenheiro Alexandre Souza para análise prévia de desenho técnico, escolha de ligas e redução de custo.',
  },
];

export const StrategicDifferentiators: React.FC<StrategicDifferentiatorsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="diferenciais" className="py-16 lg:py-20 bg-white border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
              Diferenciais competitivos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight">
              Por que escolher a LASEC como parceiro
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Equipamentos de alta rigidez, sala climatizada com metrologia tridimensional e suporte direto de engenharia.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white font-semibold text-sm transition-colors self-start md:self-auto shrink-0"
          >
            <span>Iniciar projeto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 hover:border-blue-700/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0B192C] flex items-center justify-center mb-5 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B192C] mb-2">
                    {diff.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
