import HomeHero from "@/components/HomeHero";
import GuardianIntro from "@/components/GuardianIntro";
import DayTimeline from "@/components/DayTimeline";
import CostAndSteps from "@/components/CostAndSteps";
import GradeNotice from "@/components/GradeNotice";
import DirectorMessage from "@/components/DirectorMessage";
import NoticeList from "@/components/NoticeList";
import CallBand from "@/components/CallBand";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <GuardianIntro />
      <DayTimeline />
      <CostAndSteps />
      <GradeNotice />
      <DirectorMessage />
      <NoticeList />
      <CallBand />
    </>
  );
}
