"use client";
import React, { useRef, useEffect } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: 1,
    title: "Discovery & Planning",
    desc: "Deep-dive into your goals, audience and market to map a clear project direction.",
  },
  {
    number: 2,
    title: "Design & Architecture",
    desc: "Wireframes, UI/UX design and system architecture tailored to your brand identity.",
  },
  {
    number: 3,
    title: "Development",
    desc: "Clean, scalable code using modern frameworks for web and mobile platforms.",
  },
  {
    number: 4,
    title: "Testing & Review",
    desc: "Thorough QA, performance audits and client feedback cycles before we go live.",
  },
  {
    number: 5,
    title: "Launch & Growth",
    desc: "Deployment, post-launch support and continuous improvement for lasting success.",
  },
];

// SVG geometry
const TRACK_H = 580;
const TOP_Y    = 195;
const BOT_Y    = 385;
const XS       = [100, 300, 500, 700, 900];

const PATH = [
  `M ${XS[0]},${TOP_Y}`,
  `C ${(XS[0]+XS[1])/2},${TOP_Y} ${(XS[0]+XS[1])/2},${BOT_Y} ${XS[1]},${BOT_Y}`,
  `C ${(XS[1]+XS[2])/2},${BOT_Y} ${(XS[1]+XS[2])/2},${TOP_Y} ${XS[2]},${TOP_Y}`,
  `C ${(XS[2]+XS[3])/2},${TOP_Y} ${(XS[2]+XS[3])/2},${BOT_Y} ${XS[3]},${BOT_Y}`,
  `C ${(XS[3]+XS[4])/2},${BOT_Y} ${(XS[3]+XS[4])/2},${TOP_Y} ${XS[4]},${TOP_Y}`,
].join(" ");

