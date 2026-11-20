import React, { useState } from 'react';
import { Zap, Gauge, Layers } from 'lucide-react';
import { MACHINERY_LIST } from '../data/company';

interface MachineryShowcaseProps {
  onOpenQuoteModal: () => void;
}

const LYNX_PHOTOS = [
  {
    id: 'geral',
    title: 'Torno CNC Doosan Lynx 220LM — Ferramenta acionada',
    subtitle: 'Centro de torneamento multieixo em operação na LASEC',
    src: '/images/hq/doosan-lynx-220lm.jpg',
    tag: 'Doosan Lynx 220LM',
  },
  {
    id: 'interno',
    title: 'Usinagem interna e torre de ferramentas',
    subtitle: 'Setup para furação radial, axial e fresamento conjugados',
    src: '/images/torno-lynx-interno.png',
    tag: 'Pega única',
  },
  {
    id: 'painel',
    title: 'Painel de comando numérico computadorizado',
    subtitle: 'Programação de tolerâncias micrométricas',
    src: '/images/torno-lynx-painel.jpg',
    tag: 'Comando CNC',
  },
];

export const MachineryShowcase: React.FC<MachineryShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const currentPhoto = LYNX_PHOTOS[selectedPhotoIndex];

  return (
    <section id="maquinario" className="py-16 lg:py-20 bg-[#0B192C] text-white w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
              Tecnologia e equipamentos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Parque de máquinas e tornos CNC
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Tornos Doosan Lynx com ferramenta acionada em pega única e centros de usinagem Romi Discovery com 4º eixo.
            </p>
          </div>
        </div>

        {/* Feature Spotlight: Torno Doosan Lynx */}
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-center mb-16 bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-8">
          
          {/* Machine Photo with Switcher */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-[#070e17] flex items-center justify-center">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="w-full h-[380px] sm:h-[480px] object-contain p-2"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">
                    {currentPhoto.title}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {currentPhoto.subtitle}
                  </div>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors"
                >
                  Cotar neste torno
                </button>
              </div>
            </div>

            {/* Thumbnails Navigator */}
            <div className="grid grid-cols-4 gap-2.5">
              {LYNX_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative rounded-lg overflow-hidden h-20 border transition-all text-left ${
                    selectedPhotoIndex === idx
                      ? 'border-blue-400 opacity-100'
                      : 'border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] font-medium text-white truncate bg-slate-950/80 px-1.5 py-0.5 rounded text-center block">
                    {photo.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Machine Technical Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-lg bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-blue-400 shrink-0" />
                <h4 className="text-base font-bold text-white">Usinagem em pega única</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ao usinar a peça em uma única fixação no torno CNC Doosan Lynx, eliminamos a necessidade de troca para furadeiras ou fresadoras secundárias, garantindo concentricidade rigorosa.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Gauge className="w-5 h-5 text-blue-400 shrink-0" />
                <h4 className="text-base font-bold text-white">Furações radiais, axiais e chavetas</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Com a ferramenta acionada, realizamos furações radiais e axiais, sextavados, ranhuras e abertura de chavetas simultaneamente ao torneamento.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Layers className="w-5 h-5 text-blue-400 shrink-0" />
                <h4 className="text-base font-bold text-white">Lotes seriados e repetibilidade</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Repetibilidade e padronização para lotes médios, grandes e protótipos em ritmo contínuo.
              </p>
            </div>
          </div>

        </div>

        {/* Complete Machinery Fleet Grid */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-2xl font-bold text-white">
              Relação completa de equipamentos
            </h3>
            <span className="text-xs text-slate-400">Instalações próprias no Bairro do Limão, São Paulo</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MACHINERY_LIST.map((mach) => (
              <div
                key={mach.id}
                className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={mach.image}
                    alt={mach.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-slate-950/85 text-blue-300 border border-slate-700">
                    {mach.brand}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {mach.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {mach.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                    {mach.highlights.map((hl, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-300 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
