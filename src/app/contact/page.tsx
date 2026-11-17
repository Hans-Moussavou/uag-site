export default function ContactPage() {
  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      {/* En-tête */}
      <section className="bg-uag-bleu py-16 text-center text-white mb-12 border-b-4 border-uag-or">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Nous Contacter
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Une question sur nos formations, l'admission ou la vie du campus ? Écrivez-nous.
        </p>
      </section>

      <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Formulaire */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-uag-bleu mb-6">Envoyer un message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-uag-gris mb-1">Nom complet</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-uag-or" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-bold text-uag-gris mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-uag-or" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-uag-gris mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-uag-or" placeholder="Votre message..."></textarea>
            </div>
            <button type="button" className="w-full py-3 bg-uag-bleu text-white font-bold rounded-lg hover:bg-uag-or hover:text-uag-bleu transition-colors">
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-uag-or">
            <h3 className="text-xl font-bold text-uag-bleu mb-4">Campus de Bikele</h3>
            <p className="text-uag-gris">
              Université Africaine du Gabon<br />
              Libreville, Gabon<br />
              BP : XXXXX
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-uag-ocre">
            <h3 className="text-xl font-bold text-uag-bleu mb-4">Contacts utiles</h3>
            <ul className="space-y-2 text-uag-gris">
              <li><strong>Scolarité :</strong> scolarite@uag.ga</li>
              <li><strong>Relations Internationales :</strong> international@uag.ga</li>
              <li><strong>Téléphone :</strong> +241 XX XX XX XX</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}