import Link from "next/link";

export default function AdmissionPage() {
  const etapes = [
    {
      numero: "1",
      titre: "Choix de la formation",
      description: "Consultez notre catalogue de formations et identifiez le cursus qui correspond à votre projet professionnel.",
      couleur: "bg-ufr-management"
    },
    {
      numero: "2",
      titre: "Dossier de candidature",
      description: "Remplissez le formulaire en ligne et téléversez les pièces justificatives (diplômes, relevés de notes, pièce d'identité).",
      couleur: "bg-ufr-juridique"
    },
    {
      numero: "3",
      titre: "Étude du dossier",
      description: "Votre dossier est examiné par la commission pédagogique de l'UFR concernée. Les résultats sont publiés sous 15 jours.",
      couleur: "bg-ufr-sciences"
    },
    {
      numero: "4",
      titre: "Inscription définitive",
      description: "Une fois admis, procédez au paiement des frais de scolarité et validez votre inscription au campus de Bikele.",
      couleur: "bg-uag-or"
    }
  ];

  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      {/* En-tête */}
      <section className="bg-uag-bleu py-16 text-center text-white mb-16 border-b-4 border-uag-or">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Admission & Candidature
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Rejoignez l'Université Africaine du Gabon en 4 étapes simples.
        </p>
      </section>

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Le parcours en 4 étapes (Capsules) */}
        <h2 className="text-3xl font-serif font-bold text-uag-bleu mb-12 text-center">
          Comment candidater ?
        </h2>

        <div className="relative border-l-4 border-uag-or ml-6 md:ml-12 space-y-12 mb-20">
          {etapes.map((etape, index) => (
            <div key={index} className="relative pl-10 md:pl-16">
              {/* La capsule numérotée */}
              <div className={`absolute -left-8 top-0 w-14 h-14 rounded-full ${etape.couleur} text-white flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-uag-blanc`}>
                {etape.numero}
              </div>
              
              {/* Contenu de l'étape */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-uag-bleu mb-3">{etape.titre}</h3>
                <p className="text-uag-gris leading-relaxed">{etape.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Dates Clés */}
        <div className="bg-uag-bleu text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-uag-or mb-2">Dates clés de la rentrée</h3>
            <p className="text-gray-300">
              Ouverture des candidatures : <strong className="text-white">1er Juillet</strong><br />
              Clôture des candidatures : <strong className="text-white">15 Septembre</strong>
            </p>
          </div>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu font-bold rounded-full shadow-lg hover:scale-105 transition-transform whitespace-nowrap"
          >
            Candidater en ligne
          </Link>
        </div>
      </div>
    </div>
  );
}