export default function ManagementPage() {
  const managementTeam = [
    {
      position: "Director Operation, Lawyers Premier League",
      name: "[Name]",
      image: "/placeholder.svg",
    },
    {
      position: "Chief Co-Ordinator, Lawyers Premier League",
      name: "Advocate Shaik Aminur Rahman",
      image: "/placeholder.svg",
    },
    {
      position: "Director Cricket Operation, Lawyers Premier League ",
      name: "[Name]",
      image: "/placeholder.svg",
    },
    {
      position: "Founder & Chief Organizer, Lawyers Premier League",
      name: "Advocate Md. Ibrahim Kholil Rana",
      image: "/management/Md. Ibrahim Kholil Rana.jpg",
    },
    {
      position:
        "Co-Founder & Co-Chief Operation Officer, Lawyers Premier League",
      name: "Advocate Shamiul Islam Prince",
      image: "/placeholder.svg",
    },
    {
      position: "Director Public Relations, Lawyers Premier League",
      name: "[Name]",
      image: "/placeholder.svg",
    },
    {
      position: "President, Lawyers Premier League",
      name: "Bar. Ehsan E Moazzam",
      image: "/placeholder.svg",
    },
    {
      position: "Director Marketing, Lawyers Premier League",
      name: "Mohammad Abdul",
      image: "/placeholder.svg",
    },
    {
      position: "Vice President, Lawyers Premier League",
      name: "Secretary, Lawyers Premier League",
      image: "/placeholder.svg",
    },
    {
      position: "Member",
      name: " Advocate Asia Mahzabin Khan Nisho (Cumilla Bar Association)",
      image: "/management/Asia Mahzabin Khan Nisho.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Management Committee
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            The dedicated team leading Lawyer's Premier League BD
          </p>
        </div>
      </section>

      {/* Management Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Management Committee
            </h2>
            <p className="text-lg text-foreground/70">
              Our management committee comprises experienced legal professionals
              dedicated to building a thriving sporting culture in the legal
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Member Image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-foreground font-semibold text-sm mb-3">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "Pursuing the highest standards in all endeavors",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Working together for shared success",
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Creating new opportunities and approaches",
              },
              {
                icon: "🏆",
                title: "Integrity",
                description: "Maintaining honesty and ethical practices",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-6 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-primary-foreground/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
