"use client";

import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";
import { useState, useRef, useEffect } from "react";

const logodesign = ({ slug }) => {


    const imageData = {
        title:
            "I create visual elements that enhance your brand's presence and engagement",
        backgroundImage: "./assets/service/logo/logo-designer-uae.jpg"
    };
    const imageData2 = {
        title:
            "I create visual elements that enhance your brand's presence and engagement",
        backgroundImage: "./assets/service/logo/Modern-logo-design-UAE.jpg"
    };


    const leftFaqs = [
        {
            id: 1,
            question: "1. How many logo concepts will I receive?",
            answer:
                "I present multiple logo concepts for you to review — each idea is research-driven and purposeful. The delivery typically includes:",
            list: [
                "Several innovative concepts based on your brief",
                "Different shapes and logo styles",
                "Color variations to test moods",
                "Typography options that suit your brand",
                "Symbol or icon options aligned with your brand message",
                "Mockups showing application on print and web",
                "A short explanation/outline for each concept",
            ],
        },
        {
            id: 2,
            question: "2. Is it possible to make changes once the initial ideas have been presented?",
            answer:
                "Yes — revisions are part of the process. I refine the chosen concept until it fits your brand and communicates clearly. Typical revision areas include:",
            list: [
                "Colors and shades",
                "Font styles and typography",
                "Symbol sizes and shapes",
                "Layout and composition",
                "Spacing and alignment",
                "Proportions and visual balance",
                "Sharpness and readability",
            ],
        },
        {
            id: 3,
            question: "3. Do you offer brand identity along with the logo?",
            answer:
                "Yes. I provide full brand identity packages to ensure consistent visual communication across touch points. The brand identity package usually contains:",
            list: [
                "Primary and secondary color palettes",
                "Typography guidelines for headings and body text",
                "Logo spacing and alignment rules",
                "Do's and don'ts for correct logo usage",
                "Brand patterns or supporting graphic elements",
                "Icon style guidance and visual rules",
                "Social media identity styling",
                "Print-ready stationery designs",
            ],
        },
        {
            id: 4,
            question: "4. Do you provide high-quality files for printing and digital use?",
            answer:
                "Yes. I deliver the essential file formats and variants optimized for both print and digital usage. You will receive:",
            list: [
                "Vector files (e.g., AI, EPS) that never lose quality",
                "High-resolution PNGs with transparent background",
                "Print-ready PDFs",
                "Scalable SVG files for web use",
                "JPG files for quick sharing",
                "Black & white (monochrome) versions",
                "Full-color versions",
                "Icon-only versions",
                "Horizontal and vertical layout variants",
            ],
        },
        {
            id: 5,
            question: "5. How do you choose colors and typography for the logo?",
            answer:
                "I use a research-based approach: color psychology, audience study, competitor review, and real-world testing across print and digital. Every color and type choice supports your message and ensures consistent appearance on different media.",
        },
    ];

    const rightFaqs = [
        {
            id: 6,
            question: "6. Do you offer affordable logo design options for startups?",
            answer:
                "Yes. I provide practical and affordable logo solutions tailored for startups — balancing strong identity with cost-effectiveness. Packages include essential deliverables and all main file formats so you can launch quickly.",
        },
        {
            id: 7,
            question: "7. What makes your logo design process different from others?",
            answer:
                "My process is structured, research-driven, and focused on long-term brand value. I avoid templates and quick fixes: each concept starts from brand research and design principles so the final logo carries meaning, clarity, and durability.",
        },
        {
            id: 8,
            question: "8. Why is a professional logo important for my business?",
            answer:
                "A professional logo builds trust, recognition, and a strong first impression. It visually communicates who you are and supports all of your marketing efforts. Key benefits include:",
            list: [
                "Creates a strong first impression within seconds",
                "Communicates brand values visually",
                "Helps customers recognize your business quickly",
                "Builds trust and confidence in your services",
                "Improves perception of stability and reliability",
                "Boosts brand recall and long-term recognition",
                "Supports marketing across print and digital platforms",
            ],
        },
        {
            id: 9,
            question: "9. Anything else I should know?",
            answer:
                "Clear communication, timely feedback, and reference examples speed up the process and improve outcomes. Share any references or preferences up front so I can deliver precise and on-target design solutions.",
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
                                Complete Logo Design Services for Every Business
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/logo/Brand identity designer Dubai.jpg"
                                alt="Brand identity designer Dubai"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <div className="">
                            <p className="item-popup">
                                I offer complete logo design services with full support at every stage. My work covers brand identity needs for new and growing businesses. I support startups, small companies, and corporate brands across the UAE. Clients who search for services like <strong>logo design UAE, logo design companies Dubai</strong>, or the <strong>best logo design company in Dubai</strong> often choose saaddesign.ae because I provide a mix of creativity, research, and practical design.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Custom Logo Design</h5>
                            <p className="item-popup pragraph">
                                I create logos that match your values and personality. Every design is built with fresh ideas and detailed research.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Brand Identity System</h5>
                            <p className="item-popup pragraph">
                                I design supporting elements like color palettes, typography, and visual rules that keep your brand consistent.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5>Business Logo Redesign</h5>
                            <p className="item-popup pragraph">
                                I refresh old logos with a cleaner and more modern look.                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Multiple Industry Support</h5>
                            <p className="item-popup pragraph">
                                I design for retail, tech, real estate, lifestyle, food, and service brands. Each design fits the target market.
                            </p>

                        </div>
                        <div className="about__content">
                            <h5>Affordable Logo Design Options</h5>
                            <p className="item-popup pragraph">
                                I offer simple and budget friendly logo packages for startups without losing quality.
                            </p>

                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                                src="/assets/service/logo/freelance Logo design Dubai.jpg"
                                alt="freelance Logo design Dubai"
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
                                Why saaddesign.ae Is a Preferred Choice in the UAE
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5>Why Brands Trust saaddesign for Logo Design</h5>
                            <p className="item-popup pragraph">
                                Brands trust saaddesign because I offer a thoughtful and structured approach to design. I focus on understanding your goals before creating any visual element. I use clear research, clean design rules, and strong creative thinking to ensure your logo has long lasting value. When clients look for a trusted <strong>logo design company Dubai</strong> or a professional <strong>logo design agency Dubai</strong>, they prefer my work because I create identity systems that stay relevant for many years. Saaddesign.Ae does not rely on trends that fade quickly. Instead, I design with balance, clarity, and purpose. This gives your brand a confident and polished look across every platform.
                            </p>

                        </div>
                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                                src="/assets/service/logo/Logo design Dubai.jpg"
                                alt="Logo design Dubai"
                            />
                        </div> 
                    </div>

                </div>



                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                                Our Logo Design Process
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/logo/Logo Design Services for Every Business.jpg"
                                alt="Logo Design Services for Every Business"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 service_content">
                        <div className="about__content">
                            <h5>Step 1: Brand Understanding and Discovery.</h5>
                            <p className="item-popup pragraph">
                                The process begins with a deep understanding of the brand — its objectives, target audience, and position in the market. This stage helps identify what makes the business unique. Through detailed study of the brand and its competitors, a clear direction is formed that aligns with the brand’s story and long-term goals.
                            </p>
                            <div className="about__content extra_padding">
                                <h5>Step 2: Research and Creative Planning</h5>
                                <p className="item-popup pragraph">
                                    Extensive research is carried out to explore design styles that match the brand’s personality. Color psychology, typography, and visual structure are analyzed to make intentional and meaningful design decisions. This thoughtful approach ensures the final logo communicates the right message — a quality often appreciated by businesses looking for the best logo design services in Dubai.
                                </p>

                            </div>



                        </div>
                    </div>
                </div>



                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5>Step 3: Concept Development</h5>
                            <p className="item-popup pragraph">
                                Multiple design concepts are created based on the insights gathered. Each concept is built with clarity, structure, and strong readability in mind. The goal is to ensure the logo maintains its quality across screens, prints, signage, and other branding materials.
                            </p>
                            <div className="about__content extra_padding">
                                <h5>Step 4: Refinement and Finalization</h5>
                                <p className="item-popup pragraph">
                                    After a concept is selected, the design is refined with careful adjustments to spacing, colors, and shapes. This stage focuses on visual balance and long-term functionality, ensuring the logo remains clear and impactful on both digital and physical platforms.
                                </p>

                            </div>
                            <div className="about__content extra_padding">
                                <h5>Step 5: Delivery and Brand Support</h5>
                                <p className="item-popup pragraph">
                                    The final logo is delivered in all essential formats required for print, web, and social media. Clear usage guidelines are also provided to maintain consistency and professionalism across all brand touchpoints.
                                </p>

                            </div>



                        </div>
                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                                src="/assets/service/logo/Logo Design Services.jpg"
                                alt="Logo Design Services"
                            />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                                Why saaddesign.ae Is a Preferred Choice in the UAE
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                  src="/assets/service/logo/Logo designer Dubai.jpg"
                                alt="Logo designer Dubai"
                            />
                        </div>
                    </div>

                    <div className="col-xl-6 service_content">
                        <div className="about__content">
                            <p className="item-popup">
                                Clients across the UAE choose saaddesign.ae because I combine creativity, research, and clean execution. I give full attention to your brand story and design identity that feels natural to your business. My communication is clear, process is smooth, and results support long term growth. When businesses search for the best logo design company in Dubai, they choose saaddesign.ae because I deliver designs that work in real markets, not just on screens.
                            </p>
                            <div className="about__content extra_padding">
                                <h5>Call to Action</h5>
                                <p className="item-popup pragraph">
                                    If you want a logo that supports your brand identity and creates a strong first impression, saaddesign.ae is ready to help. Contact today and share your ideas.
                                </p>

                            </div>




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

                    <div className="row faq_margin ">
                        <div className="col-12">
                            <div className="faq-wrapper" style={{ padding: "20px 0" }}>

                                {/* Bullet list fix */}
                                <style jsx>{`
                                    .faq-body-wrapper {
                                    overflow: hidden;
                                    transition: max-height 0.4s ease;
                                    }

                                    /* Force bullets — strongest override */
                                    .force-disc {
                                    padding-left: 30px !important;
                                    margin: 12px 0 25px 0 !important;

                                    list-style-type: disc !important;
                                    list-style-position: outside !important;

                                    display: block !important;
                                    }

                                    .force-disc li {
                                    display: list-item !important;
                                    list-style-type: disc !important;
                                    list-style-position: outside !important;

                                    color: #ccc !important;
                                    margin-bottom: 8px;
                                    line-height: 1.6;
                                    }

                                    /* Hard override of global resets */
                                    .force-disc li::marker {
                                    content: "• " !important;
                                    color: #ccc !important;
                                    font-size: 18px !important;
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

                                                    {/* Body */}
                                                    <div
                                                        className="faq-body-wrapper"
                                                        style={{
                                                            maxHeight: isOpen ? "1000px" : "0px",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                color: "#ccc",
                                                                marginTop: "10px",
                                                                lineHeight: "1.7",
                                                                paddingRight: "10px",
                                                            }}
                                                        >
                                                            <p>{item.answer}</p>

                                                            {item.list && (
                                                                <ul className="force-disc">
                                                                    {item.list.map((point, i) => (
                                                                        <li key={i}>{point}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
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

                                                    {/* Body */}
                                                    <div
                                                        className="faq-body-wrapper"
                                                        style={{
                                                            maxHeight: isOpen ? "1000px" : "0px",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                color: "#ccc",
                                                                marginTop: "10px",
                                                                lineHeight: "1.7",
                                                                paddingRight: "10px",
                                                            }}
                                                        >
                                                            <p>{item.answer}</p>

                                                            {item.list && (
                                                                <ul className="force-disc">
                                                                    {item.list.map((point, i) => (
                                                                        <li key={i}>{point}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
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

export default logodesign;
