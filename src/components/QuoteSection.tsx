import React, { useState } from 'react';
import { FileText, CheckCircle2, MessageSquare, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
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
    material: 'Aço Inox',
    quantidade: '100 a 500 peças',
    servico: 'Produção Seriada CNC',
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
*Material Desejado:* ${formData.material}
*Quantidade Estimada:* ${formData.quantidade}
*Tipo de Serviço:* ${formData.servico}
*Possui Desenho Técnico:* ${formData.temDesenho}
*Detalhes:* ${formData.detalhes || 'Nenhum detalhe adicional'}
---------------------------------------
Enviado através do novo site da LASEC.`;
    return encodeURIComponent(text);
  };

  const getMailtoHref = () => {
    const subject = encodeURIComponent(`Solicitação de Cotação - ${formData.empresa || formData.nome || 'Cliente'}`);
    const body = encodeURIComponent(`Olá equipe LASEC,

Gostaria de solicitar uma cotação para usinagem:

- Nome: ${formData.nome}
- Empresa: ${formData.empresa}
- Telefone: ${formData.telefone}
- Material: ${formData.material}
- Quantidade: ${formData.quantidade}
- Tipo de Serviço: ${formData.servico}
- Tem desenho técnico: ${formData.temDesenho}
- Detalhes adicionais: ${formData.detalhes}

(Em anexo segue nosso desenho técnico/especificação para análise).`);
    return `mailto:${COMPANY_INFO.emailOrcamento}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="orcamento" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Atendimento Comercial & Engenharia</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-tech font-bold text-white tracking-tight mb-4">
                Solicite uma Cotação para o seu Projeto
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                Envie suas especificações, tolerâncias ou desenho técnico. Avaliamos a viabilidade de fabricação e respondemos com agilidade e transparência.
              </p>

              {/* Trust list */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">Sigilo e Confidencialidade (NDA)</span>
                    <span className="text-xs text-slate-400">Seus projetos e desenhos industriais tratados com absoluto sigilo.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">Avaliação Técnica DFM</span>
                    <span className="text-xs text-slate-400">Engenharia voltada para reduzir custos e tempos de usinagem.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">Atendimento por E-mail ou WhatsApp</span>
                    <span className="text-xs text-slate-400">Canal direto com quem entende de chão de fábrica e medição.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-2.5">
              <div className="text-slate-400 font-mono uppercase tracking-wider text-[11px]">Canais Rápidos:</div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{COMPANY_INFO.emailOrcamento}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form or Success State */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Empresa / Indústria *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Nome da sua empresa"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@suaempresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Matéria-Prima
                      </label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option>Aço Inox (304, 316, 420)</option>
                        <option>Aço Carbono (1020, 1045)</option>
                        <option>Aço Liga (4140, 8620)</option>
                        <option>Alumínio (todas ligas)</option>
                        <option>Latão / Cobre / Bronze</option>
                        <option>Polímeros (Nylon, POM, PTFE)</option>
                        <option>Outro material</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Quantidade Estimada
                      </label>
                      <select
                        value={formData.quantidade}
                        onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option>Protótipo / 1 a 10 peças</option>
                        <option>Lote pequeno (10 a 100 peças)</option>
                        <option>100 a 500 peças</option>
                        <option>500 a 2.000 peças</option>
                        <option>Lote seriado contínuo (+2.000)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Tem Desenho Técnico?
                      </label>
                      <select
                        value={formData.temDesenho}
                        onChange={(e) => setFormData({ ...formData, temDesenho: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option>Sim (PDF / CAD / STEP)</option>
                        <option>Tenho amostra física</option>
                        <option>Necessito de auxílio de desenho</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Especificações & Requisitos Técnicos
                    </label>
                    <textarea
                      rows={3}
                      value={formData.detalhes}
                      onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                      placeholder="Descreva detalhes como tratamentos térmicos/superficiais, tolerâncias, aplicação da peça..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-950/60 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>Prosseguir para Envio da Cotação</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-slate-400">
                    🔒 Seus dados e arquivos permanecem sob estrita confidencialidade comercial.
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-tech font-bold text-white mb-2">
                      Informações Preparadas com Sucesso!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Seu pedido de cotação para <strong>{formData.empresa || formData.nome}</strong> está pronto. Escolha a forma de envio mais conveniente:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto pt-2">
                    {/* Send WhatsApp */}
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar no WhatsApp</span>
                    </a>

                    {/* Send Email */}
                    <a
                      href={getMailtoHref()}
                      className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-950 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar por E-mail</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      ← Editar dados do orçamento
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
