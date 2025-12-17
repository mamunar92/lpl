export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About LPL Bangladesh</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Connecting the legal community through the spirit of cricket
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Lawyers' Premier League (LPL)</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Lawyers' Premier League (LPL) is a pioneering initiative that brings together members of the legal
                community through the energising and unifying game of cricket. Designed for lawyers, judges, academics,
                and legal professionals from diverse firms and specialities, the LPL is more than just a sporting
                event—it is a celebration of camaraderie, teamwork, and shared passion.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Rooted in the values of integrity, fairness, and sportsmanship, the league offers a refreshing platform
                where legal professionals can step away from their demanding routines and engage in healthy, spirited
                competition.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The LPL is committed to building a vibrant, inclusive, and memorable sporting culture within the legal
                community—one that thrives both inside and outside the courtroom.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="flex items-center justify-center">
              <img src="/LPL Banner.png" alt="LPL" className="w-full" />
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "⚖️",
                  title: "Integrity",
                  description: "Upholding honesty and ethical conduct in all endeavors",
                },
                { icon: "🎯", title: "Fairness", description: "Ensuring equal opportunity and just treatment for all" },
                {
                  icon: "🏅",
                  title: "Sportsmanship",
                  description: "Competing with respect, grace, and mutual appreciation",
                },
                { icon: "🤝", title: "Unity", description: "Building bonds that transcend professional boundaries" },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Makes LPL Unique</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Professional Excellence</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Hosted by distinguished members of the legal fraternity who understand both the demands of legal
                  practice and the value of athletic pursuits.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Inclusive Community</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Open to all legal professionals regardless of experience level, from beginners to seasoned cricketers,
                  creating a truly welcoming environment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Holistic Growth</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Promoting physical fitness, mental well-being, skill development, and meaningful networking within the
                  legal community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Who Can Participate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bar Associations", description: "District Bar Associations across Bangladesh" },
              { title: "Law Chambers", description: "Private law firms and legal chambers" },
              { title: "Universities", description: "Law students and academic institutions" },
            ].map((category, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{category.title}</h3>
                <p className="text-foreground/80">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
