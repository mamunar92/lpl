export default function SponsorPage() {
  const sponsors = [
    {
      name: "[Name]",
      logo: "/placeholder.svg",
      description:
        "Leading legal advisory firm supporting sports initiatives nationwide.",
    },
    {
      name: "[Name]",
      logo: "/placeholder.svg",
      description:
        "Premium automobile company promoting professional sports culture.",
    },
    {
      name: "[Name]",
      logo: "/placeholder.svg",
      description:
        "Top-tier insurance provider empowering national events and communities.",
    },
    {
      name: "[Name]",
      logo: "/placeholder.svg",
      description:
        "Innovative legal-tech platform bridging law and technology.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Proud Sponsors</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Empowering the legal sports community through partnership
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Sponsor Lawyers' Premier League?
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The Lawyers' Premier League (LPL) brings together lawyers,
                judges, academics, and legal professionals from all over
                Bangladesh. Sponsoring LPL provides your brand with exposure to
                a highly professional and influential audience.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Your partnership helps build a meaningful, competitive, and
                memorable event, enriching the legal fraternity.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Join us in shaping a culture of excellence, unity, and
                sportsmanship.
              </p>
            </div>

            <div className="flex items-center justify-center">
               <img src="logo.png" alt="LPL" className="w-full" />
            </div>
          </div>

          {/* Sponsorship Benefits */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Key Benefits for Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "📢",
                  title: "Brand Visibility",
                  description:
                    "Boost your brand presence across social media, jerseys, banners, and events.",
                },
                {
                  icon: "🤝",
                  title: "Professional Engagement",
                  description:
                    "Connect with lawyers, firms, and institutions across Bangladesh.",
                },
                {
                  icon: "📈",
                  title: "Market Reach",
                  description:
                    "Reach a powerful audience with strong influence in society.",
                },
                {
                  icon: "🏏",
                  title: "Sports Promotion",
                  description:
                    "Support a healthy and competitive sports culture in the legal community.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Tiers */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Sponsorship Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Title Sponsor
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Maximum branding exposure including event title rights and
                  jersey branding.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Gold Sponsor
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Strong visibility on digital media and event banners.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Silver Sponsor
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Event-day branding and social media recognition.
                </p>
              </div>
            </div>
          </div>

          {/* Current Sponsors */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Current Sponsors
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-32 object-contain mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {sponsor.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Become a Sponsor
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Want your brand to shine in the Lawyers' Premier League? Join us
            today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us for Sponsorship
          </a>
        </div>
      </section>
    </main>
  );
}
