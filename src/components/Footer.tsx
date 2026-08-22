import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-16 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-2xl font-black tracking-tighter text-white block uppercase">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-zinc-400 max-w-sm text-xs leading-relaxed font-light">
              Estrategia de Negocios × Marketing Digital × Tecnología × Creatividad.
            </p>
            <div className="text-[#F97316] text-[10px] tracking-widest pt-1 font-bold">
              INVESTIGACIÓN → ESTRATEGIA → CONSTRUCCIÓN → MEDICIÓN → ITERACIÓN
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] block font-bold">
              Navegación
            </span>
            <ul className="space-y-1.5 text-zinc-400 text-xs">
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-[#F97316] transition-colors uppercase tracking-wider">
                  01. Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('methodology')} className="hover:text-[#F97316] transition-colors uppercase tracking-wider">
                  02. Cómo Pienso
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('creative')} className="hover:text-[#F97316] transition-colors uppercase tracking-wider">
                  03. Creative Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F97316] transition-colors uppercase tracking-wider">
                  04. Sobre Mí
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F97316] transition-colors uppercase tracking-wider">
                  05. Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Status & Relocation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] block font-bold">
              Disponibilidad y Reubicación
            </span>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Disponible para Nuevos Roles y Proyectos</span>
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed font-light">
                Venezuela • Disponibilidad de reubicación a Tijuana, México.
              </p>
              <button
                onClick={onOpenCV}
                className="text-[#F97316] hover:underline inline-flex items-center gap-1 text-[11px] pt-1 uppercase tracking-wider font-bold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Ver CV Completo →</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Portafolio Profesional.
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors uppercase tracking-widest text-[10px]"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
