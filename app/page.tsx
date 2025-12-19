import HeroSection from "@/components/home/hero-section";
import HighlightsSection from "@/components/home/highlights-section";
import TournamentsSection from "@/components/home/tournaments-section";
import JoinSection from "@/components/home/join-section";
import FeaturedTeams from "@/components/home/featured-teams";
import SponsorSection from "@/components/home/sponsor-section";
import MarqueeSection from "@/components/home/marquee-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <MarqueeSection /> */}
      <HighlightsSection />
      <FeaturedTeams />
      <TournamentsSection />
      <SponsorSection />
      <JoinSection />
    </>
  );
}
