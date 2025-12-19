export default function SponsorSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our Proud Sponsors
        </h2>
        <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          We are grateful for the generous support of our sponsors who make the
          Legal Premier League possible. Their commitment to fostering community
          and sportsmanship within the legal profession is truly commendable.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Sponsor Logos */}
          <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
            <span className="text-secondary-foreground/70">
              <img
                src="/sponsor/IK.png"
                alt="IK & Associates"
                className="w-full h-fit"
              />
            </span>
          </div>
          <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-secondary-foreground/70">Sponsor 2</span>
          </div>
          <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-secondary-foreground/70">Sponsor 3</span>
          </div>
          <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-secondary-foreground/70">Sponsor 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
