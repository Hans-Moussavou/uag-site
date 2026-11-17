import Link from "next/link";
import Stats from "@/components/Stats";
import UfrCards from "@/components/UfrCards";
import { FadeIn, ScaleIn } from "@/components/Animations"; // Import des animations

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden"> {/* overflow-hidden évite les barres de défilement horizontales */}
      
      {/* HERO SECTION */}
      <section className="bg-uag-blanc py-24 md:py-32 flex flex-col items-center justify-center px-4 border-b border-gray-200 relative">
        {/* Motif de fond (optionnel pour le style) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C59B27 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <FadeIn>
          <div className="max-w-4xl w-full text-center space-y-6 relative z-10">
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
              <Link href="/formations" className="px-8 py-4 bg-uag-bleu text-white font-bold rounded-full shadow-lg hover:bg-uag-or hover:text-uag-bleu transition-all hover:scale-105">
                Découvrir les formations
              </Link>
              <Link href="/admission" className="px-8 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                Candidater
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CHIFFRES CLES - On l'enveloppe pour le faire apparaître */}
      <FadeIn>
        <Stats />
      </FadeIn>

      {/* LES UFR - Animation avec un léger délai */}
      <FadeIn delay={0.2}>
        <UfrCards />
      </FadeIn>

      {/* VIE ETUDIANTE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-uag-bleu mb-4">
                La Vie sur le Campus
              </h2>
              <div className="h-1 w-24 mx-auto bg-uag-or"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎓", title: "Système LMD", desc: "Une organisation en semestres et crédits (CECT) reconnue dans tout l'espace CAMES." },
              { icon: "🤝", title: "Bourses & Aides", desc: "Des dispositifs d'accompagnement financier sont prévus pour soutenir les étudiants." },
              { icon: "📚", title: "Documentation", desc: "Accès à la bibliothèque universitaire et aux ressources numériques pour vos recherches." }
            ].map((item, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="text-center p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 bg-white h-full">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4 text-uag-bleu">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-uag-bleu mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 bg-uag-blanc p-8 rounded-2xl border border-gray-200 text-center text-sm text-gray-600">
              <p className="font-bold text-uag-bleu mb-2">Un cadre de vie strict et bienveillant</p>
              <p>L'UAG est un espace de socialisation et d'épanouissement. Le respect des règles de civisme, d'assiduité et d'intégrité est le gage de votre réussite. La tenue correcte et le respect mutuel sont exigés sur le campus.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BANDEAU CTA FINAL */}
      <FadeIn>
        <section className="bg-gradient-to-r from-uag-bleu via-[#2C477A] to-uag-bleu py-20 text-center px-4 relative overflow-hidden">
          <div className="relative z-10 container mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Prêt à rejoindre l'UAG ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez une université tournée vers l'excellence, l'employabilité et le développement du Gabon.
            </p>
            <Link href="/admission" className="inline-block px-10 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-xl hover:scale-110 transition-transform text-lg">
              Lancer ma candidature
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}