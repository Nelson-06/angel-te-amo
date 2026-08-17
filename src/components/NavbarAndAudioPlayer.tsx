import React from 'react';
import { Heart } from 'lucide-react';

interface NavbarProps {
  partnerName: string;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const NavbarAndAudioPlayer: React.FC<NavbarProps> = ({
  partnerName,
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    { id: 'collage', label: 'Marcos & Fotos' },
    { id: 'countdown', label: 'Contador' },
    { id: 'letter', label: 'Carta de Amor' },
    { id: 'reasons', label: 'Razones' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0A0A0A]/90 border-b border-[#C19A6B22] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Romantic Gothic Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-full bg-[#121212] border border-[#C19A6B55] flex items-center justify-center text-[#C19A6B] group-hover:border-[#C19A6B] group-hover:shadow-[0_0_15px_rgba(193,154,107,0.3)] transition-all">
            <Heart className="w-3.5 h-3.5 text-[#C19A6B] fill-[#C19A6B]/20 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h1 className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#F5F5F5] group-hover:text-[#C19A6B] transition-colors">
              ETERNO AMOR
            </h1>
            <span className="text-[10px] text-[#C19A6B] font-serif italic block -mt-0.5 opacity-90">
              Para {partnerName}
            </span>
          </div>
        </div>

        {/* Center/Right: Quick navigation links */}
        <nav className="flex items-center gap-1 bg-[#121212] p-1 rounded-full border border-[#C19A6B22]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3.5 py-1 text-[11px] font-sans uppercase tracking-widest rounded-full transition-all cursor-pointer ${
                activeSection === item.id
                  ? 'bg-[#C19A6B] text-[#0A0A0A] font-bold shadow-[0_0_10px_rgba(193,154,107,0.4)]'
                  : 'text-[#E0E0E0]/60 hover:text-[#F5F5F5] hover:bg-[#1A1A1A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

