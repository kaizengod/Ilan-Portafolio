import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { METHODOLOGY_STEPS } from '../data/portfolioData';
import { 
  Compass, 
  Target, 
  Hammer, 
  BarChart3, 
  RefreshCw, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface MethodologySectionProps {
  onOpenCaseStudy: (caseStudyId: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenCaseStudy }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2); // Start on Construcción or 0

  const stepIcons = [Compass, Target, Hammer, BarChart3, RefreshCw];

  const currentStep = METHODOLOGY_STEPS[activeStepIndex];
  const CurrentIcon = stepIcons[activeStepIndex];

  // Semicircle geometry calculations:
  // Semicircle angles from 180° (left) to 0° (right) across 5 steps
  // Angles: 0: 180°, 1: 135°, 2: 90°, 3: 45°, 4: 0°
  const cx = 200;
  const cy = 200;
  const radius = 150;

  const getCoordinates = (index: number) => {
    // 5 steps: step 0 -> 180deg (Math.PI), step 4 -> 0deg (0)
    const angleDeg = 180 - (index * (180 / 4));
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = cx + radius * Math.cos(angleRad);
    const y = cy - radius * Math.sin(angleRad);
    return { x, y, angleDeg };
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % METHODOLOGY_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + METHODOLOGY_STEPS.length) % METHODOLOGY_STEPS.length);
  };

  return (
    <section id="methodology" className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-zinc-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>METODOLOGÍA & PENSAMIENTO ESTRATÉGICO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
              CÓMO PIENSO
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              Flujo Iterativo de 5 Etapas
            </span>
            <span className="text-xs sm:text-sm font-mono text-zinc-300 font-semibold tracking-wider">
              INVESTIGACIÓN → ESTRATEGIA → CONSTRUCCIÓN → MEDICIÓN → ITERACIÓN
            </span>
          </div>
        </div>

        {/* Dynamic Semicircle Interactive Dial & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Semicircle Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 relative">
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                DIAL DE EJECUCIÓN
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 flex items-center justify-center transition-colors"
                  aria-label="Etapa anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 flex items-center justify-center transition-colors"
                  aria-label="Etapa siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* SVG Semicircle Arc Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[400/260] my-2 select-none">
              <svg 
                viewBox="0 0 400 240" 
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Glowing filter */}
                  <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#27272a" />
                    <stop offset="50%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#27272a" />
                  </linearGradient>
                </defs>

                {/* Background Outer Semicircle Track */}
                <path
                  d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
                  fill="none"
                  stroke="#1f1f23"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Decorative Inner concentric dashed guide */}
                <path
                  d={`M ${cx - (radius - 35)} ${cy} A ${radius - 35} ${radius - 35} 0 0 1 ${cx + (radius - 35)} ${cy}`}
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Active Arc Progress */}
                {(() => {
                  const activeCoord = getCoordinates(activeStepIndex);
                  // Calculate angle for SVG path
                  const largeArcFlag = 0;
                  return (
                    <path
                      d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${activeCoord.x} ${activeCoord.y}`}
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="6"
                      strokeLinecap="round"
                      filter="url(#orange-glow)"
                      className="transition-all duration-500 ease-out"
                    />
                  );
                })()}

                {/* Radial dashed line connecting center to active node */}
                {(() => {
                  const activeCoord = getCoordinates(activeStepIndex);
                  return (
                    <line
                      x1={cx}
                      y1={cy}
                      x2={activeCoord.x}
                      y2={activeCoord.y}
                      stroke="#F97316"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      opacity="0.6"
                      className="transition-all duration-500 ease-out"
                    />
                  );
                })()}

                {/* Center Hub Indicator */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="24"
                  fill="#09090b"
                  stroke="#27272a"
                  strokeWidth="2"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="8"
                  fill="#F97316"
                  filter="url(#orange-glow)"
                />

                {/* Nodes across the semicircle */}
                {METHODOLOGY_STEPS.map((step, idx) => {
                  const { x, y } = getCoordinates(idx);
                  const isSelected = activeStepIndex === idx;

                  return (
                    <g 
                      key={step.number} 
                      onClick={() => setActiveStepIndex(idx)}
                      className="cursor-pointer group"
                    >
                      {/* Interactive hit area */}
                      <circle
                        cx={x}
                        cy={y}
                        r="26"
                        fill="transparent"
                      />

                      {/* Outer pulse when active */}
                      {isSelected && (
                        <circle
                          cx={x}
                          cy={y}
                          r="18"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="2"
                          opacity="0.4"
                          className="animate-ping"
                        />
                      )}

                      {/* Node circle background */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 14 : 10}
                        fill={isSelected ? '#F97316' : '#18181b'}
                        stroke={isSelected ? '#ffffff' : '#3f3f46'}
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        className="transition-all duration-300 group-hover:stroke-[#F97316]"
                      />

                      {/* Step Number in node */}
                      <text
                        x={x}
                        y={y + 3.5}
                        textAnchor="middle"
                        fill={isSelected ? '#000000' : '#a1a1aa'}
                        fontSize={isSelected ? '10' : '8'}
                        fontFamily="monospace"
                        fontWeight="bold"
                        className="pointer-events-none transition-all duration-300"
                      >
                        0{step.number}
                      </text>

                      {/* Node Label around the arc */}
                      <text
                        x={x}
                        y={y > 100 ? y + 24 : y - 18}
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : '#71717a'}
                        fontSize="9"
                        fontFamily="monospace"
                        letterSpacing="0.08em"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="pointer-events-none uppercase transition-colors duration-200"
                      >
                        {step.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Step selector pills for quick mobile / desktop access */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4 w-full pt-4 border-t border-zinc-900">
              {METHODOLOGY_STEPS.map((step, idx) => {
                const isSelected = activeStepIndex === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-[#F97316] text-black font-bold shadow-md'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    0{step.number}. {step.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Stage Content Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316]">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#F97316] uppercase tracking-[0.25em] font-bold">
                        FASE 0{currentStep.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                        {currentStep.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                    {currentStep.tagline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {currentStep.description}
                </p>

                {/* Key Deliverables / Outputs */}
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2.5">
                    Entregables y Activos Producidos:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentStep.outputs.map((output, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800/90 text-xs font-mono text-zinc-300"
                      >
                        <Check className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </div>



              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
