import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  type: 'stardust' | 'petal' | 'ember';
  rotation: number;
  rotationSpeed: number;
}

export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const count = Math.min(45, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.7 + 0.2,
        fadeSpeed: (Math.random() * 0.008 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        type: Math.random() > 0.6 ? 'petal' : 'stardust',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y > height + 20) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -10;
        if (p.x < -20) p.x = width + 10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'petal') {
          // Romantic dark champagne/gold & silver petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 2, p.size * 1.2, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(193, 154, 107, ${p.opacity * 0.4})`;
          ctx.fill();
        } else {
          // Glowing warm gold/silver stardust star
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 230, 211, ${p.opacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(193, 154, 107, 0.8)';
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
