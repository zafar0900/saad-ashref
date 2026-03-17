"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    number: "01",
    year: "2024",
    category: "Branding · Web Design",
    title: "Tale of Star",
    desc: "Full brand identity system and digital presence for a premium Dubai real estate firm — from logo creation to a high-converting property website.",
    image: "/assets/project/taleofstar-saaddesign.gif",
    link: "/ysm-real-estate",
  },
  {
    id: 2,
    number: "02",
    year: "2023",
    category: "Art Direction · Strategy",
    title: "Whyte Bespoke Branding",
    desc: "Crafted a refined luxury brand strategy and visual identity system for a high-end bespoke fashion label targeting affluent Dubai clientele.",
    image: "/assets/project/WHYTE BESPOKE - BRANDING BY SAAD DESIGN.webp",
    link: "/whyte-bespoke-branding",
  },
  {
    id: 3,
    number: "03",
    year: "2024",
    category: "Branding · Strategy",
    title: "Arrival Gate Tourism",
    desc: "Developed a cohesive tourism brand identity — logo, brand guidelines, and digital marketing collateral to position the agency in the UAE travel market.",
    image: "/assets/project/ARRIVAL GATE TOURISM By Saad design.jpg",
    link: "/arrival-gate-tourism",
  },
  {
    id: 4,
    number: "04",
    year: "2023",
    category: "Social Media · Design",
    title: "Mazon Tours Social Media",
    desc: "End-to-end social media visual strategy and content design for a growing tours brand — boosting engagement across Instagram and Facebook.",
    image: "/assets/project/MAZON TOURS - SOCIAL MEDIA by SAAD DESIGN.jpg",
    link: "/mazon-tours-social-meida",
  },
  {
    id: 5,
    number: "05",
    year: "2021",
    category: "Mobile App · UI/UX",
    title: "Dubai Tourism Mobile App",
    desc: "Designed and developed a feature-rich mobile application for Dubai Tourism Authority — helping millions of visitors navigate and explore the city.",
    image: "/assets/project/Dubai Tourism - Mobile App by Saad design.webp",
    link: "/dubai-tourism-mobile-app",
  },
];

// Card colours cycle for variety
const CARD_COLORS = ["#0d0d0d", "#0a0f1a", "#0d0d0d", "#0a0f1a", "#0d0d0d"];

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const vh = window.innerHeight;
    const total = projects.length;
    const triggers = [];
    const seg = vh * 0.65; // scroll distance per card — shorter = snappier

    // Slide each card upward during its scroll segment
    cardRefs.current.forEach((card, i) => {
      if (!card || i === total - 1) return;

      const st = gsap.to(card, {
        yPercent: -130,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section,
          start: `top+=${i * seg} top`,
          end: `top+=${(i + 1) * seg} top`,
          scrub: 0.9,
        },
      });
      triggers.push(st.scrollTrigger);
    });

    // Fade header out on first scroll
    const headerEl = section.querySelector(".pj-header");
    if (headerEl) {
      const ht = gsap.to(headerEl, {
        opacity: 0,
        y: -24,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${seg * 0.5}`,
          scrub: true,
        },
      });
      triggers.push(ht.scrollTrigger);
    }

    return () => triggers.forEach((t) => t?.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pj-section"
      style={{ height: `calc(100vh + ${(projects.length - 1) * 65}vh)` }}
    >
      {/* ── Section label (fades out on scroll) ── */}
      <div className="pj-header">
        <span className="pj-badge">Portfolio</span>
        <h2 className="pj-main-title lauxery">Recent Work</h2>
        <p className="pj-main-sub">Scroll to explore selected projects</p>
      </div>

      {/* ── Sticky viewport ── */}
      <div ref={stickyRef} className="pj-sticky">
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="pj-card"
            style={{
              backgroundColor: CARD_COLORS[i % CARD_COLORS.length],
              zIndex: projects.length - i,
            }}
          >
            {/* Left content */}
            <div className="pj-content">
              <div className="pj-meta">
                <span className="pj-num">{project.number}</span>
                <span className="pj-divider" />
                <span className="pj-year">{project.year}</span>
                <span className="pj-cat">{project.category}</span>
              </div>

              <h3 className="pj-title lauxery">{project.title}</h3>
              <p className="pj-desc">{project.desc}</p>

              <Link href={project.link} className="pj-btn">
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Right image */}
            <div className="pj-image-wrap">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="pj-image"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="pj-image-overlay" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* ── Outer section ── */
        .pj-section {
          position: relative;
          background: #000;
        }

        /* ── Floating header ── */
        .pj-header {
          position: sticky;
          top: 0;
          z-index: 100;
          text-align: center;
          padding: 60px 24px 0;
          pointer-events: none;
        }
        .pj-badge {
          display: inline-block;
          background: rgba(240, 176, 44, 0.08);
          border: 1px solid rgba(240, 176, 44, 0.28);
          color: #f0b02c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 6px 20px;
          border-radius: 100px;
          margin-bottom: 14px;
        }
        .pj-main-title {
          color: #fff;
          font-size: clamp(28px, 4vw, 52px);
          margin-bottom: 8px;
        }
        .pj-main-sub {
          color: rgba(255, 255, 255, 0.35);
          font-size: 14px;
          letter-spacing: 1px;
        }

        /* ── Sticky card stack ── */
        .pj-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 32px;
        }

        /* ── Individual card ── */
        .pj-card {
          position: absolute;
          width: 100%;
          max-width: 1140px;
          height: 520px;
          display: grid;
          grid-template-columns: 55% 45%;
          border-radius: 22px;
          overflow: hidden;
          will-change: transform;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.55);
        }

        /* ── Left content side ── */
        .pj-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px 52px;
        }
        .pj-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .pj-num {
          font-size: 13px;
          font-weight: 700;
          color: #f0b02c;
          letter-spacing: 2px;
        }
        .pj-divider {
          width: 1px;
          height: 16px;
          background: rgba(255, 255, 255, 0.2);
        }
        .pj-year {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 500;
        }
        .pj-cat {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3px 12px;
          border-radius: 100px;
        }
        .pj-title {
          color: #fff;
          font-size: clamp(22px, 2.6vw, 38px);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .pj-desc {
          color: rgba(255, 255, 255, 0.48);
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 380px;
        }
        .pj-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f0b02c;
          color: #000;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          width: fit-content;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 0 0 0 rgba(240, 176, 44, 0.3);
        }
        .pj-btn:hover {
          background: #ffcc55;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(240, 176, 44, 0.35);
          color: #000;
        }

        /* ── Right image side ── */
        .pj-image-wrap {
          position: relative;
          overflow: hidden;
        }
        .pj-image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .pj-card:hover .pj-image {
          transform: scale(1.04);
        }
        .pj-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(13, 13, 13, 0.55) 0%,
            transparent 60%
          );
        }

        /* ── Mobile layout ── */
        @media (max-width: 768px) {
          .pj-section {
            height: auto !important;
          }
          .pj-header {
            position: relative;
            padding: 70px 24px 40px;
            opacity: 1 !important;
            transform: none !important;
          }
          .pj-sticky {
            position: relative;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 2px;
            overflow: visible;
          }
          .pj-card {
            position: relative;
            grid-template-columns: 1fr;
            border-radius: 16px;
            margin: 0 16px 16px;
            overflow: hidden;
            transform: none !important;
          }
          .pj-image-wrap {
            height: 220px;
            order: -1;
          }
          .pj-content {
            padding: 28px 24px 32px;
          }
          .pj-desc {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
