import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CyberSigilCross, BaroqueCorner } from './GothicSigilDecor';
import { Sparkles, Heart, Clock, Gift, PartyPopper, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

interface CountdownTimerProps {
  anniversaryDate: string;
  partnerName: string;
  romanticTitle: string;
  onTriggerCelebration: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
  totalDaysTogether: number;
  monthsTogether: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  anniversaryDate,
  partnerName,
  romanticTitle,
  onTriggerCelebration,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
    totalDaysTogether: 0,
    monthsTogether: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      
      // Explicitly extract year, month, day to avoid UTC timezone offset shifts
      const dateParts = (anniversaryDate || '2025-09-20').split('-').map(Number);
      const startYear = dateParts[0] || 2025;
      const startMonth = (dateParts[1] || 9) - 1; // 0-indexed month
      const targetDay = dateParts[2] || 20;

      const annivDate = new Date(startYear, startMonth, targetDay, 0, 0, 0);
      
      // Calculate days together from anniversary date
      const diffSinceStart = now.getTime() - annivDate.getTime();
      const daysTogether = Math.max(0, Math.floor(diffSinceStart / (1000 * 60 * 60 * 24)));
      
      // Calculate completed months together
      let months = (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth);
      if (now.getDate() < targetDay) {
        months = Math.max(0, months - 1);
      }
      months = Math.max(0, months);

      // Next monthly celebration date (the upcoming 20th at 00:00:00)
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const currentDay = now.getDate();

      const isToday = currentDay === targetDay;

      let nextCelebration: Date;
      if (isToday) {
        nextCelebration = new Date(currentYear, currentMonth, targetDay, 0, 0, 0);
      } else if (currentDay < targetDay) {
        // Later this month on the 20th (e.g. today is 16th -> Aug 20 at 00:00:00)
        nextCelebration = new Date(currentYear, currentMonth, targetDay, 0, 0, 0);
      } else {
        // Next month on the 20th (e.g. Sept 20 at 00:00:00)
        nextCelebration = new Date(currentYear, currentMonth + 1, targetDay, 0, 0, 0);
      }

      const diffToNext = nextCelebration.getTime() - now.getTime();

      if (isToday || diffToNext <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isToday: true,
          totalDaysTogether: daysTogether,
          monthsTogether: months,
        });
        return;
      }

      const days = Math.floor(diffToNext / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffToNext % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffToNext % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffToNext % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isToday: false,
        totalDaysTogether: daysTogether,
        monthsTogether: months,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [anniversaryDate]);

  const handleCelebrateClick = () => {
    // Fire romantic gold, champagne & silver confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C19A6B', '#F5E6D3', '#E5C287', '#E0E0E0', '#ffffff'],
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C19A6B', '#E5C287', '#F5E6D3', '#ffffff'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C19A6B', '#E5C287', '#F5E6D3', '#ffffff'],
      });
    }, 250);

    romanticAudio.playBlowCandle();
    onTriggerCelebration();
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4">
      {/* Decorative Outer Sophisticated Dark Card */}
      <div className="relative rounded-2xl bg-[#121212] border border-[#C19A6B22] p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Subtle background ornamentation */}
        <div className="absolute top-2 left-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-30" rotation={0} /></div>
        <div className="absolute top-2 right-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-30" rotation={90} /></div>
        <div className="absolute bottom-2 right-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-30" rotation={180} /></div>
        <div className="absolute bottom-2 left-2"><BaroqueCorner className="w-8 h-8 text-[#C19A6B] opacity-30" rotation={270} /></div>

        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#C19A6B33] text-[10px] font-sans font-bold tracking-[0.3em] text-[#C19A6B] uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#C19A6B]" />
            <span>20 de Septiembre de 2025 • Mesiversario</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light italic font-serif text-[#F5F5F5] tracking-wide mb-2">
            {timeLeft.isToday ? `¡Hoy celebramos nuestro Mesiversario!` : `Cuenta Regresiva a Nuestro Próximo Mesiversario`}
          </h3>

          <p className="text-[#C19A6B] font-serif italic text-base sm:text-lg max-w-lg mx-auto mb-8 opacity-90">
            {timeLeft.isToday
              ? 'Las estrellas celebran otro mes de amor, complicidad y miradas eternas.'
              : 'Cada segundo a tu lado nos acerca a celebrar un mes más de esta hermosa historia.'}
          </p>

          {/* Time Digits Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8">
            <TimeCard value={timeLeft.days} label="DÍAS" />
            <TimeCard value={timeLeft.hours} label="HORAS" />
            <TimeCard value={timeLeft.minutes} label="MINS" />
            <TimeCard value={timeLeft.seconds} label="SEGUNDOS" isSeconds />
          </div>

          {/* Milestone together and Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[#E0E0E0] font-serif text-base italic">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C19A6B] fill-[#C19A6B]/30 animate-pulse" />
                <span>
                  <strong className="text-[#F5F5F5] font-sans">{timeLeft.totalDaysTogether} días</strong> juntos
                </span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-[#C19A6B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-sans text-xs uppercase tracking-wider font-bold">
                  {timeLeft.monthsTogether} {timeLeft.monthsTogether === 1 ? 'Mes cumplido' : 'Meses cumplidos'}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCelebrateClick}
              className="px-6 py-2.5 rounded-sm bg-[#C19A6B] hover:bg-[#D4AF37] text-[#0A0A0A] font-sans font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(193,154,107,0.3)] hover:shadow-[0_0_30px_rgba(193,154,107,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <PartyPopper className="w-4 h-4" />
              <span>¡Celebrar Mesiversario!</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeCard: React.FC<{ value: number; label: string; isSeconds?: boolean }> = ({ value, label, isSeconds }) => {
  const formatted = String(value).padStart(2, '0');

  return (
    <div className="relative p-4 rounded-sm bg-[#1A1A1A] border border-white/5 shadow-lg flex flex-col items-center justify-center group hover:border-[#C19A6B44] transition-colors">
      <div className="absolute top-1.5 right-1.5 opacity-20 group-hover:opacity-60 transition-opacity">
        <CyberSigilCross className="w-3 h-3 text-[#C19A6B]" />
      </div>
      <span className="text-4xl sm:text-5xl font-light text-[#C19A6B] tracking-tight font-serif">
        {formatted}
      </span>
      <span className="text-[9px] uppercase tracking-widest opacity-60 font-sans text-[#E0E0E0] mt-1.5">
        {label}
      </span>
    </div>
  );
};
