export default function HighlightsSection() {
  const highlights = [
    {
      title: "Spirit of the Game",
      description:
        "Cricket as a bridge that connects individuals across chambers, firms, and districts through spirited competition and friendly rivalry.",
      icon: "🏏",
    },
    {
      title: "Beyond the Boundary",
      description:
        "A refreshing platform for legal professionals to unwind, engage, and celebrate life beyond legal briefs and case files.",
      icon: "🌟",
    },
    {
      title: "Why LPL Matters",
      description:
        "Creating a legacy that strengthens bonds within the legal fraternity through structured tournaments, training, and inclusive events.",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">At a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              To build a community where the practice of law and the pursuit of wellness go hand in hand—creating an
              environment where legal professionals thrive both inside and outside the courtroom.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
            <p className="text-foreground/80 leading-relaxed">
              To discover and nurture cricketing talent within the legal community. To promote a culture of physical
              fitness, mental well-being, and unity through sportsmanship and teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
