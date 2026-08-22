import React, { useState } from 'react';
import { CREATIVE_GALLERY } from '../data/portfolioData';
import { CreativeFilter, CreativeItem } from '../types';
import { ExternalLink, Eye, X, Sparkles, Layers, Image as ImageIcon, Video, Box, Palette } from 'lucide-react';

export const CreativeLab: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CreativeFilter>('ALL');
  const [selectedPiece, setSelectedPiece] = useState<CreativeItem | null>(null);

  const filters: { id: CreativeFilter; label: string }[] = [
    { id: 'ALL', label: 'TODOS' },
    { id: 'POKER', label: 'POKER' },
    { id: 'CAMPAIGNS', label: 'CAMPAÑAS' },
    { id: 'SOCIAL', label: 'REDES' },
    { id: 'POSTERS', label: 'PÓSTERS' },
    { id: 'EXPERIMENTAL', label: '3D / EXPERIMENTAL' },
  ];

  const filteredPieces = activeFilter === 'ALL'
    ? CREATIVE_GALLERY
    : CREATIVE_GALLERY.filter((item) => item.category === activeFilter);

  const getMockupIcon = (type: string) => {
    switch (type) {
      case 'flyer': return Layers;
      case 'campaign': return Video;
      case 'social': return ImageIcon;
      case 'poster': return Palette;
      case '3d': return Box;
      default: return Sparkles;
    }
  };

  return (
    <section id="creative" className="py-24 border-b border-zinc-800 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img src="./background creative.jpg?v=2" alt="Background Creative" className="w-full h-full object-cover opacity-85 brightness-105 contrast-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>IDENTIDAD VISUAL Y PIEZAS DE CONTENIDO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-white uppercase">
              CREATIVE WORK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm font-mono text-zinc-400 max-w-md text-left md:text-right font-light">
            Composiciones visuales, identidad para torneos de poker, contenido para redes sociales y diseño editorial.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filterItem) => {
            const isSelected = activeFilter === filterItem.id;
            return (
              <button
                key={filterItem.id}
                id={`creative-filter-${filterItem.id}`}
                onClick={() => setActiveFilter(filterItem.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800'
                }`}
              >
                {filterItem.label}
              </button>
            );
          })}
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPieces.map((piece) => {
            const Icon = getMockupIcon(piece.mockupType);

            return (
              <div
                key={piece.id}
                id={`creative-card-${piece.id}`}
                onClick={() => setSelectedPiece(piece)}
                className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Visual Canvas Box */}
                <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${piece.gradientOrTheme} p-6 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle grid on visual canvas */}
                  <div className="absolute inset-0 bg-grid-editorial opacity-20 pointer-events-none" />

                  {/* Top Bar on Visual Box */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#F97316] bg-black/80 px-2.5 py-0.5 rounded-full border border-zinc-800 uppercase">
                      {piece.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 bg-black/80 px-2 py-0.5 rounded-full border border-zinc-800">
                      {piece.year}
                    </span>
                  </div>

                  {/* Center Mockup Icon / Symbol */}
                  <div className="relative z-10 my-auto text-center space-y-2">
                    <div className="inline-flex p-4 rounded-2xl bg-black/70 border border-zinc-800 text-[#F97316] group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-[11px] font-mono text-zinc-300 uppercase tracking-widest font-semibold">
                      PIEZA VISUAL
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-widest">
                    <Eye className="w-4 h-4 text-[#F97316]" />
                    <span>VER PIEZA</span>
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="p-5 space-y-3 bg-zinc-950 border-t border-zinc-800">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F97316] transition-colors">
                    {piece.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                    {piece.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1">
                      {piece.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] font-mono text-[#F97316] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Detalle →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Piece Detail Modal */}
        {selectedPiece && (
          <div
            id="creative-piece-modal"
            className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded uppercase">
                    {selectedPiece.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">• {selectedPiece.year}</span>
                </div>

                <button
                  id="close-creative-modal-btn"
                  onClick={() => setSelectedPiece(null)}
                  className="p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Graphic Display preview box */}
              <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${selectedPiece.gradientOrTheme} border border-zinc-800 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                <div className="p-4 rounded-2xl bg-black/70 border border-zinc-800 text-[#F97316] mb-3">
                  {React.createElement(getMockupIcon(selectedPiece.mockupType), { className: 'w-10 h-10' })}
                </div>
                <div className="text-lg font-display font-bold text-white uppercase">
                  {selectedPiece.title}
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-1">
                  Publicado en portafolio de Behance
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedPiece.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {selectedPiece.description}
                </p>

                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                    Herramientas y Software:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedPiece.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-xs font-mono text-zinc-500">
                  ID: {selectedPiece.id}
                </span>

                <button
                  id="creative-modal-close-action"
                  onClick={() => setSelectedPiece(null)}
                  className="px-5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
