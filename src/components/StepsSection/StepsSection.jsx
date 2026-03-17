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

// SVG geometry — 1000×520 viewBox
const TRACK_H = 520;
const TOP_Y = 160;
const BOT_Y = 360;
const XS = [100, 300, 500, 700, 900];

// Smooth cubic-bezier zig-zag path through all 5 dots
const PATH = [
  `M ${XS[0]},${TOP_Y}`,
  `C ${(XS[0] + XS[1]) / 2},${TOP_Y} ${(XS[0] + XS[1]) / 2},${BOT_Y} ${XS[1]},${BOT_Y}`,
  `C ${(XS[1] + XS[2]) / 2},${BOT_Y} ${(XS[1] + XS[2]) / 2},${TOP_Y} ${XS[2]},${TOP_Y}`,
  `C ${(XS[2] + XS[3]) / 2},${TOP_Y} ${(XS[2] + XS[3]) / 2},${BOT_Y} ${XS[3]},${BOT_Y}`,
  `C ${(XS[3] + XS[4]) / 2},${BOT_Y} ${(XS[3] + XS[4]) / 2},${TOP_Y} ${XS[4]},${TOP_Y}`,
].join(" ");

export default function StepsSection() {
  const pathRef = useRef(null);
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const storedTriggers = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    const glow = glowRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;

    const len = path.getTotalLength();
    gsap.set([path, glow], { strokeDasharray: len, strokeDashoffset: len });

    // Looping line: draw over 2.2s, pause 2.8s, repeat — total cycle = 5s
    // fromTo makes each cycle explicitly start from full length (reliable reset)
    const lineTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2.8,
      paused: true,
    });
    lineTl.fromTo(
      [path, glow],
      { strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut" }
    );

    // Start loop when section enters view, pause when out
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom top",
      onEnter: () => lineTl.play(),
      onLeaveBack: () => lineTl.pause(),
      onLeave: () => lineTl.pause(),
      onEnterBack: () => lineTl.play(),
    });
    storedTriggers.current.push(st);

    // Reveal each card with a staggered slide
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const isTop = i % 2 === 0;
      gsap.set(el, { opacity: 0, y: isTop ? -30 : 30 });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 68%",
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.14,
          }),
        onLeaveBack: () =>
          gsap.to(el, {
            opacity: 0,
            y: isTop ? -30 : 30,
            duration: 0.35,
          }),
      });
      storedTriggers.current.push(st);
    });

    return () => {
      lineTl.kill();
      storedTriggers.current.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="sp-section">
      <div className="sp-inner">

        {/* ── Header ── */}
        <div className="sp-header">
          <span className="sp-badge">How It Works</span>
          <h2 className="sp-heading lauxery">Our Creative Process</h2>
          <p className="sp-sub">
            Five focused steps — from first conversation to a live product that performs.
          </p>
        </div>

        {/* ── Desktop zig-zag track ── */}
        <div className="sp-track">

          {/* SVG animated line */}
          <svg
            className="sp-svg"
            viewBox={`0 0 1000 ${TRACK_H}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* Wide soft glow behind line */}
            <path
              ref={glowRef}
              d={PATH}
              stroke="#f0b02c"
              strokeWidth="14"
              strokeOpacity="0.10"
              strokeLinecap="round"
            />
            {/* Crisp animated line */}
            <path
              ref={pathRef}
              d={PATH}
              stroke="#f0b02c"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Dot at each step position */}
            {XS.map((x, i) => {
              const y = i % 2 === 0 ? TOP_Y : BOT_Y;
              return (
                <g key={i}>
                  {/* outer pulse ring */}
                  <circle cx={x} cy={y} r="22" fill="#f0b02c" fillOpacity="0.08" />
                  {/* mid ring */}
                  <circle cx={x} cy={y} r="13" fill="#f0b02c" fillOpacity="0.18" />
                  {/* solid dot */}
                  <circle cx={x} cy={y} r="7" fill="#f0b02c" />
                  {/* dark centre */}
                  <circle cx={x} cy={y} r="3" fill="#0a0a0a" />
                </g>
              );
            })}
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
                {/* Number badge */}
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
              </div>
            );
          })}
        </div>

        {/* ── Mobile vertical list (hidden on desktop) ── */}
        <div className="sp-mobile">
          {steps.map((step, i) => (
            <div key={step.number} className="sp-mob-item">
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
        /* ── Section ── */
        .sp-section {
          background: #000;
          padding: 110px 0 130px;
          overflow: hidden;
          position: relative;
        }
        .sp-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 50% at 50% 60%, rgba(240, 176, 44, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── Header ── */
        .sp-header {
          text-align: center;
          margin-bottom: 16px;
        }
        .sp-badge {
          display: inline-block;
          background: rgba(240, 176, 44, 0.08);
          border: 1px solid rgba(240, 176, 44, 0.28);
          color: #f0b02c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 7px 22px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .sp-heading {
          color: #fff;
          font-size: clamp(30px, 4vw, 54px);
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .sp-sub {
          color: rgba(255, 255, 255, 0.42);
          font-size: 16px;
          line-height: 1.75;
          max-width: 500px;
          margin: 0 auto;
        }

        /* ── Desktop track ── */
        .sp-track {
          position: relative;
          height: 520px;
          margin-top: 10px;
        }
        .sp-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* ── Step cards ── */
        .sp-card {
          position: absolute;
          width: 162px;
          transform: translateX(-50%);
          text-align: center;
        }
        .sp-card--top {
          top: 0;
        }
        .sp-card--bot {
          top: 370px;
        }

        /* Number circle */
        .sp-num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f0b02c 0%, #c87600 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          font-size: 22px;
          font-weight: 800;
          color: #000;
          box-shadow:
            0 0 0 6px rgba(240, 176, 44, 0.10),
            0 0 28px rgba(240, 176, 44, 0.38);
        }
        .sp-title {
          color: #fff;
          font-size: 16.5px;
          font-weight: 750;
          margin-bottom: 9px;
          line-height: 1.4;
        }
        .sp-desc {
          color: rgba(255, 255, 255, 0.38);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Mobile ── */
        .sp-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .sp-section {
            padding: 80px 0 100px;
          }
          .sp-track {
            display: none;
          }
          .sp-mobile {
            display: flex;
            flex-direction: column;
            margin-top: 48px;
          }
          .sp-mob-item {
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }
          .sp-mob-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
          }
          .sp-num {
            width: 50px;
            height: 50px;
            font-size: 19px;
            margin: 0;
          }
          .sp-mob-line {
            width: 2px;
            min-height: 44px;
            flex: 1;
            background: linear-gradient(to bottom, #f0b02c, rgba(240, 176, 44, 0.06));
            margin: 10px 0;
          }
          .sp-mob-content {
            padding: 4px 0 36px;
            text-align: left;
          }
          .sp-title {
            font-size: 15px;
          }
          .sp-desc {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
