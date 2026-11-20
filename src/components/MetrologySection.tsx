import React, { useState } from 'react';
import { Ruler, Check, FileCheck, ThermometerSnowflake } from 'lucide-react';

interface MetrologySectionProps {
  onOpenQuoteModal: () => void;
}

interface PhotoItem {
  id: string;
  src: string;
  label: string;
  title: string;
  caption: string;
}

const METROLOGY_PHOTOS: PhotoItem[] = [
  {
    id: 'frontal',
    src: '/images/metrology/tesa-hite-3d-frontal-hq.jpg',
    label: 'Visão frontal TESA',
    title: 'Tridimensional TESA Micro-Hite 3D',
    caption: 'Máquina de medição por coordenadas em sala climatizada própria',
  },
  {
    id: 'detalhe',
    src: '/images/metrology/tesa-hite-3d-detalhe.jpg',
    label: 'Apalpador e cabeçote 3D',
    title: 'Apalpador de alta sensibilidade',
    caption: 'Inspeção dimensional geométrica e tolerâncias GD&T de precisão',
  },
];

export const MetrologySection: React.FC<MetrologySectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const currentPhoto = METROLOGY_PHOTOS[selectedPhotoIndex];

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
            {/* Visualizador da Máquina com enquadramento completo (sem cortes) */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#070e17] shadow-lg flex items-center justify-center">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="w-full h-[320px] sm:h-[460px] lg:h-[520px] object-contain p-2"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                <div>
                  <div className="text-white font-bold text-xs sm:text-base">
                    {currentPhoto.title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 line-clamp-1 sm:line-clamp-none">
                    {currentPhoto.caption}
                  </div>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-white hover:bg-slate-100 text-[#0B192C] text-xs font-semibold shrink-0 transition-colors shadow-sm self-start sm:self-auto"
                >
                  Solicitar laudo dimensional
                </button>
              </div>
            </div>

            {/* Miniaturas de Navegação (2 fotos exclusivas da máquina e apalpador) */}
            <div className="grid grid-cols-2 gap-3">
              {METROLOGY_PHOTOS.map((photo, idx) => {
                const isActive = selectedPhotoIndex === idx;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative rounded-lg overflow-hidden h-20 border transition-all text-left bg-slate-900 ${
                      isActive
                        ? 'border-blue-600 ring-2 ring-blue-500/30 opacity-100'
                        : 'border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-full object-contain p-1"
                    />
                    <span className="absolute bottom-1 left-1 right-1 text-[10px] font-medium text-white truncate bg-slate-950/80 px-1.5 py-0.5 rounded text-center block">
                      {photo.label}
                    </span>
                  </button>
                );
              })}
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
