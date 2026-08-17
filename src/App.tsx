import React, { useState, useEffect } from 'react';
import { initialCoupleConfig } from './data/defaultConfig';
import { CoupleConfig } from './types';
import { FloatingParticles } from './components/FloatingParticles';
import { NavbarAndAudioPlayer } from './components/NavbarAndAudioPlayer';
import { BaroqueCollage } from './components/BaroqueCollage';
import { CountdownTimer } from './components/CountdownTimer';
import { RomanticLetter } from './components/RomanticLetter';
import { LoveReasonsDeck } from './components/LoveReasonsDeck';
import { 
  CyberSigilCross, 
} from './components/GothicSigilDecor';
import { 
  Heart, 
  Camera, 
  Gift, 
  ArrowDown,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Config state
  const [config, setConfig] = useState<CoupleConfig>(initialCoupleConfig);
  const [activeSection, setActiveSection] = useState('hero');
  const [showCelebrationBanner, setShowCelebrationBanner] = useState(false);

  // Set document title on mount
  useEffect(() => {
    document.title = 'ANGEL TE AMO';
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCelebrationTrigger = () => {
    setShowCelebrationBanner(true);
    setTimeout(() => {
      setShowCelebrationBanner(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] relative selection:bg-[#C19A6B] selection:text-[#0A0A0A]">
      {/* Dynamic Stardust & Rose Petal Particle Atmosphere */}
      <FloatingParticles />

      {/* Top Navigation Bar */}
      <NavbarAndAudioPlayer
        partnerName={config.partnerName}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* MAIN CONTENT WRAPPER */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(193,154,107,0.08)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

          {/* Top Baroque Flourish Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <CyberSigilCross className="w-6 h-6 text-[#C19A6B] opacity-70" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-[#C19A6B] uppercase border-y border-[#C19A6B33] py-1 px-4">
              Nuestra Historia Eterna
            </span>
            <CyberSigilCross className="w-6 h-6 text-[#C19A6B] opacity-70" />
          </motion.div>

          {/* Main Romantic Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-light italic font-serif text-[#F5F5F5] tracking-tight max-w-4xl leading-[1.15] mb-6 drop-shadow-lg"
          >
            Feliz Mesiversario, <br className="hidden sm:inline" />
            <span className="text-[#C19A6B] font-normal not-italic font-serif">
              {config.partnerName}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#E0E0E0]/80 font-serif text-lg sm:text-xl md:text-2xl italic max-w-2xl leading-relaxed mb-10"
          >
            "{config.subheading}"
          </motion.p>

          {/* Quick Action Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={() => scrollToSection('collage')}
              className="px-6 py-3 rounded-full bg-[#C19A6B] hover:bg-[#D4AF37] text-[#0A0A0A] font-sans font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(193,154,107,0.3)] hover:scale-105 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>Nuestras Fotos</span>
            </button>

            <button
              onClick={() => scrollToSection('letter')}
              className="px-6 py-3 rounded-full bg-[#121212] hover:bg-[#1A1A1A] border border-[#C19A6B44] hover:border-[#C19A6B] text-[#E0E0E0] font-sans text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#C19A6B]" />
              <span>Carta de Amor</span>
            </button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#C19A6B]/50 hover:text-[#C19A6B] transition-colors cursor-pointer"
            onClick={() => scrollToSection('collage')}
          >
            <span className="text-[9px] font-sans uppercase tracking-[0.25em]">Deslizar</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#C19A6B]" />
          </motion.div>
        </section>

        {/* SECTION 1: BAROQUE ORNATE SILVER PHOTO FRAMES COLLAGE */}
        <section id="collage" className="py-12 relative border-t border-white/5 bg-[#0D0D0D]">
          <BaroqueCollage
            photos={config.photos}
            partnerName={config.partnerName}
          />
        </section>

        {/* SECTION 2: COUNTDOWN & TIME TOGETHER */}
        <section id="countdown" className="py-12 relative border-t border-white/5 bg-[#080808]">
          <CountdownTimer
            anniversaryDate={config.anniversaryDate}
            partnerName={config.partnerName}
            romanticTitle={config.romanticTitle}
            onTriggerCelebration={handleCelebrationTrigger}
          />
        </section>

        {/* SECTION 3: WAX-SEALED ROMANTIC MESIVERSARIO LETTER */}
        <section id="letter" className="py-12 relative border-t border-white/5 bg-[#0D0D0D]">
          <RomanticLetter
            letterTitle={config.letterTitle}
            letterContent={config.letterContent}
            letterSignature={config.letterSignature}
            partnerName={config.partnerName}
            yourName={config.yourName}
          />
        </section>

        {/* SECTION 4: "RAZONES POR LAS QUE TE AMO" TAROT & CYBER SIGIL CARDS */}
        <section id="reasons" className="py-12 relative border-t border-white/5 bg-[#0A0A0A]">
          <LoveReasonsDeck
            reasons={config.reasons}
            partnerName={config.partnerName}
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#070707] py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <CyberSigilCross className="w-5 h-5 text-[#C19A6B] opacity-60" />
            <Heart className="w-4 h-4 text-[#C19A6B] fill-[#C19A6B]/20" />
            <CyberSigilCross className="w-5 h-5 text-[#C19A6B] opacity-60" />
          </div>

          <p className="text-[#C19A6B] font-serif text-lg italic opacity-90">
            "En esta vida y en todas las que sigan, siempre te elegiré a ti."
          </p>

          <p className="text-xs text-[#E0E0E0]/60 font-sans tracking-widest uppercase">
            Celebrando nuestro amor desde el 20 de Septiembre de 2025 • Para {config.partnerName} de {config.yourName}
          </p>

          <div className="pt-4 border-t border-white/5 w-full flex flex-col items-center gap-1.5 text-center">
            <p className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-[#C19A6B]/80">
              CREADO POR LEVI IDEADO POR KONAN
            </p>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#E0E0E0]/40 font-medium">
              PD: ANGEL HOMOSEXUAL
            </p>
          </div>
        </div>
      </footer>

      {/* CELEBRATION FLOATING BANNER */}
      <AnimatePresence>
        {showCelebrationBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 inset-x-4 max-w-md mx-auto z-50 p-4 rounded-xl bg-[#121212] border border-[#C19A6B44] shadow-[0_10px_35px_rgba(0,0,0,0.95)] text-center flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C19A6B] flex items-center justify-center text-[#0A0A0A] font-bold">
                <Gift className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-sans font-bold text-[#F5F5F5] uppercase tracking-wider">
                  ¡Feliz Mesiversario {config.partnerName}!
                </h5>
                <p className="text-[11px] text-[#C19A6B] font-serif italic">
                  Celebrando cada mes de amor eterno desde el 20 de Septiembre de 2025.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCelebrationBanner(false)}
              className="text-[#E0E0E0]/60 hover:text-[#F5F5F5] text-xs px-2 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
