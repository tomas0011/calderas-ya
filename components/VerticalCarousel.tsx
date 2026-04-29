"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface VerticalCarouselProps {
  children: ReactNode;
  itemHeight?: number;
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function VerticalCarousel({
  children,
  itemHeight = 88,
  duration = 30000,
  pauseOnHover = true,
  className = "",
}: VerticalCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startTranslate = useRef(0);
  const animationRef = useRef<number>();
  const translateRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Contar items hijos
  const childrenArray = Array.isArray(children) ? children : [children];
  const totalItems = childrenArray.length;
  const cycleHeight = totalItems * (itemHeight + 16); // itemHeight + gap

  // Duplicar items para efecto infinito (2 ciclos para suavizar el loop)
  const duplicatedChildren = [...childrenArray, ...childrenArray];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || isPaused || isDragging.current) return;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Calcular desplazamiento basado en tiempo
      const pixelsPerMs = cycleHeight / duration;
      translateRef.current += pixelsPerMs * deltaTime;

      // Loop infinito sin salto usando módulo
      const totalCycle = cycleHeight;
      const currentPosition = translateRef.current % totalCycle;
      
      // Usar translateY que es más suave que scrollTop
      track.style.transform = `translateY(-${currentPosition}px)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, cycleHeight, duration]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    // Capturar la posición actual normalizada
    const totalCycle = cycleHeight;
    startTranslate.current = ((translateRef.current % totalCycle) + totalCycle) % totalCycle;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    
    const deltaY = e.clientY - startY.current;
    // Invertir: arrastrar hacia abajo = mover contenido hacia arriba (translateY negativo)
    const newTranslate = startTranslate.current - deltaY;
    translateRef.current = newTranslate;
    
    // Calcular posición dentro del ciclo
    const totalCycle = cycleHeight;
    const normalizedPosition = ((newTranslate % totalCycle) + totalCycle) % totalCycle;
    trackRef.current.style.transform = `translateY(-${normalizedPosition}px)`;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      // Normalizar la posición para que no crezca infinitamente
      const totalCycle = cycleHeight;
      translateRef.current = ((translateRef.current % totalCycle) + totalCycle) % totalCycle;
    }
    isDragging.current = false;
    lastTimeRef.current = 0;
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      const totalCycle = cycleHeight;
      translateRef.current = ((translateRef.current % totalCycle) + totalCycle) % totalCycle;
    }
    isDragging.current = false;
    lastTimeRef.current = 0;
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    if (pauseOnHover && !isDragging.current) {
      setIsPaused(true);
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ 
        cursor: isDragging.current ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
    >
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neutral-50 to-transparent z-10 pointer-events-none" />
      
      {/* Track con transformación */}
      <div 
        ref={trackRef}
        className="flex flex-col gap-4 py-4 will-change-transform"
        style={{ 
          transform: 'translateY(0)',
          transition: isDragging.current ? 'none' : 'transform 0.1s linear'
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div 
            key={index} 
            className="flex-shrink-0"
            style={{ height: itemHeight }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}