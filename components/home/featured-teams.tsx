export default function FeaturedTeams() {
  const teams = [
    {
      name: "Bar Association Teams",
      description: "District Bar Associations across Bangladesh",
      image: "team-1",
    },
    {
      name: "Law Chamber Teams",
      description: "Competing law chambers and firms",
      image: "team-2",
    },
    {
      name: "University Teams",
      description: "Private and public university cricket teams",
      image: "team-3",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Featured Teams</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Teams from across the legal community</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-border hover:border-primary transition-colors"
            >
              {/* Image Placeholder */}
              {/* <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=256&width=400&query=professional+cricket+team+${team.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div> */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{team.name}</h3>
                <p className="text-muted-foreground">{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
