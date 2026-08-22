import React from 'react';
import { Heart, Share2, MessageCircle, Layers } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      value: '2.527+',
      label: 'LIKES EN INSTAGRAM',
      sublabel: 'Interacción documentada (Bodegón Rodrigues)',
      icon: Heart,
    },
    {
      value: '686',
      label: 'COMPARTIDOS INTERNOS',
      sublabel: 'Recomendaciones directas por mensajería',
      icon: Share2,
    },
    {
      value: '~$0.10',
      label: 'COSTO / CONVERSACIÓN',
      sublabel: 'Eficiencia en Meta Ads (Sin intermediarios)',
      icon: MessageCircle,
    },
    {
      value: '01',
      label: 'PRODUCTO DIGITAL CONSTRUIDO',
      sublabel: 'Finance Dashboard en producción (Supabase & Antigravity)',
      icon: Layers,
    },
  ];

  return (
    <section id="metrics" className="py-12 border-b border-zinc-800 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section subtle caption */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-900">
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>MÉTRICAS Y RESULTADOS DOCUMENTADOS</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-600">DATOS VERIFICABLES DE PROYECTOS REALES</span>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                id={`metric-item-${idx}`}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                  <Icon className="w-4 h-4 text-[#F97316]" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider mt-2">
                    {m.label}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-1 font-light leading-relaxed">
                    {m.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
