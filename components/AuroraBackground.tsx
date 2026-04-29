"use client";

import { useEffect, useState } from "react";

export default function AuroraBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Capa base neutra */}
      <div className="absolute inset-0 bg-neutral-50" />

      {/* Aurora 1 - Naranja/amarillo (primary) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "linear-gradient(135deg, #f95d12 0%, #fa772e 50%, #fde7cc 100%)",
          top: `${20 + mousePosition.y * 0.1}%`,
          left: `${10 + mousePosition.x * 0.15}%`,
          transform: "translate(-50%, -50%)",
          animation: "aurora1 20s ease-in-out infinite",
        }}
      />

      {/* Aurora 2 - Azul (accent) */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
        style={{
          background: "linear-gradient(135deg, #0685CF 0%, #81C8EA 50%, #cce5f5 100%)",
          top: `${60 + mousePosition.y * 0.08}%`,
          left: `${60 + mousePosition.x * 0.1}%`,
          transform: "translate(-50%, -50%)",
          animation: "aurora2 25s ease-in-out infinite",
        }}
      />

      {/* Aurora 3 - Suave neutra */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
        style={{
          background: "linear-gradient(135deg, #d4d4d4 0%, #f5f5f5 50%, #ffffff 100%)",
          top: `${40 + mousePosition.y * 0.05}%`,
          left: `${40 + mousePosition.x * 0.08}%`,
          transform: "translate(-50%, -50%)",
          animation: "aurora3 30s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes aurora1 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        @keyframes aurora2 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1) translateX(0);
          }
          50% {
            transform: translate(-50%, -50%) scale(0.95) translateX(20px);
          }
        }
        @keyframes aurora3 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}