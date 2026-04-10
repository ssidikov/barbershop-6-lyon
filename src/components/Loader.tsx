"use client";

import { useEffect, useRef, useState } from "react";
import { Scissors } from "lucide-react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hide = () => {
      const el = loaderRef.current;
      if (!el) return;
      // Start CSS fade-out
      el.style.opacity = "0";
      el.style.transform = "translateY(-100%)";
      // After transition, fully remove from layout so it can never block content
      const cleanup = setTimeout(() => {
        setIsVisible(false);
      }, 900);
      return cleanup;
    };

    // Normal path: hide after 2s
    const timer = setTimeout(hide, 2000);

    // Safety net: force-hide after 4s no matter what (covers slow mobile CPUs)
    const safetyTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      style={{
        transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.76,0,0.24,1)",
        opacity: 1,
        transform: "translateY(0)",
      }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-auto"
    >
      <div className="mb-8 relative animate-pulse">
        {/* Rotating border ring */}
        <div className="absolute inset-[-15px] border border-gold-400/20 rounded-full" />
        <div className="absolute inset-[-15px] border-t border-gold-400 rounded-full animate-spin" />
        <Scissors className="w-12 h-12 text-gold-400" />
      </div>

      <div className="overflow-hidden">
        <h1 className="text-white font-heading text-2xl uppercase tracking-[0.3em] font-bold animate-fade-in">
          Lyon VI
        </h1>
      </div>

      <div className="overflow-hidden mt-4">
        <p className="text-gold-400/60 text-xs font-light uppercase tracking-widest">
          L&apos;art du grooming premium
        </p>
      </div>
    </div>
  );
}
