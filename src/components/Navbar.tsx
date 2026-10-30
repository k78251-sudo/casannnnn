import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onScheduleClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Planos & Valores', href: '#planos' },
    { label: 'Grade de Horários', href: '#horarios' },
    { label: 'Professores', href: '#professores' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      const element = document.querySelector('#agendamento');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#262626] shadow-xl'
            : 'bg-gradient-to-b from-[#141414]/90 via-[#141414]/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Single element Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-white hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 group"
              aria-label="Vértice Academia - Início"
            >
              {/* Geometric Vertex Icon */}
              <div className="w-8 h-8 bg-[#C8F031] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#141414"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 20 12 4 20 20" />
                  <polyline points="8 15 12 8 16 15" />
                </svg>
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider uppercase text-white">
                VÉRTICE <span className="text-[#C8F031] font-light text-base tracking-normal">ACADEMIA</span>
              </span>
            </a>

            {/* Zone 2: Clean single-line navigation links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-[#C8F031] transition-colors whitespace-nowrap shrink-0 py-2 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8F031] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={handleCtaClick}
                className="bg-[#C8F031] hover:bg-[#b5dc26] text-black font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow-[#C8F031]/20 hover:shadow-lg active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Aula Gratuita</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#C8F031] transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-[#141414] border-t border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-4 pt-2">
              <p className="text-xs font-semibold tracking-wider text-[#C8F031] uppercase">Navegação</p>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-xl font-heading font-semibold text-zinc-200 hover:text-[#C8F031] py-2 border-b border-zinc-900 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="text-xs text-zinc-400 space-y-1">
                <p className="text-white font-medium">Segunda a Sexta: 06h às 23h</p>
                <p>Sábados: 08h às 18h · Domingos: 08h às 14h</p>
              </div>

              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full bg-[#C8F031] hover:bg-[#b5dc26] text-black font-semibold text-base py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Agendar Aula Experimental</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
