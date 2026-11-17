import Link from "next/link";
import Image from "next/image";
import UfrCards from "@/components/UfrCards";
import { MotionButton, MotionCard, FadeIn, FadeInStagger, FadeInItem } from "@/components/Animations";
import Pattern from "@/components/Pattern";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden relative">

      {/* 1. HERO SECTION */}
      <section className="bg-uag-blanc py-24 md:py-32 flex flex-col items-center justify-center px-4 border-b border-gray-200 relative">
        <Pattern className="top-10 left-10 w-32 h-32 hidden md:block" />
        <Pattern className="bottom-10 right-10 w-48 h-24 hidden md:block" />

        <div className="max-w-4xl w-full text-center space-y-6 relative z-10">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-uag-bleu tracking-widest">
              UAG
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="h-1 w-32 mx-auto bg-uag-or"></div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className="text-2xl md:text-3xl font-sans text-uag-ocre uppercase tracking-wider">
              Université Africaine du Gabon
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-uag-gris max-w-2xl mx-auto font-light pt-4">
              « Tu rentres pour un diplôme, tu sors avec une entreprise »
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <MotionButton href="/formations" className="px-8 py-4 bg-uag-bleu text-white font-bold rounded-full shadow-lg hover:bg-uag-or hover:text-uag-bleu transition-colors inline-block text-center">
                Découvrir les formations
              </MotionButton>
              <MotionButton href="/admission" className="px-8 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-lg inline-block text-center">
                Candidater
              </MotionButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. SECTION À DEUX COLONNES (Vision) avec le GIF */}
      <section className="bg-white py-20 px-6 relative overflow-hidden">
        <Pattern className="top-20 right-0 w-24 h-64 hidden lg:block" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <FadeIn>
              <div className="space-y-6">
                <span className="text-uag-or font-bold tracking-wider uppercase text-sm">Notre Vision</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-uag-bleu leading-tight">
                  L'UAG, <span className="text-uag-ocre">votre passerelle</span> vers l'excellence
                </h2>
                <p className="text-lg text-gray-600 text-justify">
                  Créée en 2026 et anciennement connue sous l'appellation d'UASPOM, l'UAG est un établissement privé d'enseignement supérieur agréé par l'État. Nous formons des cadres et des techniciens capables de répondre aux défis du développement économique du Gabon et de l'Afrique.
                </p>
                <p className="text-lg text-gray-600 text-justify">
                  Au cœur de notre projet éducatif : l'excellence académique, l'innovation, la professionnalisation et l'employabilité.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[400px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-uag-blanc">
                <img 
                  src="/uag-vision.gif" 
                  alt="Étudiant UAG" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* 3. CHIFFRES CLÉS */}
      <section className="bg-uag-blanc py-16 border-y border-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <FadeInItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-uag-or">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                </div>
                <h3 className="text-4xl font-bold text-uag-bleu mb-2">5 000+</h3>
                <p className="text-gray-500 font-medium">Étudiants formés</p>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-uag-or">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <h3 className="text-4xl font-bold text-uag-bleu mb-2">3</h3>
                <p className="text-gray-500 font-medium">UFR & Pôles d'excellence</p>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-uag-or">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h3 className="text-4xl font-bold text-uag-bleu mb-2">50+</h3>
                <p className="text-gray-500 font-medium">Entreprises partenaires</p>
              </div>
            </FadeInItem>

          </FadeInStagger>
        </div>
      </section>

      {/* 4. MOT DU PRÉSIDENT */}
      <section className="py-20 bg-uag-bleu text-white relative overflow-hidden">
        <Pattern className="bottom-0 left-0 w-64 h-32 hidden md:block opacity-10" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
              <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-uag-or shadow-2xl mb-6 bg-white">
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src="/president.png" 
                    alt="Pr Jean-Louis NKOULOU NKOULOU" 
                    fill 
                    className="object-cover object-top scale-[1.3] translate-y-2" 
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-uag-or">Pr Jean-Louis NKOULOU NKOULOU</h3>
              <p className="text-sm text-gray-300 mt-2">Président de l'Université Africaine du Gabon</p>
            </div>

            <div className="w-full lg:w-2/3 text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Le Mot du Président</h2>
              <div className="h-1 w-20 bg-uag-or mb-8"></div>
              
              <p className="text-gray-200 text-lg italic leading-relaxed mb-6">
                « Fidèle à sa devise "Travail – Savoir – Excellence", l'UAG ambitionne d'être une université attractive et un levier du développement durable. Les objectifs d'employabilité exigent la mise en œuvre de politiques innovantes : "Tu rentres pour un diplôme, tu sors avec une entreprise". »
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Créée en 2026 et anciennement connue sous l'appellation d'UASPOM, l'UAG est un établissement privé d'enseignement supérieur agréé par l'État, engagé dans la formation de cadres scientifiques et de techniciens répondant aux besoins réels du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOS UFR */}
      <UfrCards />

      {/* 6. SECTION "POURQUOI NOUS CHOISIR" */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-uag-bleu mb-4">
                Pourquoi choisir l'UAG ?
              </h2>
              <div className="h-1 w-24 mx-auto bg-uag-or"></div>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Reconnu par l'État", desc: "Un diplôme officiel et reconnu au Gabon et dans l'espace CAMES." },
              { title: "Pédagogie pratique", desc: "Des travaux dirigés, des stages et des projets concrets pour être opérationnel." },
              { title: "Campus moderne", desc: "Un cadre d'apprentissage équipé et propice à la réussite." },
              { title: "Accompagnement", desc: "Un suivi personnalisé pour l'insertion professionnelle de chaque étudiant." }
            ].map((atout, index) => (
              <FadeInItem key={index}>
                <MotionCard className="bg-uag-blanc p-6 rounded-xl border border-gray-100 h-full">
                  <div className="w-10 h-10 rounded-full bg-uag-or/10 text-uag-or flex items-center justify-center mb-4 font-bold">
                    0{index + 1}
                  </div>
                  <h3 className="font-bold text-uag-bleu mb-2">{atout.title}</h3>
                  <p className="text-sm text-gray-600">{atout.desc}</p>
                </MotionCard>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 7. BANDEAU CTA FINAL AVEC L'ÉLÉPHANT ENTIER */}
      <FadeIn>
        <section className="bg-gradient-to-r from-uag-bleu via-[#2C477A] to-uag-bleu py-24 text-center px-4 relative overflow-hidden border-b-4 border-uag-or">
          
          {/* L'éléphant prend toute la hauteur de la section */}
          <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none z-0">
            <Image 
              src="/elephant-uag.png" 
              alt="Éléphant UAG" 
              fill 
              className="object-contain object-left-bottom" // Permet de voir l'éléphant entier, calé à gauche
            />
          </div>
          
          {/* Hachures UNIQUEMENT en haut à droite */}
          <Pattern className="top-0 right-0 w-48 h-48 opacity-40 z-10" />

          <div className="relative z-20 container mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Prêt à rejoindre l'UAG ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Les candidatures pour l'année académique 2026-2027 sont ouvertes.
            </p>
            <MotionButton href="/admission" className="inline-block px-10 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-xl text-lg">
              Lancer ma candidature
            </MotionButton>
          </div>
        </section>
      </FadeIn>

    </div>
  );
}