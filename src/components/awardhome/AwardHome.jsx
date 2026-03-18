"use client";

import React, { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    period: "2012 – Present",
    duration: "12+ Years",
    company: "SaadAshraf.net",
    role: "Senior Web Developer / Technical Director",
    desc: "Working with Creative/Digital Agencies as Senior Web Developer and Technical Director. Agencies provide complete client requirements, and I manage end-to-end delivery — including CMS training and client-facing meetings.",
    image: "/assets/expriecntimage/logo2.png",
    clients: [
      "Etihad Towers, Abu Dhabi — Website (English & Arabic)",
      "Al Zahia Holding Company — Website Development",
      "Yanbu Steel, Saudi Arabia — Corporate Website",
      "eXtra, Saudi Arabia — E-Commerce + Mobile App",
      "Atlantis Aquaventure",
      "Beeah School of Environment — Online Student Portal",
      "Palm Jumeirah — Virtual Tour, Tiara Residence",
      "NDK Pizza — iOS App Management",
      "Floor World — E-Commerce + Inventory Integration",
      "Emirates Hills — Virtual Tour for Villa",
      "Jumeirah South Villa — Property Virtual Tours",
      "Al Barari Luxury Villa — Property Virtual Tours",
    ],
  },
  {
    id: 2,
    period: "2010 – 2012",
    duration: "3 Years",
    company: "MintTwist",
    role: "Project Manager, MENA Region",
    desc: "London-headquartered digital agency. Hired to manage all Middle East projects and gained deep exposure to digital marketing while working with some of the region's most prestigious clients.",
    image: "/assets/expriecntimage/MintTwist.png",
    clients: [
      "Abu Dhabi Men's College — Consultancy + RFP",
      "Grand Hyatt Muscat, Oman — iOS Application",
      "Government Summit, Dubai Holding — Website Management",
      "Yanbu Steel, Saudi Arabia — Corporate Website",
      "eXtra, Saudi Arabia — E-Commerce + Mobile App",
      "Bin Hendi — Corporate Website",
    ],
  },
  {
    id: 3,
    period: "2008 – 2010",
    duration: "2 Years",
    company: "Flagship Projects",
    role: "Senior Website Designer · Dubai Media City",
    desc: "Hired for HH Sheikh Majid Bin Mohammed's private office to manage the official website. Outstanding delivery led to further opportunities on high-profile government and enterprise projects.",
    image: "/assets/expriecntimage/Flagship-2CI.png",
    clients: [
      "HH Sheikh Maktoum Bin Mohammed — Website Layout Design",
      "Etisalat 'More Mondays Rewards' — Website Build",
      "Etisalat — Email Marketing Campaign",
      "Dubai Public Prosecution — iPhone Application",
    ],
  },
  {
    id: 4,
    period: "2007 – 2008",
    duration: "1 Year",
    company: "Lotus Educational Institute",
    role: "Web Developer & Instructor · Dubai Knowledge Village",
    desc: "Built and maintained institute websites while delivering professional web development training to international students enrolled at Dubai Knowledge Village.",
    image: "/assets/expriecntimage/Lotuss.png",
    clients: [],
  },
  {
    id: 5,
    period: "2005 – 2006",
    duration: "1 Year",
    company: "Arbico Computers",
    role: "Web Designer · UK",
    desc: "Managed e-commerce websites for a gaming computer distributor in the UK — covering content updates, performance reporting, and eBay channel management.",
    image: "/assets/expriecntimage/Arbico.jpg",
    clients: [],
  },
  {
    id: 6,
    period: "2004 – 2005",
    duration: "1 Year",
    company: "Wiztech",
    role: "Junior Web Designer · Software House",
    desc: "Where it all began. Built my very first website for an education institute — marking the start of a 20+ year journey in digital design and development.",
    image: "/assets/expriecntimage/Wiztech.png",
    clients: [],
  },
];

