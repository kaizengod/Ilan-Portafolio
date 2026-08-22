import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText, MapPin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCV,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'PROYECTOS' },
    { id: 'methodology', label: 'CÓMO PIENSO' },
    { id: 'creative', label: 'CREATIVE WORK' },
    { id: 'about', label: 'SOBRE MÍ' },
    { id: 'contact', label: 'CONTACTO' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/25 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Name */}
          <button
            id="nav-logo-button"
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-md p-1"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tighter text-white group-hover:text-[#F97316] transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
          </button>

          {/* Relocation Status Pill - Desktop */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/40 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Disponible reubicación a Tijuana, MX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-[0.15em] uppercase">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-[#F97316] font-bold border-b border-[#F97316] pb-0.5'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-cv-button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest text-zinc-200 hover:text-white bg-zinc-950/40 backdrop-blur-md border border-white/10 hover:border-zinc-500 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#F97316]" />
              <span>CV</span>
            </button>
            <button
              id="nav-contact-cta-button"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.15em] uppercase text-white hover:text-black hover:bg-[#F97316] border border-white/20 hover:border-[#F97316] transition-all shadow-sm font-semibold backdrop-blur-md"
            >
              <span>CONTACTO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-cv-quick-btn"
              onClick={onOpenCV}
              className="px-2.5 py-1 rounded-full text-xs font-mono text-zinc-200 bg-zinc-950/40 border border-white/10"
            >
              CV
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-950/40 border border-white/10 text-zinc-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-zinc-800">
          <div className="space-y-4">
            <div className="pb-4 mb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F97316] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Venezuela → Disponible para reubicación en Tijuana, MX</span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Estrategia de Negocios × Marketing Digital × Tecnología
              </p>
            </div>

            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
              Navegación
            </p>

            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left py-3 border-b border-zinc-900 font-display text-xl font-bold uppercase tracking-tight text-white hover:text-[#F97316] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-zinc-600">→</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-zinc-800">
            <button
              id="mobile-drawer-cv-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#F97316]" />
              <span>Ver Currículum (CV)</span>
            </button>

            <button
              id="mobile-drawer-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-xl bg-white hover:bg-[#F97316] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Ir a Contacto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
