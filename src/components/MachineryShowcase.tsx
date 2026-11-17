import React, { useState } from 'react';
import { Cpu, Zap, ArrowRight, Gauge, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface MachineryShowcaseProps {
  onOpenQuoteModal: () => void;
}

export const MachineryShowcase: React.FC<MachineryShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'torno' | 'ferramenta' | 'qualidade'>('ferramenta');

  return (
    <section id="maquinario" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Parque Fabril & Tecnologia CNC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight">
              Tornos CNC com Ferramenta Acionada
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Usinagem em ciclo único: fresamento, furação radial, axial, roscamento e abertura de chavetas sem operações secundárias.
            </p>
          </div>

          {/* Quick Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('ferramenta')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ferramenta'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ferramenta Acionada
            </button>
            <button
              onClick={() => setActiveTab('torno')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'torno'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Usinagem em Pega Única
            </button>
            <button
              onClick={() => setActiveTab('qualidade')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'qualidade'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Controle Metrológico
            </button>
          </div>
        </div>

        {/* Highlight Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Machine Real Photo Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-2xl">
              <img
                src="/images/torno-cnc-operacao.jpg"
                alt="Torno CNC em operação na fábrica da LASEC"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Estrutura Operacional LASEC
                  </span>
                  <div className="text-white font-tech font-bold text-base mt-0.5">
                    Produção Seriada de Alta Confiabilidade
                  </div>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors"
                >
                  Cotar Lote
                </button>
              </div>
            </div>
          </div>

          {/* Machine Technical Specs & Benefits */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-base font-tech font-bold text-white">Vantagem da Pega Única</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ao usinar a peça em uma única fixação no torno CNC, evita-se o transporte para fresadoras ou furadeiras convencionais, eliminando desvios angulares e garantindo concentricidade perfeita.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Gauge className="w-4 h-4" />
                </div>
                <h4 className="text-base font-tech font-bold text-white">Furações Radiais & Axiais Complexas</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Capacidade de fresar chavetas, sextavados, canais helicoidais e furos inclinados diretamente no ciclo de torneamento. Menor tempo total de entrega (lead time) para sua indústria.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-base font-tech font-bold text-white">Flexibilidade de Escala</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                De lotes piloto (50 a 500 peças) até produções seriadas contínuas de milhares de unidades por mês, com rigorosa rastreabilidade e calibração constante de ferramentas.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Gostaria+de+saber+a+capacidade+dimensional+dos+tornos+CNC+da+LASEC.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <span>Tirar dúvida sobre capacidade com engenheiro</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
