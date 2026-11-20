import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const HERO_SLIDES = [
  {
    src: '/images/hq/pecas-anodizadas-roxo.jpg',
    tag: 'Fresamento 4º eixo',
    caption: 'Peças em alumínio anodizado usinadas com furações transversais e rebaixos de precisão',
  },
  {
    src: '/images/hq/doosan-lynx-220lm.jpg',
    tag: 'Doosan Lynx 220LM',
    caption: 'Centro de torneamento com ferramenta acionada para usinagem em pega única',
  },
  {
    src: '/images/hq/bloco-eixos-cruzados.jpg',
    tag: 'Geometria complexa',
    caption: 'Corpo usinado com eixos cruzados, canais de vedação e furo central escalonado',
  },
  {
    src: '/images/hq/lote-seriado-recartilhado.jpg',
    tag: 'Produção seriada',
    caption: 'Lotes seriados com recartilhado uniforme, roscas calibradas e inspeção dimensional',
  },
  {
    src: '/images/hq/guia-onda-rf-aluminio.jpg',
    tag: 'Eletrônica e RF',
    caption: 'Guias de onda e carcaças em alumínio espelhado para telecomunicações',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="bg-slate-50 border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-4">
              Usinagem industrial em São Paulo desde 1992
            </p>

            <h1 className="text-3xl sm:text-5xl xl:text-[56px] font-extrabold tracking-tight text-[#0B192C] leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6">
              Usinagem CNC de alta precisão e produção seriada
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Fabricação de peças técnicas seriadas, especiais e protótipos para os setores automotivo, odontológico, eletrônico e industrial. Estrutura própria com tornos Doosan de ferramenta acionada, centros Romi 4º eixo e sala climatizada de metrologia tridimensional TESA 3D.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md bg-blue-800 hover:bg-[#0B192C] text-white font-bold text-sm sm:text-base shadow-md transition-colors"
              >
                <span>Solicitar orçamento técnico</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre.+Gostaria+de+enviar+um+desenho+t%C3%A9cnico+para+cota%C3%A7%C3%A3o+na+LASEC.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Falar via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column - Clean Rotating Banner */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div
              className="relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-[290px] sm:h-[400px] xl:h-[450px] w-full overflow-hidden bg-slate-100">
                {HERO_SLIDES.map((s, idx) => (
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.caption}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
              </div>

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    {slide.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-white">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Specification Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0B192C]">+30 anos</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Fundada em outubro de 1992</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0B192C]">Sede própria</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Bairro do Limão, São Paulo - SP</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0B192C]">4º eixo e Lynx</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Tornos com ferramenta acionada</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0B192C]">TESA 3D</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Sala de medição climatizada</div>
          </div>
        </div>

      </div>
    </section>
  );
};
