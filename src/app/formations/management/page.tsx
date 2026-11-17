export default function ManagementPage() {
  const specialites = [
    "Marketing et commerce international",
    "Transit-Douane",
    "Logistique et Transport",
    "Banque-Finance-Assurance",
    "Comptabilité Contrôle de Gestion",
    "Gestion des Ressources Humaines",
    "Création et Développement des Entreprises",
    "Qualité Hygiène Sécurité Environnement",
    "Administration des Systèmes de Santé",
    "Documentation et Archivistique",
    "Environnement et Développement Durable"
  ];

  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      <section className="bg-ufr-management py-16 text-center text-white mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">Domaine Management des Organisations (DMO)</h1>
        <p className="text-lg opacity-90">Formez-vous aux métiers de la gestion, du commerce et de l'entrepreneuriat.</p>
      </section>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between gap-4">
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
            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <div className="w-2 h-2 rounded-full bg-ufr-management"></div>
              <span className="text-uag-gris font-medium">{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}