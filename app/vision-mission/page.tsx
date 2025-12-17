export default function VisionMissionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Our direction and purpose in building the legal community
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-xl p-12 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-display font-bold text-primary mb-4">Vision</div>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                To build a community where the practice of law and the pursuit of wellness go hand in hand—creating an
                environment where legal professionals thrive both inside and outside the courtroom.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                LPL aims to redefine how the legal world connects, competes, and collaborates beyond professional
                boundaries. We envision a legal community that is not only professionally accomplished but also
                personally fulfilled through holistic well-being and meaningful relationships.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-12 hover:shadow-xl transition-shadow">
              <div className="text-6xl font-display font-bold text-secondary mb-4">Mission</div>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                We understand the demanding nature of the legal profession—long hours, mental pressure, and limited time
                for recreation. That's why LPL was created with a twofold mission:
              </p>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <p className="text-foreground/80">
                    To discover and nurture cricketing talent within the legal community.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-secondary">2</span>
                  <p className="text-foreground/80">
                    To promote a culture of physical fitness, mental well-being, and unity through sportsmanship and
                    teamwork.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Spirit of the Game */}
          <section className="bg-primary text-primary-foreground rounded-xl p-12 mb-20">
            <h2 className="text-4xl font-bold mb-8">Spirit of the Game</h2>
            <p className="text-lg leading-relaxed mb-6">
              Cricket, for us, is not merely a sport—it's a bridge that connects individuals across chambers, firms, and
              districts. Through spirited competition and friendly rivalry, participants rediscover the essence of
              collaboration, discipline, and respect.
            </p>
            <p className="text-lg leading-relaxed">
              Every over bowled and every run scored is a step toward fostering harmony and balance in professional
              life. The game teaches us about strategy, team dynamics, and the importance of collective effort—lessons
              that directly translate to excellence in legal practice.
            </p>
          </section>

          {/* Beyond the Boundary */}
          <section className="bg-secondary/10 border-2 border-secondary rounded-xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-8">Beyond the Boundary</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We recognize that the demanding nature of legal practice often limits opportunities for recreation and
              self-care. The LPL provides a refreshing platform for legal professionals to unwind, engage, and celebrate
              life beyond legal briefs and case files.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              It's a reminder that strength and success come not only from intellect but also from teamwork, resilience,
              and shared joy. In breaking free from the conventional boundaries of legal work, we discover new
              dimensions of ourselves as individuals and professionals.
            </p>
          </section>

          {/* Why LPL Matters */}
          <section>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why LPL Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Structured Excellence",
                  description:
                    "By organizing tournaments, training programs, and events, we create opportunities for meaningful participation and continuous improvement.",
                },
                {
                  title: "Community Bonds",
                  description:
                    "LPL aspires to create a legacy that strengthens bonds within the legal fraternity, transcending professional hierarchies and rivalries.",
                },
                {
                  title: "Holistic Well-being",
                  description:
                    "We champion a lifestyle where sportsmanship replaces stress and unity replaces isolation, creating a healthier legal community.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in This Movement</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Be part of a growing community that believes in excellence, unity, and the transformative power of sport
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get Involved Today
          </a>
        </div>
      </section>
    </main>
  )
}
