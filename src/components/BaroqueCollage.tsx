import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BaroqueCorner, 
  CyberSigilCross, 
  GothicSpider, 
  GothicCentipedeFlourish, 
  GothicSilverButterfly, 
  SilverFloraRose 
} from './GothicSigilDecor';
import { MemoryPhoto } from '../types';
import { 
  Camera, 
  Calendar, 
  MapPin, 
  X, 
  ChevronRight, 
  ChevronLeft,
  RotateCw
} from 'lucide-react';

interface BaroqueCollageProps {
  photos: MemoryPhoto[];
  partnerName: string;
}

export const BaroqueCollage: React.FC<BaroqueCollageProps> = ({
  photos,
  partnerName,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<'collage' | 'grid'>('collage');

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsFlipped(false);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    setIsFlipped(false);
  };

  const activePhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      {/* Header and Aesthetic Banner */}
      <div className="text-center mb-10 relative">
        <div className="flex items-center justify-center gap-3 mb-2">
          <CyberSigilCross className="w-5 h-5 text-slate-400 opacity-80" />
          <span className="text-xs uppercase tracking-[0.35em] text-slate-400 font-heading">
            Galería Barroca & Memorias
          </span>
          <CyberSigilCross className="w-5 h-5 text-slate-400 opacity-80" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-gothic tracking-wider silver-chrome-gradient mb-3">
          Nuestros Momentos Inmortales
        </h2>
        <p className="text-slate-400 font-serif-romantic text-lg sm:text-xl italic max-w-xl mx-auto">
          Toca cualquier marco para contemplar la historia secreta que guardamos en nuestro santuario.
        </p>

        {/* View Mode Switcher */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setViewMode('collage')}
            className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-widest transition-all cursor-pointer ${
              viewMode === 'collage'
                ? 'bg-[#C19A6B] text-[#0A0A0A] font-bold shadow-[0_0_15px_rgba(193,154,107,0.3)]'
                : 'bg-[#121212] text-[#E0E0E0]/60 border border-[#C19A6B22] hover:border-[#C19A6B55]'
            }`}
          >
            Collage Barroco
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-widest transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#C19A6B] text-[#0A0A0A] font-bold shadow-[0_0_15px_rgba(193,154,107,0.3)]'
                : 'bg-[#121212] text-[#E0E0E0]/60 border border-[#C19A6B22] hover:border-[#C19A6B55]'
            }`}
          >
            Cuadrícula Plateada
          </button>
        </div>
      </div>

      {/* Main Collage Layout */}
      {viewMode === 'collage' ? (
        <div className="relative w-full max-w-2xl mx-auto min-h-[920px] sm:min-h-[1050px] bg-[#121212] border border-[#C19A6B22] rounded-2xl p-4 sm:p-8 shadow-2xl overflow-hidden">
          {/* Dark textured background overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1A1A1A] via-[#121212] to-[#0A0A0A] pointer-events-none" />
          
          {/* Cyber Sigil & Centipede Top Right */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-6 pointer-events-none opacity-90 z-20">
            <CyberSigilCross className="w-14 h-14 sm:w-20 sm:h-20 text-[#C19A6B] animate-pulse" />
          </div>
          <div className="absolute top-24 right-4 sm:top-28 sm:right-8 pointer-events-none z-20">
            <GothicCentipedeFlourish className="w-20 h-36 sm:w-28 sm:h-52 text-slate-300" />
          </div>

          {/* Spider Element Over Middle Left */}
          <div className="absolute top-[38%] left-2 sm:left-4 pointer-events-none z-30 opacity-95">
            <GothicSpider className="w-24 h-24 sm:w-32 sm:h-32 text-[#E0E0E0] hover:scale-105 transition-transform" />
          </div>

          {/* Butterfly & Silver Roses at Bottom Right */}
          <div className="absolute bottom-40 right-4 sm:bottom-48 sm:right-8 pointer-events-none z-20">
            <GothicSilverButterfly className="w-16 h-16 sm:w-24 sm:h-24 text-[#C19A6B] animate-romantic-float" />
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 pointer-events-none z-20 opacity-95">
            <SilverFloraRose className="w-28 h-28 sm:w-40 sm:h-40 text-slate-300" />
          </div>

          {/* FRAME 1: Top-Left Frame (Portrait) */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-[48%] sm:w-[46%] aspect-[3/4] z-10">
            <BaroqueOrnateFrame
              photo={photos[0]}
              onOpen={() => openLightbox(0)}
              index={1}
            />
          </div>

          {/* FRAME 2: Center-Right Frame (Main Large Square / Portrait) */}
          <div className="absolute top-[28%] right-4 sm:top-[26%] sm:right-8 w-[52%] sm:w-[50%] aspect-square z-10">
            <BaroqueOrnateFrame
              photo={photos[1]}
              onOpen={() => openLightbox(1)}
              index={2}
              isHighlight
            />
          </div>

          {/* FRAME 3: Bottom-Left Frame (Square / Portrait) */}
          <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 w-[46%] sm:w-[44%] aspect-[3/4] z-10">
            <BaroqueOrnateFrame
              photo={photos[2]}
              onOpen={() => openLightbox(2)}
              index={3}
            />
          </div>

          {/* FRAME 4: Top-Mid / Bottom Accent */}
          {photos[3] && (
            <div className="absolute top-[60%] left-[38%] sm:left-[35%] w-[32%] sm:w-[30%] aspect-square z-20 shadow-2xl">
              <BaroqueOrnateFrame
                photo={photos[3]}
                onOpen={() => openLightbox(3)}
                index={4}
                isCompact
              />
            </div>
          )}

          {/* Subtle bottom tag */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] tracking-[0.25em] text-slate-500 font-heading uppercase text-center">
            {partnerName} • Amor Inmortal
          </div>
        </div>
      ) : (
        /* Grid Layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) => (
            <div key={photo.id} className="w-full aspect-[3/4]">
              <BaroqueOrnateFrame
                photo={photo}
                onOpen={() => openLightbox(idx)}
                index={idx + 1}
              />
            </div>
          ))}
        </div>
      )}

      {/* LIGHTBOX MODAL WITH PHOTO FLIP, CAPTION & LOVE STORY */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#121212] border border-[#C19A6B33] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ornate corners */}
              <div className="absolute top-2 left-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={0} /></div>
              <div className="absolute top-2 right-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={90} /></div>
              <div className="absolute bottom-2 right-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={180} /></div>
              <div className="absolute bottom-2 left-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-60" rotation={270} /></div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#1A1A1A] text-[#E0E0E0] hover:text-[#C19A6B] border border-white/5 hover:border-[#C19A6B44] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Card Flip Container */}
              <div className="relative min-h-[360px] sm:min-h-[420px] w-full flex flex-col items-center justify-center">
                {!isFlipped ? (
                  /* FRONT: High-Res Photo inside Silver Frame */
                  <div className="w-full flex flex-col items-center">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden baroque-frame-outer p-2 shadow-2xl group">
                      <img
                        src={activePhoto.url}
                        alt={activePhoto.caption}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover rounded-lg filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2 text-xs font-serif italic text-[#E0E0E0]">
                          {activePhoto.date && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-[#C19A6B]" />
                              {activePhoto.date}
                            </span>
                          )}
                          {activePhoto.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#C19A6B]" />
                              {activePhoto.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F5F5] italic font-light">
                        "{activePhoto.caption}"
                      </h3>
                      {activePhoto.customStory && (
                        <p className="text-[#E0E0E0]/80 text-sm font-sans mt-2 max-w-md mx-auto line-clamp-3">
                          {activePhoto.customStory}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  /* BACK: Love Note & Story View */
                  <div className="w-full h-full flex flex-col justify-center p-6 bg-[#16161a] rounded-xl border border-[#C19A6B22] shadow-inner text-left">
                    <div className="space-y-4">
                      <div className="border-b border-white/10 pb-2">
                        <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-[#C19A6B] uppercase">
                          Capítulo Secreto #{selectedPhotoIndex + 1}
                        </span>
                      </div>

                      <h4 className="text-2xl font-serif text-[#F5F5F5] italic font-light">
                        "{activePhoto.caption}"
                      </h4>

                      <p className="text-[#E0E0E0] font-serif text-lg leading-relaxed italic">
                        {activePhoto.customStory || 'Cada instante a tu lado es una joya eterna que guardo con devoción en el cofre de mi memoria.'}
                      </p>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C19A6B]">
                        <span>{activePhoto.date || 'Eternidad'}</span>
                        <span>{activePhoto.location || 'Donde tú estés'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                {/* Navigation arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const prev = selectedPhotoIndex > 0 ? selectedPhotoIndex - 1 : photos.length - 1;
                      openLightbox(prev);
                    }}
                    className="p-2 rounded-full bg-[#1A1A1A] border border-white/10 text-[#E0E0E0] hover:text-[#C19A6B] cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#E0E0E0]/60 font-mono">
                    {selectedPhotoIndex + 1} / {photos.length}
                  </span>
                  <button
                    onClick={() => {
                      const next = selectedPhotoIndex < photos.length - 1 ? selectedPhotoIndex + 1 : 0;
                      openLightbox(next);
                    }}
                    className="p-2 rounded-full bg-[#1A1A1A] border border-white/10 text-[#E0E0E0] hover:text-[#C19A6B] cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Flip button */}
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-sm bg-[#C19A6B] hover:bg-[#D4AF37] text-xs text-[#0A0A0A] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{isFlipped ? 'Ver Foto' : 'Ver Historia'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Ornate Antique Silver Baroque Frame Component
 */
interface FrameProps {
  photo?: MemoryPhoto;
  onOpen: () => void;
  index: number;
  isHighlight?: boolean;
  isCompact?: boolean;
}

const BaroqueOrnateFrame: React.FC<FrameProps> = ({
  photo,
  onOpen,
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative w-full h-full cursor-pointer group"
      onClick={onOpen}
    >
      {/* Outer Carved Baroque Silver Bevel */}
      <div className="relative w-full h-full rounded-lg p-2.5 sm:p-3.5 baroque-frame-outer transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(200,210,230,0.25)]">
        {/* Silver & Gold Relief Filigree Corner Inlays */}
        <div className="absolute -top-1.5 -left-1.5 z-20"><BaroqueCorner className="w-8 h-8 sm:w-10 sm:h-10 text-[#C19A6B] opacity-90" rotation={0} /></div>
        <div className="absolute -top-1.5 -right-1.5 z-20"><BaroqueCorner className="w-8 h-8 sm:w-10 sm:h-10 text-[#C19A6B] opacity-90" rotation={90} /></div>
        <div className="absolute -bottom-1.5 -right-1.5 z-20"><BaroqueCorner className="w-8 h-8 sm:w-10 sm:h-10 text-[#C19A6B] opacity-90" rotation={180} /></div>
        <div className="absolute -bottom-1.5 -left-1.5 z-20"><BaroqueCorner className="w-8 h-8 sm:w-10 sm:h-10 text-[#C19A6B] opacity-90" rotation={270} /></div>

        {/* Intricate Inner Silver Inset Border */}
        <div className="relative w-full h-full rounded bg-black overflow-hidden baroque-frame-inner">
          {photo ? (
            <>
              <img
                src={photo.url}
                alt={photo.caption}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
              />
              
              {/* Gothic Dark Romance Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

              {/* Shimmer / Chrome light streak effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              {/* Overlay caption tag */}
              <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
                <p className="text-xs sm:text-sm font-serif text-[#F5F5F5] italic line-clamp-1 group-hover:text-[#C19A6B] transition-colors">
                  {photo.caption}
                </p>
                {photo.date && (
                  <span className="text-[10px] text-[#C19A6B] font-mono tracking-wider">
                    {photo.date}
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#121212] text-[#C19A6B]">
              <Camera className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-xs font-sans uppercase tracking-widest">Foto Eterna</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

