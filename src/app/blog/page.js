import "../../../public/css/extra.css"
import "../../../public/mistersaadassets/assets/css/saadashref.css"


import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import BlogHero from "@/components/blog/BlogHero";
import BlogSection from "@/components/blog/BlogSection";
import Footer from "@/components/webflow-developer/Footer";

 
export const metadata = { 
  title: "Design Tips & Trends Dubai – saaddesign Blogs",
  description:
    "Read saaddesign’s blog for tips on graphic design, branding, logo, and UI design in Dubai. Stay updated with trends and creative strategies.",

  keywords: " Design Tips Blog Dubai", 
}


const Home = () => {
  return (
    <LightMode>
      <Header /> 
      <main>  
       
        <BlogSection/>
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
