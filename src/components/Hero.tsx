"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  const [bgSrc, setBgSrc] = useState("/gallery/hero.webp");
  const fallbackSrc = "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={bgSrc} 
            alt="Barbershop ambiance"
            onError={() => setBgSrc(fallbackSrc)}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
            Excellence & Tradition
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-8"
        >
          L'Art du Grooming <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Premium</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 max-w-2xl text-lg md:text-xl font-light mb-12"
        >
          Plus qu'une coupe, une expérience haut de gamme au cœur du 6ème arrondissement de Lyon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="https://www.planity.com/6th-barbershop-cours-lafayette-69003-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 text-center"
          >
            Réserver sur Planity
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 text-center"
          >
            Nos services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
