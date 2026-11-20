import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
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
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Maquinário CNC', href: '#maquinario' },
    { label: 'Metrologia 3D', href: '#metrologia' },
    { label: 'Peças usinadas', href: '#galeria' },
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
      {/* Top corporate utility bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2 px-5 sm:px-8 lg:px-12 w-full hidden md:block">
        <div className="w-full max-w-[1680px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span>{COMPANY_INFO.address.full}</span>
            <span className="text-slate-600">|</span>
            <span>{COMPANY_INFO.openingHours}</span>
          </div>
          <div className="flex items-center gap-5">
            <span>
              Contato comercial: <strong className="text-white font-semibold">{COMPANY_INFO.contactPerson}</strong>
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.emailOrcamento}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.emailOrcamento}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky white corporate header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
          
          {/* Prominent Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-4 group shrink-0">
            <div className="h-11 w-18 sm:h-16 sm:w-26 rounded-lg bg-slate-100 border border-slate-300 group-hover:border-blue-800 transition-colors flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
              <img
                src="/images/logo.jpg"
                alt="LASEC Usinagem de precisão"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl xl:text-[40px] font-black tracking-tight text-[#0B192C] group-hover:text-blue-800 transition-colors leading-none">
                  LASEC
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 px-1.5 sm:px-2.5 py-0.5 rounded">
                  Desde 1992
                </span>
              </div>
              <span className="text-[11px] sm:text-sm font-semibold text-slate-700 tracking-wide mt-0.5 sm:mt-1">
                Usinagem aliada à precisão
              </span>
            </div>
          </a>

          {/* Bold Desktop Navigation Buttons */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 2xl:px-4 py-2.5 text-sm 2xl:text-[15px] font-semibold text-[#0B192C] bg-slate-100/90 hover:bg-[#0B192C] hover:text-white border border-slate-200 hover:border-[#0B192C] rounded-md transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Strong Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre.+Gostaria+de+solicitar+um+or%C3%A7amento+de+usinagem.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 xl:py-3 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-sm xl:text-[15px] font-bold shadow-xs transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-md bg-blue-800 hover:bg-[#0B192C] text-white text-sm xl:text-[15px] font-bold shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile / Tablet menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3.5 py-2 rounded-md bg-blue-800 text-white text-xs font-bold"
            >
              Orçamento
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-slate-700 hover:bg-slate-100 border border-slate-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-3 rounded-lg text-sm sm:text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              ))}
              
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3.5 rounded-lg bg-blue-800 hover:bg-[#0B192C] text-white text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Solicitar orçamento técnico</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1%2C+Alexandre.+Gostaria+de+solicitar+um+or%C3%A7amento+de+usinagem.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar no WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-2.5 text-center rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  <span>Ligar: {COMPANY_INFO.phonePrimary} / {COMPANY_INFO.phoneSecondary}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
