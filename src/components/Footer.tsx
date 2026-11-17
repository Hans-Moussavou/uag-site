export default function Footer() {
  return (
    <footer className="bg-uag-bleu text-white py-12 mt-auto border-t-4 border-uag-or">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Colonne 1 */}
        <div>
          <h3 className="font-serif text-lg font-bold tracking-widest uppercase mb-4 text-uag-or">
            UAG
          </h3>
          <p className="text-sm text-gray-300">
            Université Africaine du Gabon<br />
            Campus de Bikele<br />
            Travail — Savoir — Excellence
          </p>
        </div>

        {/* Colonne 2 */}
        <div>
          <h4 className="font-bold mb-4">Liens utiles</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-uag-or transition-colors">Mentions légales</a></li>
            <li><a href="#" className="hover:text-uag-or transition-colors">Accessibilité (RGAA)</a></li>
            <li><a href="#" className="hover:text-uag-or transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-uag-or transition-colors">Plan du site</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-sm text-gray-300">
            Email : contact@uag.ga<br />
            Téléphone : +241 XX XX XX XX
          </p>
        </div>

      </div>
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-600 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Université Africaine du Gabon. Tous droits réservés.
      </div>
    </footer>
  );
}