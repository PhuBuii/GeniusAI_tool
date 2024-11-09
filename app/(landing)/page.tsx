import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import { LanndingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LanndingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
