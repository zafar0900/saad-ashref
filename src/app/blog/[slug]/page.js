import "../../../../public/css/extra.css";
import "../../../../public/css/blog_Detialed.css";
import "../../../../public/mistersaadassets/assets/css/saadashref.css"

import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import Breadcrumb from "@/components/blog-details/Breadcrumb";
import BlogDetails from "@/components/blog-details/BlogDetails";
import Blog2 from "@/components/blog-details/Blog-2"; 


// href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}
import Footer from "@/components/webflow-developer/Footer";

const Meta_keywords = {
  "top-reasons-why-professional-logo-design-in-dubai": {
    title: "Why Professional Logo Design in Dubai Matters for Every Business",
    description:
      "Professional logo design in Dubai builds trust, identity, and business growth. saaddesign creates modern, memorable logos that boost visibility and long-term brand success.",
    focus_keywords: "Professional Logo Design in Dubai",
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
