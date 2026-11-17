import Link from "next/link";

export default function FormationsPage() {
  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      {/* En-tête de page */}
      <section className="bg-uag-bleu py-16 text-center text-white mb-12 border-b-4 border-uag-or">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Nos Formations
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Découvrez nos cursus LMD (Licence, Master, Doctorat) orientés vers l'employabilité.
        </p>
      </section>

      {/* Conteneur principal */}
      <div className="container mx-auto px-6">
        {/* Barre de recherche / Filtres (visuel pour l'instant) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Rechercher une formation (ex: Finance, Droit...)" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-uag-or"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-uag-or bg-white w-full md:w-auto">
              <option>Tous les niveaux</option>
              <option>Licence</option>
              <option>Master</option>
            </select>
            <button className="px-6 py-3 bg-uag-bleu text-white font-bold rounded-lg hover:bg-uag-or hover:text-uag-bleu transition-colors">
              Filtrer
            </button>
          </div>
        </div>

        {/* Liste des UFR pour naviguer */}
        <h2 className="text-2xl font-serif font-bold text-uag-bleu mb-6">Explorer par UFR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/formations/management" className="bg-white p-6 rounded-xl shadow-md border-t-4 border-ufr-management hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-uag-bleu mb-2">UFR Management</h3>
            <p className="text-sm text-gray-600">Finance, commerce, entrepreneuriat.</p>
          </Link>
          
          <Link href="/formations/juridique" className="bg-white p-6 rounded-xl shadow-md border-t-4 border-ufr-juridique hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-uag-bleu mb-2">UFR Sciences Juridiques</h3>
            <p className="text-sm text-gray-600">Droit, sciences politiques.</p>
          </Link>

          <Link href="/formations/sciences" className="bg-white p-6 rounded-xl shadow-md border-t-4 border-ufr-sciences hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-uag-bleu mb-2">UFR Sciences & Techniques</h3>
            <p className="text-sm text-gray-600">Agropastoral, santé, numérique.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}