/**
 * Vertical Carousel - INFINITO con CSS puro
 * Usa @keyframes para loop verdaderamente infinito sin saltos
 */

"use client";

import { ReactNode } from "react";

interface VerticalCarouselProps {
  children: ReactNode;
  className?: string;
  speed?: number; // segundos por scroll completo
  itemHeight?: number;
}

export default function VerticalCarousel({
  children,
  className = "",
  speed = 15,
  itemHeight = 88,
}: VerticalCarouselProps) {
  // Duplicar los items para el loop infinito (4 ciclos)
  const childrenArray = Array.isArray(children) ? children : [children];
  const duplicatedItems = [
    ...childrenArray, 
    ...childrenArray,
    ...childrenArray,
    ...childrenArray
  ];

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
      }}
    >
      {/* Wrapper que animate hacia arriba */}
      <div 
        className="flex flex-col gap-4 will-change-transform"
        style={{
          animation: `scroll-up ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((child: any, index: number) => (
          <div 
            key={child?.key || `item-${index}`}
            className="flex-shrink-0"
            style={{ height: itemHeight }}
          >
            {child}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}