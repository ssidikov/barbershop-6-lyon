"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const services = [
  {
    category: "Cheveux",
    items: [
      { name: "Shampoing + Coupe + Coiffage ( - 25 ans )", price: "15 €" },
      { name: "Shampoing + Coupe + Coiffage ( + 25 ans )", price: "17 €" },
      { name: "Shampoing + Coupe cheveux long [ passage court ]", price: "20 €" },
      { name: "Shampoing + Coupe + Défrisage + Coiffage", price: "25 €" }
    ]
  },
  {
    category: "Forfait Cheveux et Barbe",
    items: [
      { name: "Shampoing + Coupe + Coiffage / Traçage + Taille de Barbe", price: "25 €" }
    ]
  },
  {
    category: "Barbes",
    items: [
      { name: "Traçage + Taille de barbe", price: "12 €" }
    ]
  },
  {
    category: "Enfants ( - 13 ans )",
    items: [
      { name: "Coupe + Coiffage", price: "13 €" },
      { name: "Coupe cheveux long [ passage court ] + Coiffage", price: "15 €" }
    ]
  },
  {
    category: "Lissages",
    items: [
      { name: "Lissage Brésilien ( Dessus de tête )", price: "50 €" },
      { name: "Lissage Brésilien ( Tête entière )", price: "100 €" }
    ]
  },
  {
    category: "Colorations",
    items: [
      { name: "Coloration", price: "à partir de 30 €" },
      { name: "Mèches", price: "à partir de 30 €" }
    ]
  },
  {
    category: "Soins du visage",
    items: [
      { name: "Soin du Visage Vapeur + Blackmask", price: "15 €" }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold-600/5 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-px bg-gold-400"></div>
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Notre Carte</span>
            <div className="w-8 h-px bg-gold-400"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight"
          >
            Prestations & Tarifs
          </motion.h2>
        </div>

        {/* Masonry or flexible grid for items */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {services.map((section, sectionIdx) => (
            <motion.div 
              key={sectionIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (sectionIdx % 3) * 0.1, duration: 0.8 }}
              className="bg-[#111] p-8 md:p-10 border border-white/5 hover:border-gold-400/20 transition-colors duration-500 break-inside-avoid"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6 pb-4 border-b border-white/10 uppercase tracking-widest text-center">
                {section.category}
              </h3>
              
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-base text-gray-200 font-medium group-hover:text-gold-400 transition-colors pr-2">
                        {item.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-gray-600 relative top-[-4px] opacity-50 group-hover:border-gold-400 transition-colors"></div>
                      <span className="text-lg text-gold-400 font-heading whitespace-nowrap pl-2">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://www.planity.com/6th-barbershop-cours-lafayette-69003-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-gold-400 text-black hover:bg-white font-bold uppercase tracking-widest text-sm transition-all duration-300"
          >
            Réserver sur Planity
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
