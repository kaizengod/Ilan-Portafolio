import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Compass, Cpu, BarChart3, FileText, Mail } from 'lucide-react';
import profilePhoto from '../assets/IMG_1642.JPG';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenCaseStudy: (caseStudyId: string) => void;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenCaseStudy, onOpenCV }) => {
  const [activeConceptIndex, setActiveConceptIndex] = useState(2);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const TOTAL_HERO_FRAMES = 121;
    const heroFrameImages: HTMLImageElement[] = [];
    let heroTargetFrame = 0;
    let heroCurrentFrame = 0;
    let heroAnimFrameId: number | null = null;

    const getHeroFrameSrc = (index: number) => {
      const num = String(index + 1).padStart(3, '0');
      return `./scroll animation/ezgif-frame-${num}.jpg`;
    };

    const drawHeroFrame = (img: HTMLImageElement) => {
      if (!ctx || !canvas || !img || !img.complete) return;

      const cW = canvas.width;
      const cH = canvas.height;
      const iW = img.naturalWidth || img.width;
      const iH = img.naturalHeight || img.height;
      if (!iW || !iH) return;

      const zoomFactor = 0.88;
      const scale = Math.max(cW / iW, cH / iH) * zoomFactor;
      const nw = iW * scale;
      const nh = iH * scale;
      const x = (cW - nw) / 2;
      const yOffset = cH * 0.06 + 30; // Shift down
      const y = (cH - nh) / 2 + yOffset;

      ctx.clearRect(0, 0, cW, cH);
      ctx.drawImage(img, x, y, nw, nh);
    };

    const resizeHeroCanvas = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const activeIdx = Math.round(heroCurrentFrame);
      if (heroFrameImages[activeIdx] && heroFrameImages[activeIdx].complete) {
        drawHeroFrame(heroFrameImages[activeIdx]);
      }
    };

    const renderHeroFrameLoop = () => {
      const heroEl = document.getElementById('hero');
      const miniAboutEl = document.getElementById('mini-about');
      if (!heroEl) return;

      const scrollY = window.scrollY;
      const animStart = 0;
      const animEnd = (miniAboutEl ? miniAboutEl.offsetTop + miniAboutEl.offsetHeight : heroEl.offsetHeight * 1.5);

      let progress = (scrollY - animStart) / (animEnd - animStart);
      progress = Math.max(0, Math.min(1, progress));

      heroTargetFrame = progress * (TOTAL_HERO_FRAMES - 1);

      heroCurrentFrame += (heroTargetFrame - heroCurrentFrame) * 0.22;
      const clampedIdx = Math.max(0, Math.min(Math.round(heroCurrentFrame), TOTAL_HERO_FRAMES - 1));

      if (heroFrameImages[clampedIdx] && heroFrameImages[clampedIdx].complete) {
        drawHeroFrame(heroFrameImages[clampedIdx]);
      }

      if (Math.abs(heroTargetFrame - heroCurrentFrame) > 0.01) {
        heroAnimFrameId = requestAnimationFrame(renderHeroFrameLoop);
      } else {
        heroAnimFrameId = null;
      }
    };

    const onHeroScroll = () => {
      if (!heroAnimFrameId) {
        heroAnimFrameId = requestAnimationFrame(renderHeroFrameLoop);
      }
    };

    resizeHeroCanvas();

    for (let i = 0; i < TOTAL_HERO_FRAMES; i++) {
      const img = new Image();
      img.src = getHeroFrameSrc(i);
      img.onload = () => {
        if (i === 0) drawHeroFrame(img);
      };
      heroFrameImages.push(img);
    }

    window.addEventListener('resize', resizeHeroCanvas, { passive: true });
    window.addEventListener('scroll', onHeroScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeHeroCanvas);
      window.removeEventListener('scroll', onHeroScroll);
      if (heroAnimFrameId) cancelAnimationFrame(heroAnimFrameId);
    };
  }, []);

  const concepts = [
    {
      phrase: 'PIENSO.',
      sub: 'Investigación y Estrategia',
      detail: 'Análisis de dinámicas competitivas, detección de demandas desatendidas y toma de decisiones comerciales fundamentadas.',
      icon: Compass,
    },
    {
      phrase: 'CONSTRUYO.',
      sub: 'Diseño y Tecnología',
      detail: 'Desarrollo de interfaces web responsivas, aplicaciones digitales y sistemas de contenido con flujos acelerados por IA.',
      icon: Cpu,
    },
    {
      phrase: 'MIDO.',
      sub: 'Resultados y Datos',
      detail: 'Monitoreo de métricas de interacción reales y comportamiento efectivo de usuarios.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-20 border-b border-zinc-800 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-90 brightness-105 contrast-105"
        />
        {/* Soft Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Vertical Stacked Badges on the Left */}
        <div className="flex flex-col items-start gap-2.5 mb-8 max-w-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-zinc-200 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>Lic. en Desarrollo Empresarial • UNEFM 2025</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-zinc-200 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Venezuela → Disponible para reubicación en Tijuana, México</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-zinc-200 shadow-md">
            <span>Español (Nativo) • Inglés (B2)</span>
          </div>
        </div>

        {/* Main Editorial Headline & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-[54px] sm:text-[88px] md:text-[104px] lg:text-[120px] leading-[0.88] tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <span className="block font-display font-black uppercase tracking-tighter text-white">
                ILAN
              </span>
              <span className="block font-serif font-normal italic tracking-tight text-zinc-100 -mt-1 sm:-mt-2 select-text">
                Irausquin
              </span>
            </h1>

            <p className="text-zinc-200 uppercase tracking-widest text-xs sm:text-sm font-semibold max-w-xl pt-2 font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              ESTRATEGIA DE NEGOCIOS <span className="text-[#F97316]">×</span> MARKETING DIGITAL <span className="text-[#F97316]">×</span> TECNOLOGÍA <span className="text-[#F97316]">×</span> CREATIVIDAD
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Floating Cursive Supporting Copy (No Card Background) */}
            <p className="font-serif italic text-zinc-100 font-light text-base sm:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              &ldquo;{PERSONAL_INFO.supportingCopy}&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onNavigate('work')}
                className="px-6 py-3 rounded-full bg-white hover:bg-[#F97316] text-black font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>EXPLORAR PROYECTOS</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-zinc-950/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md shadow-xl"
              >
                <Mail className="w-3.5 h-3.5 text-[#F97316]" />
                <span>CONTACTAR</span>
              </button>

              <button
                id="hero-cv-btn"
                onClick={onOpenCV}
                className="px-4 py-3 rounded-full bg-zinc-950/90 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 font-mono text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 backdrop-blur-md shadow-xl"
              >
                <FileText className="w-3.5 h-3.5 text-[#F97316]" />
                <span>CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* The Framework Cards (PIENSO. CONSTRUYO. MIDO.) - Fully Interactive */}
        <div className="pt-8 border-t border-zinc-800/80">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-300 font-mono drop-shadow">
              El Marco de Trabajo
            </div>
            <span className="text-[10px] font-mono text-zinc-400 drop-shadow">INTERACCIÓN CON PROPÓSITO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {concepts.map((concept, idx) => {
              const isSelected = activeConceptIndex === idx;
              return (
                <div
                  key={concept.phrase}
                  id={`hero-concept-${idx}`}
                  onClick={() => setActiveConceptIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer backdrop-blur-md ${
                    isSelected
                      ? 'bg-zinc-950/90 border-zinc-600 ring-1 ring-[#F97316]/50 shadow-2xl scale-[1.02]'
                      : 'bg-zinc-950/75 border-zinc-800/80 hover:border-zinc-700 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-2xl sm:text-3xl font-display font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-[#F97316]' : 'text-white'
                      }`}
                    >
                      {concept.phrase}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300 font-mono uppercase tracking-wider block mb-2 font-semibold">
                    {concept.sub}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {concept.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