export default function AwardHome() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  const handleSelect = (index) => {
    if (index === active) return;
    setActive(index);
  };

  return (
    <section className="aw-section">

      {/* ── Dynamic background image ── */}
      {experiences.map((exp, i) => (
        <div
          key={exp.id}
          className={`aw-bg ${i === active ? "aw-bg--visible" : ""}`}
        >
          <Image
            src={exp.image}
            alt={exp.company}
            fill
            className="aw-bg-img"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="aw-overlay" aria-hidden="true" />

      <div className="aw-inner">

        {/* ── SECTION HEADING ── */}
        <div className="aw-section-header">
          <div className="aw-eyebrow">
            <span className="aw-ey-rule" />
            <span className="aw-ey-label">Career Journey</span>
            <span className="aw-ey-rule" />
          </div>
          <h2 className="aw-main-heading lauxery">Work Experience</h2>
          <p className="aw-main-sub">Two decades of digital craftsmanship across the UAE, UK, and beyond.</p>
        </div>

        {/* ── BOTTOM SPLIT ── */}
        <div className="aw-split">

          {/* ── LEFT — full experience content ── */}
          <div className="aw-left">
            <div key={active} className="aw-content-wrap">

              <div className="aw-meta-row">
                <span className="aw-badge">
                  <span className="aw-badge-dot" aria-hidden="true" />
                  {current.period}
                </span>
                <span className="aw-duration-pill">{current.duration}</span>
              </div>

              <h3 className="aw-company lauxery">{current.company}</h3>

              <p className="aw-role">{current.role}</p>

              <p className="aw-desc">{current.desc}</p>

              {current.clients.length > 0 && (
                <div className="aw-clients-block">
                  <p className="aw-clients-label">Notable Clients</p>
                  <ul className="aw-clients">
                    {current.clients.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        {/* ── RIGHT — experience cards ── */}
        <div className="aw-cards-wrap">
          <div className="aw-cards">
            {experiences.map((exp, i) => (
              <button
                key={exp.id}
                className={`aw-card ${i === active ? "aw-card--active" : ""}`}
                onClick={() => handleSelect(i)}
              >
                <div className="aw-card-thumb">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="aw-card-img"
                    sizes="120px"
                  />
                  <div className="aw-card-thumb-overlay" />
                </div>
                <div className="aw-card-info">
                  <span className="aw-card-company">{exp.company}</span>
                  <span className="aw-card-period">{exp.period}</span>
                  <span className="aw-card-duration">{exp.duration}</span>
                </div>
                {i === active && <span className="aw-card-active-dot" aria-hidden="true" />}
              </button>
            ))}
          </div>
        </div>

        </div> {/* closes aw-split */}

      </div> {/* closes aw-inner */}

      <style jsx>{`
        /* ── Section ── */
        .aw-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #07070a;
        }

        /* ── Background images ── */
        .aw-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
          z-index: 0;
        }
        .aw-bg--visible {
          opacity: 1;
        }
        .aw-bg-img {
          object-fit: cover;
          object-position: center;
        }

        /* ── Dark gradient overlay ── */
        .aw-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(7, 7, 10, 0.97) 0%,
            rgba(7, 7, 10, 0.88) 45%,
            rgba(7, 7, 10, 0.55) 100%
          );
          z-index: 1;
        }

        /* ── Inner layout ── */
        .aw-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 48px 90px;
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        /* ── Section heading block ── */
        .aw-section-header {
          text-align: center;
        }

        .aw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .aw-ey-rule {
          display: block;
          width: 36px;
          height: 1px;
          background: linear-gradient(to right, transparent, #f0b02c);
          opacity: 0.55;
        }
        .aw-ey-rule:last-child {
          background: linear-gradient(to left, transparent, #f0b02c);
        }

        .aw-ey-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 4.5px;
          text-transform: uppercase;
          color: #f0b02c;
        }

        .aw-main-heading {
          color: #fff;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.06;
          margin: 0 0 16px;
        }

        .aw-main-sub {
          color: rgba(255, 255, 255, 0.38);
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Bottom split (left + right) ── */
        .aw-split {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 56px;
          align-items: start;
        }

        /* ── Left content ── */
        .aw-left {
          min-width: 0;
        }

        .aw-content-wrap {
          animation: awFadeUp 0.55s ease both;
        }

        @keyframes awFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Meta row: period badge + duration pill ── */
        .aw-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .aw-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(240, 176, 44, 0.08);
          border: 1px solid rgba(240, 176, 44, 0.28);
          color: #f0b02c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 100px;
        }

        .aw-badge-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f0b02c;
          animation: dotBlink 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }

        .aw-duration-pill {
          font-size: 10px;
          font-weight: 700;
          color: #0d0d0d;
          background: #f0b02c;
          padding: 4px 12px;
          border-radius: 100px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .aw-company {
          color: #fff;
          font-size: clamp(28px, 3.5vw, 48px);
          line-height: 1.08;
          margin: 0 0 12px;
        }

        .aw-role {
          font-size: 12px;
          font-weight: 700;
          color: rgba(240, 176, 44, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 20px;
        }

        .aw-desc {
          color: rgba(255, 255, 255, 0.55);
          font-size: 16px;
          font-weight: 700;
          line-height: 1.85;
          margin: 0 0 28px;
          max-width: 560px;
        }

        /* ── Clients block ── */
        .aw-clients-block {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(240, 176, 44, 0.1);
          border-left: 2px solid #f0b02c;
          padding: 20px 24px;
          border-radius: 0 10px 10px 0;
        }

        .aw-clients-label {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #f0b02c;
          margin: 0 0 14px;
        }

        /* ── Clients list ── */
        .aw-clients {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .aw-clients li {
          font-size: 16px;
          color: #fff;
          padding: 5px 0 5px 18px;
          position: relative;
          font-weight:500;
          line-height: 1.5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .aw-clients li::before {
          content: "›";
          position: absolute;
          left: 0;
          top: 4px;
          color: #f0b02c;
          font-size: 16px;
          line-height: 1;
        }

        /* ── Cards column ── */
        .aw-cards-wrap {
          display: flex;
          align-items: center;
        }
        .aw-cards {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        /* ── Individual card ── */
        .aw-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 12px 14px;
          cursor: pointer;
          text-align: left;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
          overflow: hidden;
        }
        .aw-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(-4px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
        .aw-card--active {
          background: rgba(240, 176, 44, 0.1);
          border-color: rgba(240, 176, 44, 0.4);
          box-shadow:
            0 0 0 1px rgba(240, 176, 44, 0.15),
            0 8px 32px rgba(240, 176, 44, 0.08);
        }
        .aw-card--active:hover {
          transform: translateX(0);
        }

        /* ── Card thumbnail ── */
        .aw-card-thumb {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .aw-card-img {
          object-fit: cover;
        }
        .aw-card-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(7, 7, 10, 0.3);
        }
        .aw-card--active .aw-card-thumb-overlay {
          background: rgba(240, 176, 44, 0.12);
        }

        /* ── Card text ── */
        .aw-card-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }
        .aw-card-company {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .aw-card--active .aw-card-company {
          color: #f0b02c;
        }
        .aw-card-period {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.38);
          letter-spacing: 0.3px;
        }
        .aw-card-duration {
          font-size: 10px;
          font-weight: 600;
          color: #0d0d0d;
          background: #f0b02c;
          padding: 2px 8px;
          border-radius: 100px;
          width: fit-content;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── Active dot indicator ── */
        .aw-card-active-dot {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f0b02c;
          box-shadow: 0 0 8px rgba(240, 176, 44, 0.6);
          animation: dotBlink 2.4s ease-in-out infinite;
        }

        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        /* ── Mobile ── */
        @media (max-width: 1024px) {
          .aw-split {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 900px) {
          .aw-inner {
            padding: 80px 24px;
            gap: 44px;
          }
          .aw-section-header {
            text-align: center;
          }
          .aw-clients {
            grid-template-columns: 1fr;
          }
          .aw-overlay {
            background: linear-gradient(
              to bottom,
              rgba(7, 7, 10, 0.95) 0%,
              rgba(7, 7, 10, 0.82) 60%,
              rgba(7, 7, 10, 0.95) 100%
            );
          }
          .aw-cards {
            flex-direction: row;
            overflow-x: auto;
            gap: 12px;
            padding-bottom: 8px;
            scrollbar-width: thin;
            scrollbar-color: rgba(240, 176, 44, 0.3) transparent;
          }
          .aw-card {
            flex-direction: column;
            min-width: 140px;
            max-width: 140px;
            align-items: flex-start;
            padding: 12px;
          }
          .aw-card:hover {
            transform: translateY(-4px) translateX(0);
          }
          .aw-card-thumb {
            width: 100%;
            height: 90px;
          }
          .aw-card-active-dot {
            top: 10px;
            right: 10px;
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .aw-inner {
            padding: 70px 20px;
          }
          .aw-section {
            min-height: auto;
          }
          .aw-main-heading {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
