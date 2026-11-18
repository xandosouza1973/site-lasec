import React from 'react';
import { Phone, Mail, Clock, Navigation, ExternalLink, User, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 lg:py-20 bg-white w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
            Localização fabril
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight mb-3">
            Venha conhecer nossa sede
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Localizados no polo industrial do Bairro do Limão, em São Paulo, com acesso direto à Marginal Tietê, Rodovia dos Bandeirantes e Anhanguera.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-800 mb-1">
                  Endereço físico
                </p>
                <h3 className="text-xl font-bold text-[#0B192C] mb-2">
                  LASEC Usinagem de precisão
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.address.full}<br />
                  CEP: {COMPANY_INFO.address.zip} — São Paulo, SP
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-4">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0B192C] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Contato comercial</span>
                    <span className="text-sm sm:text-base font-bold text-[#0B192C]">
                      {COMPANY_INFO.contactPerson}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0B192C] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Telefones comerciais</span>
                    <div className="flex flex-wrap items-center gap-x-2 text-base font-bold text-[#0B192C]">
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-blue-800 transition-colors">
                        {COMPANY_INFO.phonePrimary}
                      </a>
                      <span className="text-slate-400 font-normal">/</span>
                      <a href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`} className="hover:text-blue-800 transition-colors">
                        {COMPANY_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">WhatsApp comercial</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre.+Gostaria+de+solicitar+um+or%C3%A7amento+de+usinagem.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-800 hover:text-emerald-600 transition-colors"
                    >
                      {COMPANY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0B192C] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">E-mails de engenharia e compras</span>
                    <a
                      href={`mailto:${COMPANY_INFO.emailOrcamento}`}
                      className="text-sm font-semibold text-[#0B192C] hover:text-blue-800 transition-colors block"
                    >
                      {COMPANY_INFO.emailOrcamento}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.emailCompras}`}
                      className="text-xs text-slate-600 hover:text-blue-800 transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.emailCompras}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0B192C] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Horário de expediente</span>
                    <span className="text-sm font-semibold text-[#0B192C]">
                      {COMPANY_INFO.openingHours}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <div className="pt-6 border-t border-slate-200 mt-6">
              <a
                href="https://maps.google.com/?q=Rua+Alvaro+Silva,+233,+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white text-sm font-semibold transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative min-h-[400px]">
            <iframe
              title="Localização da LASEC Usinagem no Bairro do Limão"
              src={COMPANY_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
