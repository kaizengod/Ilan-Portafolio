import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, ExternalLink, FileText, Check, Copy, MessageSquare, Sparkles, Send } from 'lucide-react';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('Oportunidad de Proyecto / Estrategia de Negocio');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.placeholders.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-800 bg-[#0A0A0A] bg-grid-editorial relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#F97316] uppercase tracking-[0.3em] bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INICIEMOS UNA CONVERSACIÓN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-tight">
            CONSTRUYAMOS ALGO.
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
            &ldquo;En busca de oportunidades donde converjan estrategia, marketing y tecnología.&rdquo;
          </p>

          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl mx-auto font-light">
            Abierto a oportunidades en marketing digital, desarrollo de negocios, estrategia y proyectos digitales. Residente en Venezuela, con disponibilidad de reubicación a Tijuana, México.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Correo Directo</span>
                <span className="text-[10px] font-mono text-[#F97316] uppercase tracking-wider font-bold">Canal Principal</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black border border-zinc-800 flex items-center justify-between font-mono text-xs text-zinc-200">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.placeholders.email}</span>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-1 shrink-0 ml-2 border border-zinc-800"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] font-mono text-zinc-500">
                Enlace directo para contacto de reclutadores, líderes de equipo o clientes.
              </p>
            </div>

            {/* Social & Portfolio Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.placeholders.linkedin}
                id="contact-linkedin-link"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-left transition-all hover:-translate-y-0.5 group"
              >
                <Linkedin className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">LINKEDIN</div>
                <div className="text-[10px] font-mono text-zinc-500 truncate">{PERSONAL_INFO.placeholders.linkedin}</div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.placeholders.github}
                id="contact-github-link"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-left transition-all hover:-translate-y-0.5 group"
              >
                <Github className="w-5 h-5 text-zinc-300 mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">GITHUB</div>
                <div className="text-[10px] font-mono text-zinc-500 truncate">{PERSONAL_INFO.placeholders.github}</div>
              </a>

              {/* Behance */}
              <a
                href={PERSONAL_INFO.placeholders.behance}
                id="contact-behance-link"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-left transition-all hover:-translate-y-0.5 group"
              >
                <ExternalLink className="w-5 h-5 text-[#F97316] mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">BEHANCE</div>
                <div className="text-[10px] font-mono text-zinc-500 truncate">{PERSONAL_INFO.placeholders.behance}</div>
              </a>

            </div>

            {/* Resume Button */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-display font-bold text-white block tracking-tight">Curriculum Vitae</span>
                <span className="text-xs font-mono text-zinc-400 font-light">Historial profesional y credenciales</span>
              </div>
              <button
                id="contact-cv-trigger-btn"
                onClick={onOpenCV}
                className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-[#F97316] font-bold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <FileText className="w-4 h-4" />
                <span>VER CV</span>
              </button>
            </div>

          </div>

          {/* Interactive Message Dispatcher Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#F97316]" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Consultas Directas y Breve de Proyecto
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Formulario</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-500 text-[10px] block uppercase tracking-wider">Tu Nombre / Organización</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza / Empresa XYZ"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#F97316]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-500 text-[10px] block uppercase tracking-wider">Tu Correo de Contacto</label>
                  <input
                    type="email"
                    required
                    placeholder="correo@empresa.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#F97316]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-500 text-[10px] block uppercase tracking-wider">Enfoque de la Oportunidad</label>
                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-zinc-200 focus:outline-none focus:border-[#F97316]"
                >
                  <option value="Estrategia y Desarrollo de Negocios">Estrategia y Desarrollo de Negocios</option>
                  <option value="Marketing Digital y Campañas de Rendimiento">Marketing Digital y Campañas de Rendimiento</option>
                  <option value="Experiencia Web y Producto Digital">Experiencia Web y Producto Digital</option>
                  <option value="Vacante con Reubicación (Tijuana, México)">Vacante con Reubicación (Tijuana, México)</option>
                  <option value="Colaboración General">Colaboración General</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-500 text-[10px] block uppercase tracking-wider">Mensaje / Contexto del Proyecto</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe el reto, objetivos o cronograma..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#F97316] resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-form-submit-btn"
                className="w-full py-3 px-6 rounded-full bg-white hover:bg-[#F97316] text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                {formSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>MENSAJE REGISTRADO (LISTO PARA ENVIAR)</span>
                  </>
                ) : (
                  <>
                    <span>ENVIAR MENSAJE A ILAN</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
