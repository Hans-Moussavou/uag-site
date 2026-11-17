import Link from "next/link";
import Image from "next/image";

export default function UfrCards() {
  const ufrs = [
    {
      id: "management",
      title: "UFR Management",
      description: "Commerce international, finance et entrepreneuriat.",
      image: "/ufr-management.jpg",
      color: "text-ufr-management",
      borderColor: "bg-ufr-management",
      link: "/formations/management"
    },
    {
      id: "juridique",
      title: "UFR Sciences Juridiques",
      description: "Droit public et privé, sciences politiques et gouvernance.",
      image: "/ufr-juridique.jpg",
      color: "text-ufr-juridique",
      borderColor: "bg-ufr-juridique",
      link: "/formations/juridique"
    },
    {
      id: "sciences",
      title: "UFR Sciences & Techniques",
      description: "Agropastoral, santé, numérique et environnement.",
      image: "/ufr-sciences.jpg",
      color: "text-ufr-sciences",
      borderColor: "bg-ufr-sciences",
      link: "/formations/sciences"
    }
  ];

  return (
    <section className="py-20 bg-uag-blanc">
      <div className="container mx-auto px-6">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uag-bleu mb-4">
            Nos Unités de Formation
          </h2>
          <div className="h-1 w-24 mx-auto bg-uag-or"></div>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ufrs.map((ufr) => (
            <Link 
              key={ufr.id} 
              href={ufr.link}
              className="group relative block h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900"
            >
              {/* Image de fond */}
              <div className="absolute inset-0">
                <Image
                  src={ufr.image}
                  alt={ufr.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dégradé ajusté : plus sombre en bas pour le texte, transparent en haut pour l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Contenu de la carte */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                
                {/* Petite ligne de couleur UFR */}
                <div className={`w-12 h-1 mb-4 ${ufr.borderColor} transition-all duration-300 group-hover:w-20`}></div>
                
                <h3 className="text-2xl font-bold font-serif mb-2 text-white">
                  {ufr.title}
                </h3>
                
                <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {ufr.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-white group-hover:text-uag-or transition-colors">
                  En Savoir Plus
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}