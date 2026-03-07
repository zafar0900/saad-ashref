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

import LightMode from "@/components/LightMode";

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
      <Header /> 
      <main>
        {/* <AboutSections/> */}
        <HeroMeanSection /> 
        <AboutHeroSection />
        <HeroSection />
        <EventsSection /> 
        <AboutSection />
        <FunfactSection />

        <ZService /> 
        <PortfolioSection />
         <ServiceSections/>
         <AwardHome />
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
