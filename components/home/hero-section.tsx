export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Where the Legal Fraternity Meets the Spirit of Cricket
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-light">
          Lawyers' Premier League BD: Celebrating unity, wellness, and sportsmanship within the legal community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Join the League
          </a>
          <a
            href="/about"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          // style={{
          //   backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=cricket+field+legal+professionals)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        ></div>
      </div>
    </section>
  )
}
