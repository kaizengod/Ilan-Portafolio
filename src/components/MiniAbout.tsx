import React from 'react';
import { ArrowRight, Compass, Target, LineChart, Code2 } from 'lucide-react';
import cardBg from '../assets/fondo_sobre_mi.jpg';

interface MiniAboutProps {
  onNavigate: (sectionId: string) => void;
}

export const MiniAbout: React.FC<MiniAboutProps> = ({ onNavigate }) => {
  const indicators = [
    { label: 'DESARROLLO EMPRESARIAL', icon: Compass },
    { label: 'MARKETING', icon: Target },
    { label: 'ESTRATEGIA', icon: LineChart },
    { label: 'WEB / PRODUCTO DIGITAL', icon: Code2 },
  ];

  return (
    <section id="mini-about" className="py-14 sm:py-16 border-b border-zinc-800 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Background Image */}
        <div className="relative p-6 sm:p-10 rounded-3xl border border-zinc-800/80 overflow-hidden shadow-2xl group bg-zinc-950">
          
          {/* Background Image: fondo sobre mi.jpg */}
          <img
            src={cardBg}
            alt="Fondo Sobre Mí"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 pointer-events-none transition-transform duration-700 group-hover:scale-105"
          />

          {/* Soft Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/85 pointer-events-none"></div>

          {/* Content Layer */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading and Tag */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                <span>INTRODUCCIÓN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white uppercase drop-shadow-md">
                SOBRE MÍ
              </h2>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {indicators.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <span
                      key={ind.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-[10px] font-mono text-zinc-200 tracking-wider uppercase shadow-md"
                    >
                      <Icon className="w-3 h-3 text-[#F97316]" />
                      <span>{ind.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Statement & Action */}
            <div className="lg:col-span-8 space-y-5 lg:pl-6 lg:border-l lg:border-zinc-700/60">
              <p className="text-base sm:text-lg text-zinc-100 font-light leading-relaxed drop-shadow">
                &ldquo;Soy Ilan Irausquin, Licenciado en Desarrollo Empresarial, enfocado en la intersección entre estrategia, marketing digital y tecnología.&rdquo;
              </p>
              
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed drop-shadow">
                Me interesa transformar problemas de negocio en soluciones digitales, combinando investigación, creatividad, tecnología y medición.
              </p>

              <div className="pt-2">
                <button
                  id="mini-about-learn-more-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950/90 hover:bg-[#F97316] text-zinc-200 hover:text-black border border-zinc-700 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 group backdrop-blur-md shadow-xl"
                >
                  <span>CONOCER MÁS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F97316] group-hover:text-black group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
