"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-0 flex flex-col lg:flex-row min-h-[600px] border-t border-white/10">
      {/* Contact Info */}
      <div className="w-full lg:w-1/2 bg-[#050505] p-12 md:p-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-400"></div>
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Nous Trouver</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-12">
            Contact & Accès
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-2">Adresse</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  316 Cours Lafayette,<br />
                  69003 Lyon,<br />
                  France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-white/5 flex items-center justify-center border border-white/10">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-2">Horaires</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Lundi - Samedi : 09h00 - 20h00<br />
                  Dimanche : 10h00 - 16h00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 bg-white/5 flex items-center justify-center border border-white/10">
                <Phone className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-2">Téléphone</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  04 12 34 56 78
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
             <a
              href="https://www.planity.com/6th-barbershop-cours-lafayette-69003-lyon"
              target="_blank"
              rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              Réserver sur Planity
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe 
          src="https://maps.google.com/maps?q=6TH%20Barbershop%20Cours%20Lafayette%20Lyon&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          className="absolute inset-0"
        ></iframe>
      </div>
    </section>
  );
}
