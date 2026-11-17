export default function SciencesPage() {
  const domaines = [
    {
      titre: "Santé",
      specialites: ["Soins Infirmiers"],
      cycle: "Licence",
      admission: "Dossier & Concours"
    },
    {
      titre: "Agropastoral",
      specialites: ["Productions animales", "Productions végétales"],
      cycle: "Licence - Master",
      admission: "Dossier & Concours"
    },
    {
      titre: "Technologie de l'Information et de la Communication",
      specialites: ["Génie logiciel", "Génie informatique", "Réseau télécom", "E-commerce", "Web-matering", "Génie civil"],
      cycle: "Licence - Master",
      admission: "Dossier & Concours"
    },
    {
      titre: "Ingénierie Appliquée",
      specialites: ["Génie géologue et minier", "Automobiles et engins lourds", "Ponts et chaussées", "Bâtiments et travaux", "Gestion et technologie"],
      cycle: "Licence - Master",
      admission: "Concours (Bac Scientifique)"
    }
  ];

  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      <section className="bg-ufr-sciences py-16 text-center text-white mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">Domaine des Sciences & Techniques</h1>
        <p className="text-lg opacity-90">Santé, agropastoral, numérique et ingénierie.</p>
      </section>

      <div className="container mx-auto px-6 max-w-5xl space-y-8">
        {domaines.map((domaine, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-l-4 border-ufr-sciences">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-serif font-bold text-uag-bleu">{domaine.titre}</h2>
              <div className="flex gap-4 mt-2 md:mt-0 text-sm">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">{domaine.cycle}</span>
                <span className="bg-uag-or/10 px-3 py-1 rounded-full text-uag-ocre font-medium">{domaine.admission}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {domaine.specialites.map((spec, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ufr-sciences"></div>
                  <span className="text-uag-gris">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}