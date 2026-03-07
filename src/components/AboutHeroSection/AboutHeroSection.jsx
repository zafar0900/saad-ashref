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
                src="/mistersaadassets/saad.png"
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

            <h2 className="about-title lauxery">Mobile App Development Dubai</h2>

            <p className="about-text">
              Being an Expert App Developer in Dubai, I have worked with
              high-profile organizations including Etihad Towers, Hamdan Sports
              Complex, Yahoo, Jumeirah, and Fujairah Government. These
              collaborations reflect my ability to deliver advanced, reliable,
              and tailored mobile applications.Yahoo, Jumeirah, and Fujairah Government. These collaborations reflect my ability to deliver advanced, reliable, and tailored mobile applications
            </p>

            <Facts2 />
          </div>
        </div>
      </div>

      
 
      {/* ================================
               INLINE CSS 
      =================================*/}

    </section>
  );
}
