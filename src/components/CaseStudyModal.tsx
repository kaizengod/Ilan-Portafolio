import React, { useEffect } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Lightbulb, 
  Github, 
  Globe,
  Download,
  FileText
} from 'lucide-react';
import { downloadThesisPDF } from '../utils/thesisPdf';

interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
  onSelectCaseStudy: (id: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudyId,
  onClose,
  onSelectCaseStudy,
}) => {
  const caseStudy = CASE_STUDIES.find((cs) => cs.id === caseStudyId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudyId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudyId, onClose]);

  if (!caseStudy) return null;

  const currentIndex = CASE_STUDIES.findIndex((cs) => cs.id === caseStudy.id);
  const prevProject = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  const nextProject = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-0 sm:p-4 md:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-5xl bg-[#0A0A0A] border-0 sm:border border-zinc-800 sm:rounded-2xl min-h-screen sm:min-h-0 shadow-2xl overflow-hidden my-auto"
      >
        
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <button
              id="case-study-close-back-btn"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>VOLVER AL PORTFOLIO</span>
            </button>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-600">/</span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-[#F97316] uppercase tracking-widest font-bold">
              REGISTRO DE PROYECTO 0{currentIndex + 1}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="case-study-prev-btn"
              onClick={() => onSelectCaseStudy(prevProject.id)}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title={`Anterior: ${prevProject.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              id="case-study-next-btn"
              onClick={() => onSelectCaseStudy(nextProject.id)}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title={`Siguiente: ${nextProject.title}`}
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              id="case-study-close-icon-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors ml-1"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-12">
          
          {/* Header Metadata Section */}
          <div className="space-y-6 pb-8 border-b border-zinc-800">
            
            {/* Categories & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {caseStudy.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-mono font-bold tracking-widest text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/30 px-3 py-1 rounded-full uppercase"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {caseStudy.hasRealMetrics ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-[10px] font-mono text-emerald-300 uppercase tracking-wider font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resultados Documentados</span>
                </div>
              ) : caseStudy.id === 'abc-poker' ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/60 text-[10px] font-mono text-amber-300 uppercase tracking-wider font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Fase de Adquisición Planificada</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/60 text-[10px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>En Producción / Uso Real</span>
                </div>
              )}
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tighter uppercase">
                {caseStudy.title}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-[#F97316]">
                {caseStudy.subtitle}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed font-light">
                {caseStudy.tagline}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Rol</span>
                <span className="text-zinc-200 font-medium">{caseStudy.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Cronología</span>
                <span className="text-zinc-200 font-medium">{caseStudy.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Metodología</span>
                <span className="text-zinc-200 font-medium">Investigación → Estrategia → Construcción</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Entregables</span>
                <span className="text-zinc-200 font-medium">{caseStudy.tags.slice(0, 2).join(', ')}</span>
              </div>
            </div>

            {/* External Links & Downloads */}
            {caseStudy.externalLinks && (
              <div className="flex flex-wrap gap-3 pt-2">
                {caseStudy.externalLinks.thesisPdfDownload && (
                  <button
                    id="case-study-download-thesis-pdf-btn"
                    onClick={downloadThesisPDF}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>DESCARGAR TESIS EN PDF</span>
                  </button>
                )}
                {caseStudy.externalLinks.website && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                    <Globe className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Sitio Web: {caseStudy.externalLinks.website}</span>
                  </div>
                )}
                {caseStudy.externalLinks.behance && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                    <ExternalLink className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Behance: {caseStudy.externalLinks.behance}</span>
                  </div>
                )}
                {caseStudy.externalLinks.github && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                    <Github className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>GitHub: {caseStudy.externalLinks.github}</span>
                  </div>
                )}
                {caseStudy.externalLinks.demo && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Demo en Vivo: {caseStudy.externalLinks.demo}</span>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Section 01: THE CHALLENGE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded">01</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                EL DESAFÍO
              </h2>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                {caseStudy.challenge}
              </p>
            </div>
          </section>

          {/* Section 02: THE APPROACH */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded">02</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                ENFOQUE E INVESTIGACIÓN
              </h2>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                {caseStudy.approach}
              </p>

              {/* Special diagram for Thesis or Bodegon */}
              {caseStudy.id === 'bodegon-rodrigues-2004' && (
                <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2">
                  <div className="text-[#F97316] font-bold uppercase text-[10px] tracking-wider">EL PUENTE DE INVESTIGACIÓN → NEGOCIO:</div>
                  <div className="flex flex-wrap items-center gap-2 text-zinc-300 text-xs">
                    <span className="bg-zinc-900 px-2.5 py-1 rounded">ENCUESTA DE CAMPO</span>
                    <span>→</span>
                    <span className="bg-zinc-900 px-2.5 py-1 rounded">INSIGHT DEL CONSUMIDOR</span>
                    <span>→</span>
                    <span className="bg-[#F97316]/20 text-[#F97316] px-2.5 py-1 rounded border border-[#F97316]/30 font-bold">EXPANSIÓN DEL PATIO</span>
                    <span>→</span>
                    <span className="bg-zinc-900 px-2.5 py-1 rounded">CAMPAÑA CREATIVA</span>
                    <span>→</span>
                    <span className="bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded border border-emerald-700 font-bold">RESULTADOS DOCUMENTADOS</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Section 03: THE BUILD */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded">03</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                CONSTRUCCIÓN Y EJECUCIÓN
              </h2>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                {caseStudy.build}
              </p>

              {/* Tech stack badge for personal finance dashboard */}
              {caseStudy.id === 'personal-finance-dashboard' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-black border border-zinc-800">
                    <div className="text-xs font-mono text-cyan-400 uppercase font-bold">ANTIGRAVITY</div>
                    <div className="text-xs text-zinc-400 mt-1 font-light">Ingeniería asistida por IA y prototipado ágil de interfaces.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black border border-zinc-800">
                    <div className="text-xs font-mono text-emerald-400 uppercase font-bold">SUPABASE</div>
                    <div className="text-xs text-zinc-400 mt-1 font-light">Base de datos PostgreSQL y autenticación segura de usuarios.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black border border-zinc-800">
                    <div className="text-xs font-mono text-[#F97316] uppercase font-bold">GITHUB</div>
                    <div className="text-xs text-zinc-400 mt-1 font-light">Control de versiones y pipelines de despliegue continuo.</div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Section 04: THE CREATIVE (if present) */}
          {caseStudy.creative && (
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded">04</span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                  PRODUCCIÓN CREATIVA Y CONTENIDO
                </h2>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {caseStudy.creative}
                </p>
              </div>
            </section>
          )}

          {/* Section 05: RESULTS OR NEXT PHASE */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded">05</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                {caseStudy.resultsOrNextPhaseTitle}
              </h2>
            </div>

            {/* REAL METRICS SHOWCASE FOR BODEGON 2004 */}
            {caseStudy.hasRealMetrics && caseStudy.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 relative overflow-hidden"
                  >
                    <div className="text-3xl sm:text-4xl font-display font-black text-[#F97316]">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mt-1">
                      {m.label}
                    </div>
                    {m.sublabel && (
                      <div className="text-[10px] font-mono text-zinc-400 mt-1">
                        {m.sublabel}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* PLANNED ACQUISITION FUNNEL FOR ABC POKER */}
            {caseStudy.id === 'abc-poker' && (
              <div className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-[#F97316]/30 space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#F97316] uppercase tracking-widest font-bold block">
                      MOTOR DE PERFORMANCE PLANIFICADO (PRÓXIMA FASE)
                    </span>
                    <span className="text-xs text-zinc-400 font-light">
                      Embudo multicanal estructurado para lanzamiento. Sin métricas ficticias.
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] font-mono text-[10px] border border-[#F97316]/30 uppercase font-bold">
                    Planificado
                  </span>
                </div>

                {/* Funnel Visual Pipeline */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center font-mono text-xs">
                  <div className="p-3 rounded-lg bg-black border border-zinc-800">
                    <div className="text-zinc-500 text-[10px]">PASO 01</div>
                    <div className="text-white font-bold my-1">ANUNCIO SEGMENTADO</div>
                    <div className="text-[10px] text-[#F97316]">Meta Ads / Reels</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black border border-zinc-800">
                    <div className="text-zinc-500 text-[10px]">PASO 02</div>
                    <div className="text-white font-bold my-1">LANDING WEB</div>
                    <div className="text-[10px] text-zinc-400">Propuesta de Valor</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black border border-zinc-800">
                    <div className="text-zinc-500 text-[10px]">PASO 03</div>
                    <div className="text-white font-bold my-1">CTA ENTRAR AL CLUB</div>
                    <div className="text-[10px] text-emerald-400">Clic de Alta Intención</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black border border-zinc-800">
                    <div className="text-zinc-500 text-[10px]">PASO 04</div>
                    <div className="text-white font-bold my-1">WHATSAPP</div>
                    <div className="text-[10px] text-emerald-400">Inicio de Chat Directo</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black border border-zinc-800">
                    <div className="text-zinc-500 text-[10px]">PASO 05</div>
                    <div className="text-white font-bold my-1">PROSPECTO CALIFICADO</div>
                    <div className="text-[10px] text-[#F97316]">Verificación de ID</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F97316]/10 border border-[#F97316]/40">
                    <div className="text-[#F97316] text-[10px] font-bold">CONVERSIÓN</div>
                    <div className="text-white font-bold my-1">MIEMBRO ACTIVO</div>
                    <div className="text-[10px] text-[#F97316]">Onboarding</div>
                  </div>
                </div>

                {/* Planned Measurement Infrastructure */}
                <div className="p-4 rounded-lg bg-black border border-zinc-800 space-y-2 text-xs font-mono">
                  <div className="text-white font-semibold flex items-center gap-2 text-[10px] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ESPECIFICACIÓN DE MEDICIÓN Y ATRIBUCIÓN:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-zinc-300 pt-1 text-xs">
                    <div>• <strong>Meta Pixel:</strong> Eventos personalizados para 'ViewContent', 'InitiateClubJoin', 'WhatsAppClick'.</div>
                    <div>• <strong>GA4 y UTMs:</strong> Taxonomía rigurosa para aislar el CAC por variante de anuncio creativo.</div>
                    <div>• <strong>Dashboard:</strong> Seguimiento en tiempo real de CAC, tasa de calificación y LTV del jugador.</div>
                  </div>
                </div>
              </div>
            )}

            {/* List of Outcomes / Next Phase Points */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
              {caseStudy.resultsOrNextPhaseContent.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 06: LEARNINGS & STRATEGIC TAKEAWAYS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded">06</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                APRENDIZAJES Y CONCLUSIONES ESTRATÉGICAS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.learnings.map((learning, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2"
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#F97316] font-bold uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>APRENDIZAJE 0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Navigation between Case Studies */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="bottom-prev-case-study-btn"
              onClick={() => onSelectCaseStudy(prevProject.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-left font-mono text-xs text-zinc-300 transition-colors flex items-center gap-3"
            >
              <ArrowLeft className="w-4 h-4 text-[#F97316]" />
              <div>
                <span className="text-[9px] text-zinc-500 block uppercase tracking-wider">Proyecto Anterior</span>
                <span className="font-bold text-white">{prevProject.title}</span>
              </div>
            </button>

            <button
              id="bottom-close-modal-btn"
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#F97316] text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              VOLVER A LA VISTA GENERAL
            </button>

            <button
              id="bottom-next-case-study-btn"
              onClick={() => onSelectCaseStudy(nextProject.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-right font-mono text-xs text-zinc-300 transition-colors flex items-center justify-end gap-3"
            >
              <div>
                <span className="text-[9px] text-zinc-500 block uppercase tracking-wider">Siguiente Proyecto</span>
                <span className="font-bold text-white">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#F97316]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
