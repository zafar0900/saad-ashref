"use client";
import React from "react";
import Link from "next/link";
import blogDetailsData from "@/constant/blog-details/blog-details-data";
import CommentForm from "@/components/blog-details/CommentForm";
import { useState, useRef, useEffect } from "react";

const BlogDetails = ({ slug }) => {

    // ✅ get blog by slug
    const blog = blogDetailsData[slug];

    const leftFaqs = [
        {
            id: 1,
            question: "What is the difference between logo and graphic design ?",
            answer:
                "A logo represents brand identity. Graphic design supports broader communication.",
        },
        {
            id: 2,
            question: "Why is branding important for businesses ?",
            answer:
                "Branding builds trust and improves customer recognition.",
        },
        {
            id: 3,
            question: "How does color impact branding ?",
            answer:
                "Color influences emotion and customer perception.",
        },
    ];

    const rightFaqs = [
        {
            id: 4,
            question: "Can small businesses benefit from professional design ?",
            answer:
                "Yes professional design improves credibility and growth.",
        },
        {
            id: 5,
            question: "How often should a brand update its design ?",
            answer:
                "Update design when strategy or market changes.",
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


    // ✅ safety check
    if (!blog) {
        return <h2>Blog not found</h2>;
    }




    const { bannerImage, content, tags, socialLinks } = blog;

    return (
        <div className="blog-details-area section-padding-bottom overflow-hidden">


            <div className="container Blog_data">
                <div className="row">
                    <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>How Logo and Graphic Design Work Together in Branding</h1>

                    <div className="col-12 p-xxl-0">
                        <div className="blog-details__thumb reveal left overflow-hidden">
                            <img src="/assets/blog/blog-19/How Logo and Graphic Design Work Together in Branding.png" alt="How Logo and Graphic Design Work Together in Branding" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container--extend">
                <div className="row justify-content-center">
                    <div className="col-sm-9 col-lg-8 col-xl-7 col-xxl-6">


                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-12">
                                <div className="about__content left_content">
                                    <h5>Introduction</h5>
                                    <p className="item-popup">
                                    Branding shapes how people see your business. A strong brand builds trust fast. Customers remember visuals before words. Design creates that first strong impression. A logo speaks without using many words. Graphic elements support that message clearly. Together they create a powerful brand identity. Businesses that invest in design grow faster. They stand out in crowded markets. Smart branding improves credibility and visibility. Many companies now focus on design strategy. They know visuals influence buying decisions. Clear and consistent branding builds loyalty. Experienced freelancers like saaddesign understand this impact deeply. Their years of branding experience build lasting business trust.</p>

                                </div>
                            </div>

                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Understanding Branding in Modern Business</h5>
                                    <p className="item-popup">
                                    Branding defines how customers recognize your company. It creates emotional and visual connections. Modern markets demand clear brand positioning. Businesses must communicate values quickly. Strong branding builds recognition and recall. Customers prefer brands they trust visually. Every design element shapes perception. Branding includes logo, typography, and imagery. It also covers tone and messaging style. Companies compete through identity today. Clear branding improves customer confidence. It also supports marketing performance. Without branding, businesses lose direction. A strong brand aligns visuals with purpose. This alignment creates lasting impressions in competitive industries.</p>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>The Core Role of Logo in Brand Identity</h5>
                                    <p className="item-popup">
                                    A logo acts as a brand symbol. It represents mission and personality. Customers recognize brands through logos instantly. A strong logo creates memorability. It simplifies complex business values visually. Clean shapes improve recognition quickly. Smart symbols reflect industry relevance. In markets like <strong><a href="https://www.saaddesign.ae/logo-design-dubai"  style={{  color:'#139bfe' }}>Logo design Dubai</a></strong>, uniqueness matters greatly. Competition demands distinctive visual marks. A professional logo builds brand authority. It increases trust among target audiences. Simple designs often perform better. Clarity improves adaptability across platforms. A logo anchors the entire visual system. It remains the foundation of every branding strategy.</p>

                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    How Graphic Design Shapes Brand Communication
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Graphic design helps to tell the brand stories. It changes ideas into appealing images. Layout and imagery are used sparingly by designers. Every aspect has a distinct message. Coherence enhances comprehension among the audience. Powerful images lead to the attention of the viewers. The marketing materials rely on systematic design. Creative balance is required in social posts. Banners on the websites need to be visualized. A good design enhances user interaction. Expert planning is beneficial to businesses. A qualified <strong><a href="https://www.saaddesign.ae/graphic-design-dubai" style={{  color:'#139bfe' }}>freelance graphic designer Dubai</a></strong> knows the trends in the market. They develop images that are in line with brand objectives. Good design systems are necessary in effective communication. Branding becomes significant and strong with the help of graphic design.</p>
                                    <h5>Visual Consistency Across Marketing Channels</h5>
                                    <p className="item-popup">Consistency builds strong brand identity. Brands must look unified everywhere. Websites, ads, and brochures need harmony. Matching colors improve recognition instantly. Fonts should remain consistent across materials. Visual patterns must follow clear guidelines. Consistency increases professionalism and trust. Customers feel confident with stable visuals. Inconsistent design creates confusion quickly. Branding guidelines help maintain structure. Designers create systems for uniformity. Consistent visuals improve brand recall. Every channel should reflect one identity. Visual unity strengthens long term credibility. Strong consistency leads to lasting brand success.</p>
                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-19/How Graphic Design Shapes Brand Communication.png" alt="Lettermark Logos for Simple Recognition" width={'100%'} />
                                </div>
                            </div>
                        </div>







                       









                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Color Psychology in Branding Strategy
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden ">
                                    <img src="/assets/blog/blog-19/Color Psychology in Branding Strategy.png" alt="Color Psychology in Branding Strategy" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Colors influence emotions deeply. Each color triggers specific feelings. Blue suggests trust and reliability. Red communicates energy and urgency. Green reflects growth and balance. Smart brands choose colors carefully. Designers study audience behavior before selection. Cultural meaning also impacts color choice. Consistent color use strengthens recognition. Color harmony improves visual appeal. Strong contrast enhances readability. Balanced palettes prevent visual overload. Strategic color planning supports branding goals. Emotional response drives customer decisions. Effective color use creates memorable brand experiences.
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Typography and Visual Hierarchy in Design
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Typography shapes brand personality strongly. Fonts communicate tone and style. Bold fonts suggest confidence and strength. Minimal fonts express modern simplicity. Clear typography improves readability quickly. Designers create hierarchy using size differences. Headlines guide attention effectively. Subheadings support structured content flow. Consistent fonts build visual stability. Poor typography weakens branding instantly. Spacing also affects perception greatly. Clean layouts improve clarity and engagement. Structured hierarchy enhances message delivery. Typography connects branding with communication goals. It transforms text into visual identity.</p>

                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Digital Presence and Social Media Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Digital platforms demand strong visual branding. Social media requires creative consistency. Profile images must reflect brand identity. Banners should match website visuals. Consistent design builds audience familiarity. Online users judge brands instantly. Clean graphics improve engagement rates. Visual storytelling boosts shareability. Businesses need strategic digital planning. Strong branding improves conversion potential. Designers optimize visuals for screens. Mobile friendly layouts enhance user experience. Digital branding strengthens customer loyalty. A unified look increases professional perception. Online presence depends on cohesive graphic systems.</p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-19/Digital Presence and Social Media Branding.png" alt="Digital Presence and Social Media Branding" />
                                </div>
                            </div>
                        </div>


                      




                     




                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Print Media and Offline Brand Recognition</h5>
                                    <p className="item-popup">
                                    Print materials still influence branding strongly. Business cards represent professionalism. Brochures communicate detailed information clearly. Packaging design impacts buying decisions instantly. Consistent print design strengthens credibility. Offline branding complements digital presence. Clear layouts improve readability. High quality printing enhances perception. Visual alignment maintains brand unity. Strong print identity increases trust. Tangible materials create emotional connection. Customers value physical brand experiences. Designers ensure visual harmony across formats. Offline branding supports long term recognition. Print design remains essential in complete branding strategy.</p>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>How Professional Designers Build Strong Brands</h5>
                                    <p className="item-popup">
                                    Professional designers follow structured processes. They research industry and competitors first. Strategy guides every creative decision. Designers align visuals with brand mission. Experience improves problem solving ability. They focus on audience behavior deeply. Skilled designers create balanced compositions. They maintain consistency across platforms. Creative thinking drives unique branding. Collaboration improves project outcomes. Professional work increases brand credibility. Clients benefit from expert insights. Strategic design leads to measurable growth. Trust builds through quality execution. Strong brands require thoughtful design planning always.</p>

                                </div>
                            </div>


                        </div>
















                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Why Businesses Need Strategic Design Thinking
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Strategic thinking strengthens branding outcomes. Businesses must plan before designing. Clear objectives guide creative direction. Market research improves positioning accuracy. Design decisions should support long term goals. Random visuals weaken brand clarity. Structured systems create sustainable identity. Strategic branding increases competitive advantage. Customers respond to purposeful visuals positively. Data driven design improves effectiveness. Businesses gain higher engagement rates. Strong identity builds customer loyalty. Planning reduces costly redesigns later. Strategic design thinking ensures brand growth. Smart branding transforms perception into measurable success.</p>

                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Conclusion
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Logo and graphic design create powerful branding together. Both elements support brand recognition clearly. A strong logo builds identity foundation. Graphic design expands that identity everywhere. Consistent visuals increase trust and credibility. Strategic planning strengthens business growth. Brands that invest in design perform better. Experienced professionals make branding impactful. <strong><a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}>saaddesign</a></strong> delivers creative branding solutions professionally. As a freelancer I combines strategy with visual excellence. Businesses gain confidence through expert guidance. </p>

                                </div>
                            </div>


                        </div>











                        {/* FAQs Section */}
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h2 className="section__title split-text right text-initial faq">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
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
                            </div>
                        </div>










                    </div>
                </div>



            </div>

        </div>
    );
};

export default BlogDetails;
