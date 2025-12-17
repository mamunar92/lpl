export default function TournamentsSection() {
  const tournaments = [
    {
      name: "T20 Cricket Tournaments",
      type: "Cricket Ball",
      description:
        "Fast-paced, high-energy cricket competitions featuring the best legal professionals",
      features: [
        "Champions Team",
        "Runners Up Team",
        "3rd Place Team",
        "Man of the series",
        "Best Bowler's",
        "Most Run Taker's",
      ],
    },
    {
      name: "T10 Tape Tennis Cricket",
      type: "Tape Tennis",
      description:
        "Innovative tape tennis cricket format bringing excitement and accessibility to all skill levels",
      features: [
        "Champions Team",
        "Runners Up Team",
        "3rd Place Team",
        "Man of the series",
        "Best Bowler's",
        "Most Run Taker's",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Tournaments
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Open to the entire legal community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">{tournament.name}</h3>
                <p className="text-primary-foreground/80 text-sm">
                  {tournament.type}
                </p>
              </div>

              <div className="p-8">
                <p className="text-foreground/80 mb-6">
                  {tournament.description}
                </p>

                <div>
                  <p className="text-sm font-semibold text-primary mb-3">
                    Tournament History:
                  </p>
                  <ul className="space-y-2">
                    {tournament.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-foreground/70"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
