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
import LenisProvider from "@/components/providers/LenisProvider";
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
 
      </head>

      <body>
        <LenisProvider>
          <AnimationProvider>
            {children} <WhatsAppFloating />
          </AnimationProvider>
        </LenisProvider>
        <BackTopTop smooth top={100} />
      </body>
    </html>
  );
}
