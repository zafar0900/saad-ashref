export default function sitemap() {
    const baseUrl = "https://www.saaddesign.ae";
  
    // BLOG SLUGS
    const blogPosts = [
      { slug: "top-reasons-why-professional-logo-design-in-dubai" },
      { slug: "why-startups-prefer-working-with-a-freelance-graphic-designer-dubai" },
      { slug: "how-to-choose-a-freelance-graphic-designer-in-dubai" },
      { slug: "what-does-a-freelance-graphic-designer-in-dubai-do" },
      { slug: "what-is-professional-logo-design-and-why-is-it-important" },
      { slug: "why-do-businesses-in-dubai-need-branding" },
      { slug: "startup-branding-guide-for-dubai-businesses" },
      { slug: "do-i-need-a-logo-before-starting-a-business-in-dubai" },
      { slug: "how-professional-design-helps-businesses-stand-out-in-dubai" },
      { slug: "how-graphic-design-helps-business-growth-in-dubai" },
      { slug: "graphic-design-trends-in-dubai-2026" }, 
      { slug: "what-services-does-a-freelance-graphic-designer-offer" },
      { slug: "how-to-know-if-your-logo-needs-a-redesign" },
      { slug: "how-does-a-freelance-graphic-designer-work-with-clients-in-dubai" },
      { slug: "top-10-freelance-graphic-designers-in-dubai-2026" },
      { slug: "bilingual-and-arabic-design-significance-in-dubai" },
      { slug: "types-of-logos-explained-which-one-is-right-for-your-business" },
      { slug: "how-logo-and-graphic-design-work-together-in-branding" },
      { slug: "ux-design-trends-businesses-should-follow-2026" },
      
    ];
  
    // SERVICE SLUGS
    const services = [
      { slug: "graphic-design-dubai" },
      { slug: "logo-design-dubai" },
      { slug: "ui-ux-design-dubai" },
      { slug: "web-design-dubai" },
      { slug: "branding-design-dubai" },

      { slug: "ysm-real-estate" },
      { slug: "arrival-gate-tourism" },
      { slug: "mazon-tours-social-meida" },
      { slug: "whyte-bespoke-branding" },
      { slug: "dubai-tourism-mobile-app" },

      { slug: "tale-of-stars" },
      { slug: "houxo-brand-guidlines" },
      { slug: "rooms-planet-brand-identity-design" },
      { slug: "bevfluence-corporate-granding" },
    ];
  
    // PORTFOLIO SLUGS (NEW)
    const portfolio = [
      { slug: "android-ios-geolocation-app" },
      { slug: "flutter-tourism-travel-app" },
      { slug: "ios-sports-management-with-figma-design" },
      { slug: "flutter-educational-platform-with-sqlite" },
      { slug: "coffee-finder" },
      { slug: "dubai-tourism" },
    ];
  
    // Blog URLs
    const blogUrls = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
    }));
  
    // Service URLs
    const serviceUrls = services.map((service) => ({
      url: `${baseUrl}/${service.slug}`,
      lastModified: new Date(),
    }));
  
    // Portfolio URLs
    // const portfolioUrls = portfolio.map((item) => ({
    //   url: `${baseUrl}/project/${item.slug}`,
    //   lastModified: new Date(),
    // }));
  
    return [
      { url: baseUrl, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      { url: `${baseUrl}/service`, lastModified: new Date() },
      { url: `${baseUrl}/portfolio`, lastModified: new Date() },
      { url: `${baseUrl}/contact`, lastModified: new Date() },
      { url: `${baseUrl}/blog`, lastModified: new Date() },
  
      // BLOG LINKS
      ...blogUrls,
  
      // SERVICE LINKS
      ...serviceUrls,
  
      // PORTFOLIO LINKS
    //   ...portfolioUrls,
    ];
  }
  