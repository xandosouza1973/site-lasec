import React, { useState } from 'react';
import { X, Check, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPartName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledPartName = '' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    material: 'Aço Inox (304, 316)',
    quantidade: '100 a 500 peças',
    detalhes: prefilledPartName ? `Referência: ${prefilledPartName}` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
*Detalhes:* ${formData.detalhes || 'Nenhum detalhe adicional'}
---------------------------------------`;
    return encodeURIComponent(text);
  };

  const getMailtoHref = () => {
    const subject = encodeURIComponent(`Cotação técnica - ${formData.empresa || formData.nome || 'Cliente'}`);
    const body = encodeURIComponent(`Olá ${COMPANY_INFO.contactPerson} / equipe LASEC,

Gostaria de solicitar uma cotação para o seguinte projeto:

- Nome: ${formData.nome}
- Empresa: ${formData.empresa}
- Telefone: ${formData.telefone}
- Material: ${formData.material}
- Quantidade: ${formData.quantidade}
- Detalhes: ${formData.detalhes}

Seguem em anexo nossos arquivos técnicos para análise.`);
    return `mailto:${COMPANY_INFO.emailOrcamento}?cc=${COMPANY_INFO.emailCompras}&subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative my-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-800">
                Orçamento técnico
              </p>
              <h3 className="text-2xl font-bold text-[#0B192C] mt-1">
                Solicitar cotação de usinagem
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Preencha os dados para direcionar seu projeto diretamente à nossa engenharia.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nome *</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Empresa *</label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Nome da empresa"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@empresa.com.br"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Material</label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C]"
                  >
                    <option>Aço Inox (304, 316, 420)</option>
                    <option>Aço Carbono / Liga</option>
                    <option>Alumínio Industrial</option>
                    <option>Latão / Bronze / Cobre</option>
                    <option>Polímeros (Nylon, POM, PTFE)</option>
                    <option>Outro material</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Lote / quantidade</label>
                  <select
                    value={formData.quantidade}
                    onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C]"
                  >
                    <option>Protótipo / amostra</option>
                    <option>10 a 100 peças</option>
                    <option>100 a 500 peças</option>
                    <option>500 a 2.000 peças</option>
                    <option>+2.000 peças (seriado)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Observações ou desenho</label>
                <textarea
                  rows={2}
                  value={formData.detalhes}
                  onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                  placeholder="Informe tolerâncias, acabamentos ou se já possui arquivo CAD/PDF..."
                  className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0B192C] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Avançar para envio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#0B192C] mb-1">
                Tudo pronto para enviar
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Escolha abaixo como deseja enviar os dados para a equipe da LASEC:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar pelo WhatsApp</span>
              </a>

              <a
                href={getMailtoHref()}
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar por e-mail</span>
              </a>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto"
            >
              Voltar e editar informações
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
