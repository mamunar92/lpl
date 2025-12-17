export default function RulesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Rules & Guidelines
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Maintaining fairness and integrity in all competitions
          </p>
        </div>
      </section>

      {/* Rules Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tournament Rules */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              LPL Tournament Rules 2025 (Season 1)
            </h2>

            <div className="space-y-4">
              {[
                "A maximum of 32 teams will be allowed to participate in the LPL Tournament 2025 (Season 1).",

                "Each team will play three (3) matches in the group stage. The top two (2) teams from each group will qualify for the Quarter-Finals. Quarter-Finals will follow a knockout format. Winners of the Semi-Finals will compete in the Final Match, while losing teams will play for third place.",

                "Each team must wear their own jersey featuring the official LPL logo, and sports shoes are mandatory.",

                "All matches will consist of 10 (ten) overs per side. A single bowler may bowl a maximum of 3 (three) overs, while other bowlers may bowl a maximum of 2 (two) overs each.",

                "All matches will be played using a Wings Ball wrapped with two (2) layers of tape.",

                "The Man of the Match award will be presented with a crest in every match.",

                "Each team must submit the prescribed form to the Organizing Committee at least 30 minutes before the start of every match.",

                "If any team fails to arrive on time or causes unnecessary delay, the Organizing Committee reserves the right to take appropriate action or make decisions as deemed necessary.",

                "Each group will consist of four (4) teams: two (2) teams from Bar Associations outside Dhaka and two (2) teams representing Dhaka-based Bars, Universities, or Law Chambers. Group placement will be determined through a lottery system. Multiple teams from the same University or Bar will be placed in different groups during the first round.",

                "All matches will be conducted following international cricket rules and will be broadcast live on Facebook and YouTube. Daily match highlights will be uploaded at the end of play.",

                "In case any match cannot be held due to natural calamities or unavoidable circumstances, the Organizing Committee reserves full authority to make necessary decisions.",
              ].map((rule, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 flex gap-4"
                >
                  <span className="text-primary font-bold text-lg">
                    {index + 1}.
                  </span>
                  <p className="text-foreground/80">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What happens in case of weather interruption?",
                a: "Weather-related decisions will be made by the tournament committee following standard cricket protocols. Updates will be communicated to all teams promptly.",
              },
              {
                q: "Are there age restrictions?",
                a: "LPL welcomes legal professionals of all ages. For law students, institutional verification may be required.",
              },
              {
                q: "Can I appeal match official decisions?",
                a: "Appeals must be filed within 30 minutes of the incident. The appeal will be reviewed by the tournament committee.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6"
              >
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
