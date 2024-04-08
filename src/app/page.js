import Header from "@/components/Header";
import AppStore from "@/components/AppStore";
import EQbeatsIQ from "../components/EQbeatsIQ";
import SoundsFamiliar from "@/components/SoundsFamiliar";
import MeetAheadCard from "@/components/MeetAheadCard";
import SelfImprovement from "@/components/SelfImprovement";
import BeBestYou from "../components/BeBestYou";
import EverWonder from "../components/EverWonder";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AppStore />
      <EQbeatsIQ />
      <SoundsFamiliar />
      <MeetAheadCard/>
      <SelfImprovement />
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Jobs />
      <Footer />
    </>
  );
}
