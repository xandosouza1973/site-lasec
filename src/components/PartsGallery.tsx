import React, { useState } from 'react';
import { Eye, X, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/company';

interface PartsGalleryProps {
  onSelectPartForQuote: (partName: string) => void;
}

export const PartsGallery: React.FC<PartsGalleryProps> = ({ onSelectPartForQuote }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const filterButtons = [
    { id: 'all', label: 'Todas as peças' },
    { id: '4eixo', label: 'Fresamento 4º eixo' },
    { id: 'torneamento', label: 'Tornos e ferramenta acionada' },
    { id: 'seriados', label: 'Lotes seriados' },
    { id: 'nao-ferrosos', label: 'Latão e alumínio' },
  ];

  return (
    <section id="galeria" className="py-16 lg:py-20 bg-white border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
              Portfólio técnico
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight">
              Galeria de componentes usinados
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Peças reais fabricadas na LASEC: furações radiais e axiais, fresamento em 4º eixo, latão, aços especiais e alumínio anodizado.
            </p>
          </div>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  filter === btn.id
                    ? 'bg-[#0B192C] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer bg-slate-100"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                
                <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-white/95 text-[#0B192C] border border-slate-200 shadow-xs">
                  {item.categoryLabel}
                </span>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-md bg-white/95 text-[#0B192C] border border-slate-200 block shadow-xs">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPartForQuote(item.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-slate-50 hover:bg-[#0B192C] text-slate-800 hover:text-white text-xs sm:text-sm font-semibold border border-slate-200 hover:border-[#0B192C] transition-colors"
                >
                  <span>Cotar peça similar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-950 border border-slate-200 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[50vh] sm:max-h-[60vh] bg-slate-950 overflow-hidden flex items-center justify-center p-2">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[50vh] sm:max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-wider text-blue-800 font-semibold">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-xs text-slate-500">LASEC Usinagem de precisão</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#0B192C] mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-5">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                {selectedItem.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="text-[11px] sm:text-xs text-slate-700 bg-slate-100 border border-slate-200 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 sm:border-transparent rounded-md text-center"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectPartForQuote(title);
                  }}
                  className="px-5 py-3 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold transition-colors text-center shadow-xs"
                >
                  Solicitar orçamento deste modelo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
