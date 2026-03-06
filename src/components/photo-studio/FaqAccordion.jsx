"use client";
import { useState, useRef, useEffect } from "react";

const FaqAccordion = () => {
  const leftFaqs = [
    {
      id: 1,
      question: "1. What services do you provide?",
      answer:
        "I offer complete branding and design services to help your business build a clear, modern, and professional identity. This includes brand strategy, logo design, visual identity systems, and ongoing graphic design support. I also develop brand names, tone of voice, messaging direction, and communication style for new brands or rebranding projects. Everything is based on research, planning, and clean design to ensure your brand feels modern, trustworthy, and consistent.",
    },
    {
      id: 2,
      question: "2. How do you start the branding process?",
      answer:
        "The process begins with a discovery phase where I learn about your business, goals, and long-term vision. I research your audience to understand their needs and behavior while analyzing competitors to identify your unique position. These insights help create a strong strategic foundation. After discovery, I build a clear roadmap outlining how your brand should look, sound, and communicate—ensuring a smooth, organized, and productive workflow.",
    },
    {
      id: 3,
      question: "3. Do you provide brand guidelines after the project?",
      answer:
        "Yes. I deliver complete brand guidelines detailing logo usage, colors, typography, spacing systems, image style, and dos and don’ts. I also include rules for social media, print, and digital applications so your team stays consistent. These guidelines help maintain brand identity long-term, even when new designers join your team.",
    },
    {
      id: 4,
      question: "4. Can you help rebrand an existing business?",
      answer:
        "Yes, I provide full rebranding services. I begin by studying your existing brand—what works, what doesn’t, and where improvements are needed. This includes analyzing your audience, market, and competitors. Rebranding may include refreshing your logo, colors, typography, visual system, tone of voice, and messaging. I ensure the transition is smooth, strategic, and aligned with your business goals while preserving any valuable brand recognition.",
    },
    {
      id: 5,
      question: "5. Do you provide content or tone of voice for branding?",
      answer:
        "Yes. I develop your brand tone of voice, messaging principles, and communication style. This includes guidelines for language use across digital, print, and social platforms. I deliver everything in a simple, clear manual, making it easy for your team to maintain a consistent brand voice everywhere.",
    },
  ];
  
  const rightFaqs = [
    {
      id: 6,
      question: "6. What is included in visual identity design?",
      answer:
        "A visual identity includes all elements that define how your brand looks: logo, color palette, typography, icons, patterns, layouts, and image style. I create a complete system that ensures your brand looks clean, balanced, and consistent. I also include spacing rules, layout grids, and style principles to maintain professionalism across all materials.",
    },
    {
      id: 7,
      question: "7. Do you assist with brand launches?",
      answer:
        "Yes, I offer brand launch support. After finalizing the identity, I prepare all necessary files and guide you on launching your brand across social media, print, websites, and other marketing channels. If needed, I can train your team to apply the new brand correctly, ensuring a confident, consistent rollout.",
    },
    {
      id: 8,
      question: "8. Can I request changes during the design stage?",
      answer:
        "Yes, revisions are always welcome. You can request changes in colors, fonts, layouts, symbols, or any design element. Revisions are a natural part of crafting the perfect identity. I ensure every change is strategic, meaningful, and aligned with your brand goals.",
    },
    {
      id: 9,
      question: "9. Do you offer support after project completion?",
      answer:
        "Yes. I provide ongoing post-project support. You can request additional designs, updates, or help applying your brand correctly. Many clients continue working with me long-term because I understand their brand and maintain consistency across new projects.",
    },
    {
      id: 10,
      question: "10. How can I get started with your freelance branding service?",
      answer:
        "Getting started is simple. Contact me through my website, email, or phone and share your business goals and project details. I offer a free consultation to understand your timeline, needs, and budget. After reviewing your information, I send a clear proposal. Once approved, we begin with the discovery phase and proceed through the full branding process smoothly and professionally.",
    },
  ];
  

  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const toggleLeft = (id) => {
    setOpenLeft(openLeft === id ? null : id);
  };

  const toggleRight = (id) => {
    setOpenRight(openRight === id ? null : id);
  };

  return (
    <div className="faq-wrapper" style={{ padding: "20px 0" }}>
      <style jsx>{`
        .faq-body-wrapper {
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
      `}</style>

      <div className="row">

        {/* LEFT COLUMN */}
        <div className="col-lg-6 col-md-12">
          {leftFaqs.map((item) => {
            const isOpen = openLeft === item.id;

            return (
              <div
                key={item.id}
                className="faq-item"
                onClick={() => toggleLeft(item.id)}
                style={{
                  background: "#1a1a1a",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                {/* Header */}
                <div
                  className="faq-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="faq-title"
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {item.question}
                  </span>

                  <span
                    className="faq-icon"
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {/* Smooth Body */}
                <div
                  className="faq-body-wrapper"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                  }}
                >
                  <p
                    className="faq-body"
                    style={{
                      color: "#ccc",
                      marginTop: "10px",
                      lineHeight: "1.5",
                      paddingRight: "10px",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-6 col-md-12">
          {rightFaqs.map((item) => {
            const isOpen = openRight === item.id;

            return (
              <div
                key={item.id}
                className="faq-item"
                onClick={() => toggleRight(item.id)}
                style={{
                  background: "#1a1a1a",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                {/* Header */}
                <div
                  className="faq-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="faq-title"
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {item.question}
                  </span>

                  <span
                    className="faq-icon"
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {/* Smooth Body */}
                <div
                  className="faq-body-wrapper"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                  }}
                >
                  <p
                    className="faq-body"
                    style={{
                      color: "#ccc",
                      marginTop: "10px",
                      lineHeight: "1.5",
                      paddingRight: "10px",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FaqAccordion;
