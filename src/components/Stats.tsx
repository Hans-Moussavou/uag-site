export default function Stats() {
  const stats = [
    { number: "5 000+", label: "Étudiants" },
    { number: "3", label: "UFR" },
    { number: "85%", label: "Taux d'insertion" },
    { number: "50+", label: "Partenaires" },
  ];

  return (
    <section className="bg-uag-bleu py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-uag-or mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}