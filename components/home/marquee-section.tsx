export default function MarqueeSection() {
  return (
    <section className="w-full overflow-hidden bg-primary text-primary-foreground py-3">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex gap-12 text-sm sm:text-base font-semibold">
          <span>🏏 Lawyers Premier League (LPL) 2025 – Season 1</span>
          <span>📜 T10 Tap Tennis Cricket Tournament By-Laws</span>
          <span>📝 Registration Deadline: January 10, 2026</span>
          <span>💳 Registration Fee: ৳20,000 (Twenty Thousand Taka)</span>
          <span>🥇 Champion Team Prize: ৳1,80,000</span>
          <span>🥈 Runners-Up Team Prize: ৳1,20,000</span>
          <span>🥉 Third Place Team Prize: ৳50,000</span>
        </div>

        {/* duplicate for seamless loop */}
        <div className="marquee flex gap-12 text-sm sm:text-base font-semibold ml-12">
          <span>🏏 Lawyers Premier League (LPL) 2025 – Season 1</span>
          <span>📜 T10 Tap Tennis Cricket Tournament By-Laws</span>
          <span>📝 Registration Deadline: January 10, 2026</span>
          <span>💳 Registration Fee: ৳20,000 (Twenty Thousand Taka)</span>
          <span>🥇 Champion Team Prize: ৳1,80,000</span>
          <span>🥈 Runners-Up Team Prize: ৳1,20,000</span>
          <span>🥉 Third Place Team Prize: ৳50,000</span>
        </div>

        <div className="marquee flex gap-12 text-sm sm:text-base font-semibold ml-12">
          <span>🏏 Lawyers Premier League (LPL) 2025 – Season 1</span>
          <span>📜 T10 Tap Tennis Cricket Tournament By-Laws</span>
          <span>📝 Registration Deadline: January 10, 2026</span>
          <span>💳 Registration Fee: ৳20,000 (Twenty Thousand Taka)</span>
          <span>🥇 Champion Team Prize: ৳1,80,000</span>
          <span>🥈 Runners-Up Team Prize: ৳1,20,000</span>
          <span>🥉 Third Place Team Prize: ৳50,000</span>
        </div>
      </div>
    </section>
  );
}
