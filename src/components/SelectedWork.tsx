import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolioData';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Database, 
  Compass, 
  Download, 
  Globe,
  SlidersHorizontal,
  Grid
} from 'lucide-react';
import { downloadThesisPDF } from '../utils/thesisPdf';

interface SelectedWorkProps {
  onOpenCaseStudy: (caseStudyId: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenCaseStudy,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'horizontal' | 'stack'>('horizontal');
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const totalProjects = CASE_STUDIES.length;

  // Keep track of active project index on scroll in horizontal mode
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || viewMode !== 'horizontal') return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector('article')?.clientWidth || 600;
      const gap = 24;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      const clampedIndex = Math.max(0, Math.min(newIndex, totalProjects - 1));
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [viewMode, totalProjects, currentIndex]);

  const scrollToProject = useCallback((idx: number) => {
    const targetIdx = Math.max(0, Math.min(idx, totalProjects - 1));
    setCurrentIndex(targetIdx);

    if (viewMode === 'horizontal') {
      const container = scrollContainerRef.current;
      const targetCard = cardRefs.current[targetIdx];
      if (container && targetCard) {
        targetCard.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    } else {
      const targetCard = cardRefs.current[targetIdx];
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [totalProjects, viewMode]);

  const handleNext = () => {
    scrollToProject((currentIndex + 1) % totalProjects);
  };

  const handlePrev = () => {
    scrollToProject((currentIndex - 1 + totalProjects) % totalProjects);
  };

  // Keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
              <span>PROYECTOS DESTACADOS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
              PROYECTOS
            </h2>
          </div>

          {/* Controls: View Mode Toggle & Navigation */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800">
              <button
                id="work-view-horizontal-btn"
                onClick={() => {
                  setViewMode('horizontal');
                  setTimeout(() => scrollToProject(currentIndex), 50);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'horizontal'
                    ? 'bg-zinc-800 text-white font-bold shadow'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Vista deslizable horizontal con scroll"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="hidden sm:inline">Deslizable</span>
              </button>

              <button
                id="work-view-stack-btn"
                onClick={() => setViewMode('stack')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'stack'
                    ? 'bg-zinc-800 text-white font-bold shadow'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Ver todos los proyectos en lista vertical"
              >
                <Grid className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="hidden sm:inline">Ver Todos</span>
              </button>
            </div>

            {/* Counter */}
            <div className="text-xs font-mono text-zinc-400">
              <span className="text-white font-bold text-sm">0{currentIndex + 1}</span>
              <span className="text-zinc-600 mx-1">/</span>
              <span>0{totalProjects}</span>
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                id="carousel-prev-btn"
                onClick={handlePrev}
                aria-label="Proyecto anterior"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="carousel-next-btn"
                onClick={handleNext}
                aria-label="Proyecto siguiente"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Instructions Hint */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            <span>
              {viewMode === 'horizontal' 
                ? 'Puedes desplazarte deslizando horizontalmente, con la rueda del ratón o con las pestañas' 
                : 'Mostrando todos los proyectos en orden cronológico'}
            </span>
          </div>
          <span className="hidden md:inline text-zinc-600">← Arrastra o usa flechas →</span>
        </div>

        {/* Scrollable Container (Horizontal Snap Carousel or Vertical Stack) */}
        <div
          ref={scrollContainerRef}
          className={
            viewMode === 'horizontal'
              ? 'flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 focus:outline-none scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent'
              : 'space-y-8 pb-6 pt-2'
          }
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {CASE_STUDIES.map((project, idx) => {
            const isCurrent = idx === currentIndex;

            return (
              <article
                key={project.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                id={`project-card-${project.id}`}
                className={`rounded-2xl border transition-all duration-300 bg-zinc-950 p-6 sm:p-8 lg:p-10 shadow-2xl relative shrink-0 ${
                  viewMode === 'horizontal'
                    ? 'w-[92vw] sm:w-[640px] md:w-[720px] lg:w-[880px] snap-center'
                    : 'w-full'
                } ${
                  isCurrent
                    ? 'border-zinc-700 ring-1 ring-[#F97316]/20'
                    : 'border-zinc-850 opacity-95 hover:border-zinc-700'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Visual Mockup / Interactive Graphic */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-[#0e0e11] p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
                      
                      {/* Top bar on mockup */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                          {project.role}
                        </span>
                      </div>

                      {/* Center Visual Element per project */}
                      <div className="relative z-10 my-auto py-4">
                        {project.id === 'bodegon-rodrigues-2004' && (
                          <div className="space-y-3">
                            <div className="text-[11px] font-mono text-[#F97316] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                              <TrendingUp className="w-4 h-4" />
                              <span>Resultados Documentados</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2.5 text-left">
                              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                                <div className="text-2xl font-bold font-display text-white">2.527</div>
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">LIKES INSTAGRAM</div>
                              </div>
                              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                                <div className="text-2xl font-bold font-display text-[#F97316]">686</div>
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">COMPARTIDOS DIRECTOS</div>
                              </div>
                              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                                <div className="text-2xl font-bold font-display text-white">138</div>
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">COMENTARIOS</div>
                              </div>
                              <div className="p-3 rounded-lg bg-black border border-zinc-800">
                                <div className="text-2xl font-bold font-display text-emerald-400">~$0.10</div>
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">COSTO / CONVERSACIÓN</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === 'abc-poker' && (
                          <div className="space-y-3">
                            <div className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                              <Layers className="w-4 h-4 text-[#F97316]" />
                              <span>Presencia Web Oficial & Onboarding</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-black border border-zinc-800 space-y-2">
                              <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                                <span>PLATAFORMA WEB OFICIAL</span>
                                <span className="text-emerald-400 font-bold">DESARROLLADA</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                                <span>SISTEMA VISUAL</span>
                                <span className="text-emerald-400 font-bold">DESPLEGADO</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                                <span>ESTRATEGIA DE ADQUISICIÓN</span>
                                <span className="text-[#F97316] font-bold">PREPARADA</span>
                              </div>
                              <div className="mt-2 pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-400">
                                ANUNCIO → WEB OFICIAL → CTA UNIRSE → WHATSAPP
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === 'personal-finance-dashboard' && (
                          <div className="space-y-3">
                            <div className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                              <Database className="w-4 h-4 text-[#F97316]" />
                              <span>Modelos & Control de Gestión</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-black border border-zinc-800 space-y-2">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-300 border border-zinc-800">Microsoft Excel</span>
                                <span className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-300 border border-zinc-800">Figma</span>
                                <span className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-300 border border-zinc-800">ChatGPT</span>
                              </div>
                              <p className="text-xs text-zinc-300 font-light">
                                Modelos estructurados para control financiero, balances y proyección de viabilidad económica.
                              </p>
                              <div className="text-[10px] font-mono text-emerald-400">
                                • Metodología Activa • Diagnóstico y Decisión
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === 'thesis-business-strategy' && (
                          <div className="space-y-3">
                            <div className="text-[11px] font-mono text-[#F97316] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                              <Compass className="w-4 h-4" />
                              <span>Estrategia y Diagnóstico Empresarial</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-black border border-zinc-800 space-y-2 font-mono text-xs">
                              <div className="text-zinc-200 font-bold uppercase text-[11px]">
                                5 Fuerzas de Porter
                              </div>
                              <p className="text-xs text-zinc-300 font-sans font-light">
                                Análisis de rivalidad, poder de negociación y sustitutos aplicado al comercio minorista.
                              </p>
                              <div className="text-[10px] text-zinc-400 pt-1 border-t border-zinc-800">
                                Base para la decisión de expansión física en Bodegón Rodrigues.
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom status */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span>AÑO {project.year}</span>
                        <span className="uppercase">CASO DE ESTUDIO 0{idx + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Details */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    
                    {/* Number and Categories */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm sm:text-base font-bold text-[#F97316]">
                          0{idx + 1}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.categories.map((cat) => (
                            <span
                              key={cat}
                              className="text-[10px] font-mono font-medium tracking-wider text-zinc-300 uppercase px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Indicator pill */}
                      {project.hasRealMetrics ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-0.5 rounded-full font-bold">
                          <CheckCircle className="w-3 h-3" />
                          <span>Resultados Documentados</span>
                        </span>
                      ) : project.id === 'abc-poker' ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/30 px-2.5 py-0.5 rounded-full font-bold">
                          <Clock className="w-3 h-3" />
                          <span>Presencia Web Oficial 2026</span>
                        </span>
                      ) : project.id === 'thesis-business-strategy' ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-[#F97316]" />
                          <span>Tesis de Grado UNEFM</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-[#F97316]" />
                          <span>Estrategia Aplicada</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-mono text-zinc-400">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                      <button
                        id={`view-case-study-btn-${project.id}`}
                        onClick={() => onOpenCaseStudy(project.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#F97316] text-black font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md group/btn"
                      >
                        <span>VER CASO COMPLETO</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      {/* Direct Thesis PDF download if applicable */}
                      {project.externalLinks?.thesisPdfDownload && (
                        <button
                          id={`download-thesis-pdf-${project.id}`}
                          onClick={downloadThesisPDF}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-[#F97316] border border-[#F97316]/40 hover:border-[#F97316] font-mono text-xs font-bold tracking-wider uppercase transition-all"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>DESCARGAR TESIS PDF</span>
                        </button>
                      )}

                      {/* Website Link if applicable */}
                      {project.externalLinks?.website && (
                        <a
                          href={project.externalLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 font-mono text-xs tracking-wider transition-all"
                        >
                          <Globe className="w-3.5 h-3.5 text-[#F97316]" />
                          <span>SITIO WEB</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Horizontal Navigation Dots / Mini Tabs Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {CASE_STUDIES.map((project, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={project.id}
                id={`carousel-nav-tab-${project.id}`}
                onClick={() => scrollToProject(idx)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-zinc-900/95 border-[#F97316] shadow-lg shadow-[#F97316]/5 scale-[1.01]'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#F97316]' : 'text-zinc-500'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">{project.year}</span>
                </div>
                <div className={`text-xs font-display font-bold truncate ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                  {project.title}
                </div>
                <div className="w-full bg-zinc-800 h-0.5 mt-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${isActive ? 'bg-[#F97316] w-full' : 'bg-transparent w-0'}`}
                  />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
