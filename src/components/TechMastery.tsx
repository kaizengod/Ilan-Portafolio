import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TOOLS_DATA } from '../data/portfolioData';
import { ProgramTool } from '../types';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  BarChart3, 
  Palette, 
  Video, 
  Box, 
  Globe, 
  Bot, 
  FileSpreadsheet 
} from 'lucide-react';

// Exact brand vector logos for each program/software
const ProgramLogo: React.FC<{ iconKey: string; color: string }> = ({ iconKey, color }) => {
  switch (iconKey) {
    case 'meta':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#0081FB]/15 border border-[#0081FB]/40 flex items-center justify-center text-[#0081FB]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M16.96 4.02c-1.89 0-3.32.99-4.96 3.03-1.64-2.04-3.07-3.03-4.96-3.03C3.12 4.02 0 7.37 0 12.01c0 4.64 3.12 7.99 7.04 7.99 2.14 0 3.65-1.12 4.96-2.73 1.31 1.61 2.82 2.73 4.96 2.73 3.92 0 7.04-3.35 7.04-7.99 0-4.64-3.12-7.99-7.04-7.99zm-9.92 13.98c-2.76 0-4.96-2.46-4.96-5.99s2.2-5.99 4.96-5.99c1.69 0 2.92.93 4.2 2.65-2.07 3.32-3.1 6.94-4.2 9.33zm9.92 0c-1.1-2.39-2.13-6.01-4.2-9.33 1.28-1.72 2.51-2.65 4.2-2.65 2.76 0 4.96 2.46 4.96 5.99s-2.2 5.99-4.96 5.99z"/>
          </svg>
        </div>
      );
    case 'metricool':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#FF6B6B]/15 border border-[#FF6B6B]/40 flex items-center justify-center text-[#FF6B6B]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <circle cx="12" cy="12" r="9" className="fill-none stroke-current stroke-2"/>
            <path d="M7 13l3-3 3 3 4-5" className="fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"/>
            <circle cx="17" cy="8" r="1.5" className="fill-current"/>
          </svg>
        </div>
      );
    case 'ga4':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#F9AB00]/15 border border-[#F9AB00]/40 flex items-center justify-center text-[#F9AB00]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V6h2v4zm4 8h-2v-4h2v4zm-8 0H7v-2h2v2z"/>
          </svg>
        </div>
      );
    case 'pixel':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center text-[#00C2FF]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <circle cx="17.5" cy="17.5" r="2.5" className="fill-current" />
          </svg>
        </div>
      );
    case 'figma':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#A259FF]/15 border border-[#A259FF]/40 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" fill="#A259FF"/>
            <path d="M4 16a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#0ACF83"/>
            <path d="M4 8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E"/>
            <path d="M12 4h4a4 4 0 1 1 0 8h-4V4z" fill="#FF7262"/>
            <path d="M4 16a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8a4 4 0 0 0-4 4z" fill="#1ABCFE"/>
          </svg>
        </div>
      );
    case 'photoshop':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#31A8FF]/60 flex items-center justify-center text-[#31A8FF] font-sans font-bold text-xs shadow-inner">
          Ps
        </div>
      );
    case 'affinity':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/15 border border-[#22D3EE]/40 flex items-center justify-center text-[#22D3EE]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2L2 19.5h5.5l2.2-4h4.6l2.2 4H22L12 2zm-1 8.5l1-1.8 1 1.8-1 1.8-1-1.8z"/>
          </svg>
        </div>
      );
    case 'davinci':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#EC4899]/15 border border-[#EC4899]/40 flex items-center justify-center text-[#EC4899]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <circle cx="12" cy="7" r="3.5" className="text-red-500 fill-current"/>
            <circle cx="7.5" cy="15" r="3.5" className="text-blue-500 fill-current"/>
            <circle cx="16.5" cy="15" r="3.5" className="text-amber-500 fill-current"/>
          </svg>
        </div>
      );
    case 'capcut':
      return (
        <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white font-bold text-xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M4 6l8 6-8 6V6zm16 0l-8 6 8 6V6z"/>
          </svg>
        </div>
      );
    case 'blender':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#EA7600]/15 border border-[#EA7600]/40 flex items-center justify-center text-[#EA7600]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2a4 4 0 0 0-4 4c0 1.1.4 2.1 1.1 2.8L3 12.5l1.4 1.4 6.1-3.7c.5.2 1 .3 1.5.3 2.2 0 4-1.8 4-4a4 4 0 0 0-4-4zm0 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5.5 10c-1.9 0-3.5 1.6-3.5 3.5S4.6 21.5 6.5 21.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm11 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/>
          </svg>
        </div>
      );
    case 'sora':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#10A37F]/15 border border-[#10A37F]/40 flex items-center justify-center text-[#10A37F]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
          </svg>
        </div>
      );
    case 'veo':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" fill="url(#veo-gradient)"/>
            <defs>
              <linearGradient id="veo-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6"/>
                <stop offset="1" stopColor="#EC4899"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case 'antigravity':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#F97316]/20 border border-[#F97316]/50 flex items-center justify-center text-[#F97316]">
          <Sparkles className="w-4 h-4" />
        </div>
      );
    case 'gemini':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>
      );
    case 'chatgpt':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#10A37F]/15 border border-[#10A37F]/40 flex items-center justify-center text-[#10A37F]">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </div>
      );
    case 'excel':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#107C41]/20 border border-[#107C41]/50 flex items-center justify-center text-[#107C41] font-sans font-bold text-xs">
          XLS
        </div>
      );
    case 'powerpoint':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#D24726]/20 border border-[#D24726]/50 flex items-center justify-center text-[#D24726] font-sans font-bold text-xs">
          PPT
        </div>
      );
    case 'word':
      return (
        <div className="w-8 h-8 rounded-lg bg-[#2B579A]/20 border border-[#2B579A]/50 flex items-center justify-center text-[#2B579A] font-sans font-bold text-xs">
          DOC
        </div>
      );
    default:
      return (
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold border"
          style={{ backgroundColor: `${color}15`, borderColor: `${color}40`, color: color }}
        >
          <Layers className="w-4 h-4" />
        </div>
      );
  }
};

