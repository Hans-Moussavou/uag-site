import Link from "next/link";

export default function UfrCards() {
  const ufrs = [
    {
      id: "management",
      title: "UFR Management",
      description: "Commerce international, finance et entrepreneuriat.",
      color: "bg-ufr-management",
      hover: "hover:border-ufr-management",
      link: "/formations/management"
    },
    {
      id: "juridique",
      title: "UFR Sciences Juridiques",
      description: "Droit public et privé, sciences politiques et gouvernance.",
      color: "bg-ufr-juridique",
      hover: "hover:border-ufr-juridique",
      link: "/formations/juridique"
    },
    {
      id: "sciences",
      title: "UFR Sciences & Techniques",
      description: "Agropastoral, santé, numérique et environnement.",
      color: "bg-ufr-sciences",
      hover: "hover:border-ufr-sciences",
      link: "/formations/sciences"
    }
  ];

  return (
    <section className="py-20 bg-uag-blanc">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uag-bleu mb-4">
            Nos Unités de Formation
          </h2>
          <div className="h-1 w-24 mx-auto bg-uag-or"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ufrs.map((ufr) => (
            <Link 
              key={ufr.id} 
              href={ufr.link}
              className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-transparent ${ufr.hover} transition-all hover:-translate-y-1 hover:shadow-xl group`}
            >
              <div className={`h-2 w-full ${ufr.color}`}></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-uag-bleu mb-3 group-hover:text-uag-or transition-colors">
                  {ufr.title}
                </h3>
                <p className="text-uag-gris mb-6">
                  {ufr.description}
                </p>
                <div className="flex items-center text-sm font-bold text-uag-ocre">
                  Découvrir les formations
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}