import "../../../../public/css/extra.css";
import "../../../../public/css/blog_Detialed.css";

import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import Breadcrumb from "@/components/blog-details/Breadcrumb";
import BlogDetails from "@/components/blog-details/BlogDetails";
import Blog2 from "@/components/blog-details/Blog-2";
import Blog3 from "@/components/blog-details/Blog-3";
import Blog4 from "@/components/blog-details/blog-4";
import Blog5 from "@/components/blog-details/Blog5";
import Blog6 from "@/components/blog-details/Blog6";
import Blog7 from "@/components/blog-details/Blog7";
import Blog8 from "@/components/blog-details/Blog8";
import Blog9 from "@/components/blog-details/Blog-9";
import Blog10 from "@/components/blog-details/Blog-10";
import Blog11 from "@/components/blog-details/Blog-11";
import Blog13 from "@/components/blog-details/Blog-13";
import Blog14 from "@/components/blog-details/Blog-14";
import Blog15 from "@/components/blog-details/Blog-15";
import Blog16 from "@/components/blog-details/Blog-16";
import Blog17 from "@/components/blog-details/Blog-17";
import Blog18 from "@/components/blog-details/Blog-18";
import Blog19 from "@/components/blog-details/Blog-19";
import Blog20 from "@/components/blog-details/Blog-20";


// href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}
import Footer from "@/components/webflow-developer/Footer";

const Meta_keywords = {
  "top-reasons-why-professional-logo-design-in-dubai": {
    title: "Why Professional Logo Design in Dubai Matters for Every Business",
    description:
      "Professional logo design in Dubai builds trust, identity, and business growth. saaddesign creates modern, memorable logos that boost visibility and long-term brand success.",
    focus_keywords: "Professional Logo Design in Dubai",
  },

  "why-startups-prefer-working-with-a-freelance-graphic-designer-dubai": {
    title: 
      "Why Startups Prefer Working with a Freelance Graphic Designer Dubai",
    description:
      "Startups choose freelance graphic designers in Dubai for flexible, affordable, and creative branding. saaddesign delivers fast results and strong visual identity.",
    focus_keywords: "Freelance Graphic Designer Dubai",
  },
  "how-to-choose-a-freelance-graphic-designer-in-dubai": {
    title: 
      "How to Choose a Freelance Graphic Designer in Dubai | Saaddesign",
    description:
      "Learn how to choose a freelance graphic designer in Dubai by reviewing portfolios, experience, pricing, and communication to get the best results.",
    focus_keywords: "Freelance Graphic Designer in Dubai",
  },
  "what-does-a-freelance-graphic-designer-in-dubai-do": {
    title: 
      "What Does a Freelance Graphic Designer in Dubai Do?",
    description:
      "Discover what a freelance graphic designer in Dubai does, from branding and logo design to social media visuals and digital marketing creatives.",
    focus_keywords: "Freelance Graphic Designer in Dubai",
  },
  "what-is-professional-logo-design-and-why-is-it-important": {
    title: 
      "What Is Professional Logo Design and Why Is It Important",
    description:
      "Learn what professional logo design is and why it’s important for building brand identity, trust, recognition, and long-term business success.",
    focus_keywords: " Professional Logo Design",
  },
  "why-do-businesses-in-dubai-need-branding": {
    title: 
      "Why Do Businesses in Dubai Need Branding?",
    description:
      "Discover why branding is essential for businesses in Dubai to build trust, stand out from competitors, and drive long-term growth in a competitive market.",
    focus_keywords: " Branding for Businesses in Dubai",
  },
  "do-i-need-a-logo-before-starting-a-business-in-dubai": {
    title: 
      "Do You Need a Logo Before Starting a Business in Dubai?",
    description:
      "Understand whether a logo is required before starting a business in Dubai and how branding impacts registration, credibility, and customer trust.",
    focus_keywords: " Business Logo Requirement in Dubai",
  },
  "startup-branding-guide-for-dubai-businesses": {
    title: 
      "Startup Branding Guide for Dubai Businesses",
    description:
      "A practical guide for Dubai startups to build strong branding through strategy, identity, design, trust, and digital presence for long-term growth.",
    focus_keywords: " branding design dubai",
  },
  "how-graphic-design-helps-business-growth-in-dubai": {
    title: 
      "How Graphic Design Helps Business Growth in Dubai",
    description:
      "Discover how graphic design drives business growth in Dubai by building trust, boosting engagement, and creating a strong, memorable brand presence.",
    focus_keywords: " Graphic Design Dubai",
  },
  "how-professional-design-helps-businesses-stand-out-in-dubai": {
    title: 
      "How Professional Design Helps Businesses Stand Out in Dubai",
    description:
      "Learn how professional design helps businesses in Dubai stand out by building trust, strengthening brand identity, and attracting the right customers.",
    focus_keywords: " Graphic Design Dubai",
  },
  "graphic-design-trends-in-dubai-2026": {
    title: 
      "Graphic Design Trends in Dubai for 2026",
    description:
      "Explore the top Graphic Design Trends in Dubai for 2026. Stay ahead with innovative, creative, and modern design insights shaping the industry.",
    focus_keywords: " Graphic Design",
  },
  "what-services-does-a-freelance-graphic-designer-offer": {
    title: 
      "Top Services Offered by a Freelance Graphic Designer",
    description:
      "A complete guide to the services of a freelance graphic designer, including branding, logo design, UI/UX, and digital marketing graphics.",
    focus_keywords: " freelance graphic designer services",
  },
  "how-to-know-if-your-logo-needs-a-redesign": {
    title: 
      "How to Know if Your Logo Needs a Redesign",
    description:
      "Learn how to know if your logo needs a redesign. Spot outdated designs, branding issues, and signs your logo no longer fits your business.",
    focus_keywords: " logo redesign",
  },
  "how-does-a-freelance-graphic-designer-work-with-clients-in-dubai": {
    title: 
      "How a Freelance Graphic Designer Works with Clients in Dubai | 2026 Guide",
    description:
      "Discover how a freelance graphic designer in Dubai collaborates with clients, manages projects, communicates effectively, and delivers creative design solutions.",
    focus_keywords: " Freelance Graphic Designer Dubai",
  },
  "top-10-freelance-graphic-designers-in-dubai-2026": {
    title: 
      "Top 10 Freelance Graphic Designers in Dubai 2026",
    description:
      "Looking for top freelance graphic designers in Dubai? Check out our 2026 list featuring experts in branding, illustration, UI/UX, and creative design.",
    focus_keywords: " Freelance graphic designer in Dubai",
  },
  "bilingual-and-arabic-design-significance-in-dubai": {
    title: 
      "Bilingual and Arabic Design Significance in Dubai Explained",
    description:
      "Learn why bilingual and Arabic design is essential in Dubai. Discover how English and Arabic visuals improve branding, reach wider audiences, and boost trust.",
    focus_keywords: " Bilingual and Arabic Design",
  },
  "types-of-logos-explained-which-one-is-right-for-your-business": {
    title: 
      "Types of Logos Explained: Choose the Right Logo for Your Business",
    description:
      "Discover different types of logos and learn how to choose the right logo style that best represents your business identity and brand vision",
    focus_keywords: " Types of Logos for Business",
  },
  "how-logo-and-graphic-design-work-together-in-branding": {
    title: 
      "How Logo and Graphic Design Work Together in Branding",
    description:
      "Discover how logo and graphic design work together in branding to create a strong visual identity, build trust, and make your business stand out in a competitive market.",
    focus_keywords: " Logo and Graphic Design in Branding",
  },
  "ux-design-trends-businesses-should-follow-2026": {
    title: 
      "UX Design Trends Businesses Should Follow in 2026",
    description:
      "Explore the latest UX design trends businesses should follow in 2026 to improve user experience, boost engagement, and increase conversions with modern strategies.",
    focus_keywords: " UX Design Trends 2026",
  },
};

