// app/services/[service]/page.js

import "../../../public/css/extra.css";
import "../../../public/css/service_detailed.css"; 

import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import Breadcrumb from "@/components/service-details/Breadcrumb";
import ServiceDetails from "@/components/service-details/ServiceDetails";
import LogoDesign from "@/components/service-details/logodesign";
import UIUX from "@/components/service-details/uiux";
import WebDesign from "@/components/service-details/webdesign";
import Branding from "@/components/service-details/branding";

import Footer from "@/components/webflow-developer/Footer";
import styles from "yet-another-react-lightbox/styles.css";  

import Portfolio1 from "@/components/portfolio-details/Portfolio1"     
import Portfolio2 from "@/components/portfolio-details/Portfolio2"
import Portfolio3 from "@/components/portfolio-details/Portfolio3"
import Portfolio4 from "@/components/portfolio-details/Portfolio4"
import Portfolio5 from "@/components/portfolio-details/Portfolio5"
import Portfolio6 from "@/components/portfolio-details/Portfolio6"
import Portfolio7 from "@/components/portfolio-details/Portfolio7"
import Portfolio8 from "@/components/portfolio-details/Portfolio8"
import Portfolio9 from "@/components/portfolio-details/Portfolio9"
import Portfolio10 from "@/components/portfolio-details/Portfolio10"



// ⭐ ALL SEO DATA IN ONE PLACE 
const seoData = {
  "graphic-design-dubai": {
    title: "Creative Freelance Graphic Designer Dubai | Saaddesign",
    description:
      "Creative Freelance Graphic Designer Dubai, Saaddesign creates branding logos, websites, social media visuals, brochures, and complete graphic design solutions.",
    keywords: ["Freelance Graphic Designer Dubai"],
  },

  "logo-design-dubai": {
    title: "Creative Logo Design in Dubai | Freelance Logo Designer by Saad",
    description:
      "Creative Logo Design in Dubai by Saad your trusted freelance logo designer delivering modern, unique, and brand-focused designs that elevate your business identity.",
    keywords: ["Logo Design in Dubai"],
  },

  "ui-ux-design-dubai": {
    title: "UI UX Design Dubai | Freelance UI UX Specialist Saad",
    description:
      "Saaddesign offers expert UI UX design in Dubai, creating clean, modern, and user-focused interfaces for websites, mobile apps, dashboards, and digital products.",
    keywords: ["ui ux design dubai"],
  },

  "branding-design-dubai": {
    title: "Best Branding Agency in Dubai | Freelance Brand Designer Saad",
    description:
      "Saaddesign is the best branding agency in Dubai, offering expert freelance brand design, logos, and complete brand identity solutions for businesses.",
    keywords: ["Best Branding Agency in Dubai"],
  },

  "web-design-dubai": {
    title: "Freelance Web Designer Dubai | Creative Websites by Saad",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  // portfolio

  "ysm-real-estate": {
    title: "YSM Real Estate",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "arrival-gate-tourism": {
    title: "ARRIVAL GATE TOURISM",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "mazon-tours-social-meida": {
    title: "MAZON TOURS - SOCIAL MEDIA",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "whyte-bespoke-branding": {
    title: "WHYTE BESPOKE - BRANDING",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "whyte-bespoke": {
    title: "whyte-bespoke",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "dubai-tourism-mobile-app": {
    title: "Dubai Tourism - Mobile App",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "tale-of-stars": {
    title: "TALE OF STARS",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  }, 
  
  "houxo-brand-guidlines": {
    title: "HOUXO - BRAND GUIDLINES",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "rooms-planet-brand-identity-design": {
    title: "Rooms Planet",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },
  "bevfluence-corporate-granding": {
    title: "BEVFLUENCE - CORPORATE BRANDING",
    description:
      "Hire Saad, a freelance web designer in Dubai, to create modern, professional, and responsive websites that engage users and grow your business online.",
    keywords: ["Freelance Web Designer Dubai"],
  },



};

// ⭐ DYNAMIC META BASED ON SLUG

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { service } = await params;

  // Return matching metadata or default
  return (
    seoData[service] || {
      title: "Saaddesign | Creative Design Services in Dubai",
      description: "Explore premium creative design and branding services in Dubai.",
      keywords: ["Design Dubai", "Creative Services Dubai"],
    }
  );
}

export default async function Home({ params }) {

  const { service } = await params;

  return (

    
    <LightMode className="bg-isabelline">
      <Header className="bg-isabelline" />

      <main>


      {service  ==="graphic-design-dubai" && 
        <>
              <Breadcrumb slug={service} />
              <ServiceDetails slug={service} />
        </>
      }
       {service  ==="logo-design-dubai" && 
        <>
              <Breadcrumb slug={service} />
              <LogoDesign slug={service} />
        </>
      }

      {service  === "ui-ux-design-dubai" && 
        <>
              <Breadcrumb slug={service} />
              <UIUX slug={service} />
        </>
      } 

      {service  === "web-design-dubai" && 
        <>
              <Breadcrumb slug={service} />
              <WebDesign slug={service} />
        </>
      }

      {service  === "branding-design-dubai" && 
        <>
              <Breadcrumb slug={service} />
              <Branding slug={service} />
        </>
      }


      {/* Portfolio */}
      {service  === "ysm-real-estate" && 
        <>
              {/* <Breadcrumb slug={service} /> */}
              <Portfolio1  />
        </>
      }
      {service  === "arrival-gate-tourism" && 
        <>
              <Portfolio2  />
        </>
      }
      {service  === "mazon-tours-social-meida" && 
        <>
              <Portfolio3  />
        </>
      }  

      {service  === "whyte-bespoke-branding" && 
        <>
              <Portfolio4  /> 
        </>
      }
      {service  === "whyte-bespoke" && 
        <>
              <Portfolio5  />
        </>
      }
      {service  === "dubai-tourism-mobile-app" && 
        <>
              <Portfolio6  />
        </>
      }
      {service  === "tale-of-stars" && 
        <>
              <Portfolio7  /> 
        </>
      }


    {service  === "houxo-brand-guidlines" && 
        <>
              <Portfolio8  /> 
        </>
      }

      {service  === "rooms-planet-brand-identity-design" && 
        <>
              <Portfolio9  /> 
        </>
      }
      {service  === "bevfluence-corporate-granding" && 
        <>
              <Portfolio10  /> 
        </>
      }



         
      </main>   
      <Footer />
    </LightMode>
  );
}
