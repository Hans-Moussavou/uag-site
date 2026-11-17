"use client"; // Obligatoire pour utiliser useState

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "L'UAG", href: "/uag" },
    { name: "Formations", href: "/formations" },
    { name: "Admission", href: "/admission" },
    { name: "Recherche", href: "/recherche" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-uag-bleu text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo (inchangé) */}
        <Link href="/" className="flex items-center gap-4 group z-50">
          <div className="w-14 h-14 relative flex-shrink-0 rounded-full overflow-hidden bg-white border-2 border-uag-or shadow-sm">
            <Image src="/logo-uag.png" alt="Logo UAG" fill className="object-contain p-1" priority />
          </div>
          <div className="flex flex-col border-l-2 border-uag-or pl-3 py-1">
            <span className="font-serif font-bold text-xl tracking-widest uppercase leading-none text-white">UAG</span>
            <span className="text-[9px] text-uag-or tracking-wider uppercase hidden sm:block mt-1">Université Africaine<br/>du Gabon</span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-sans text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-uag-or transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bouton Candidater Desktop */}
        <div className="hidden md:block ml-4">
          <Link href="/admission" className="px-5 py-2.5 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-md hover:scale-105 transition-transform text-sm whitespace-nowrap">
            Candidater
          </Link>
        </div>

        {/* Bouton Hamburger (Mobile uniquement) */}
        <button 
          className="md:hidden z-50 p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Icône Croix (Fermer)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icône Hamburger (Ouvrir)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Menu Mobile Déroulant (Overlay plein écran) */}
      <div 
        className={`fixed inset-0 bg-uag-bleu z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6`}
      >
        <nav className="flex flex-col space-y-4 font-sans text-lg font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Ferme le menu au clic
              className="border-b border-white/10 pb-4 hover:text-uag-or transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <Link 
            href="/admission" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full text-center shadow-md text-sm uppercase tracking-wider"
          >
            Candidater
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 border-2 border-uag-or text-uag-or font-bold rounded-full text-center hover:bg-uag-or hover:text-uag-bleu transition-colors text-sm uppercase tracking-wider"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </header>
  );
}