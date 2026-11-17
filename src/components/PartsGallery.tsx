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

  return (
    <section id="galeria" className="py-20 bg-slate-900/40 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>Portfólio & Amostras de Produção</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight">
              Galeria de Peças Usinadas
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Fotografias reais das peças e componentes fabricados em nossas instalações em São Paulo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Todas as Peças
            </button>
            <button
              onClick={() => setFilter('seriados')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'seriados'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Lotes Seriados
            </button>
            <button
              onClick={() => setFilter('cnc')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'cnc'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Usinagem CNC
            </button>
            <button
              onClick={() => setFilter('complexas')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'complexas'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Especiais & Ferramentaria
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer bg-slate-900"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-blue-300 border border-slate-700/60 font-semibold">
                  {item.categoryLabel}
                </span>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-lg bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 block">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Info & Action */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-tech font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPartForQuote(item.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-800 hover:border-blue-500 transition-all"
                >
                  <span>Cotar Peça com Esta Geometria</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-slate-950 border border-slate-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-wider text-blue-400 font-mono font-semibold">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-xs text-slate-400">LASEC Usinagem e Precisão</span>
              </div>
              <h3 className="text-xl font-tech font-bold text-white mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded"
                  >
                    ✓ {spec}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectPartForQuote(title);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  Solicitar Orçamento Deste Modelo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
