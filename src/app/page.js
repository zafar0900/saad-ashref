import "../../public/css/extra.css" 
import "../../public/mistersaadassets/assets/css/extra2.css"
// import "../../public/mistersaadassets/assets/css/layout.css"
import "../../public/mistersaadassets/assets/css/saadashref.css"

import "../../public/mistersaadassets/assets/css/extra.css"
import "../../public/mistersaadassets/assets/css/plugins/odometer.css"
import "../../public/mistersaadassets/assets/css/plugins/swiper.css" 
import "../../public/mistersaadassets/assets/css/vendor/animate.min.css"
// import "../../public/mistersaadassets/assets/css/vendor/bootstrap.min.css"
// import "../../public/mistersaadassets/assets/css/vendor/fontawesome.css"


import Header from "@/components/photo-studio/Header";
import HeroSection from "@/components/photo-studio/Hero";
import AboutSection from "@/components/photo-studio/About";
import AboutSections from "@/components/photo-studio/About-1"; 
import FunfactSection from "@/components/ai-consulting/FunFact"; 
import VideoSection from "@/components/photo-studio/Video";
import Award from "@/components/photo-studio/Award";
import PortfolioSection from "@/components/personal-portfolio/PortfolioSection";
import Brands from "@/components/photo-studio/Brands";
import Services from "@/components/photo-studio/Services";
import Testimonial from "@/components/photo-studio/Testimonial";
import Faq from "@/components/photo-studio/Faq";
import Blog from "@/components/photo-studio/Blog";
import Instagram from "@/components/photo-studio/Instagram";
import Footer from "@/components/webflow-developer/Footer";
import ServiceSection from "@/components/personal-portfolio/ServiceSection";
import AboutMain from "@/components/personal-portfolio/AboutMain";
import Testimonialextra from "@/components/about/Testimonial"; 
import BrandsSection from "@/components/about/BrandsSection";

import ServicesAI from "@/components/ai-consulting/Services";
import ZService from "@/components/zcomponent/zservice/Zservice"
import ServiceSections from "@/components/personal-portfolio/ServiceSection"; 
import HeroMeanSection from "@/components/HeroSection/Hero"; 
import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection"; 
import EventsSection from "@/components/EventsSection/EventsSection"; 
import AwardHome from "../components/awardhome/AwardHome"
import StepsSection from "@/components/StepsSection/StepsSection"

import LightMode from "@/components/LightMode";
import Prism from "@/components/Animated/HeroBackground/Background";

export const metadata = {
  title: "Freelance Graphic Designer Dubai | Logo Designer UAE by Saad",
  description:
    "I am Saad, a Freelance Graphic Designer Dubai & Logo Designer UAE, delivering creative branding, logo, websites, brochures, and social media graphics for your brand.",

  keywords: [
    "Freelance Graphic Designer Dubai",
    "Logo Designer UAE",
    "Graphic Designer Dubai",
    "Branding Designer UAE",
    "Freelance Logo Designer Dubai",
  ], 

  
};
export default function Home() {
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Prism background behind header + hero */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <Prism
            animationType="rotate"
            timeScale={0.3}
            height={7.8}
            baseWidth={8.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1.8}
            noise={0}
            glow={1}
          />
        </div>
        {/* Gradient fade at the bottom into the next section */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: 'linear-gradient(to bottom, transparent, #000)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Header />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HeroMeanSection />
        </div>
      </div>
      <main>
        {/* <AboutSections/> */}
        <AboutHeroSection />
        <HeroSection />
        <EventsSection /> 
        {/* <AboutSection />
        <FunfactSection /> */}

        <ZService /> 
        {/* <PortfolioSection /> */}
        <AwardHome />
        <StepsSection />
         <ServiceSections/>
        
         <AboutMain/>
         <BrandsSection />
         <Testimonialextra />
         <Faq /> 


         {/* <ServicesAI/>
        <PortfolioSection />
        <ServiceSection/>
        <AboutMain/>
        
       */}
       
      </main>
      <Footer />
    </>
  );
}
