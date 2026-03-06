"use client";
import { useState } from "react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Experiences4 from "@/components/AboutHeroSection/Experiences4"; 
import Facts2 from "@/components/AboutHeroSection/Facts2";
import { usePathname } from "next/navigation";
 
export default function About1() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section id="About" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* LEFT SIDE */}
          <div>
            <div className="about-image-box">
              <Image
                alt="about"
                src="/assets/saad-images/saad.png"
                width={400}
                height={330}
                className="svg_image30"
              />
            </div>

            <Experiences4 />
          </div>

          {/* RIGHT SIDE */}
          <div>
            <span className="about-badge">About Me</span>

            <h2 className="about-title">Mobile App Development Dubai</h2>

            <p className="about-text">
              Being an Expert App Developer in Dubai, I have worked with
              high-profile organizations including Etihad Towers, Hamdan Sports
              Complex, Yahoo, Jumeirah, and Fujairah Government. These
              collaborations reflect my ability to deliver advanced, reliable,
              and tailored mobile applications.
            </p>

            <Facts2 />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      {pathname === "/" && (
        <div
          className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6 svg_image31"
        >
          <Link
            className="tmp-btn btn-border tmp-modern-button call-to-btn svg_image32"
            href="/about-us"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">Read More  </span>
              <div className="btn-hack" />
              <Image
                alt=""
                className="btn-bg"
                src="/assets/images/button/btg-bg.svg"
                width={195}
                height={56}
              />
              <Image
                alt=""
                className="btn-bg-hover"
                src="/assets/images/button/btg-bg-2.svg"
                width={193}
                height={62}
              />
            </div>
          </Link>


          {/* <Link
            className="tmp-btn btn-border tmp-modern-button call-to-btn svg_image32 marginrighsy "
            href="/get-quote"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">Get a Quote </span>
              <div className="btn-hack" />
              <Image
                alt=""
                className="btn-bg"
                src="/assets/images/button/btg-bg.svg"
                width={195}
                height={56}
              />
              <Image
                alt=""
                className="btn-bg-hover"
                src="/assets/images/button/btg-bg-2.svg"
                width={193}
                height={62}
              />
            </div>
          </Link> */}




          

        </div>
      )}
 
      {/* ================================
               INLINE CSS 
      =================================*/}

    </section>
  );
}
