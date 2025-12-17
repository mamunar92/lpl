export default function JoinSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the League?</h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Whether you're a seasoned cricketer or a first-time player, LPL welcomes you to step onto the pitch and be
          part of this exciting journey. Let's celebrate the legal community's enduring spirit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/teams/management"
            className="border-2 border-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Learn About Teams
          </a>
        </div>

        {/* Quick Facts */}
        <div className="bg-primary-foreground/10 rounded-xl p-8 border border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold mb-2">2</p>
              <p className="text-primary-foreground/80">Tournament Formats</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">∞</p>
              <p className="text-primary-foreground/80">Passionate Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">1</p>
              <p className="text-primary-foreground/80">Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
