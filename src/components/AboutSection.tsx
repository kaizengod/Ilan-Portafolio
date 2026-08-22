import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';
import { TechMastery } from './TechMastery';
import { 
  GraduationCap, 
  Languages, 
  MapPin, 
  Sparkles, 
  FileText, 
  BrainCircuit,
  Award,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  Target,
  Code2
} from 'lucide-react';

interface AboutSectionProps {
  onOpenCV: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return TrendingUp;
      case 'Target': return Target;
      case 'Code': return Code2;
      case 'Sparkles': return Sparkles;
      default: return Sparkles;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-zinc-800 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img src="./fondo sobre mi.jpg" alt="Fondo Sobre Mí" className="w-full h-full object-cover opacity-85 brightness-105 contrast-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-zinc-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
              <span>PERFIL PROFESIONAL & CREDENCIALES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
              SOBRE MÍ
            </h2>
          </div>
          <div>
            <button
              id="about-download-cv-btn"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F97316] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-white/5 hover:shadow-[#F97316]/20"
            >
              <FileText className="w-4 h-4" />
              <span>VER CURRÍCULUM (CV)</span>
            </button>
          </div>
        </div>

        {/* Narrative & Credentials Asymmetric Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story & Philosophy (Floating layout with yo.png cutout behind text) */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* Cutout PNG 'yo.png' Positioned Behind Text Towards the Left (Shifted Higher Up) */}
            <div className="absolute -left-10 sm:-left-24 -top-32 sm:-top-44 -bottom-10 w-72 sm:w-[28rem] pointer-events-none z-0 opacity-65 overflow-visible">
              <img src="./yo.png" alt="Ilan Irausquin" className="w-full h-full object-contain object-left-top filter brightness-110 contrast-105" />
            </div>

            <div className="relative z-10 space-y-6 pt-20 sm:pt-28">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#F97316] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 backdrop-blur-md">
                <Briefcase className="w-3.5 h-3.5" />
                <span>ILAN IRAUSQUIN — DESARROLLO EMPRESARIAL & TECH</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-md">
                Profesional en <span className="font-serif italic font-normal text-white">Desarrollo Empresarial</span> orientado a <span className="font-serif italic font-normal text-white">estrategia</span>, marketing digital, investigación y construcción de <span className="font-serif italic font-normal text-white">soluciones</span> digitales.
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light drop-shadow">
                {PERSONAL_INFO.philosophy}
              </p>
            </div>
          </div>

          {/* Education, Languages & Location Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] font-bold uppercase tracking-widest">
                  <GraduationCap className="w-4 h-4" />
                  <span>FORMACIÓN ACADÉMICA</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-2.5 py-0.5 rounded-full font-bold">
                  <Award className="w-3 h-3" />
                  <span>Promedio: 17 / 20</span>
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="font-display text-xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-xs font-mono text-zinc-300">
                  {PERSONAL_INFO.education.university}
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-800/80">
                  <span>Graduación: <strong className="text-zinc-200">{PERSONAL_INFO.education.year}</strong></span>
                  <span className="text-[#F97316]">Tesis de Grado Aplicada</span>
                </div>
              </div>
            </div>

            {/* Languages Card with Fluency Bars */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">
                <Languages className="w-4 h-4 text-[#F97316]" />
                <span>IDIOMAS & COMUNICACIÓN</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-white font-bold">Español</span>
                    <span className="text-[#F97316] font-bold">Nativo (100%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#F97316] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-white font-bold">Inglés</span>
                    <span className="text-indigo-400 font-bold">B2 / Intermedio-Avanzado (80%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>UBICACIÓN & DISPONIBILIDAD</span>
              </div>
              <div className="space-y-1 text-xs font-mono">
                <div className="text-zinc-300">
                  Residencia actual: <span className="text-white font-bold">{PERSONAL_INFO.location}</span>
                </div>
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.relocation}</span>
                </div>
                <p className="text-[11px] text-zinc-500 pt-0.5">
                  Disponibilidad inmediata para proyectos remotos o presenciales.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Grouped Skill Competencies (Original Matriz de Habilidades) */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] mb-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>COMPETENCIAS PRINCIPALES</span>
            </div>
            <h3 className="text-3xl font-display font-bold text-white tracking-tight">
              Matriz de Habilidades
            </h3>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-2xl mt-1 font-light">
              Pilares estratégicos y técnicos que estructuran mi metodología de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category) => {
              const Icon = getCategoryIcon(category.iconName);

              return (
                <div
                  key={category.title}
                  id={`skill-category-${category.title}`}
                  className="p-6 rounded-2xl bg-zinc-950/40 backdrop-blur-md border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-[#F97316]/60 hover:bg-zinc-900/40 transition-all duration-300 shadow-2xl"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#F97316]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white tracking-tight">
                        {category.title}
                      </h4>
                      <p className="text-[11px] font-mono text-zinc-500 mt-1 line-clamp-2">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-zinc-900">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-[#F97316] shrink-0"></span>
                        <span className="truncate">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Technologies & Software Tools (With Exact Official Logos and Bars) */}
        <div id="skills-matrix" className="pt-4 border-t border-zinc-900">
          <TechMastery />
        </div>

      </div>
    </section>
  );
};