export const TechMastery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  // Exact categories from the user's software/tools
  const categories = [
    { id: 'ALL', label: 'TODAS', icon: Sparkles },
    { id: 'marketing', label: 'MARKETING Y ANALÍTICA', icon: BarChart3 },
    { id: 'design', label: 'DISEÑO Y PROTOTIPADO', icon: Palette },
    { id: 'video', label: 'VIDEO Y GENERACIÓN IA', icon: Video },
    { id: '3d', label: 'ESPACIO 3D', icon: Box },
    { id: 'ai', label: 'IA Y ACELERACIÓN', icon: Bot },
    { id: 'productivity', label: 'PRODUCTIVIDAD Y ANÁLISIS', icon: FileSpreadsheet },
  ];

  const filteredTools = selectedFilter === 'ALL'
    ? PROGRAM_TOOLS_DATA
    : PROGRAM_TOOLS_DATA.filter(t => t.category === selectedFilter);

  return (
    <div className="space-y-12">
      {/* Section Sub-Header (Exact layout aesthetic from user image) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono uppercase tracking-[0.3em] text-[#F97316] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
          <span>STACK TÉCNICO Y SOFTWARE</span>
        </div>
        
        <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Herramientas y Tecnologías
        </h3>
        
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent mx-auto rounded-full mt-2" />

        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl mx-auto font-light">
          Software y herramientas especializadas aplicadas en proyectos de producción real, analítica y diseño.
        </p>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedFilter === cat.id;

          return (
            <button
              key={cat.id}
              id={`tool-filter-btn-${cat.id}`}
              onClick={() => setSelectedFilter(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                isSelected
                  ? 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-[#F97316]'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Tool Cards with Progress Bars (Exact layout & aesthetic from reference image) */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 pt-4"
      >
        <AnimatePresence>
          {filteredTools.map((tool, index) => (
            <motion.div
              layout
              key={tool.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              id={`program-tool-${tool.iconKey}`}
              className="group p-3.5 rounded-xl hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/80 transition-all duration-200"
            >
              {/* Top Row: Official Logo + Name + Percentage & Level */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3 min-w-0">
                  <ProgramLogo iconKey={tool.iconKey} color={tool.accentColor} />
                  <div className="truncate">
                    <div className="font-display text-sm font-bold text-zinc-100 group-hover:text-white truncate transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 truncate">
                      {tool.categoryLabel}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono text-xs font-bold text-zinc-200 group-hover:text-white">
                    {tool.percentage}%
                  </span>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase">
                    {tool.level}
                  </div>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="relative w-full h-2 rounded-full bg-zinc-900/90 border border-zinc-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.03 }}
                  className="h-full rounded-full relative"
                  style={{
                    backgroundColor: tool.accentColor,
                    boxShadow: `0 0 10px ${tool.accentColor}60`
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full" />
                </motion.div>
              </div>

              {/* Tool Description */}
              <div className="mt-1.5 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors truncate">
                {tool.description}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Summary Highlight Box */}
      <div className="mt-6 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Enfoque en Software y Herramientas Prácticas
            </div>
            <p className="text-xs font-mono text-zinc-400 font-light mt-0.5">
              Aplicadas en diseño de piezas, automatización, gestión de campañas e implementación de productos.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Capacidades verificadas en producción</span>
        </div>
      </div>
    </div>
  );
};
