import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LoveReason } from '../types';
import { BaroqueCorner, CyberSigilCross } from './GothicSigilDecor';
import { 
  Heart, 
  Sparkles, 
  Moon, 
  Eye, 
  Flame, 
  Shield, 
  Feather, 
  Infinity as InfinityIcon,
  RotateCw
} from 'lucide-react';

interface LoveReasonsDeckProps {
  reasons: LoveReason[];
  partnerName: string;
}

export const AVAILABLE_ICONS = [
  { name: 'Heart', label: 'Amor', icon: Heart },
  { name: 'Sparkles', label: 'Magia', icon: Sparkles },
  { name: 'Moon', label: 'Noche', icon: Moon },
  { name: 'Eye', label: 'Mirada', icon: Eye },
  { name: 'Flame', label: 'Pasión', icon: Flame },
  { name: 'Shield', label: 'Lealtad', icon: Shield },
  { name: 'Feather', label: 'Paz', icon: Feather },
  { name: 'Infinity', label: 'Eternidad', icon: InfinityIcon },
];

const renderIcon = (name: string, className = "w-5 h-5") => {
  const item = AVAILABLE_ICONS.find(i => i.name === name);
  if (item) {
    const IconComponent = item.icon;
    return <IconComponent className={className} />;
  }
  return <Heart className={className} />;
};

export const LoveReasonsDeck: React.FC<LoveReasonsDeckProps> = ({
  reasons,
  partnerName
}) => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({ 1: true });

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleToggleAll = () => {
    const allFlipped = reasons.length > 0 && reasons.every((r) => flippedCards[r.id]);
    if (allFlipped) {
      setFlippedCards({});
    } else {
      const all: Record<number, boolean> = {};
      reasons.forEach((r) => {
        all[r.id] = true;
      });
      setFlippedCards(all);
    }
  };

  const allFlipped = reasons.length > 0 && reasons.every((r) => flippedCards[r.id]);

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#C19A6B33] text-[10px] font-sans font-bold tracking-[0.3em] text-[#C19A6B] uppercase mb-2">
          <Heart className="w-3.5 h-3.5 text-[#C19A6B] fill-[#C19A6B]/20" />
          <span>Declaraciones Secretas</span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light italic font-serif text-[#F5F5F5] tracking-wide mb-2">
          Razones por las que te Amo
        </h3>
        <p className="text-[#C19A6B] font-serif text-lg italic max-w-lg mx-auto opacity-90">
          Toca cada carta del destino para revelar las infinitas razones por las que mi corazón te pertenece.
        </p>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            onClick={handleToggleAll}
            className="px-5 py-2 rounded-full bg-[#121212] border border-[#C19A6B33] hover:border-[#C19A6B] text-xs font-sans uppercase tracking-wider text-[#E0E0E0] hover:text-[#C19A6B] transition-colors cursor-pointer shadow-sm"
          >
            {allFlipped ? 'Ocultar Todas las Cartas' : 'Revelar Todas las Cartas'}
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((reason, index) => {
          const isFlipped = !!flippedCards[reason.id];

          return (
            <motion.div
              key={reason.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => toggleFlip(reason.id)}
              className="relative aspect-[3/4] cursor-pointer perspective-1000 group select-none"
            >
              <div 
                className={`relative w-full h-full duration-500 transition-transform transform-gpu ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* FRONT (Cover - Sophisticated Dark Card) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-[#1E1E1E] via-[#121212] to-[#0A0A0A] border border-[#C19A6B33] p-5 flex flex-col items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.8)] group-hover:border-[#C19A6B66] group-hover:shadow-[0_0_25px_rgba(193,154,107,0.15)] backface-hidden"
                >
                  <div className="absolute top-1.5 left-1.5"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-40" rotation={0} /></div>
                  <div className="absolute top-1.5 right-1.5"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-40" rotation={90} /></div>
                  <div className="absolute bottom-1.5 right-1.5"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-40" rotation={180} /></div>
                  <div className="absolute bottom-1.5 left-1.5"><BaroqueCorner className="w-6 h-6 text-[#C19A6B] opacity-40" rotation={270} /></div>

                  <span className="text-[9px] tracking-[0.25em] font-sans font-bold text-[#C19A6B] uppercase">
                    Razón #{index + 1}
                  </span>

                  <div className="flex flex-col items-center gap-3 text-center my-auto">
                    <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#C19A6B33] flex items-center justify-center text-[#C19A6B] shadow-inner group-hover:scale-110 transition-transform">
                      {renderIcon(reason.iconName, "w-6 h-6 text-[#C19A6B]")}
                    </div>
                    <CyberSigilCross className="w-6 h-6 text-[#C19A6B] opacity-60" />
                  </div>

                  <span className="text-xs font-serif text-[#E0E0E0] italic flex items-center gap-1 group-hover:text-[#C19A6B]">
                    <RotateCw className="w-3 h-3 text-[#C19A6B]" />
                    Toca para revelar
                  </span>
                </div>

                {/* BACK (Revealed Reason Note) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-b from-[#18181E] to-[#101014] border border-[#C19A6B44] p-5 flex flex-col justify-between shadow-2xl backface-hidden [transform:rotateY(180deg)] text-left"
                >
                  <div className="absolute top-1.5 left-1.5"><BaroqueCorner className="w-5 h-5 text-[#C19A6B] opacity-50" rotation={0} /></div>
                  <div className="absolute bottom-1.5 right-1.5"><BaroqueCorner className="w-5 h-5 text-[#C19A6B] opacity-50" rotation={180} /></div>

                  <div>
                    <span className="text-[9px] tracking-[0.2em] font-sans font-bold text-[#C19A6B] uppercase">
                      Para {partnerName} #{index + 1}
                    </span>
                    <h4 className="text-base sm:text-lg font-serif font-light text-[#F5F5F5] italic mt-2 line-clamp-2">
                      {reason.title}
                    </h4>
                  </div>

                  <p className="text-[#E0E0E0] font-serif text-sm leading-relaxed italic my-auto overflow-y-auto max-h-[120px] pr-1">
                    "{reason.description}"
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#C19A6B]">
                    <span>Eterno Amor</span>
                    {renderIcon(reason.iconName, "w-3.5 h-3.5 text-[#C19A6B]")}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
