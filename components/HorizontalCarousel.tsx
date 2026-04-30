/**
 * Horizontal Carousel - INFINITO con CSS puro
 * Usa @keyframes para loop verdaderamente infinito sin saltos
 */

"use client";

import { ReactNode } from "react";

interface HorizontalCarouselProps {
  children: ReactNode;
  className?: string;
  speed?: number; // segundos por scroll completo
}

export default function HorizontalCarousel({
  children,
  className = "",
  speed = 20,
}: HorizontalCarouselProps) {
  // Duplicar los items para el loop infinito
  // Necesitamos suficientes duplicados para fillscreen + scroll
  const childrenArray = Array.isArray(children) ? children : [children];
  const itemsWithKeys = childrenArray.map((child: any, index: number) => (
    { ...child, key: child?.key || `original-${index}` }
  ));
  const duplicatedItems = [
    ...itemsWithKeys, 
    ...itemsWithKeys,
    ...itemsWithKeys,
    ...itemsWithKeys
  ];

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      {/* Wrapper que animate */}
      <div 
        className="flex gap-4 py-4"
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
          width: 'fit-content',
        }}
      >
        {duplicatedItems.map((child: any, index: number) => (
          <div 
            key={child.key || `item-${index}`}
            className="flex-shrink-0"
            style={{ width: '300px' }}
          >
            {child}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}