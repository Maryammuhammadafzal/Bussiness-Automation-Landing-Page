import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ExpertisePage from "./expertise/page";

export default function Home() {
  return (
   <div className="w-full h-auto overflow-hidden"> 
   <HeroPage/>
   <AboutPage/>
   <ExpertisePage/>
    </div>
  );
}
