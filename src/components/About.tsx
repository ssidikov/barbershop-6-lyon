'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function About() {
  const [bgSrc, setBgSrc] = useState('/gallery/about.webp')
  const fallbackSrc =
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1600&auto=format&fit=crop'
  const features = [
    'Barbiers experts & visagistes',
    'Produits de soins haut de gamme',
    'Ambiance relaxante & intimiste',
    'Conseils personnalisés',
  ]

  return (
    <section id='about' className='py-24 md:py-32 bg-[#050505] relative'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Image Container */}
          <div className='relative h-96 md:h-[600px] w-full'>
            <div className='absolute inset-0 border border-gold-400/30 -translate-x-4 translate-y-4'></div>
            <div className='absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden bg-black'>
              <img
                src={bgSrc}
                alt='Inside the barbershop'
                onError={() => setBgSrc(fallbackSrc)}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Experience Badge */}
            <div className='absolute -bottom-6 -right-6 z-20 bg-gold-500 text-black p-6 md:p-8 flex flex-col items-center justify-center'>
              <span className='text-4xl font-heading font-bold'>10+</span>
              <span className='text-xs uppercase tracking-widest font-bold mt-1 text-center'>
                Années
                <br />
                d&apos;expertise
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-px bg-gold-400'></div>
              <span className='text-gold-400 font-medium tracking-[0.2em] uppercase text-sm'>
                Le Salon
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight uppercase'>
              L&apos;élégance à <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600'>
                l&apos;état brut
              </span>
            </h2>

            <p className='text-gray-400 text-lg mb-6 leading-relaxed font-light'>
              Niché au cœur du 6ème arrondissement de Lyon, notre salon est pensé comme un refuge
              pour l&apos;homme moderne. Un lieu où le temps s&apos;arrête et où l&apos;attention au
              détail règne en maître.
            </p>
            <p className='text-gray-400 text-lg mb-10 leading-relaxed font-light'>
              Nos maîtres barbiers maîtrisent à la perfection l&apos;art du coupe-choux traditionnel
              tout en étant à la pointe des tendances actuelles de la coiffure masculine.
            </p>

            <ul className='mb-12 space-y-4'>
              {features.map((feature, idx) => (
                <li key={idx} className='flex items-center gap-4 text-gray-300'>
                  <span className='flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/10 flex items-center justify-center flex-col'>
                    <Check className='w-4 h-4 text-gold-400' />
                  </span>
                  <span className='tracking-wide'>{feature}</span>
                </li>
              ))}
            </ul>

            <div>
              <div className='mt-4'>
                <p className='text-white font-heading text-xl'>Devid &amp; Ramzi</p>
                <p className='text-gold-400 text-sm uppercase tracking-widest mt-1'>
                  Fondateur &amp; Maître Barbier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
