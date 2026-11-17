import Link from "next/link";
import Image from "next/image";

export default function UfrCards() {
  const ufrs = [
    {
      id: "management",
      title: "UFR Management",
      description: "Commerce international, finance et entrepreneuriat.",
      image: "/ufr-management.png", 
      category: "Domaine",
      link: "/formations/management"
    },
    {
      id: "juridique",
      title: "UFR Sciences Juridiques",
      description: "Droit public et privé, sciences politiques et gouvernance.",
      image: "/ufr-juridique.png",
      category: "Domaine",
      link: "/formations/juridique"
    },
    {
      id: "sciences",
      title: "UFR Sciences & Techniques",
      description: "Agropastoral, santé, numérique et environnement.",
      image: "/ufr-sciences.png",
      category: "Domaine",
      link: "/formations/sciences"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundColor: '#FAF8F5', // Fond Blanc Parchemin
        // Création du motif de hachures diagonales (très léger)
        backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px'
      }}
    >
      {/* Un voile blanc semi-transparent pour adoucir les hachures (facultatif) */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uag-bleu mb-4">
            Nos Unités de Formation
          </h2>
          <div className="h-1 w-24 mx-auto bg-uag-or"></div>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ufrs.map((ufr) => (
            <Link 
              key={ufr.id} 
              href={ufr.link}
              className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Partie Image */}
              <div className="relative h-[500px] w-full bg-[#f4f4f4] flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-[110%] transition-transform duration-500 group-hover:scale-110 -mb-4">
                  <Image
                    src={ufr.image}
                    alt={ufr.title}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Partie Texte */}
              <div className="p-8 pt-6 flex flex-col flex-grow bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-0.5 bg-uag-or"></span>
                  <span className="text-sm text-gray-500 font-medium">{ufr.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-black uppercase mb-4 tracking-wide">
                  {ufr.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {ufr.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <span className="inline-flex items-center text-uag-or font-bold group-hover:text-uag-ocre transition-colors">
                    En Savoir Plus
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">›</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}