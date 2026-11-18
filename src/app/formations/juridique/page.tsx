export default function JuridiquePage() {
  const specialites = [
    "Sciences Politiques et Diplomatie",
    "Diplomatie, Paix Internationale et Négociations Stratégiques",
    "Sociologie Politique et Analyse Institutionnelle",
    "Relations Internationales, Défense et Sécurité",
    "Droit Public",
    "Administration des Collectivités Territoriales",
    "Droit Privé",
    "Droit de la Propriété Intellectuelle et des Nouvelles Technologies",
    "Droit de l'Espace Portuaire et Maritime",
    "Fiscalité et Droit des Affaires",
    "Contentieux, Arbitrages, Médiation et modes alternatifs de règlements des conflits"
  ];

  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      
      {/* Section Vidéo */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ufr-juridique.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos.
        </video>
        
        {/* Voile bordeaux léger */}
        <div className="absolute inset-0 bg-ufr-juridique/40"></div>
        
        {/* Texte positionné tout en bas et plus petit */}
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 drop-shadow-lg">
            Domaine des Sciences Juridiques, Politiques et Sociales
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto drop-shadow-md font-medium">
            Droit, diplomatie, gouvernance et relations internationales.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between gap-4 mt-8">
          <div>
            <p className="text-sm text-gray-500 uppercase">Cycle</p>
            <p className="font-bold text-uag-bleu">Licence – Master</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase">Diplôme exigé</p>
            <p className="font-bold text-uag-bleu">Tout Baccalauréat</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase">Admission</p>
            <p className="font-bold text-uag-bleu">Dossier & Concours</p>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-bold text-uag-bleu mb-6">Nos Spécialités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specialites.map((spec, index) => (
            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-ufr-juridique transition-colors">
              <div className="w-2 h-2 rounded-full bg-ufr-juridique"></div>
              <span className="text-uag-gris font-medium">{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}