export default function StepsSection() {
  const pathRef     = useRef(null);
  const glowRef     = useRef(null);
  const travelerRef = useRef(null);
  const sectionRef  = useRef(null);
  const cardRefs    = useRef([]);
  const cleanups    = useRef([]);

  useEffect(() => {
    const path     = pathRef.current;
    const glow     = glowRef.current;
    const traveler = travelerRef.current;
    const section  = sectionRef.current;
    if (!path || !section) return;

    const len = path.getTotalLength();

    // Initialise stroke dash
    [path, glow].forEach((el) => {
      if (el) {
        el.style.strokeDasharray  = len;
        el.style.strokeDashoffset = len;
      }
    });

    // Place traveler at start, hidden
    if (traveler) {
      const pt = path.getPointAtLength(0);
      traveler.setAttribute("cx", pt.x);
      traveler.setAttribute("cy", pt.y);
      traveler.setAttribute("opacity", 0);
    }

    // Proxy drives both the line draw and the traveler in one timeline
    const state = { t: 0 };

    const updateVisuals = () => {
      const t = state.t;
      const offset = len * (1 - t);
      if (path)     path.style.strokeDashoffset = offset;
      if (glow)     glow.style.strokeDashoffset = offset;
      if (traveler) {
        const pt = path.getPointAtLength(t * len);
        traveler.setAttribute("cx", pt.x);
        traveler.setAttribute("cy", pt.y);
        traveler.setAttribute("opacity", t > 0.01 ? 1 : 0);
      }
    };

    const lineTl = gsap.timeline({ repeat: -1, repeatDelay: 3, paused: true });
    lineTl.fromTo(
      state,
      { t: 0 },
      { t: 1, duration: 2.4, ease: "power2.inOut", onUpdate: updateVisuals }
    );

    // Play/pause on scroll visibility
    const st1 = ScrollTrigger.create({
      trigger: section,
      start: "top 72%",
      end: "bottom top",
      onEnter:      () => lineTl.play(),
      onLeaveBack:  () => lineTl.pause(),
      onLeave:      () => lineTl.pause(),
      onEnterBack:  () => lineTl.play(),
    });
    cleanups.current.push(st1);

    // Card reveal — alternate slide from top / bottom
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const isTop = i % 2 === 0;
      gsap.set(el, { opacity: 0, y: isTop ? -40 : 40 });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.16,
          }),
        onLeaveBack: () =>
          gsap.to(el, { opacity: 0, y: isTop ? -40 : 40, duration: 0.3 }),
      });
      cleanups.current.push(st);
    });

    return () => {
      lineTl.kill();
      cleanups.current.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="sp-section">

      {/* ── Background layers ── */}
      <div className="sp-bg-grid"    aria-hidden="true" />
      <div className="sp-bg-radial"  aria-hidden="true" />

      <div className="sp-inner">

        {/* ── Header ── */}
        <div className="sp-header">
          <span className="sp-badge">How It Works</span>
          {/* split-text up → global GSAP hook animates chars on scroll */}
          <h2 className="sp-heading split-text up">Our Creative Process</h2>
          <p className="sp-sub fade_bottom">
            Five focused steps — from first conversation to a live product that performs.
          </p>
        </div>

        {/* ── Desktop zig-zag track ── */}
        <div className="sp-track">

          <svg
            className="sp-svg"
            viewBox={`0 0 1000 ${TRACK_H}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* Outer glow */}
            <path
              ref={glowRef}
              d={PATH}
              stroke="#f0b02c"
              strokeWidth="18"
              strokeOpacity="0.07"
              strokeLinecap="round"
            />
            {/* Mid glow */}
            <path
              d={PATH}
              stroke="#f0b02c"
              strokeWidth="6"
              strokeOpacity="0.06"
              strokeLinecap="round"
            />
            {/* Main animated line */}
            <path
              ref={pathRef}
              d={PATH}
              stroke="#f0b02c"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Anchor dots at each step */}
            {XS.map((x, i) => {
              const y = i % 2 === 0 ? TOP_Y : BOT_Y;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="26" fill="#f0b02c" fillOpacity="0.05" />
                  <circle cx={x} cy={y} r="14" fill="#f0b02c" fillOpacity="0.12" />
                  <circle cx={x} cy={y} r="6"  fill="#f0b02c" />
                  <circle cx={x} cy={y} r="2.5" fill="#0a0a0a" />
                </g>
              );
            })}

            {/* Traveler — moves along the path */}
            <g ref={travelerRef}>
              <circle r="14" fill="#f0b02c" fillOpacity="0.18" />
              <circle r="7"  fill="#f0b02c" />
              <circle r="3"  fill="#fff"    fillOpacity="0.8" />
            </g>
          </svg>

          {/* Step cards overlaid on the SVG */}
          {steps.map((step, i) => {
            const isTop = i % 2 === 0;
            return (
              <div
                key={step.number}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`sp-card ${isTop ? "sp-card--top" : "sp-card--bot"}`}
                style={{ left: `${XS[i] / 10}%` }}
              >
                <div className="sp-num">
                  <CountUp
                    end={step.number}
                    duration={1.4}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <h4 className="sp-title">{step.title}</h4>
                <p className="sp-desc">{step.desc}</p>

                {/* Gold accent corner */}
                <span className="sp-corner" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* ── Mobile vertical list ── */}
        <div className="sp-mobile">
          {steps.map((step, i) => (
            <div key={step.number} className="sp-mob-item fade_bottom">
              <div className="sp-mob-left">
                <div className="sp-num">
                  <CountUp end={step.number} duration={1.4} enableScrollSpy scrollSpyOnce />
                </div>
                {i < steps.length - 1 && <div className="sp-mob-line" />}
              </div>
              <div className="sp-mob-content">
                <h4 className="sp-title">{step.title}</h4>
                <p className="sp-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`

        /* ════════════════════════════════════════
           SECTION
        ════════════════════════════════════════ */
        .sp-section {
          background: #050505;
          padding: 130px 0 150px;
          overflow: hidden;
          position: relative;
        }
     

        /* Dot-grid texture */
        .sp-bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.028) 1px,
            transparent 1px
          );
          background-size: 36px 36px;
          pointer-events: none;
        }

        /* Soft centre radial glow */
        .sp-bg-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 60% at 50% 55%,
            rgba(240, 176, 44, 0.055) 0%,
            transparent 65%
          );
          pointer-events: none;
        }

        .sp-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* ════════════════════════════════════════
           HEADER
        ════════════════════════════════════════ */
        .sp-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .sp-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(240, 176, 44, 0.07);
          border: 1px solid rgba(240, 176, 44, 0.3);
          color: #f0b02c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          padding: 8px 24px;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        /* Small decorative lines beside badge text */
        .sp-badge::before,
        .sp-badge::after {
          content: "";
          display: block;
          width: 18px;
          height: 1px;
          background: #f0b02c;
          opacity: 0.5;
        }

        .sp-heading {
          color: #fff;
          font-size: clamp(32px, 4.2vw, 58px);
          margin-bottom: 20px;
          line-height: 1.12;
          font-weight: 700;
        }

        .sp-sub {
          color: rgba(255, 255, 255, 0.48);
          font-size: 16px;
          line-height: 1.8;
          max-width: 520px;
          margin: 0 auto;
        }

        /* ════════════════════════════════════════
           DESKTOP TRACK
        ════════════════════════════════════════ */
        .sp-track {
          position: relative;
          height: ${TRACK_H}px;
          margin-top: 30px;
        }

        .sp-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* ════════════════════════════════════════
           STEP CARDS
        ════════════════════════════════════════ */
        .sp-card {
          position: absolute;
          width: 182px;
          transform: translateX(-50%);
          text-align: center;
          background: rgba(14, 14, 14, 0.96);
          border: 1px solid rgba(240, 176, 44, 0.13);
          border-top: 2px solid #f0b02c;
          padding: 22px 18px 24px;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
          cursor: default;
        }

        .sp-card:hover {
          transform: translateX(-50%) translateY(-8px);
          border-color: rgba(240, 176, 44, 0.45);
          box-shadow:
            0 24px 60px rgba(0, 0, 0, 0.55),
            0 0 40px rgba(240, 176, 44, 0.07);
        }

        /* Small decorative corner mark */
        .sp-corner {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          border-bottom: 2px solid rgba(240, 176, 44, 0.35);
          border-right: 2px solid rgba(240, 176, 44, 0.35);
          pointer-events: none;
          transition: border-color 0.35s ease;
        }

        .sp-card:hover .sp-corner {
          border-color: #f0b02c;
        }

        .sp-card--top {
          top: 0;
        }

        .sp-card--bot {
          top: 398px;
        }

        /* Number circle */
        .sp-num {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f0b02c 0%, #c87600 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 22px;
          font-weight: 800;
          color: #000;
          box-shadow:
            0 0 0 7px rgba(240, 176, 44, 0.10),
            0 0 32px rgba(240, 176, 44, 0.35);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .sp-card:hover .sp-num {
          box-shadow:
            0 0 0 9px rgba(240, 176, 44, 0.18),
            0 0 48px rgba(240, 176, 44, 0.5);
          transform: scale(1.07);
        }

        .sp-title {
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.45;
          letter-spacing: 0.1px;
        }

        .sp-desc {
          color: rgba(255, 255, 255, 0.48);
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        /* ════════════════════════════════════════
           MOBILE
        ════════════════════════════════════════ */
        .sp-mobile {
          display: none;
        }

        @media (max-width: 960px) {
          .sp-section {
            padding: 90px 0 110px;
          }

          .sp-inner {
            padding: 0 24px;
          }

          .sp-track {
            display: none;
          }

          .sp-mobile {
            display: flex;
            flex-direction: column;
            margin-top: 56px;
            gap: 0;
          }

          .sp-mob-item {
            display: flex;
            gap: 24px;
            align-items: flex-start;
          }

          .sp-mob-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
          }

          .sp-num {
            width: 54px;
            height: 54px;
            font-size: 20px;
            margin: 0;
          }

          .sp-mob-line {
            width: 1px;
            min-height: 48px;
            flex: 1;
            background: linear-gradient(
              to bottom,
              #f0b02c 0%,
              rgba(240, 176, 44, 0.08) 100%
            );
            margin: 10px 0;
          }

          .sp-mob-content {
            padding: 6px 0 40px;
            text-align: left;
            background: rgba(14, 14, 14, 0.96);
            border: 1px solid rgba(240, 176, 44, 0.13);
            border-top: 2px solid #f0b02c;
            padding: 20px 20px 22px;
            margin-bottom: 24px;
            flex: 1;
          }

          .sp-title {
            font-size: 15px;
            margin-bottom: 8px;
          }

          .sp-desc {
            font-size: 13.5px;
            color: rgba(255, 255, 255, 0.5);
          }
        }

        @media (max-width: 480px) {
          .sp-heading {
            font-size: 30px;
          }

          .sp-sub {
            font-size: 14.5px;
          }
        }
      `}</style>
    </section>
  );
}
