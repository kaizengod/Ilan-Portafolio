import React, { useEffect } from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, CASE_STUDIES } from '../data/portfolioData';
import { X, Download, FileText, GraduationCap, CheckCircle2, Award } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center items-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cv-modal-content"
        className="relative w-full max-w-4xl bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
                CURRÍCULUM VITAE
              </h2>
              <span className="text-xs font-mono text-zinc-400">
                {PERSONAL_INFO.name} — Resumen Ejecutivo y Trayectoria
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="cv-modal-download-btn"
              onClick={() => alert(`Enlace de descarga de CV: ${PERSONAL_INFO.placeholders.cvPdf}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-black font-mono text-xs font-bold transition-colors uppercase tracking-wider"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DESCARGAR PDF</span>
            </button>
            <button
              id="cv-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Body Layout */}
        <div className="space-y-8 font-mono text-xs text-zinc-300">
          
          {/* Header Info */}
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <span className="text-[#F97316] font-semibold text-xs tracking-wider uppercase">{PERSONAL_INFO.title}</span>
            </div>
            
            <p className="text-sm font-sans text-zinc-300 leading-relaxed font-light">
              {PERSONAL_INFO.bio} {PERSONAL_INFO.philosophy}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-zinc-800 text-[10px]">
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Ubicación y Reubicación:</span>
                <span className="text-zinc-200">{PERSONAL_INFO.location} → {PERSONAL_INFO.relocation}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Idiomas:</span>
                <span className="text-zinc-200">Español (Nativo) | Inglés (B2)</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider">Correo y Enlaces:</span>
                <span className="text-zinc-200">{PERSONAL_INFO.placeholders.email}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#F97316] font-bold uppercase tracking-wider text-[10px]">
              <GraduationCap className="w-4 h-4" />
              <span>FORMACIÓN ACADÉMICA</span>
            </div>
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between">
                <span className="text-sm font-bold text-white font-display">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-[#F97316] text-[11px] font-bold">{PERSONAL_INFO.education.grade}</span>
              </div>
              <div className="text-zinc-400 text-xs font-light">
                {PERSONAL_INFO.education.university} — Graduado en {PERSONAL_INFO.education.year}
              </div>
              <p className="text-zinc-400 text-[11px] pt-1 font-light">
                Trabajo Especial de Grado: Aplicación de las 5 Fuerzas de Porter para la competitividad de pequeñas empresas (Aprobado con Mención de Excelencia).
              </p>
            </div>
          </div>

          {/* Key Strategic & Digital Initiatives */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#F97316] font-bold uppercase tracking-wider text-[10px]">
              <Award className="w-4 h-4" />
              <span>INICIATIVAS CLAVE Y CASOS DE ESTUDIO</span>
            </div>
            <div className="space-y-3">
              {CASE_STUDIES.map((cs) => (
                <div key={cs.id} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between font-display text-sm font-bold text-white">
                    <span>{cs.title}</span>
                    <span className="font-mono text-[10px] text-zinc-400">{cs.year}</span>
                  </div>
                  <div className="text-[#F97316] text-[10px] uppercase font-bold">{cs.role}</div>
                  <p className="text-zinc-300 text-xs leading-relaxed font-light">
                    {cs.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[10px]">
              <CheckCircle2 className="w-4 h-4" />
              <span>HABILIDADES Y TECNOLOGÍAS PRINCIPALES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                  <span className="font-bold text-white uppercase text-[10px] tracking-wider">{cat.title}</span>
                  <p className="text-zinc-400 text-[11px] font-light">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-500 text-[10px]">Documento PDF: {PERSONAL_INFO.placeholders.cvPdf}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold uppercase tracking-wider text-[10px]"
          >
            CERRAR
          </button>
        </div>

      </div>
    </div>
  );
};
