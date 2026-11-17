import Link from "next/link";
import Stats from "@/components/Stats";
import UfrCards from "@/components/UfrCards";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-uag-blanc py-24 md:py-32 flex flex-col items-center justify-center px-4 border-b border-gray-200">
        <div className="max-w-4xl w-full text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-uag-bleu tracking-widest">
            UAG
          </h1>
          
          <div className="h-1 w-32 mx-auto bg-uag-or"></div>

          <h2 className="text-2xl md:text-3xl font-sans text-uag-ocre uppercase tracking-wider">
            Université Africaine du Gabon
          </h2>

          <p className="text-xl md:text-2xl text-uag-gris max-w-2xl mx-auto font-light">
            « Tu rentres pour un diplôme, tu sors avec une entreprise »
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formations" className="px-8 py-4 bg-uag-bleu text-white font-bold rounded-full shadow-lg hover:bg-uag-or hover:text-uag-bleu transition-colors">
              Découvrir les formations
            </Link>
            <Link href="/admission" className="px-8 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Candidater
            </Link>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLES */}
      <Stats />

      {/* LES UFR */}
      <UfrCards />

      {/* BANDEAU CTA FINAL */}
      <section className="bg-gradient-to-r from-uag-bleu via-[#2C477A] to-uag-bleu py-20 text-center px-4 relative overflow-hidden">
        <div className="relative z-10 container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Prêt à rejoindre l'UAG ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez une université tournée vers l'excellence, l'employabilité et le développement du Gabon.
          </p>
          <Link href="/admission" className="inline-block px-10 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-xl hover:scale-105 transition-transform text-lg">
            Lancer ma candidature
          </Link>
        </div>
      </section>
    </div>
  );
}