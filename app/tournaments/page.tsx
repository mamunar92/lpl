"use client";
import { useState } from "react";

export default function TournamentsPage() {
  type Player = {
    name: string;
    tshirt?: string;
    batting?: string;
    bowling?: string;
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.currentTarget);

    // Convert FormData to structured object
    const payload: {
      teamName: string;
      organization: string;
      captain: string;
      mobile: string;
      players: Player[];
    } = {
      teamName: formData.get("team_name") as string,
      organization: formData.get("organization") as string,
      captain: formData.get("captain_name") as string,
      mobile: formData.get("mobile") as string,
      players: [],
    };

    // Extract players
    for (let i = 1; i <= 13; i++) {
      const name = formData.get(`player_name_${i}`) as string | null;
      if (!name) continue;

      payload.players.push({
        name,
        tshirt: (formData.get(`tshirt_${i}`) as string | null) || "",
        batting: (formData.get(`batting_${i}`) as string | null) || "",
        bowling: (formData.get(`bowling_${i}`) as string | null) || "",
      });
    }

    try {
      const res = await fetch("/api/tournament", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Tournaments
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Celebrating cricketing excellence in the legal community
          </p>
        </div>
      </section>

      {/* Tournaments Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* T20 Cricket */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              T20 Cricket Tournaments
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="text-6xl mb-4">🏏</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Fast-Paced Cricket Action
                  </h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Our signature T20 cricket tournaments feature high-energy
                    matches with top legal professionals competing. Each
                    tournament showcases the best talent from bar associations,
                    law chambers, and universities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground/70">
                        Championship Teams
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground/70">
                        Runner-Up Recognition
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground/70">
                        Match Statistics & Highlights
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground/70">
                        Awards & Trophies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <img src="/Tournament 1.png" alt="LPL" className="w-full" />
            </div>
          </div>

          {/* T10 Tape Tennis */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              T10 Tape Tennis Cricket
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <img src="/Tournament 2.jpg" alt="LPL" className="w-full" />
              <div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="text-6xl mb-4">🏏</div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    Innovative Tape Tennis Format
                  </h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Our T10 Tape Tennis Cricket tournaments bring a modern,
                    accessible format to the legal community. Perfect for
                    players of all skill levels, this innovative format
                    maintains the essence of cricket while being inclusive and
                    fun.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-foreground/70">
                        Multiple Categories
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-foreground/70">
                        Training Sessions Included
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-foreground/70">
                        All Skill Levels Welcome
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-foreground/70">
                        Community Events
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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

          {/* Team Registration Form */}
          <section className="py-20 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                Team Registration Form
              </h2>

              <div className="bg-card border border-border rounded-xl p-8">
                {success && (
                  <p className="text-green-600 font-semibold mt-4">
                    ✅ Team registration submitted successfully!
                  </p>
                )}

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Team Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Name of Team
                      </label>
                      <input
                        type="text"
                        name="team_name"
                        className="w-full border border-border rounded-lg px-4 py-2 bg-background"
                        placeholder="Enter team name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Bar Association / Alumni / University
                      </label>
                      <input
                        type="text"
                        name="organization"
                        className="w-full border border-border rounded-lg px-4 py-2 bg-background"
                        placeholder="Organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Captain / Manager Name
                      </label>
                      <input
                        type="text"
                        name="captain_name"
                        className="w-full border border-border rounded-lg px-4 py-2 bg-background"
                        placeholder="Captain or Manager name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        className="w-full border border-border rounded-lg px-4 py-2 bg-background"
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                  </div>

                  {/* Players Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border border-border rounded-lg overflow-hidden">
                      <thead className="bg-primary text-primary-foreground">
                        <tr>
                          <th className="p-3 text-left">SL</th>
                          <th className="p-3 text-left">Player Name</th>
                          <th className="p-3 text-left">T-Shirt No</th>
                          <th className="p-3 text-left">Batting Style</th>
                          <th className="p-3 text-left">Bowling Style</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 13 }).map((_, index) => (
                          <tr key={index} className="border-t border-border">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">
                              <input
                                type="text"
                                name={`player_name_${index + 1}`}
                                placeholder="Player Name"
                                className="w-full border border-border rounded px-2 py-1 bg-background"
                              />
                            </td>
                            <td className="p-3">
                              <input
                                type="text"
                                name={`tshirt_${index + 1}`}
                                placeholder="T-Shirt No"
                                className="w-full border border-border rounded px-2 py-1 bg-background"
                              />
                            </td>
                            <td className="p-3">
                              <select
                                className="w-full border border-border rounded px-2 py-1 bg-background"
                                name={`batting_${index + 1}`}
                              >
                                <option>RHB</option>
                                <option>LHB</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <input
                                type="text"
                                name={`bowling_${index + 1}`}
                                className="w-full border border-border rounded px-2 py-1 bg-background"
                                placeholder="Fast / Spin"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Submit */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary text-primary-foreground px-10 py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Submit Registration"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Tournament History */}
          <section className="bg-primary/5 border border-primary/10 rounded-xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Tournament History
            </h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Champions & Runner-ups
                </h3>
                <p className="text-foreground/70 mb-4">
                  LPL has hosted multiple successful tournaments showcasing
                  exceptional cricket talent and organizational excellence. Past
                  tournaments have featured intense competition with champion
                  teams crowned in both T20 and T10 formats.
                </p>
                <a
                  href="#"
                  className="text-primary hover:underline font-semibold"
                >
                  View Complete Tournament History →
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Upcoming Tournaments
          </h2>
          <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-8 text-center">
            <p className="text-xl text-foreground/80 mb-6">
              Check back soon for announcements about our upcoming tournaments.
              Follow our social media and website for the latest updates.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
