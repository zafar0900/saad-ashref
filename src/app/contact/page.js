import "../../../public/css/extra.css"
import "../../../public/mistersaadassets/assets/css/saadashref.css"


import LightMode from "@/components/LightMode";
import Footer from "@/components/webflow-developer/Footer";
import Header from "@/components/photo-studio/Header";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";

export const metadata = {
  title: "Contact saaddesign | Logo, Branding & UI Designer Dubai",
  description:
    "Connect with saaddesign, a professional freelance graphic designer in Dubai, for logo design, branding, UI, and digital visuals that grow your business.",

  keywords: "Contact saaddesign Dubai", 

  
};

const Home = () => {
  return ( 
    <LightMode>
      <Header/>
      <main>
        <ContactSection/>
       {/*** <FaqSection/> */}
      </main>
      <Footer/>
    </LightMode>
  );
};

export default Home;
