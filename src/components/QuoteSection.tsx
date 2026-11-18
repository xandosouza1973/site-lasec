import React, { useState } from 'react';
import { Check, MessageSquare, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface QuoteSectionProps {
  initialPartName?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialPartName = '' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    material: 'Aço Inox (304, 316, 420)',
    quantidade: '100 a 500 peças',
    servico: 'Produção seriada CNC',
    temDesenho: 'Sim (PDF / CAD / STEP)',
    detalhes: initialPartName ? `Referência: ${initialPartName}` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `*SOLICITAÇÃO DE COTAÇÃO - LASEC USINAGEM*
---------------------------------------
*Nome:* ${formData.nome || 'Não informado'}
*Empresa:* ${formData.empresa || 'Não informada'}
*E-mail:* ${formData.email || 'Não informado'}
*Telefone/Whats:* ${formData.telefone || 'Não informado'}
*Material:* ${formData.material}
*Quantidade:* ${formData.quantidade}
*Serviço:* ${formData.servico}
*Desenho técnico:* ${formData.temDesenho}
*Detalhes:* ${formData.detalhes || 'Nenhum detalhe adicional'}
---------------------------------------`;
    return encodeURIComponent(text);
  };

  const getMailtoHref = () => {
    const subject = encodeURIComponent(`Solicitação de cotação - ${formData.empresa || formData.nome || 'Cliente'}`);
    const body = encodeURIComponent(`Olá ${COMPANY_INFO.contactPerson} / equipe LASEC,

Gostaria de solicitar uma cotação para usinagem:

- Nome: ${formData.nome}
- Empresa: ${formData.empresa}
- Telefone: ${formData.telefone}
- Material: ${formData.material}
- Quantidade: ${formData.quantidade}
- Tipo de serviço: ${formData.servico}
- Possui desenho técnico: ${formData.temDesenho}
- Detalhes adicionais: ${formData.detalhes}

(Em anexo segue nosso desenho técnico para análise).`);
    return `mailto:${COMPANY_INFO.emailOrcamento}?cc=${COMPANY_INFO.emailCompras}&subject=${subject}&body=${body}`;
  };

  return (
    <section id="orcamento" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
                Atendimento técnico e comercial
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight mb-4">
                Solicite uma cotação para o seu projeto
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Envie suas especificações, tolerâncias ou desenho técnico. Nossa equipe de engenharia e o responsável comercial <strong>{COMPANY_INFO.contactPerson}</strong> analisam a viabilidade de fabricação com retorno ágil.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-[#0B192C] block">Sigilo e confidencialidade (NDA)</span>
                    <span className="text-xs sm:text-sm text-slate-600">Seus projetos e arquivos 3D tratados com sigilo industrial.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-[#0B192C] block">Análise técnica DFM</span>
                    <span className="text-xs sm:text-sm text-slate-600">Otimização de processos voltada para redução de custo e tempo de ciclo.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-[#0B192C] block">Relatório dimensional TESA 3D</span>
                    <span className="text-xs sm:text-sm text-slate-600">Garantia dimensional emitida por máquina tridimensional em sala climatizada.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 text-sm space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Canais diretos</div>
              <div className="flex items-center gap-3 text-slate-800">
                <Phone className="w-4 h-4 text-blue-800 shrink-0" />
                <span className="font-semibold">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800">
                <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold">WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="w-4 h-4 text-blue-800 shrink-0" />
                <span>{COMPANY_INFO.emailOrcamento} / {COMPANY_INFO.emailCompras}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-4 h-4 text-blue-800 shrink-0" />
                <span>{COMPANY_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Seu nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex.: Carlos Silva"
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Empresa / indústria *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Nome da sua empresa"
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        E-mail corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Matéria-prima
                      </label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0B192C]"
                      >
                        <option>Aço Inox (304, 316, 420)</option>
                        <option>Aço Carbono / Liga (1020, 1045, 4140)</option>
                        <option>Alumínio (Ligas 6061, 7075, etc.)</option>
                        <option>Latão CLA / Cobre / Bronze</option>
                        <option>Acrílico / Policarbonato</option>
                        <option>Polímeros (Nylon, POM/Delrin, PTFE)</option>
                        <option>Outro material</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Volume estimado
                      </label>
                      <select
                        value={formData.quantidade}
                        onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0B192C]"
                      >
                        <option>Protótipo / 1 a 10 peças</option>
                        <option>Lote pequeno (10 a 100 peças)</option>
                        <option>100 a 500 peças</option>
                        <option>500 a 2.000 peças</option>
                        <option>Lote seriado contínuo (+2.000)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Desenho técnico
                      </label>
                      <select
                        value={formData.temDesenho}
                        onChange={(e) => setFormData({ ...formData, temDesenho: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0B192C]"
                      >
                        <option>Sim (PDF / CAD / STEP)</option>
                        <option>Tenho amostra física</option>
                        <option>Necessito de auxílio de desenho</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Especificações e requisitos técnicos
                    </label>
                    <textarea
                      rows={3}
                      value={formData.detalhes}
                      onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                      placeholder="Descreva tratamentos térmicos ou superficiais, tolerâncias e aplicação da peça..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Prosseguir para envio da cotação</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Seus dados e arquivos técnicos são tratados sob estrita confidencialidade comercial.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#0B192C] mb-2">
                      Informações preparadas com sucesso
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Seu pedido de cotação para <strong>{formData.empresa || formData.nome}</strong> está pronto. Escolha o canal de envio:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto pt-2">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar no WhatsApp</span>
                    </a>

                    <a
                      href={getMailtoHref()}
                      className="flex items-center justify-center gap-2 py-3 px-5 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white font-semibold text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar por e-mail</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Editar dados do orçamento
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
