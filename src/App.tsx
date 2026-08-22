import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MiniAbout } from './components/MiniAbout';
import { SelectedWork } from './components/SelectedWork';
import { MethodologySection } from './components/MethodologySection';
import { CreativeLab } from './components/CreativeLab';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CVModal } from './components/CVModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'mini-about', 'work', 'methodology', 'creative', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            if (id === 'mini-about') {
              setActiveSection('hero');
            } else {
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleOpenCaseStudy = (caseStudyId: string) => {
    setSelectedCaseStudyId(caseStudyId);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudyId(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0F0F0] font-sans selection:bg-[#F97316] selection:text-black antialiased">
      {/* Sticky Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero */}
        <Hero
          onNavigate={handleNavigate}
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenCV={() => setIsCVModalOpen(true)}
        />

        {/* 2. Mini About */}
        <MiniAbout
          onNavigate={handleNavigate}
        />

        {/* 3. Selected Work (Carousel: Bodegón 2004, ABC Poker, Dashboard, Tesis) */}
        <SelectedWork
          onOpenCaseStudy={handleOpenCaseStudy}
          onNavigate={handleNavigate}
        />

        {/* 4. How I Think (Investigación → Estrategia → Construcción → Medición → Iteración) */}
        <MethodologySection
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* 5. Creative Work (Visual Pieces & Behance Artifacts) */}
        <CreativeLab />

        {/* 6. About (Full Profile, UNEFM Education, Languages, Skills & Tools) */}
        <AboutSection
          onOpenCV={() => setIsCVModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 7. Contact Section */}
        <ContactSection
          onOpenCV={() => setIsCVModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudyId={selectedCaseStudyId}
        onClose={handleCloseCaseStudy}
        onSelectCaseStudy={handleOpenCaseStudy}
      />

      {/* CV / Resume Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
