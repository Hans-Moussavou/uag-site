"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Formations", href: "/formations" },
    { name: "Admission", href: "/admission" },
    { name: "Recherche", href: "/recherche" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-uag-bleu text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-3 md:px-4 py-2 flex justify-between items-center">
        
        {/* Logo et Nom */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group z-50">
          <div className="w-12 h-12 md:w-14 md:h-14 relative flex-shrink-0">
            <Image 
              src="/logo-uag.png" 
              alt="Logo UAG" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
          
          <div className="flex flex-col border-l-2 border-uag-or pl-2 md:pl-3 py-1">
            <span className="font-serif font-bold text-lg md:text-xl tracking-widest uppercase leading-none text-white">
              UAG
            </span>
            {/* Le texte est maintenant TOUJOURS visible, avec une taille adaptée */}
            <span className="text-[8px] md:text-[10px] text-uag-or tracking-wider uppercase mt-1 leading-tight">
              Université Africaine<br/>du Gabon
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-4 lg:gap-6 font-sans text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-uag-or transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bouton Candidater Desktop */}
        <div className="hidden lg:block ml-4">
          <Link href="/admission" className="px-5 py-2.5 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-md hover:scale-105 transition-transform text-sm whitespace-nowrap">
            Candidater
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button 
          className="lg:hidden z-50 p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Menu Mobile Déroulant */}
      <div className={`fixed inset-0 bg-uag-bleu z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col pt-24 px-6`}>
        <nav className="flex flex-col space-y-4 font-sans text-lg font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
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
        </div>
      </div>
    </header>
  );
}