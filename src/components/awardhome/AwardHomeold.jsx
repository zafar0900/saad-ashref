"use client";

import React, { useRef, useEffect } from "react";

const experiences = [
  {
    id: 1,
    period: "2012 – Present",
    duration: "12+ Years",
    company: "SaadAshraf.net",
    role: "Senior Web Developer / Technical Director",
    desc: "Working with Creative/Digital Agencies as Senior Web Developer and Technical Director. I manage complete project delivery including CMS training and client meetings.",
    clients: [
      "Etihad Towers, Abu Dhabi",
      "Yanbu Steel, Saudi Arabia",
      "Atlantis Aquaventure",
      "Palm Jumeirah Virtual Tour",
    ],
  },
  {
    id: 2,
    period: "2010 – 2012",
    duration: "3 Years",
    company: "MintTwist — UAE & UK",
    role: "Project Manager",
    desc: "Managed Middle East digital projects and worked with high-profile clients.",
    clients: [
      "Abu Dhabi Men's College",
      "Grand Hyatt Muscat",
      "Dubai Government Summit",
    ],
  },
  {
    id: 3,
    period: "2008 – 2010",
    duration: "2 Years",
    company: "Flagship Projects",
    role: "Senior Website Designer",
    desc: "Worked on government and enterprise-level projects.",
    clients: ["Etisalat", "Dubai Public Prosecution"],
  },
];

export default function AwardHome() {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add("xp-line--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(line.parentElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="xp-section">
      <div className="container">

        {/* Heading */}
        <div className="xp-heading">
          <h2>Our Work Experience</h2>
          <p>Two decades of digital experience</p>
        </div>

        <div className="xp-timeline">
          <div className="xp-line" ref={lineRef}></div>

          {experiences.map((exp, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`xp-item ${isRight ? "xp-item--right" : "xp-item--left"}`}
              >
                {/* Meta */}
                <div className="xp-meta">
                  <span className="xp-period">{exp.period}</span>
                  <span className="xp-duration">{exp.duration}</span>
                </div>

                {/* Dot */}
                <div className="xp-dot">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="xp-card">
                  <h3>{exp.company}</h3>
                  <h4>{exp.role}</h4>
                  <p>{exp.desc}</p>

                  {exp.clients.length > 0 && (
                    <ul>
                      {exp.clients.map((client, i) => (
                        <li key={i}>{client}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .xp-section {
          padding: 100px 20px;
          background: #0d0d0d;
          color: #fff;
        }

        .xp-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .xp-heading h2 {
          font-size: 32px;
          color: #f0b02c;
        }

        .xp-heading p {
          color: #aaa;
        }

        .xp-timeline {
          position: relative;
          max-width: 900px;
          margin: auto;
        }

        .xp-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #f0b02c;
          transform: translateX(-50%) scaleY(0);
          transform-origin: top;
          transition: 1.5s;
        }

        .xp-line--visible {
          transform: translateX(-50%) scaleY(1);
        }

        .xp-item {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .xp-item--right {
          flex-direction: row;
        }

        .xp-item--left {
          flex-direction: row-reverse;
        }

        .xp-meta,
        .xp-card {
          width: 45%;
        }

        .xp-meta {
          text-align: right;
        }

        .xp-item--left .xp-meta {
          text-align: left;
        }

        .xp-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: #f0b02c;
          color: #000;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .xp-card {
          background: #1b1c1e;
          padding: 20px;
          border-top: 3px solid #f0b02c;
          box-shadow: 0 10px 30px rgba(240, 176, 44, 0.2);
        }

        .xp-card h3 {
          margin: 0;
        }

        .xp-card h4 {
          color: #f0b02c;
          margin: 5px 0;
        }

        .xp-card p {
          color: #ccc;
        }

        ul {
          padding-left: 15px;
        }

        li {
          color: #aaa;
        }

        @media (max-width: 768px) {
          .xp-item {
            flex-direction: column !important;
            padding-left: 40px;
          }

          .xp-meta,
          .xp-card {
            width: 100%;
            text-align: left;
          }

          .xp-dot {
            left: 20px;
          }

          .xp-line {
            left: 20px;
          }
        }
      `}</style>
    </section>
  );
}