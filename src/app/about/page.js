import "../../../public/css/extra.css"

import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import AboutHero from "@/components/about/AboutHero";
import RandomText from "@/components/about/Achievement";
import CardAi from "@/components/about/Experience";
import AboutMe from "@/components/about/Award";
import SkillsSection from "@/components/about/SkillsSection";
import TextRun from "@/components/about/Testimonial";
import BrandsSection from "@/components/about/BrandsSection";
import Footer from "@/components/webflow-developer/Footer";
 
export const metadata = { 
  title: "About saaddesign | 15+ Years of Creative Branding & Digital Design in Dubai",
  description:
    "Learn about saaddesign journey as a freelance designer in Dubai, delivering high-quality branding, logo design, and digital visuals for growing brands.",

  keywords: "reelance Graphic Designer Dubai",  

  
};
const Home = () => { 
  return (  
    <LightMode>
      <Header /> 
      <main>
        <RandomText />
        <CardAi />
        <AboutMe />
        <SkillsSection />
       



      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
