import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Capacidades', href: '#capacidades' },
    { label: 'Tornos CNC', href: '#maquinario' },
    { label: 'Setores', href: '#setores' },
    { label: 'Peças & Galeria', href: '#galeria' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for quick business credibility */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-400 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Parque Fabril em Operação • São Paulo - SP
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Tradição e Rigor Técnico desde {COMPANY_INFO.foundationYear}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.emailOrcamento}`}
              className="hover:text-white transition-colors"
            >
              {COMPANY_INFO.emailOrcamento}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/50 border-b border-slate-800/80 py-3'
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/images/logo.jpg"
                  alt="Logo LASEC Usinagem"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-contain bg-slate-900 p-1 border border-blue-500/30 group-hover:border-blue-400 transition-colors shadow-sm"
                />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-tech font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    LASEC
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/50">
                    Desde 1992
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                  Usinagem CNC & Precisão
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-md transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+de+usinagem+com+a+LASEC.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
              >
                <span>WhatsApp Rápido</span>
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-md shadow-blue-950/50 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Solicitar Cotação</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-semibold"
              >
                Cotar
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-950"
                >
                  <span>Solicitar Cotação Técnica</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+de+usinagem+com+a+LASEC.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium"
                >
                  <span>Falar com Engenharia no WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
