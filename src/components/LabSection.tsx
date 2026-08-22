import React from 'react';
import { REAL_LAB_PROJECTS } from '../data/portfolioData';
import { Layers, Terminal, Sparkles, Box, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface LabSectionProps {
  onOpenCaseStudy: (caseStudyId: string) => void;
}

export const LabSection: React.FC<LabSectionProps> = ({ onOpenCaseStudy }) => {
  const getExperimentIcon = (index: number) => {
    switch (index) {
      case 0: return Layers;
      case 1: return Terminal;
      case 2: return Sparkles;
      case 3: return Box;
      default: return Layers;
    }
  };

  return (
    <section id="lab" className="py-24 border-b border-zinc-800 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>PROTOTIPOS Y HERRAMIENTAS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
              LAB
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              EXPERIMENTOS DIGITALES
            </span>
            <span className="text-xs sm:text-sm font-mono text-zinc-300 font-light">
              Prototipos, herramientas construidas, pruebas con IA y diseño de producto.
            </span>
          </div>
        </div>

        {/* Real Digital Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REAL_LAB_PROJECTS.map((exp, idx) => {
            const Icon = getExperimentIcon(idx);
            const isCaseStudy = exp.id === 'personal-finance-app';

            return (
              <div
                key={exp.id}
                id={`lab-experiment-${exp.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                {/* Top Bar */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#F97316]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                        0{idx + 1} / {exp.category}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{exp.status}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#F97316] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>

                  {/* Highlight Callout */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-900 text-xs font-mono text-zinc-300">
                    <span className="text-[#F97316] font-bold">Enfoque: </span>
                    <span className="font-light">{exp.highlight}</span>
                  </div>
                </div>

                {/* Tech Badges & Action */}
                <div className="space-y-4 pt-4 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {isCaseStudy && (
                    <button
                      id="lab-view-finance-case-btn"
                      onClick={() => onOpenCaseStudy('personal-finance-dashboard')}
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#F97316] hover:text-white transition-colors uppercase tracking-wider font-semibold"
                    >
                      <span>Ver Caso de Estudio Detallado</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
