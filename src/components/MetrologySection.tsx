import React, { useState } from 'react';
import { Ruler, Check, FileCheck, ThermometerSnowflake } from 'lucide-react';

interface MetrologySectionProps {
  onOpenQuoteModal: () => void;
}

export const MetrologySection: React.FC<MetrologySectionProps> = ({ onOpenQuoteModal }) => {
  const [activePhoto, setActivePhoto] = useState<string>('/images/metrology/tesa-hite-3d-detalhe.jpg');

  return (
    <section id="metrologia" className="py-16 lg:py-20 bg-white border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
              Controle de qualidade
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight">
              Metrologia tridimensional TESA Micro-Hite 3D
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Sala de medição própria e climatizada para controle rigoroso de tolerâncias micrométricas e emissão de relatório dimensional.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              <img
                src={activePhoto}
                alt="Máquina Tridimensional TESA Hite 3D na sala climatizada da LASEC"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">
                    Tridimensional TESA Micro-Hite 3D
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    Inspeção geométrica GD&T em ambiente com temperatura controlada
                  </div>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 rounded-md bg-white hover:bg-slate-100 text-[#0B192C] text-xs font-semibold shrink-0 transition-colors"
                >
                  Solicitar laudo dimensional
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setActivePhoto('/images/metrology/tesa-hite-3d-detalhe.jpg')}
                className={`relative rounded-lg overflow-hidden h-20 border transition-all text-left ${
                  activePhoto.includes('detalhe')
                    ? 'border-[#0B192C] ring-2 ring-[#0B192C]/20 opacity-100'
                    : 'border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/metrology/tesa-hite-3d-detalhe.jpg"
                  alt="Apalpador TESA 3D em medição"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 left-1 right-1 text-[10px] font-medium text-white truncate bg-slate-950/75 px-1.5 py-0.5 rounded text-center block">
                  Apalpador 3D
                </span>
              </button>

              <button
                onClick={() => setActivePhoto('/images/hq/tesa-micro-hite-3d-hq.jpg')}
                className={`relative rounded-lg overflow-hidden h-20 border transition-all text-left ${
                  activePhoto.includes('tesa-micro-hite-3d-hq')
                    ? 'border-[#0B192C] ring-2 ring-[#0B192C]/20 opacity-100'
                    : 'border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/hq/tesa-micro-hite-3d-hq.jpg"
                  alt="Visão frontal TESA Micro-Hite 3D"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 left-1 right-1 text-[10px] font-medium text-white truncate bg-slate-950/75 px-1.5 py-0.5 rounded text-center block">
                  Visão frontal TESA
                </span>
              </button>

              <button
                onClick={() => setActivePhoto('/images/metrology/sala-climatizada-tesa-externa.jpg')}
                className={`relative rounded-lg overflow-hidden h-20 border transition-all text-left ${
                  activePhoto.includes('sala-climatizada')
                    ? 'border-[#0B192C] ring-2 ring-[#0B192C]/20 opacity-100'
                    : 'border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/metrology/sala-climatizada-tesa-externa.jpg"
                  alt="Sala de medição climatizada da LASEC"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 left-1 right-1 text-[10px] font-medium text-white truncate bg-slate-950/75 px-1.5 py-0.5 rounded text-center block">
                  Sala climatizada
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Ruler className="w-5 h-5 text-blue-800 shrink-0" />
                <h4 className="text-base font-bold text-[#0B192C]">Inspeção geométrica tridimensional</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nossa máquina de medição por coordenadas TESA Micro-Hite 3D confere geometrias complexas, concentricidades, paralelismos e tolerâncias de posição com precisão suíça.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <ThermometerSnowflake className="w-5 h-5 text-blue-800 shrink-0" />
                <h4 className="text-base font-bold text-[#0B192C]">Sala climatizada controlada</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                A sala de metrologia mantém temperatura controlada, evitando dilatações térmicas durante a conferência de peças e padrões de calibração.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <FileCheck className="w-5 h-5 text-blue-800 shrink-0" />
                <h4 className="text-base font-bold text-[#0B192C]">Emissão de relatório dimensional</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fornecemos relatórios dimensionais detalhados acompanhando cada lote fabricado, facilitando o recebimento e homologação na sua empresa.
              </p>
            </div>

            <ul className="p-5 rounded-xl bg-white border border-slate-200 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Instrumentos calibrados com rastreabilidade RBC</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Controle de processo (CPK) e inspeções periódicas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Aprovação de amostra inicial (FAI)</span>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};
