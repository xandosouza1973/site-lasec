import React from 'react';
import { Cog, Cpu, Layers, Disc, CheckCircle, ArrowRight } from 'lucide-react';
import { MATERIALS_LIST } from '../data/company';

interface CapabilitiesProps {
  onOpenQuoteModal: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="capacidades" className="py-20 bg-slate-900/50 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-3">
            <Cog className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Processos Produtivos Modernos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight mb-4">
            Capacidades Técnicas & Usinagem de Precisão
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Com estrutura tecnológica e parque de máquinas CNC próprio, a LASEC entrega soluções sob medida para requisitos rigorosos de acabamento, concentricidade e tolerância.
          </p>
        </div>

        {/* 3 Main Capability Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-tech font-bold text-white mb-3">
                Tornos com Ferramenta Acionada
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Tecnologia que viabiliza torneamento e fresamento em uma <strong>pega única</strong>. Executamos furos radiais e axiais, chavetas, fresamento de sextavados e figuras complexas sem troca de máquina.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eliminação de erro acumulado por re-fixação</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Furação axial e transversal sincronizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Redução substancial do tempo de ciclo</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-blue-400">Destaque de Alta Precisão</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-tech font-bold text-white mb-3">
                Peças Seriadas & Lotes Flexíveis
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Capacidade instalada para fornecimento de lotes médios e grandes com alta repetibilidade e constância de medidas para integração direta nas linhas de montagem dos clientes.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Programação de entregas programadas (Just-in-Time)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Inspeção dimensional por amostragem e 100%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Estabilidade em produções de alto volume</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-indigo-400">Escalabilidade Industrial</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Disc className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-tech font-bold text-white mb-3">
                Protótipos & Ferramentais
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Desenvolvimento ágil de amostras e peças-piloto para homologação técnica e testes funcionais, além de histórico consolidado em estamparia e ferramentais de conformação.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Apoio técnico na análise do desenho de engenharia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confecção de ferramental sob medida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Agilidade no envio de peças para aprovação</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-emerald-400">Engenharia Sob Medida</span>
            </div>
          </div>

        </div>

        {/* Materials Technical Grid */}
        <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Tabela de Matérias-Primas</span>
              <h3 className="text-2xl font-tech font-bold text-white mt-1">Materiais Ferrosos, Não-Ferrosos & Polímeros</h3>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Consultar liga específica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS_LIST.map((matGroup) => (
              <div key={matGroup.category} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {matGroup.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {matGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono bg-slate-800/90 text-slate-300 px-2 py-1 rounded border border-slate-700/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
