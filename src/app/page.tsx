
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ExpertisePage from "./expertise/page";
import ChoosePage from "./choose/page";
import FeaturesPage from "./features/page";
import StoriesPage from "./stories/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
   <div className="w-full h-auto overflow-hidden"> 
   <HeroPage/>
   {/* <AboutPage/> */}
   <ExpertisePage/>
   <ChoosePage/>
   <FeaturesPage/>
   <StoriesPage/>
   <ContactPage/>
    </div>
  );
}
