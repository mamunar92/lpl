export default function AdvisoryPage() {
  const advisoryPanel = [
    // {
    //   name: "Justice Ibtedar Hoque Ifti",
    //   title: "Senior Legal Expert",
    //   image: "/management/Justice Ibtedar Hoque Ifti.jpg",
    // },
    // {
    //   name: "Bar. Nasir Uddin Ahmed Ashim",
    //   title: "Judicial Authority",
    //   image: "/placeholder.svg",
    // },
    {
      name: "Adv. Md. Mosleh Uddin Jashim",
      title: "Senior Advocate",
      image: "/placeholder.svg",
    },
    {
      name: " Adv. Forhad Hossain Nion",
      title: "Legal Academic",
      image: "/placeholder.svg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Advisory Panel
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Distinguished members guiding LPL's strategic direction
          </p>
        </div>
      </section>

      {/* Advisory Panel Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Advisory Board
            </h2>
            <p className="text-lg text-foreground/70">
              Comprised of five distinguished members from the legal and sports
              communities, our advisory panel provides strategic guidance and
              oversight to ensure LPL's continued excellence and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryPanel.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Advisor Image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Advisor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  {/* <p className="text-sm text-secondary font-semibold mb-4">{member.title}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Functions */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Advisory Panel Functions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "📋",
                title: "Strategic Oversight",
                description:
                  "Providing guidance on organizational strategy, governance, and long-term vision",
              },
              {
                icon: "⚖️",
                title: "Legal Guidance",
                description:
                  "Ensuring compliance with legal and regulatory requirements",
              },
              {
                icon: "🎯",
                title: "Performance Review",
                description:
                  "Evaluating organizational performance and recommending improvements",
              },
              {
                icon: "🤝",
                title: "Stakeholder Relations",
                description:
                  "Building and maintaining relationships with key stakeholders and partners",
              },
              {
                icon: "💡",
                title: "Policy Development",
                description:
                  "Contributing to the development of organizational policies and procedures",
              },
              {
                icon: "🏆",
                title: "Excellence Standards",
                description:
                  "Maintaining high standards of integrity and excellence in all operations",
              },
            ].map((func, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="text-4xl mb-4">{func.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {func.title}
                </h3>
                <p className="text-foreground/70">{func.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Impact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Advisory Panel Impact</h2>
          <p className="text-xl text-primary-foreground/90 mb-12">
            Our advisory panel is instrumental in ensuring that LPL maintains
            the highest standards of governance, ethics, and operational
            excellence while driving innovation and sustainable growth within
            the legal community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">5</p>
              <p className="text-primary-foreground/80">
                Distinguished Advisors
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">∞</p>
              <p className="text-primary-foreground/80">Combined Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1</p>
              <p className="text-primary-foreground/80">Shared Vision</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
