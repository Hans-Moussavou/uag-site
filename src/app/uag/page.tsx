export default function UagPage() {
  return (
    <div className="bg-uag-blanc min-h-screen pb-20">
      
      {/* En-tête */}
      <section className="bg-uag-bleu py-16 text-center text-white mb-12 border-b-4 border-uag-or">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">L'Université Africaine du Gabon</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Un établissement privé d'enseignement supérieur agréé par l'État, tourné vers l'excellence et l'employabilité.
        </p>
      </section>

      <div className="container mx-auto px-6 max-w-5xl space-y-16">
        
        {/* Présentation */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-uag-bleu mb-4">Notre Présentation</h2>
          <div className="h-1 w-20 bg-uag-or mb-6"></div>
          <p className="text-uag-gris leading-relaxed text-lg text-justify mb-4">
            Créée en 2026 et anciennement connue sous l'appellation d'Université Africaine des Sciences Politiques et de Management (UASPOM), l'UAG est engagée dans la formation initiale et continue des jeunes pour répondre aux défis du développement économique du Gabon et de l'Afrique. 
          </p>
          <p className="text-uag-gris leading-relaxed text-lg text-justify">
            Au cœur de son projet éducatif, l'UAG place l'excellence académique, l'innovation, la professionnalisation et l'employabilité. L'université est également arrimée au Plan National de Croissance et de Développement (PNCD 2026-2030) et aux objectifs du Ministère de l'Enseignement Supérieur.
          </p>
        </section>

        {/* Mot du Président */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-l-4 border-uag-or">
          <h2 className="text-3xl font-serif font-bold text-uag-bleu mb-8 text-center">Le Mot du Président</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 relative flex-shrink-0 rounded-full overflow-hidden border-4 border-uag-or shadow-md">
              {/* Note: Remplacez par la vraie photo du président si vous l'avez */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm text-center p-4">
                Photo du<br/>Pr. Jean-Louis<br/>NKOULOU NKOULOU
              </div>
            </div>
            <div className="text-uag-gris italic text-justify space-y-4">
              <p>
                « La mission principale de l'Université est d'assurer la formation de techniciens et de cadres scientifiques, spécialistes dans tous les domaines, notamment en Productions animales et végétales, en Management, en Sciences politiques, en Génie civil, en Métiers du numérique et du multimédia et en Sciences de l'environnement... »
              </p>
              <p>
                « Fidèle à sa devise "Travail – Savoir – Excellence", l'UAG, résolument engagée dans la culture de l'excellence, ambitionne d'être une université attractive et un levier du développement durable. Les objectifs d'employabilité exigent la mise en œuvre de politiques innovantes : "Tu rentres pour un diplôme, tu sors avec une entreprise". »
              </p>
              <p className="font-bold not-italic text-uag-bleu mt-4 text-right">
                Pr Jean-Louis NKOULOU NKOULOU<br/>
                <span className="text-sm font-normal">Président de l'Université Africaine du Gabon</span>
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Objectifs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-ufr-management">
            <h3 className="text-2xl font-bold text-uag-bleu mb-4">Notre Mission</h3>
            <p className="text-uag-gris text-justify">
              Accompagner le Gouvernement dans la mise en œuvre de sa politique en matière d'enseignement au Gabon, en plaçant l'excellence académique, l'innovation et la professionnalisation au cœur de son projet éducatif.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-ufr-sciences">
            <h3 className="text-2xl font-bold text-uag-bleu mb-4">Nos Objectifs</h3>
            <ul className="text-uag-gris space-y-2 text-sm">
              <li>• Former pour l'emploi et développer des compétences opérationnelles.</li>
              <li>• Favoriser l'innovation et l'entrepreneuriat.</li>
              <li>• Renforcer la compétitivité dans un environnement international.</li>
              <li>• Accompagner le développement du Gabon par le capital humain.</li>
            </ul>
          </div>
        </section>

        {/* Nos Atouts */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-uag-bleu mb-4">Nos Atouts</h2>
          <div className="h-1 w-20 bg-uag-or mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Reconnu par l'État Gabonais",
              "Campus moderne",
              "Stages et immersions",
              "Partenariats entreprises",
              "Conforme aux normes CAMES / CEMAC",
              "Enseignants qualifiés",
              "Pédagogie axée sur la pratique",
              "Accompagnement personnalisé"
            ].map((atout, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center justify-center min-h-[100px] border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-uag-or mb-2"></div>
                <span className="text-sm font-medium text-uag-bleu">{atout}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Valeurs */}
        <section className="bg-uag-bleu text-white p-8 md:p-12 rounded-3xl text-center shadow-lg">
          <h2 className="text-3xl font-serif font-bold text-uag-or mb-8">Nos Valeurs</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Excellence académique", "Professionnalisme", "Intégrité", "Innovation", "Employabilité"].map((valeur, index) => (
              <span key={index} className="px-6 py-2 border border-uag-or rounded-full text-uag-or font-semibold tracking-wider bg-white/5">
                {valeur}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}