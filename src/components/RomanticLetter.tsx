import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BaroqueCorner } from './GothicSigilDecor';
import { MailOpen, Feather, Sparkles, Heart } from 'lucide-react';

interface RomanticLetterProps {
  letterTitle: string;
  letterContent: string;
  letterSignature: string;
  partnerName: string;
  yourName: string;
}

export const RomanticLetter: React.FC<RomanticLetterProps> = ({
  letterTitle,
  letterContent,
  letterSignature,
  partnerName,
  yourName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#C19A6B33] text-[10px] font-sans font-bold tracking-[0.3em] text-[#C19A6B] uppercase mb-2">
          <Feather className="w-3.5 h-3.5 text-[#C19A6B]" />
          <span>Epístola Eterna</span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light italic font-serif text-[#F5F5F5] tracking-wide mb-2">
          Carta de Amor & Mesiversario
        </h3>
        <p className="text-[#C19A6B] font-serif text-lg italic opacity-90">
          {isOpen
            ? 'Palabras escritas con la devoción más pura de nuestras almas.'
            : 'Toca el sello dorado para abrir el sobre confidencial.'}
        </p>
      </div>

      {!isOpen ? (
        /* CLOSED ENVELOPE WITH WARM GOLD WAX SEAL */
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpenEnvelope}
          className="relative w-full max-w-lg mx-auto aspect-[16/10] bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#0A0A0A] rounded-2xl border border-[#C19A6B33] shadow-[0_12px_40px_rgba(0,0,0,0.95)] p-6 flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
        >
          {/* Subtle Envelope flap diagonals */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 500 320" className="w-full h-full" fill="none">
              <path d="M0,0 L250,180 L500,0" stroke="#C19A6B" strokeWidth="1.5" />
              <path d="M0,320 L200,140 M500,320 L300,140" stroke="#C19A6B" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute top-2 left-2"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-50" rotation={0} /></div>
          <div className="absolute top-2 right-2"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-50" rotation={90} /></div>
          <div className="absolute bottom-2 right-2"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-50" rotation={180} /></div>
          <div className="absolute bottom-2 left-2"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-50" rotation={270} /></div>

          {/* Recipient note */}
          <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-bold text-[#C19A6B] mb-6 z-10">
            Para: {partnerName}
          </span>

          {/* WAX SEAL (Warm Gold Seal with Heart) */}
          <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-tr from-[#8C6D3F] via-[#D4AF37] to-[#C19A6B] border-2 border-[#F5E6D3] shadow-[0_0_25px_rgba(193,154,107,0.5)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-7 h-7 text-[#1A1A1A] fill-[#1A1A1A]" />
            <div className="absolute inset-0 rounded-full border border-black/20" />
          </div>

          <span className="text-xs font-serif text-[#E0E0E0] italic mt-6 z-10 flex items-center gap-1.5 group-hover:text-[#C19A6B] transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#C19A6B]" />
            Romper el sello de cera dorada
          </span>
        </motion.div>
      ) : (
        /* OPENED PARCHMENT LETTER */
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-2xl mx-auto bg-[#121212] border border-[#C19A6B33] rounded-2xl p-6 sm:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.95)] overflow-hidden"
        >
          {/* Ornate corner flourishes */}
          <div className="absolute top-2 left-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={0} /></div>
          <div className="absolute top-2 right-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={90} /></div>
          <div className="absolute bottom-2 right-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={180} /></div>
          <div className="absolute bottom-2 left-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={270} /></div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <div className="flex items-center gap-2 text-[#C19A6B] text-[10px] font-sans font-bold tracking-widest uppercase">
              <MailOpen className="w-4 h-4 text-[#C19A6B]" />
              <span>Epístola Eterna</span>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-[#E0E0E0]/60 hover:text-white px-2 py-1 cursor-pointer transition-colors"
              title="Cerrar sobre"
            >
              Cerrar
            </button>
          </div>

          {/* Letter Content */}
          <div className="space-y-6">
            <h4 className="text-2xl sm:text-3xl font-serif italic text-[#C19A6B] font-light">
              "{letterTitle}"
            </h4>

            <div className="text-[#E0E0E0] font-serif text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {letterContent}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col items-end text-right">
              <span className="font-serif italic text-[#C19A6B] text-sm sm:text-base">
                {letterSignature}
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#F5F5F5] tracking-wider mt-1 italic">
                {yourName}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

