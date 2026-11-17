import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-uag-bleu text-white py-12 mt-auto border-t-4 border-uag-or">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Colonne 1 : Logo et Infos */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            {/* Logo Footer plus grand */}
            <div className="w-16 h-16 relative rounded-full overflow-hidden bg-white flex-shrink-0 border-2 border-uag-or shadow-sm">
              <Image 
                src="/logo-uag.png" 
                alt="Logo UAG" 
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div className="flex flex-col border-l-2 border-uag-or pl-4 py-1">
              <h3 className="font-serif text-2xl font-bold tracking-widest uppercase text-white leading-none">
                UAG
              </h3>
              <span className="text-[10px] text-uag-or tracking-wider uppercase mt-1">
                Univ. Africaine<br/>du Gabon
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            Campus de Bikele<br />
            Travail — Savoir — Excellence
          </p>
        </div>

        {/* Colonne 2 : Liens utiles */}
        <div>
          <h4 className="font-bold mb-4">Liens utiles</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-uag-or transition-colors">Mentions légales</a></li>
            <li><a href="#" className="hover:text-uag-or transition-colors">Accessibilité (RGAA)</a></li>
            <li><a href="#" className="hover:text-uag-or transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-uag-or transition-colors">Plan du site</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-sm text-gray-300">
            Email : contact@uag.ga<br />
            Téléphone : +241 XX XX XX XX
          </p>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-600 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Université Africaine du Gabon. Tous droits réservés.
      </div>
    </footer>
  );
}