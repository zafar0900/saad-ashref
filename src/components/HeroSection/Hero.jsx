"use client";
import Link from "next/link";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import Contact4 from "@/components/HeroSection/Contact4";
export default function Hero2({ light = false }) {
  const form = useRef();

  useEffect(() => {
    const bannerArea = document.querySelector(".tmp-banner-one-area");
    if (!bannerArea) return;

    const handleMouseMove = (e) => {
      const wx = window.innerWidth;
      const wy = window.innerHeight;

      const x = e.pageX - bannerArea.offsetLeft;
      const y = e.pageY - bannerArea.offsetTop;

      const newx = x - wx / 2;
      const newy = y - wy / 2;

      const animateElements = document.querySelectorAll(".animate-on-hover");

      animateElements.forEach((element) => {
        const speedAttr = element.getAttribute("data-speed");
        const revert = element.hasAttribute("data-revert");

        let speed = parseFloat(speedAttr || "0.02");
        if (revert) speed *= -1;

        gsap.to(element, {
          duration: 1,
          x: newx * speed,
          y: newy * speed,
          ease: "power2.out",
        });
      });
    };

    bannerArea.addEventListener("mousemove", handleMouseMove);

    return () => {
      bannerArea.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", form.current, {
        publicKey: "D79JdTqxXVCcQBXL4",
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Message Sent successfully!", { autoClose: 5000 });
          form.current.reset();
        } else {
          toast.error("Oops! Message not Sent!", { autoClose: 5000 });
        }
      })
      .catch((error) => {
        toast.error(`Error sending message: ${error}`, { autoClose: 5000 });
      });
  };

  return (
    <div className="tmp-banner-one-area add-pattern" id="home" style={{ position: 'relative' }}>
      <div className="separator-animated-border border-top-footer animated-true" style={{ position: 'relative', zIndex: 1 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="banner-one-main-wrapper">
          <div className="row marginTop">
            <div className="col-lg-7 order-lg-1 padding">
            <Link href='https://maps.app.goo.gl/whxtCEsJn14GcDoP6'>
              <div className="tmp-scroll-trigger tmp-fade-in animation-order-1 google-rating-badge style1">
                <div className="svg_image1">
                  <svg
                    width="clamp(18, 4vw, 24)"
                    height="clamp(18, 4vw, 24)"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="svg_image11"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="svg_image12">Google</span>
                </div>

                <div className="rating-divider svg_image13"></div>

                <div className="svg_image14">
                  <span className="svg_image15">4.9/5</span>
                  <div className="svg_image16">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="clamp(14, 3vw, 18)"
                        height="clamp(14, 3vw, 18)"
                        viewBox="0 0 24 24"
                        fill="#FFA500"
                        className="svg_image17"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="reviews-text svg_image18">500+ Reviews</span>
                </div>
              </div>
              </Link>
              <div className="inner"> 
                <span className="hero-title custom_title tmp-scroll-trigger tmp-fade-in animation-order-2  ">
                  Hello, I'm Saad Ashraf,
                </span>
                <h1 className="hero-title    lauxery tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Web Designer Dubai
                </h1>

                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3 svg_image19">
                  A senior-level Web Developer with international experience. Proving consistently successful, effective websites, business, and project delivery skills. Over 18 years of experience working and collaborating with specialist Advertising & Brand agencies throughout the Middle East and Europe. An accomplished communicator with superior analytical and problem-solving skills, and an unrivaled knowledge of Website Development and Web Marketing. A natural networker and presenter with a dynamic presence, and the confidence and enthusiasm to drive businesses forward, recognize new opportunities and technologies, and to manage, develop and build relationships at all levels.

                </p>
                
                
                <div className="tmp-scroll-trigger tmp-fade-in animation-order-4 svg_image20">
                  <div className="svg_image21">
                    {/* ⭐ Green list like image */}
                    <ul className="green-list">
                      <Link href="/graphic-design-dubai">
                        <li>Graphic Design</li>
                      </Link>
                      <Link href="/branding-design-dubai">
                        <li>Branding Design</li>
                      </Link>
                      <Link href="/logo-design-dubai">
                        <li>Logo Design</li>
                      </Link>
                      <Link href="/ui-ux-design-dubai">
                        <li>UI UX Design</li>
                      </Link>
                      <Link href="/web-design-dubai">
                        <li>Web Design</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <div className="contact__form-wrapper">
                <h3 className="title-heading ">
                  Let's Talk About Your Next Project
                </h3>
                <form className="contact__form">
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div className="input-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="input-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="phone no"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group">
                        <textarea
                          name="message"
                          placeholder="message"
                          rows="5"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="common-btn design">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
