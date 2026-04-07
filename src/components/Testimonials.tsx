"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Thomas D.",
    date: "Il y a 2 semaines",
    text: "Le meilleur barbershop de Lyon 6, sans aucun doute. Ambiance au top, coupe impeccable et conseil de vrai pro.",
  },
  {
    name: "Maxime L.",
    date: "Il y a 1 mois",
    text: "Un vrai moment de détente. Le soin du détail lors du rasage à l'ancienne est incroyable. Je recommande vivement.",
  },
  {
    name: "Alexandre P.",
    date: "Il y a 2 mois",
    text: "Cadre magnifique et équipe aux petits soins. C'est plus qu'une coupe, c'est une véritable expérience haut de gamme.",
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-[10rem] font-heading text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-400"></div>
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Témoignages</span>
            <div className="w-8 h-px bg-gold-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
            Avis Clients
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-gray-400">
            <span className="text-white font-bold text-xl">5/5</span> sur Google Maps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-[#111] p-8 border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 font-light italic leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-white font-medium">{review.name}</span>
                <span className="text-gray-500 text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
