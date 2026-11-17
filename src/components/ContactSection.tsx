import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Estratégica & Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight mb-4">
            Venha Conhecer Nossa Sede Fabril
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Localizados no Bairro do Limão em São Paulo, com acesso privilegiado à Marginal Tietê e às principais rodovias do estado.
          </p>
        </div>

        {/* Info Grid + Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                  Endereço Físico
                </span>
                <h3 className="text-xl font-tech font-bold text-white mb-2">
                  LASEC Indústria Mecânica
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {COMPANY_INFO.address.full}<br />
                  CEP: {COMPANY_INFO.address.zip} • São Paulo - SP
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Sede Própria com Estacionamento e Carga/Descarga</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telefone Comercial / PABX</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-mail para Orçamentos e Desenhos</span>
                    <a
                      href={`mailto:${COMPANY_INFO.emailOrcamento}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_INFO.emailOrcamento}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Geral: {COMPANY_INFO.emailGeral}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Horário de Expediente Fabril</span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_INFO.openingHours}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <a
                href="https://maps.google.com/?q=Rua+Alvaro+Silva,+233,+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Abrir Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative min-h-[350px]">
            <iframe
              title="Localização da LASEC Usinagem no Bairro do Limão"
              src={COMPANY_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
