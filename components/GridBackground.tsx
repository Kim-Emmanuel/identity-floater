import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const gridSize = 40;
    let offset = 0;

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(0, 255, 255, 0.03)';
      ctx.lineWidth = 1;

      // Draw grid
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = offset; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Animated scanline
      offset = (offset + 0.5) % gridSize;

      // Random digital noise
      for(let i = 0; i < 5; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 179, 0, 0.3)';
        ctx.fillRect(x, y, size, size);
      }

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default GridBackground;
