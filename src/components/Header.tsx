import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-uag-bleu text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo et Nom */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Un carré doré en attendant le vrai logo SVG */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#F2D06B] to-uag-ocre rounded flex items-center justify-center font-serif font-bold text-uag-bleu text-xl shadow-inner">
            U
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-widest uppercase leading-none">
              UAG
            </span>
            <span className="text-xs text-uag-or tracking-wider">
              Université Africaine du Gabon
            </span>
          </div>
        </Link>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <Link href="/" className="hover:text-uag-or transition-colors">Accueil</Link>
          <Link href="/uag" className="hover:text-uag-or transition-colors">L'UAG</Link>
          <Link href="/formations" className="hover:text-uag-or transition-colors">Formations</Link>
          <Link href="/admission" className="hover:text-uag-or transition-colors">Admission</Link>
          <Link href="/recherche" className="hover:text-uag-or transition-colors">Recherche</Link>
          <Link href="/contact" className="hover:text-uag-or transition-colors">Contact</Link>
        </nav>

        {/* Bouton Candidater */}
        <div className="hidden md:block">
          <Link 
            href="/admission" 
            className="px-5 py-2 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-md hover:scale-105 transition-transform text-sm"
          >
            Candidater
          </Link>
        </div>

      </div>
    </header>
  );
}