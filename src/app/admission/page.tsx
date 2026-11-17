import Link from "next/link";

export default function AdmissionPage() {
  const etapes = [
    {
      numero: "1",
      titre: "Paiement des frais d'inscription",
      description: "Effectuez le paiement via Airtel Money en composant le *150#. Conservez précieusement votre code de paiement et votre numéro de transaction.",
      couleur: "bg-ufr-management"
    },
    {
      numero: "2",
      titre: "Inscription en ligne",
      description: "Rendez-vous sur le portail d'inscription de l'UAG muni de votre code de paiement, du numéro de paiement et de votre matricule. Imprimez la fiche d'inscription générée.",
      couleur: "bg-ufr-juridique"
    },
    {
      numero: "3",
      titre: "Validation de la fiche",
      description: "Présentez-vous au service de la Comptabilité avec votre reçu de paiement pour faire valider votre fiche d'inscription.",
      couleur: "bg-ufr-sciences"
    },
    {
      numero: "4",
      titre: "Inscription physique",
      description: "Rendez-vous à la Scolarité centrale avec votre fiche validée et vos documents pour finaliser votre inscription et obtenir votre carte d'étudiant.",
      couleur: "bg-uag-or"
    }
  ];

  const documents = [
    "Une photocopie légalisée du BAC",
    "Les relevés de notes",
    "Les diplômes obtenus (Licence, BTS...)",
    "Un extrait légalisé d'acte de naissance",
    "Une photocopie de la carte nationale d'identité ou passeport",
    "Une photocopie de la carte d'assurance maladie (CNAMGS)",
    "L'imprimé en couleur de la fiche d'inscription en ligne",
    "L'imprimé en couleur du reçu de paiement en ligne",
    "Une copie de la fiche d'orientation",
    "Quatre photos d'identité en couleur, de même tirage"
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
          Procédure d'inscription
        </h2>

        <div className="relative border-l-4 border-uag-or ml-6 md:ml-12 space-y-12 mb-20">
          {etapes.map((etape, index) => (
            <div key={index} className="relative pl-10 md:pl-16">
              <div className={`absolute -left-8 top-0 w-14 h-14 rounded-full ${etape.couleur} text-white flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-uag-blanc`}>
                {etape.numero}
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-uag-bleu mb-3">{etape.titre}</h3>
                <p className="text-uag-gris leading-relaxed">{etape.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Documents à fournir */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 mb-20 border-t-4 border-uag-bleu">
          <h2 className="text-2xl font-serif font-bold text-uag-bleu mb-6 flex items-center gap-3">
            <span className="bg-uag-bleu text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">📄</span>
            Documents à fournir (Première inscription)
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-uag-or mt-2 flex-shrink-0"></div>
                <span className="text-uag-gris">{doc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500 italic bg-blue-50 p-4 rounded-lg">
            N.B. : Vous ne serez considéré comme inscrit qu'après avoir finalisé votre inscription à la Scolarité et obtenu votre fiche d'inscription ou votre carte d'étudiant.
          </p>
        </div>

        {/* Section Tarifs */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-uag-bleu mb-4 text-center">
            Frais de Scolarité
          </h2>
          <p className="text-center text-uag-gris mb-2 font-semibold">Année Académique 2026-2027</p>
          <p className="text-center text-uag-ocre italic mb-8">« Tu rentres pour un diplôme, tu sors avec une entreprise »</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formation Initiale */}
            <div className="bg-white rounded-2xl shadow-md border-t-4 border-uag-bleu overflow-hidden">
              <div className="bg-uag-bleu text-white p-4 text-center font-bold text-xl">Formation Initiale</div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Licence 1</td><td className="p-4 font-bold text-uag-bleu text-right">600.000 FCFA</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Licence 2</td><td className="p-4 font-bold text-uag-bleu text-right">650.000 FCFA</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Licence 3</td><td className="p-4 font-bold text-uag-bleu text-right">750.000 FCFA</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Master 1</td><td className="p-4 font-bold text-uag-bleu text-right">1.300.000 FCFA</td></tr>
                  <tr><td className="p-4 text-uag-gris">Master 2</td><td className="p-4 font-bold text-uag-bleu text-right">1.500.000 FCFA</td></tr>
                </tbody>
              </table>
            </div>

            {/* Formation Continue */}
            <div className="bg-white rounded-2xl shadow-md border-t-4 border-uag-or overflow-hidden">
              <div className="bg-gradient-to-r from-[#F2D06B] via-uag-or to-uag-ocre text-uag-bleu p-4 text-center font-bold text-xl">Formation Continue</div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Licence 1</td><td className="p-4 font-bold text-uag-bleu text-right">650.000 FCFA</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Licence 2</td><td className="p-4 font-bold text-uag-bleu text-right">750.000 FCFA</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Licence 3</td><td className="p-4 font-bold text-uag-bleu text-right">850.000 FCFA</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4 text-uag-gris">Master 1</td><td className="p-4 font-bold text-uag-bleu text-right">1.500.000 FCFA</td></tr>
                  <tr><td className="p-4 text-uag-gris">Master 2</td><td className="p-4 font-bold text-uag-bleu text-right">1.750.000 FCFA</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 text-uag-bleu p-6 rounded-xl border border-blue-100 text-sm">
            <p className="font-bold mb-2">Note importante :</p>
            <p>Ces montants concernent les filières générales. Les frais pour le <strong>Cycle Ingénierie Appliquée</strong> sont différents (à partir de 800.000 FCFA en L1). Des frais d'inscription s'ajoutent à ces montants. Veuillez contacter le service scolarité pour plus de détails.</p>
          </div>
        </div>

        {/* Section Dates Clés */}
        <div className="bg-uag-bleu text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-uag-or mb-2">Dates clés de l'année académique</h3>
            <p className="text-gray-300">
              Rentrée académique : <strong className="text-white">Septembre 2026</strong><br />
              Fin de l'année académique : <strong className="text-white">Samedi 24 juillet 2027</strong><br />
              Rentrée 2027-2028 : <strong className="text-white">Lundi 6 septembre 2027</strong>
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