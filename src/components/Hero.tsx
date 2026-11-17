import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, Shield, Sparkles, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Indústria 4.0 & Mais de 30 Anos de Engenharia de Precisão</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tech font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Usinagem CNC de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Alta Precisão
              </span>{' '}
              & Produção Seriada
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
              Atendemos indústrias automotivas, médicas, eletrônicas e de telecomunicações com tornos CNC equipados com ferramenta acionada. Realizamos usinagens complexas em pega única, garantindo tolerâncias rigorosas e prazos de entrega confiáveis.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/60 border border-slate-800/80 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tornos com Ferramenta Acionada</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/60 border border-slate-800/80 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Furação Radial & Axial em Pega Única</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/60 border border-slate-800/80 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Materiais Ferrosos & Não-Ferrosos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/60 border border-slate-800/80 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lotes Pequenos, Médios e Seriados</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base shadow-xl shadow-blue-900/40 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Solicitar Orçamento Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%21+Gostaria+de+enviar+um+desenho+t%C3%A9cnico+para+cota%C3%A7%C3%A3o+de+pe%C3%A7as+com+a+LASEC.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 hover:border-emerald-500/50 transition-all shadow-md group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Enviar Desenho via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column - Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-2xl shadow-black/80 group">
                <img
                  src="/images/pecas-precisao.jpg"
                  alt="Peças usinadas em torno CNC com precisão milimétrica - LASEC"
                  className="w-full h-[380px] sm:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Produção Real LASEC</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      Tolerância Rigorosa
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Usinagem de peças seriadas com chavetas e furos axiais conjugados
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-slate-900/90 backdrop-blur-md border border-blue-500/40 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Usinagem em</div>
                  <div className="text-sm font-tech font-bold text-white">Pega Única (1 Setup)</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Controle de Qualidade</div>
                  <div className="text-sm font-tech font-bold text-white">100% Rastreabilidade</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Indicators & Numbers Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <span className="text-3xl sm:text-4xl font-tech font-extrabold text-blue-400 mb-1">
              +30 Anos
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white">Experiência Industrial</span>
            <span className="text-xs text-slate-400 mt-0.5">Fundada em Outubro de 1992</span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <span className="text-3xl sm:text-4xl font-tech font-extrabold text-white mb-1">
              100%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white">Sede Própria</span>
            <span className="text-xs text-slate-400 mt-0.5">Bairro do Limão, São Paulo</span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <span className="text-3xl sm:text-4xl font-tech font-extrabold text-indigo-400 mb-1">
              CNC
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white">Ferramenta Acionada</span>
            <span className="text-xs text-slate-400 mt-0.5">Menor tempo de ciclo e setup</span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
            <span className="text-3xl sm:text-4xl font-tech font-extrabold text-emerald-400 mb-1">
              Brasil
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white">Atendimento Nacional</span>
            <span className="text-xs text-slate-400 mt-0.5">Logística para todo o país</span>
          </div>
        </div>

      </div>
    </section>
  );
};
