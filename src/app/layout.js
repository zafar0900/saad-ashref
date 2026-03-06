// global css File
import "./globals.css";

// bootstrap css File
import "bootstrap/dist/css/bootstrap.min.css";

// swiperJS css File
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

// app scss file
import "@fortawesome/fontawesome-free/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./sass/style.scss";
import "react-modal-video/scss/modal-video.scss";

import WhatsAppFloating from "@/components/WhatsAppFloating";
import AnimationProvider from "@/components/providers/AnimationProvider";
import BackTopTop from "@/components/BackToTop";

import Script from "next/script"; // <-- IMPORTANT 

export const metadata = {
  title: "Saad Design | Designer | Websites | Mobile Apps",
  description:
    "Designer | Websites | Mobile Apps | Digital Marketing | Business Development",
  keywords:
    "Website Development, Mobile Apps, SEO, and Social Media. If you're looking for a web developer dubai",
  creator: "Saad Design",

  icons: {
    icon: "/favico-saaddesign.png",
    shortcut: "/favico-saaddesign.png",
    apple: "/favico-saaddesign.png",
  },

  other: {
    developer: "Saad Design",
    // GOOGLE SITE VERIFICATION (This is correct place)
    "google-site-verification": "yqOn48btBD42MA0C4XK7aQUq16-EACzzPWjDlcERtu4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1S7XWQZRG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1S7XWQZRG');
          `}
        </Script>

        {/* schema */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Organization", "LocalBusiness"],
            "@id": "https://saaddesign.ae/#organization",
            "name": "Saad Design",
            "url": "https://saaddesign.ae/",
            "logo": "https://saaddesign.ae/assets/images/white-logo.png",
            "image": "https://saaddesign.ae/assets/images/white-logo.png",
            "description": "Freelance graphic designer in Dubai specializing in branding, logo design, web design, UI/UX, and complete brand identity packages.",
            "telephone": "+971553486284",
            "priceRange": "AED 300 - AED 5000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "821, Building 2, Bay Square, Business Bay",
              "addressLocality": "Dubai",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.185652123395876,
              "longitude": 55.280226799999994
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.facebook.com/saadashrafdubai",
              "https://www.instagram.com/digitalsaad/",
              "https://www.linkedin.com/in/saadwebdesigner/"
            ]
          },
          {
            "@type": "FAQPage",
            "@id": "https://saaddesign.ae/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I offer branding, logo design, web design, UI/UX design, digital graphics, packaging design, social media branding, and full brand identity packages including color palettes, typography, style guides, and stationery."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get started with your freelance branding service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact me via the website form, email, or social media. We'll discuss your project, goals, and requirements. I'll then send a detailed proposal with scope, timeline, and pricing. After approval, the design process begins with research, concepts, revisions, and final delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer brand identity along with the logo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, full brand identity packages include logo, color palettes, typography guidelines, usage rules, patterns, icons, social media assets, and print-ready stationery for consistent branding."
                }
              },
              {
                "@type": "Question",
                "name": "What is the average cost of hiring a freelance graphic designer in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Costs typically range from AED 300 to AED 5,000 for logo and branding projects, depending on scope and complexity. Full branding or web design packages may cost more."
                }
              },
              {
                "@type": "Question",
                "name": "Can a freelance graphic designer in Dubai work remotely?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most freelance designers work fully remotely using tools like Figma, Adobe Creative Cloud, Zoom, and shared drives for seamless collaboration and feedback."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a professional logo design cost in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Professional logo design starts around AED 300 and can go higher depending on revisions, brand guidelines, and additional assets like stationery or social media kits."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to design a custom logo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A custom logo typically takes 2–5 days, depending on complexity, number of concepts, and revision rounds."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer complete branding packages in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, complete branding packages include logo design, brand guidelines, business cards, letterheads, social media templates, and optional website design elements."
                }
              }
            ]
          }
        ]
      }
    `,
          }}
        />
      </head>

      <body>
        <AnimationProvider>
          {children} <WhatsAppFloating />
        </AnimationProvider>
        <BackTopTop smooth top={100} />
      </body>
    </html>
  );
}
