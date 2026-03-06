"use client";

import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";
import { useState, useRef, useEffect } from "react";

const branding = ({ slug }) => {


    const imageData = { 
        title:
            "I create visual elements that enhance your brand's presence and engagement",
        backgroundImage: "./assets/service/branding/Branding-services-Dubai.jpg"
    };
    const imageData2 = { 
        title:
            "I create visual elements that enhance your brand's presence and engagement",
        backgroundImage: "./assets/service/branding/Brand-strategy-services-UAE.jpg"
    };


    const leftFaqs = [
        {
          id: 1,
          question: "1. How does a freelance brand designer differ from a branding agency?",
          answer:
            "A freelance brand designer offers personalized attention and flexible solutions. Freelancers provide closer collaboration, faster communication, and more tailored branding approaches suited to each business.",
        },
        {
          id: 3,
          question: "3. What industries do you serve as a brand designer in Dubai?",
          answer:
            "I work with corporate companies, tech startups, hospitality brands, retail businesses, and online companies. Each project is customized according to industry-specific branding needs and audience demand.",
        },
        {
          id: 5,
          question: "5. What do you do to make business objectives consistent with the brand design?",
          answer:
            "I follow detailed research, market analysis, and continuous client input. Every design element — logos, colors, typography, and brand collateral — aligns with business goals and overall brand strategy.",
        },
      ];
      
      const rightFaqs = [
        {
          id: 2,
          question: "2. What is the duration of the brand identity project?",
          answer:
            "The timeline depends on project complexity. Typically, research, strategy development, logo design, and brand collateral creation take about 4–8 weeks to deliver a complete, high-quality brand identity.",
        },
        {
          id: 4,
          question: "4. Is it possible to reinvent an existing brand?",
          answer:
            "Yes. I redesign and modernize existing brands by refreshing logos, updating visual identity elements, and refining brand guidelines. The goal is to improve audience engagement and market presence while maintaining recognition.",
        },
        {
          id: 6,
          question: "6. What are the deliverables of branding design services?",
          answer:
            "Branding deliverables include logos, typography systems, color palettes, brand guidelines, social media templates, brochures, packaging designs, and other branding assets. All materials ensure consistency across platforms.",
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
        <section className='about-area Graph_design bg-ecedde after-shape'>

            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                                Branding Services
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/branding/125554.jpg"
                                alt="125554"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <div className="">
                            <p className="item-popup">
                                Professional branding services are available to help businesses build a clear, powerful, and memorable identity in the UAE. As a <strong>freelance branding designer Dubai</strong>, every brand is shaped with creativity, strategy, and market understanding. The focus is on creating designs that reflect business values and connect with the right audience.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Logo Design</h5>
                            <p className="item-popup pragraph">
                                High-quality logo designs that represent the brand personality and make a strong first impression.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Complete Visual Identity</h5>
                            <p className="item-popup pragraph">
                                Typography, color palettes, icons, and layouts designed to ensure a unified identity across all platforms.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Brand Strategy Development</h5>
                            <p className="item-popup pragraph">
                                Clear positioning, tone, and message frameworks that define how the brand should communicate in the market.                          </p>

                        </div>
                    </div>
                </div>

                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">

                        <div className="about__content">
                            <h5>Brand Guidelines</h5>
                            <p className="item-popup pragraph">
                                Easy-to-use brand manuals covering logo usage, colors, fonts, and style consistency for long-term brand control.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Marketing Collateral Design</h5>
                            <p className="item-popup pragraph">
                                Brochures, banners, business cards, packaging, and digital assets created with precision and creativity.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Social Media Branding</h5>
                            <p className="item-popup pragraph">
                                Visually aligned templates and designs that build recognition and engagement on all platforms.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Rebranding Services</h5>
                            <p className="item-popup pragraph">
                                Modernizing outdated brand identities with fresh visuals and a renewed strategic direction.
                            </p>

                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                                src="/assets/service/branding/Brand development Dubai.jpg"
                                alt="Brand development Dubai"
                            />
                        </div>
                    </div>
                </div>



            </div>
            <div className="container container--extend">
                <div className="row  ">
                    <div className="col-12">
                        <div
                            className="image__thumb"
                            style={{
                                backgroundImage: `linear-gradient(rgba(27, 28, 30, 0.8), rgba(27, 28, 30, 0)), url(${imageData?.backgroundImage})`,
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
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                                Branding Design Process
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content" style={{ paddingRight: '10px' }}>

                            <p className="item-popup pragraph">
                                <strong>1. Research & Discovery</strong>: Study the industry dynamics, competition, and consumer audience to establish a solid brand base.
                            </p>
                            <p className="item-popup pragraph">
                                <strong>3.Logo & Visual Identity Design</strong>: Design logos, typography, and color schemes that are aesthetically pleasing and personalized to the brand.
                            </p>
                            <p className="item-popup pragraph">
                                <strong>5. Collaterals and Digital Assets</strong>: Design brochures, social media templates, packaging, and advertisements.
                            </p>

                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__content" style={{ paddingLeft: '10px' }}>

                            <p className="item-popup pragraph">
                                <strong>2. Development of Brand Strategy</strong>: Design brand positioning, messages, and differentiated value propositions that are distinctive in the market.
                            </p>
                            <p className="item-popup pragraph">
                                <strong>4. Creation of Brand Guidelines</strong>: Develop detailed brand manuals for use across all platforms.
                            </p>
                            <p className="item-popup pragraph">
                                <strong>6. Feedback & Revisions</strong>: Improve designs using constructive feedback to ensure brand objectives are achieved.
                            </p>

                        </div>
                    </div>

                </div>

            </div>


            <div className="container">


                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5 style={{ marginTop: '20px', marginBottom: "20px" }}>Why Brands Trust Saad Design</h5>
                            <ul className="custom-list">
                                <li><strong>Proven Expertise as a top branding designer in Dubai and a freelance brand designer.</strong></li>
                                <li><strong>Creative Solutions that are not overly creative or business-oriented.</strong></li>
                                <li><strong>Consistency & Quality assuring brand identity is effective in all the media.</strong></li>
                                <li><strong>Client-Centric Approach to provide high-quality and customized branding experiences.</strong></li>
                                <li><strong>Results-Oriented designs that support recognition, engagement, and growth.</strong></li>
                            </ul>


                        </div>
                    </div>
                      
                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5 style={{ marginTop: '20px', marginBottom: "20px" }}>Industries Served</h5>
                            <ul className="custom-list">
                                <li><strong>Corporate Companies: Strengthen market position and build professional identity.</strong></li>
                                <li><strong>Technology & Digital Startups: New branding techniques that convey modernity, credibility, and uniqueness.</strong></li>
                                <li><strong>Hospitality: Customized brand personalities that increase the guest experience and strengthen reputation.</strong></li>
                                <li><strong>Full Branding Solutions: Each of the projects is carried out with accuracy, ingenuity, and integration.</strong></li>
                                <li><strong>Trusted Brand Designer Dubai & Freelance Brand Designer:  Delivering high-impact, professional results across multiple sectors.</strong></li>
                            </ul>
                            <p className="item-popup pragraph"> Ready to elevate your brand? Get in touch today via the website form, email, or phone, and transform the brand vision into a powerful, visually aligned identity.</p>



                        </div>
                    </div>

                </div>

            </div>




            {/* FAQs Section */}
            <div className="faq-2-area bg-smoky-black  ">
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
                <div className="row  faq_margin">
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


        </section>
    );
};

export default branding;
