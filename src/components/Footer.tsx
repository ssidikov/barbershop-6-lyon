import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-400 font-light">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-6">
            <Scissors className="w-6 h-6 text-gold-400" />
            <span className="font-heading font-bold text-xl tracking-wider uppercase">Lyon VI</span>
          </div>
          <p className="leading-relaxed mb-6">
            L'excellence du grooming masculin au cœur de Lyon. Une expérience sur-mesure alliant tradition et modernité.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/6th_barbershop?igsh=MWIwZ2VuZGp0eWFyYw==" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-1 md:col-start-3">
          <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Accueil</a></li>
            <li><a href="#about" className="hover:text-gold-400 transition-colors">Le Salon</a></li>
            <li><a href="#services" className="hover:text-gold-400 transition-colors">Prestations</a></li>
            <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Galerie</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-1">
          <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Légal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Politique de Confidentialité</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">CGV</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Lyon Barbershop 6ème. Tous droits réservés.</p>
        <p className="mt-4 md:mt-0">Design & Code par <a href="https://www.sidikoff.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-100 transition-colors">SIDIKOFF DIGITAL</a></p>
      </div>
    </footer>
  );
}
