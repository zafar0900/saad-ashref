import "../../../public/css/extra.css" 

import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import BrandsSection from "@/components/about/BrandsSection";
import Footer from "@/components/webflow-developer/Footer";

export const metadata = {
  title: "Portfolio | Graphic Designer | Saad Design",
};

const Home = () => {
  return (
    <LightMode> 
      <Header />
      <main> 
        <PortfolioHeroSection />    
        <PortfolioSection />
        {/* <BrandsSection/>  */}  
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
