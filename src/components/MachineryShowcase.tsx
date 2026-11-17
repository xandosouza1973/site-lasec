import React, { useState } from 'react';
import { Cpu, Zap, ArrowRight, Gauge, Layers, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface MachineryShowcaseProps {
  onOpenQuoteModal: () => void;
}

const LYNX_PHOTOS = [
  {
    id: 'geral',
    title: 'Torno CNC Lynx - Ferramenta Acionada',
    subtitle: 'Visão externa operacional da máquina',
    src: '/images/torno-lynx-ferramenta-acionada.jpg',
    tag: 'Torno CNC Lynx'
  },
  {
    id: 'detalhe',
    title: 'Centro de Furação e Rosqueamento',
    subtitle: 'Furação radial e axial em ciclo único',
    src: '/images/torno-lynx-detalhe.png',
    tag: 'Ferramenta Acionada'
  },
  {
    id: 'interno',
    title: 'Usinagem Interna e Torre de Ferramentas',
    subtitle: 'Setup para furação e fresamento conjugados',
    src: '/images/torno-lynx-interno.png',
    tag: 'Pega Única'
  },
  {
    id: 'painel',
    title: 'Painel de Comando Numérico Computadorizado',
    subtitle: 'Programação de tolerâncias micrométricas',
    src: '/images/torno-lynx-painel.jpg',
    tag: 'Comando CNC'
  }
];

export const MachineryShowcase: React.FC<MachineryShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const currentPhoto = LYNX_PHOTOS[selectedPhotoIndex];

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
              Tornos CNC Lynx com Ferramenta Acionada
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Equipamento de alta rigidez e precisão para usinagem em ciclo único: fresamento, furação radial, axial, rosqueamento e abertura de chavetas sem operações secundárias.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Doosan Lynx em Operação na LASEC
            </span>
          </div>
        </div>

        {/* Highlight Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Machine Real Photo Card with Thumbnail Switcher */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-2xl">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Top tag */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-md bg-slate-950/90 text-blue-300 border border-slate-700/80 font-bold backdrop-blur-md">
                  {currentPhoto.tag}
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                <div>
                  <div className="text-white font-tech font-bold text-sm sm:text-base">
                    {currentPhoto.title}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {currentPhoto.subtitle}
                  </div>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors shadow-md shadow-blue-950"
                >
                  Cotar neste Torno
                </button>
              </div>
            </div>

            {/* Thumbnails Navigator */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {LYNX_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative rounded-xl overflow-hidden h-20 border transition-all text-left group ${
                    selectedPhotoIndex === idx
                      ? 'border-blue-500 ring-2 ring-blue-500/40 opacity-100 scale-[1.02]'
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-mono text-white truncate drop-shadow block bg-black/60 px-1 py-0.5 rounded">
                    {photo.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Machine Technical Specs & Benefits */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-base font-tech font-bold text-white">Vantagem da Pega Única no Lynx</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ao usinar a peça em uma única fixação no <strong>torno CNC Lynx</strong>, eliminamos a transferência para fresadoras ou furadeiras secundárias. Isso acaba com o erro de concentricidade e desvios de fixação repetida.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Gauge className="w-4 h-4" />
                </div>
                <h4 className="text-base font-tech font-bold text-white">Furações Radiais, Axiais & Chavetas</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Com o cabeçote de <strong>ferramenta acionada</strong>, executamos furações radiais e axiais, fresamento de sextavados, canais helicoidais e chavetas simultaneamente ao torneamento.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-base font-tech font-bold text-white">Lotes Flexíveis & Repetibilidade</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Capacidade instalada para lotes médios, grandes e protótipos de alta complexidade com medição rigorosa e calibração constante de pastilhas e ferramentas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Pronto para orçar com desenho técnico</span>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+gostaria+de+or%C3%A7ar+uma+pe%C3%A7a+no+torno+CNC+Lynx+com+ferramenta+acionada.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
