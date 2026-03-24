import "../../../public/css/extra.css"
import "../../../public/mistersaadassets/assets/css/saadashref.css"


import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import ServiceHero from "@/components/service/ServiceHero";
import Testimonial from "@/components/photo-studio/Testimonial";
import ServiceListing from "@/components/service/PricingSection";
import Footer from "@/components/webflow-developer/Footer";


export const metadata = {
  title: "Graphic, Logo, Branding & UI Design Services Dubai | saaddesign",
  description:
    "Saaddesign offers freelance graphic design services in Dubai, including branding, logo design, UI/UX, and digital visuals for startups and global businesses.",

  keywords: "Digital Design Services Dubai", 

  
}; 

const Home = () => {
  return ( 
    <LightMode> 
      <Header />  
      <main>
        <ServiceHero/> 
        <ServiceListing/> 
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