/* ✅ REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return Object.keys(Meta_keywords).map((slug) => ({ slug }));
}

/* ✅ METADATA — MUST BE ASYNC */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const meta = Meta_keywords[slug];

  if (!meta) {
    return {
      title: "Blog Not Found",
      description: "Blog not found",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.focus_keywords,
  };
}

/* ✅ PAGE — MUST BE ASYNC */
export default async function Home({ params }) { 
  const { slug } = await params;

  const BLOG_COMPONENTS = {
    "top-reasons-why-professional-logo-design-in-dubai": BlogDetails,
    "why-startups-prefer-working-with-a-freelance-graphic-designer-dubai":
      Blog2,
    "how-to-choose-a-freelance-graphic-designer-in-dubai":
    Blog3,
    "what-does-a-freelance-graphic-designer-in-dubai-do":
    Blog4,
    "what-is-professional-logo-design-and-why-is-it-important":
    Blog5,
    "why-do-businesses-in-dubai-need-branding":
    Blog6,
    "do-i-need-a-logo-before-starting-a-business-in-dubai":
    Blog7,
    "startup-branding-guide-for-dubai-businesses":
    Blog8,
    "how-graphic-design-helps-business-growth-in-dubai":
    Blog9, 
    "how-professional-design-helps-businesses-stand-out-in-dubai":
    Blog10, 
    "graphic-design-trends-in-dubai-2026":
    Blog11, 
    "what-services-does-a-freelance-graphic-designer-offer":
    Blog13, 
    "how-to-know-if-your-logo-needs-a-redesign":
    Blog14, 
    "how-does-a-freelance-graphic-designer-work-with-clients-in-dubai":
    Blog15, 
     "top-10-freelance-graphic-designers-in-dubai-2026":
    Blog16, 
    "bilingual-and-arabic-design-significance-in-dubai":
    Blog17, 
    "types-of-logos-explained-which-one-is-right-for-your-business":
    Blog18, 
    "how-logo-and-graphic-design-work-together-in-branding":
    Blog19, 
    "ux-design-trends-businesses-should-follow-2026":
    Blog20, 
  };
{/* <a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}> */}
  const BlogComponent = BLOG_COMPONENTS[slug];

  return (
    <LightMode className="bg-isabelline">
      <Header className="bg-isabelline" /> 
      <main>
        {/* <Breadcrumb slug={slug} /> */}

        {BlogComponent ? (
          <BlogComponent slug={slug} />
        ) : (
          <h1 style={{ padding: "80px", textAlign: "center" }}> 
            Blog not found
          </h1>
        )}
      </main>
      <Footer />
    </LightMode>
  );
}
