import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';

const Card = () => {
  const cardRef = useRef<HTMLImageElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
    transition: 'transform 0.5s ease-out',
  });

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const rotateX = yPct * -25;
    const rotateY = xPct * 25;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <div className="relative shrink-0 flex justify-center w-full lg:w-auto" style={{ perspective: '1000px' }}>
      <div
        className="absolute w-100 md:w-150 lg:w-200 h-100 md:h-150 lg:h-200 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'rgba(161, 242, 151, 0.67)',
          filter: 'blur(200px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-15deg)',
        }}
      />
      <div
        className="absolute w-100 md:w-150 lg:w-200 h-50 md:h-75 lg:h-100 rounded-full opacity-50 pointer-events-none"
        style={{
          background: 'rgba(163, 245, 149, 0.3)',
          filter: 'blur(100px)',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-15deg)',
        }}
      />
      <img
        ref={cardRef}
        src="/main-card-no-rotate.png"
        alt="Early Access Pass Card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="relative w-64 md:w-80 lg:w-96 xl:w-105 h-auto object-contain will-change-transform"
      />
    </div>
  );
};

export default Card;
