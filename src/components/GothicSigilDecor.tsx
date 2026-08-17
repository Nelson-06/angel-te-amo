import React from 'react';

/**
 * Highly detailed Victorian Gothic Baroque Silver & Cyber Sigilism decorative SVGs
 * Perfectly matching the dark romantic aesthetic from the user's reference photo.
 */

export const BaroqueCorner: React.FC<{ className?: string; rotation?: number }> = ({ 
  className = "w-12 h-12 text-slate-300", 
  rotation = 0 
}) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${className}`}
    >
      <path d="M0,0 L45,0 C38,8 32,18 30,28 C28,38 32,46 36,52 C32,50 28,44 26,38 C22,48 14,56 4,60 C8,50 10,40 10,28 C10,18 4,8 0,0 Z" opacity="0.9" />
      <path d="M0,0 L0,45 C8,38 18,32 28,30 C38,28 46,32 52,36 C50,32 44,28 38,26 C48,22 56,14 60,4 C50,8 40,10 28,10 C18,10 8,4 0,0 Z" opacity="0.9" />
      <circle cx="28" cy="28" r="3.5" opacity="0.8" />
      <path d="M12,12 Q24,6 36,12 Q42,24 36,36 Q24,42 12,36 Q6,24 12,12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M5,5 L18,18 M8,2 L2,8 M20,4 L4,20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
};

export const CyberSigilCross: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#C19A6B]" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={`pointer-events-none drop-shadow-[0_0_8px_rgba(193,154,107,0.4)] ${className}`}>
      {/* Central cyber sigil thorn cross */}
      <path d="M50,0 C51,25 60,40 100,50 C60,60 51,75 50,100 C49,75 40,60 0,50 C40,40 49,25 50,0 Z" />
      <path d="M50,20 C50.5,35 56,45 80,50 C56,55 50.5,65 50,80 C49.5,65 44,55 20,50 C44,45 49.5,35 50,20 Z" opacity="0.8" fill="#F5E6D3" />
      <circle cx="50" cy="50" r="3" fill="#ffffff" />
      {/* Outer subtle thorns */}
      <path d="M35,35 L20,20 M65,35 L80,20 M35,65 L20,80 M65,65 L80,80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
};

export const GothicSpider: React.FC<{ className?: string }> = ({ className = "w-24 h-24 text-slate-300" }) => {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] ${className}`}>
      <defs>
        <radialGradient id="spiderBody" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="60%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      {/* Abdomen */}
      <ellipse cx="80" cy="98" rx="16" ry="24" fill="url(#spiderBody)" stroke="#94a3b8" strokeWidth="1.2" />
      {/* Cephalothorax */}
      <ellipse cx="80" cy="68" rx="12" ry="12" fill="url(#spiderBody)" stroke="#cbd5e1" strokeWidth="1.2" />
      {/* Texture details */}
      <path d="M74,90 Q80,95 86,90 M73,100 Q80,106 87,100 M75,110 Q80,114 85,110" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <circle cx="76" cy="62" r="1.5" fill="#ffffff" />
      <circle cx="84" cy="62" r="1.5" fill="#ffffff" />
      {/* Chelicerae */}
      <path d="M76,58 L73,50 M84,58 L87,50" stroke="#e2e8f0" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Left Legs */}
      <path d="M72,66 Q45,45 30,22 Q24,28 14,35" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M70,69 Q40,58 24,52 Q18,65 10,75" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M70,73 Q38,82 25,92 Q22,110 16,128" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M72,76 Q48,105 38,122 Q32,138 25,152" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Right Legs */}
      <path d="M88,66 Q115,45 130,22 Q136,28 146,35" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M90,69 Q120,58 136,52 Q142,65 150,75" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M90,73 Q122,82 135,92 Q138,110 144,128" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M88,76 Q112,105 122,122 Q128,138 135,152" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export const GothicCentipedeFlourish: React.FC<{ className?: string }> = ({ className = "w-28 h-48 text-slate-300" }) => {
  return (
    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] opacity-90 ${className}`}>
      {/* Centipede curved spine */}
      <path d="M60,10 Q35,40 30,80 Q25,130 55,185" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      {/* Segments and leg pairs down the curve */}
      {[
        { y: 15, x: 58, angle: -15, width: 22 },
        { y: 30, x: 48, angle: -10, width: 25 },
        { y: 45, x: 40, angle: -5, width: 28 },
        { y: 60, x: 34, angle: 0, width: 29 },
        { y: 75, x: 30, angle: 5, width: 30 },
        { y: 90, x: 29, angle: 10, width: 30 },
        { y: 105, x: 30, angle: 15, width: 28 },
        { y: 120, x: 34, angle: 22, width: 27 },
        { y: 135, x: 39, angle: 30, width: 25 },
        { y: 150, x: 45, angle: 38, width: 23 },
        { y: 165, x: 51, angle: 45, width: 20 },
        { y: 180, x: 55, angle: 50, width: 16 },
      ].map((seg, idx) => (
        <g key={idx} transform={`translate(${seg.x}, ${seg.y}) rotate(${seg.angle})`}>
          <ellipse cx="0" cy="0" rx={seg.width / 2.8} ry="3.5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
          {/* Left leg hook */}
          <path d={`M-${seg.width/2.5},0 Q-${seg.width}, -5 -${seg.width * 1.3}, ${6 + (idx % 3) * 2}`} stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
          {/* Right leg hook */}
          <path d={`M${seg.width/2.5},0 Q${seg.width}, -5 ${seg.width * 1.3}, ${6 + (idx % 3) * 2}`} stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      ))}
      {/* Antennae */}
      <path d="M58,12 Q65,4 78,2" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M60,14 Q70,8 82,10" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

export const GothicSilverButterfly: React.FC<{ className?: string }> = ({ className = "w-20 h-20 text-slate-200" }) => {
  return (
    <svg viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] ${className}`}>
      {/* Left Top Wing */}
      <path d="M58,55 C45,35 25,20 5,25 C-2,38 12,65 48,68 Z" fill="url(#silverGradWing)" opacity="0.85" />
      {/* Right Top Wing */}
      <path d="M62,55 C75,35 95,20 115,25 C122,38 108,65 72,68 Z" fill="url(#silverGradWing)" opacity="0.85" />
      {/* Left Bottom Wing */}
      <path d="M56,66 C42,75 22,88 28,105 C42,108 55,88 58,74 Z" fill="url(#silverGradWing)" opacity="0.75" />
      {/* Right Bottom Wing */}
      <path d="M64,66 C78,75 98,88 92,105 C78,108 65,88 62,74 Z" fill="url(#silverGradWing)" opacity="0.75" />
      {/* Wing intricate lacework / veins */}
      <path d="M58,55 Q35,40 18,30 M58,55 Q30,52 14,48 M58,55 Q38,62 25,75" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" fill="none" />
      <path d="M62,55 Q85,40 102,30 M62,55 Q90,52 106,48 M62,55 Q82,62 95,75" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" fill="none" />
      {/* Butterfly Body */}
      <ellipse cx="60" cy="62" rx="3" ry="16" fill="#f8fafc" />
      {/* Antennae */}
      <path d="M59,47 Q52,36 44,32 M61,47 Q68,36 76,32" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id="silverGradWing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SilverFloraRose: React.FC<{ className?: string }> = ({ className = "w-28 h-28 text-slate-300" }) => {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] ${className}`}>
      {/* Baroque Rose Petals with Silver Shading */}
      <defs>
        <radialGradient id="silverRoseShade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#cbd5e1" />
          <stop offset="80%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      <circle cx="70" cy="70" r="48" fill="url(#silverRoseShade)" opacity="0.3" />
      {/* Outer petals */}
      <path d="M70,22 C95,20 118,45 116,72 C114,98 90,118 68,116 C42,114 22,90 24,65 C26,40 48,24 70,22 Z" stroke="#94a3b8" strokeWidth="1.5" fill="#1e293b" fillOpacity="0.6" />
      <path d="M50,35 C75,25 105,40 102,68 C100,92 78,105 55,98 C35,92 30,70 42,50 Z" stroke="#cbd5e1" strokeWidth="1.2" fill="#334155" fillOpacity="0.7" />
      {/* Inner spiraling core */}
      <path d="M62,52 C76,46 88,56 86,70 C84,82 72,88 60,82 C50,76 52,62 62,56 Z" stroke="#ffffff" strokeWidth="1.5" fill="#475569" fillOpacity="0.8" />
      <circle cx="68" cy="66" r="6" fill="#f8fafc" />
      {/* Thorn leaves */}
      <path d="M22,65 Q8,55 4,40 Q16,46 25,58" stroke="#cbd5e1" strokeWidth="1.5" fill="#0f172a" />
      <path d="M115,70 Q130,62 136,46 Q125,52 114,64" stroke="#cbd5e1" strokeWidth="1.5" fill="#0f172a" />
    </svg>
  );
};
