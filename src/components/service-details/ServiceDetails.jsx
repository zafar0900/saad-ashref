"use client";
import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";
import { useState, useRef, useEffect } from "react";

const ServicesDetailed = ({ slug }) => {


  const imageData = {
    title:
      "I create visual elements that enhance your brand's presence and engagement",  
    backgroundImage: "./assets/images/image-area/Graphic-Design-Services.jpg",
  };

  const imageData2 = {
    title:
      "I create visual elements that enhance your brand's presence and engagement",  
    backgroundImage: "./assets/service/graphDesign/Graphic-designer-uae.jpg",
  };

  const leftFaqs = [
    {
      id: 1,
      question: "1. What makes saaddesign.ae different from other graphic design services?",
      answer:
        "I emphasize clarity, visual balance, and a strong brand identity. Every design is research-oriented and planned: I study your brand personality before starting. I don’t use templates or generic online ideas. Each design has a clear purpose and contributes to long-term brand value, helping your business communicate more effectively and build trust with customers.",
    },
    {
      id: 2,
      question: "2. Do you provide custom designs or use ready-made templates?",
      answer:
        "All designs at saaddesign.ae are custom made. I research your brand, target audience, and objectives, then create unique visuals that suit your identity. Your brand receives exclusive, tailor-made designs rather than off-the-shelf templates.",
    },
    {
      id: 3,
      question: "3. Can you handle complete branding for a new business?",
      answer:
        "Yes. I deliver full branding for startups and new companies — including logo creation, color selection, typography, and overall brand guidelines. I also design business profiles, stationery, presentations, and marketing visuals so your new brand starts professional and cohesive.",
    },
    {
      id: 4,
      question: "4. Do you offer graphic design services for social media?",
      answer:
        "Yes. I create social visuals for Instagram, Facebook, LinkedIn, and other platforms. Each visual is strategically designed to be clear, easy to read, and fast to catch the audience’s attention. Services include regular posts, story templates, highlights, covers, and ad creatives to boost engagement and brand awareness.",
    },
    {
      id: 5,
      question: "5. Can you help redesign my existing brand visuals?",
      answer:
        "Yes. I audit your current designs, identify what works and what needs change, then update colors, fonts, layouts, and structure. The goal is to modernize your identity while preserving recognizability, improving brand communication without losing core elements.",
    },
  ];

  const rightFaqs = [
    {
      id: 6,
      question: "6. How long does it take to complete a design project?",
      answer:
        "Duration depends on the project scope. Simple social posts are quick, while branding and profile projects require more planning, research, and revisions. After we discuss your needs I provide a clear timeline so you know what to expect at each stage.",
    },
    {
      id: 7,
      question: "7. Do you work with companies outside Dubai or the UAE?",
      answer:
        "Yes. I work with clients worldwide. Communication is simple and transparent via email or WhatsApp, and I share updates at each stage to make collaboration smooth for international clients.",
    },
    {
      id: 8,
      question: "8. What information do you need from me before starting the project?",
      answer:
        "I gather valuable information prior to initiating any design. This would assist in getting to know your brand and create correct visuals. Here is what I need from you: ",
      list: [
        "Your brand story and essence",
        "Overall design requirements and expectations",
        "Target market and audience details",
        "Existing brand colors (if any)",
        "Preferred fonts or style guidelines (if any)",
        "Current logo or branding materials (if available)",
        "Competitor and industry examples or references",
        "Desired style (e.g., modern, minimal, bold)",
        "Required sizes and file formats",
      ],
    },
    {
      id: 9,
      question: "9. How do I get started with saaddesign.ae?",
      answer:
        "Getting started is easy: submit your project via saaddesign.ae and describe the design you need and its purpose. I will respond with a clear plan, timeline, and price. Once you approve, I begin work step-by-step in a professional and transparent manner.",
    },
    {
      id: 10,
      question: "10. Anything else I should know?",
      answer:
        "I focus on long-term brand value and practical design that performs. Clear communication, timely feedback, and a shared understanding of goals help deliver the best results. If you have examples or references, please share them — they help speed the process and refine the outcome.",
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
    <section className='about-area  bg-ecedde after-shape Graph_design'>

      {slug === "graphic-design-dubai" && (
        <>
          <div className="container">

            <div className="row">
              <div className="col-xl-12">
                <div className="section__header"> 

                  <h3 className="luxury-heading">
                    Complete Graphic Design Services for Every Business
                  </h3>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-end service_margin">
              <div className="col-xl-6 d-none d-xl-block">
                <div className="   overflow-hidden graph_total">
                  <img
                    src="/assets/service/graphDesign/Freelance designer dubai.jpg"
                    alt={aboutData?.decorativeImage?.alt}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about__content">
                  <p className="item-popup">
                    I provide complete graphic design solutions for different business sizes. My services support startups, mid-size companies, and large enterprises. I understand that each business has different design goals.
                  </p>
                  <ul className="custom-list">
                    <li><strong>Some need branding.</strong></li>
                    <li><strong>Some need marketing designs.</strong></li>
                    <li><strong>Others need regular digital content.</strong></li>
                  </ul>
                  <p className="item-popup pragraph"> I handle all these requirements under one system. My approach helps businesses maintain visual consistency everywhere. Companies looking for a <strong>professional graphic design company in Dubai</strong> trust my services. They know I deliver quality with reliability. I also work with clients searching for strong <strong>graphic design companies in uae</strong>. My consistent results help them improve brand communication. </p>


                </div>
              </div>
            </div>



            <div className="row">
              <div className="col-xl-12">
                <div className="section__header">

                <h3 className="luxury-heading">
                    Graphic Design Services Include
                  </h3>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-end service_margin">

              <div className="col-xl-6">
                <div className="about__content">
                  <h5>Marketing and Advertising Design</h5>
                  <p className="item-popup pragraph">
                    I design flyers, posters, banners, and corporate advertisements. Each design focuses on message clarity and visual appeal.
                  </p>

                </div>

                <div className="about__content extra_padding">
                  <h5>Social Media Design</h5>
                  <p className="item-popup pragraph">
                    I create engaging designs for Instagram, Facebook, and other platforms. My visuals help improve brand presence and online engagement.
                  </p>

                </div>
                <div className="about__content extra_padding">
                  <h5>Corporate Branding Material</h5>
                  <p className="item-popup pragraph">
                    I design letterheads, business profiles, and company presentations. All materials follow your brand identity structure.
                  </p>

                </div>
                <div className="about__content extra_padding">
                  <h5>Print Design</h5>
                  <p className="item-popup pragraph">
                    I create brochures, packaging, and business cards with professional layout. Each design is optimized for print quality and balance.
                  </p>
                </div>
                <div className="about__content extra_padding">
                  <h5>Web and Digital Graphics</h5>
                  <p className="item-popup pragraph">
                    I design website visuals, banners, and digital creatives for online platforms. My designs improve visual communication on screens.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="   overflow-hidden brand_understand"> 
                  <img

                    src="/assets/service/graphDesign/Top graphic designer Dubai.jpg"
                    alt={aboutData?.decorativeImage?.alt}
                  />
                </div>
              </div>

            </div>



            <div className="row">
              <div className="col-xl-12">
                <div className="section__header">

                <h3 className="luxury-heading">
                    Our Graphic Design Process
                  </h3>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-end service_margin">
              <div className="col-xl-6 d-none d-xl-block">
                <div className="   overflow-hidden">  
                  <img

                    src="/assets/service/graphDesign/Freelance graphic designer dubai.jpg"
                    alt={aboutData?.decorativeImage?.alt}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about__content">
                  <p className="item-popup">
                    I have structured my graphic design process to make your experience smooth and stress free.
                    Every step is planned clearly and delivered in a professional way.
                    My process focuses on quality, communication, and long-term design value.
                  </p>
                  <div className="about__content extra_padding">
                    <h5>Step 1: Brand Understanding and Discovery.</h5>
                    <p className="item-popup pragraph">
                      It starts with a thorough awareness of the brand, its vision, and its key objectives. Behavior of the target audience, industry background and competitor positioning are researched to know what is unique about the business. It is also during this stage that the brand is able to communicate its visual message to the customers. Brand personality, tone, and visual expectations information is collected and any existing designs are analyzed in terms of consistency. A distinct creative direction is created through in-depth exploration. Such a direction forms a solid base of all the future design work and guarantees the results that suit the story and goals of the brand.
                    </p>

                  </div>



                </div>
              </div>
            </div>




          </div>





          <div className="container container--extend" >
            <div className="row">
              <div className="col-12">
                <div
                  className="image__thumb"
                  style={{
                    backgroundImage: `linear-gradient(
                      rgba(27, 28, 30, 0.8),
                      rgba(27, 28, 30, 0)
                    ), url(${imageData?.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                   }}
                >
                  <div className="image__content">
                    <h2 className="split-text right text-initial">
                      {imageData?.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row g-4 justify-content-end service_margin">

              <div className="col-xl-6">
                <div className="about__content">

                  <div className="about__content extra_padding">
                    <h5>Step 2: Research and Innovative Planning.</h5>
                    <p className="item-popup pragraph">
                      This stage is concerned with studying the visual styles that are consistent with the identity of the business. Various design trends are pursued based on the market requirements and preferences of the audience. Competitor analysis points out the trends in the industry and customer expectations. Appropriate typography is chosen to reinforce the brand message. The styles of layouts will be scheduled based on objectives of communication. This methodical study makes sure that all innovative choices are meaningful and emotional. Every visual aspect is selected as clear and brand-relevant.

                    </p>


                  </div>
                  <div className="about__content extra_padding">
                    <h5>Step 3: Development of Concept Design.</h5>
                    <p className="item-popup pragraph">
                      Once the planning is done, good graphic design concepts are developed using research and brand strategy. Both ideas are aimed at understanding, order, visual harmony, and efficiency. The user experience and readability are a priority.

                    </p>
                    <p className="item-popup pragraph">The designs are tried in social media, websites and print materials to make sure that it is good in all platforms. All the concepts illustrate the values of the brand and convey the message effectively. The aim is to make images that are both inventive and practical simultaneously.</p>

                  </div>

                  



                </div>
              </div>


              <div className="col-xl-6 d-none d-xl-block">
                <div className="   overflow-hidden p_right">
                  <img

                    src="/assets/service/graphDesign/graphic designer Dubai.jpg"

                    alt='Professional graphic designer Dubai'
                  />
                </div>
              </div>
            </div>


            <div className="row g-4 justify-content-end service_margin">
              <div className="col-xl-6 d-none d-xl-block">
                <div className="   overflow-hidden">
                  <img

                      src="/assets/service/graphDesign/Professional graphic designer Dubai.jpg"
                      alt="graphic designer Dubai"
                  />
                </div>
              </div>

              <div className="col-xl-6">
                <div className="about__content">

                  <div className="about__content extra_padding">
                    <h5>Step 4 Refinement and finalization.</h5>
                    <p className="item-popup pragraph">
                      After approval of a design concept elaborate refinement is carried out. There is precision in spacing, aligning and proportions. Colors are enhanced in terms of harmony and consistency. Typography is also improved in order to be readable and give a professional look.

                    </p>
                    <p className="item-popup pragraph">The alternative designs are tried in the various sizes and formats so that there is flexibility. Each of the elements is verified against the general brand image. This phase is concerned with the provision of a refined and production quality design. The last stage is reached once every detail is of high visual standards.</p>

                  </div>

                  <div className="about__content extra_padding">
                    <h5>Call to Action</h5>
                    <p className="item-popup pragraph">
                      If you want strong graphic design for your business, contact saaddesign.ae today.
                      Share your project details and let me support your brand growth.

                    </p>

                  </div>



                </div>
              </div>



            </div>

          </div>

          {/* FAQs Section */}
          <div className="faq-2-area bg-smoky-black section-padding-top-bottom">
            <div className="container container--extend">
              <div className="row">
                <div className="col-12">
                  <div className="section__header text-center">
                  <h3 className="luxury-heading">
                      Frequently Asked Question
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row faq_margin"> 
                <div className="col-12">
                  <div className="faq-wrapper" style={{ padding: "20px 0" }}>
                    <style jsx>{`
                                    .faq-body-wrapper {
                                      overflow: hidden;
                                      transition: max-height 0.4s ease;
                                    }
                                    .force-disc {
                                        padding-left: 28px !important; /* space for outside marker */
                                        margin-top: 10px !important;
                                        margin-bottom: 30px !important;
                                        list-style-type: disc !important;
                                        list-style-position: outside !important;
                                      }

                                      .force-disc li {
                                        display: list-item !important; /* ensure browser treats it as a list item */
                                        margin-bottom: 8px;
                                        line-height: 1.6;
                                      }

                                      /* Make sure the marker is visible (color) on dark backgrounds */
                                      .force-disc li::marker {
                                        color: #ccc !important;
                                        font-size: 1em;
                                      }

                                      /* Fallback: if ::marker is suppressed by reset, show a manual bullet */
                                      .force-disc.manual-bullet li {
                                        list-style: none !important;
                                        position: relative;
                                        padding-left: 18px; /* space for custom bullet */
                                      }
                                      .force-disc.manual-bullet li::before {
                                        content: "•";
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        color: #ccc;
                                        line-height: 1.6;
                                        font-size: 1.1em;
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
                                    lineHeight: "1.7",
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
                                  maxHeight: isOpen ? "1000px" : "0px",
                                  overflow: "hidden",
                                  transition: "max-height 0.4s ease",
                                }}
                              >
                                {item.id === 8 ? (
                                  <div
                                    style={{
                                      color: "#ccc",
                                      marginTop: "10px",
                                      lineHeight: "1.7",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    <p>{item.answer}</p>

                                    {/* Use both classes: .force-disc and .manual-bullet as fallback */}
                                    <ul className="force-disc manual-bullet" style={{ marginTop: "10px" }}>
                                      {item.list?.map((point, index) => (
                                        <li key={index} style={{ marginBottom: "6px" }}>
                                          {point}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : (
                                  <p
                                    className="faq-body"
                                    style={{
                                      color: "#ccc",
                                      marginTop: "10px",
                                      lineHeight: "1.7",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    {item.answer}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container container--extend">
            <div className="row first">
              <div className="col-12">
                <div
                  className="image__thumb"
                  style={{
                    backgroundImage: `linear-gradient(rgba(27, 28, 30, 0.8), rgba(27, 28, 30, 0)), url(${imageData2?.backgroundImage})`,
                  }}
                >
                  <div className="image__content">
                    <h2 className="split-text right text-initial">
                      {imageData2?.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </>
      )
      }


    </section >
  );
};

export default ServicesDetailed;
