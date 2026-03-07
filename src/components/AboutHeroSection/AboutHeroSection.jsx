"use client";
import { useState } from "react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Experiences4 from "@/components/AboutHeroSection/Experiences4"; 
import Facts2 from "@/components/AboutHeroSection/Facts2";
import { usePathname } from "next/navigation";
import LightRays from '../Animated/About/About';
export default function About1() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section id="About" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* LightRays background behind section content */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="right"
          raysColor="#f0b02c"
          raysSpeed={2.2}
          lightSpread={1.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.8}
          noiseAmount={0.26}
          distortion={0}
          className="custom-rays"
          pulsating
          fadeDistance={1.8}
          saturation={1.8}
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
