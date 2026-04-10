"use client";

import { useState } from "react";

// Remplacez ces chemins par les photos téléchargées depuis Google Maps
// et placez-les dans le dossier 'public' de votre projet (ex: public/gallery/photo1.webp)
const images = [
  "/gallery/photo1.webp",
  "/gallery/photo2.webp",
  "/gallery/photo3.webp",
  "/gallery/photo4.webp",
];

// Fallback images temporarily replacing local ones if missing
const fallbackImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  const [imgSources, setImgSources] = useState([...images]);

  const handleImageError = (index: number) => {
    setImgSources((prev) => {
      const newSources = [...prev];
      newSources[index] = fallbackImages[index % fallbackImages.length];
      return newSources;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-[#050505]">
      <div className="w-full">
        <div className="text-center mb-16 px-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-400"></div>
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Portfolio</span>
            <div className="w-8 h-px bg-gold-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">
            Notre Univers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {imgSources.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-[#111]"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                onError={() => handleImageError(i)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <span className="text-gold-400 text-3xl font-light mb-2">+</span>
                <span className="text-white text-xs uppercase tracking-widest font-medium">Agrandir</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
