import React from 'react';
import { FileText, Lock, Award, Recycle, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const QualityComplianceSection: React.FC = () => {
  return (
    <section id="qualidade" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200 w-full">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-800 mb-2">
            Padrões industriais e governança
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight mb-3">
            Qualidade, normas técnicas e sustentabilidade
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Processos produtivos orientados à rastreabilidade de matéria-prima, reciclagem integral de cavacos e sigilo industrial no tratamento de projetos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <Award className="w-6 h-6 text-blue-800 mb-4" />
              <h3 className="text-base font-bold text-[#0B192C] mb-2">
                Padrão da qualidade industrial
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Processos estruturados com foco em zero defeito, calibração periódica de instrumentos RBC e controle estatístico dimensional.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <FileText className="w-6 h-6 text-blue-800 mb-4" />
              <h3 className="text-base font-bold text-[#0B192C] mb-2">
                Relatórios dimensionais
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inspeção por coordenadas tridimensionais TESA Micro-Hite 3D em sala climatizada, com emissão de laudos técnicos completos.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <Recycle className="w-6 h-6 text-emerald-700 mb-4" />
              <h3 className="text-base font-bold text-[#0B192C] mb-2">
                Reciclagem integral de metais
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Separação rigorosa de cavacos (inox, latão, alumínio e aço) para refusão e descarte certificado de fluidos conforme normas ambientais.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <Lock className="w-6 h-6 text-blue-800 mb-4" />
              <h3 className="text-base font-bold text-[#0B192C] mb-2">
                Sigilo e acordo de NDA
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Proteção estrita da propriedade intelectual dos clientes. Arquivos CAD, 3D e desenhos técnicos tratados sob confidencialidade.
              </p>
            </div>
          </div>

        </div>

        {/* Clean Corporate Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 text-[#0B192C] flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[#0B192C] font-bold text-base sm:text-lg">
                Auditoria de fábrica e homologação de fornecedor
              </div>
              <div className="text-sm text-slate-600 mt-0.5">
                Agende uma visita técnica à nossa fábrica no Bairro do Limão (SP) para homologar a LASEC como fornecedor oficial.
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre.+Gostaria+de+agendar+uma+visita+t%C3%A9cnica+%C3%A0+f%C3%A1brica+da+LASEC.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-[#0B192C] hover:bg-blue-900 text-white font-semibold text-sm transition-colors shrink-0"
          >
            Agendar visita técnica
          </a>
        </div>

      </div>
    </section>
  );
};
