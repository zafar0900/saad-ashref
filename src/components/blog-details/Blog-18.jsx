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
            question: "Which logo type suits startups best ?",
            answer:
                "Combination logos suit startups well.",
        },
        {
            id: 2,
            question: "Are wordmarks good for small businesses ?",
            answer:
                "Yes, they build strong name recognition.",
        },
        {
            id: 3,
            question: "Do abstract logos work for tech brands ?",
            answer:
                "Yes, they express innovation clearly.",
        },
    ];

    const rightFaqs = [
        {
            id: 4,
            question: "Should I hire a professional designer ?",
            answer:
                "Yes professional guidance improves results.",
        },
        {
            id: 5,
            question: "How long does logo design take ?",
            answer:
                "It depends on research and revisions.",
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
                    <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Types of Logos Explained: Which One Is Right for Your Business? </h1>

                    <div className="col-12 p-xxl-0">
                        <div className="blog-details__thumb reveal left overflow-hidden">
                            <img src="/assets/blog/blog-18/Which One Is Right for Your Businesss.png" alt="Which One Is Right for Your Businesss" />
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

                                    <p className="item-popup">
                                    Your logo creates the first impression of your brand. Customers notice it before anything else. A strong logo builds trust and recognition. It shapes how people remember your business. Many companies fail due to weak branding. The right logo improves visibility and recall. It supports your marketing strategy effectively. Businesses must choose the correct logo type carefully. Each type serves a different purpose. Some focus on text clarity. Others rely on visual identity. Understanding logo types helps you decide wisely. This guide explains each logo style clearly. You will discover which one suits your business goals best.</p>

                                </div>
                            </div>

                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Why Choosing the Right Logo Type Matters?</h5>
                                    <p className="item-popup">
                                    A logo reflects your brand personality clearly. It influences customer perception immediately. A poor design creates confusion. A strong design builds authority quickly. Your logo supports brand identity development. It appears on websites and packaging. It also appears on social media profiles. Consistency strengthens brand recognition over time. The right structure improves visual communication. It ensures clarity across digital platforms. Businesses must align logo style with goals. A tech company needs a modern look. A luxury brand needs elegance. Strategic logo selection improves brand positioning. It also supports long term marketing success.</p>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Wordmark Logos and Brand Clarity</h5>
                                    <p className="item-popup">
                                    Wordmark logos focus only on brand names. They use clean and readable typography. This style suits brands with unique names. It builds strong name recognition quickly. Font selection plays a key role. Simple fonts improve readability across platforms. Bold typography adds confidence and authority. Many global brands use wordmarks successfully. This style works best for short names. It ensures clarity in small sizes. Consistent spacing improves visual balance. Wordmarks support minimal branding strategies. They create professional and modern impressions. Businesses seeking simplicity often choose this type. It delivers clarity without extra graphic elements.</p>

                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Lettermark Logos for Simple Recognition
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Good bilingual identity facilitates business growth. Dubai is a city that is appealing to investors around the globe. Brands have to communicate with locals and expatriates. bilingual design Dubai enhances the cross-cultural appeal. This is a way of enhancing visibility in competitive industries. When brands speak their language, customers feel appreciated. Languages that go well together make it professional. Bilingual content enhances marketing. It also enhances brand recall among the audiences. Coherent design brings about coherent messaging throughout. Companies that embrace the use of bilingual images increase at a faster rate. They gain better market positions at the local market.</p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-18/Lettermark Logos for Simple Recognition.png" alt="Lettermark Logos for Simple Recognition" width={'100%'}/>
                                </div>
                            </div>
                        </div>







                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-12">
                                <div className="about__content">
                                    <h5>Brandmark Logos and Visual Identity</h5>
                                    <p className="item-popup">
                                    Brandmark logos use symbols without text. They rely fully on graphic elements. This type requires strong brand awareness. Symbols must reflect company values clearly. Color psychology plays an important role. Shapes influence emotional response instantly. A strong icon builds global recognition. It works well across language barriers. Simplicity ensures better scalability. Unique symbols increase memorability significantly. Businesses aiming for universal appeal prefer this style. Strong visual branding enhances credibility. Careful research ensures the symbol fits industry standards. A clear icon can represent your brand effectively worldwide.</p>

                                </div>

                            </div> 
                        </div>









                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Legal and Cultural Considerations in UAE Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden ">
                                    <img src="/assets/blog/blog-18/Combination Logos for Strong Impact.png" alt="Combination Logos for Strong Impact" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Combination logos mix text and symbols together. They offer flexibility and strong branding power. This style balances clarity and creativity. Businesses can separate elements when needed. It supports versatile marketing campaigns. Text ensures name recognition clearly. Symbols enhance visual storytelling powerfully. This type suits growing businesses well. It adapts easily across print and digital media. Balanced proportions improve design harmony. Many startups prefer this format. It creates memorable brand identity quickly. Combination logos work across industries successfully. They provide both meaning and visual strength together.
                                    </p>

                                </div>
                            </div>
                        </div>


                        


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Emblem Logos and Traditional Appeal
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Emblem logos place text inside symbols. They often appear formal and authoritative. Schools and institutions prefer this type. It reflects heritage and trust strongly. Detailed design adds classic appeal. Symmetry improves visual balance significantly. Emblems work well on merchandise. They create official and premium impressions. However, scaling requires careful design. Too much detail reduces clarity. Simple layouts perform better digitally. Businesses seeking tradition choose emblem styles. This logo builds credibility over time. It suits law firms and luxury brands. Emblems express legacy and strong brand history clearly.</p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-18/Emblem Logos and Traditional Appeal.png" alt="Emblem Logos and Traditional Appeal" />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Mascot Logos for Friendly Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden ">
                                    <img src="/assets/blog/blog-18/Mascot Logos for Friendly Branding.png" alt="Mascot Logos for Friendly Branding"   />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Mascot logos use illustrated characters. They create emotional connections quickly. This type suits family-oriented brands. It works well for entertainment industries. Characters add personality and warmth. Bright colors improve engagement rates. Mascots increase social media interaction. They support storytelling marketing strategies. Consistency ensures character recognition. Clear expressions enhance relatability. Businesses targeting youth prefer mascots. They create fun and welcoming impressions. Strong illustration skills are required here. A memorable character builds loyalty. Mascot logos humanize brands effectively.
                                    </p>

                                </div>
                            </div>
                        </div>




                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Abstract Logos and Modern Creativity
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Abstract logos use unique geometric shapes. They represent ideas creatively. This style supports modern branding needs. It allows artistic freedom strongly. Shapes express movement and innovation. Color combinations enhance uniqueness. Abstract symbols create distinctive identity. They avoid literal interpretations intentionally. Businesses seeking differentiation prefer this type. It works well for tech startups. Simplicity ensures versatility across platforms. Strategic design research remains essential. A strong concept improves brand recognition. Abstract logos express creativity and future vision clearly.</p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-18/Abstract Logos and Modern Creativity.png" alt="Abstract Logos and Modern Creativity" />
                                </div>
                            </div>
                        </div>




                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>How to Choose the Right Logo for Your Business?</h5>
                                    <p className="item-popup">
                                    Choosing a logo requires clear strategy. Define your brand values first. Understand your target audience clearly. Analyze competitor branding styles. Consider long term scalability carefully. Think about digital presence strongly. Ensure design supports brand positioning. Simplicity improves memorability and recall. Professional designers ensure visual balance. Strategic thinking leads to better results. Avoid trends without long term value. Focus on timeless and clean aesthetics. Effective logos support marketing campaigns. They increase brand trust gradually. Careful planning ensures sustainable brand growth.</p>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Professional Support for Logo Design in Dubai</h5>
                                    <p className="item-popup">
                                    Professional expertise ensures quality outcomes. Businesses seeking strong branding need guidance. Skilled designers understand market trends clearly. They apply typography and color theory precisely. Strategic thinking improves visual identity. <strong><a href="https://www.saaddesign.ae/logo-design-dubai/"  style={{  color:'#139bfe' }}>Logo Design Dubai</a></strong> demands local market understanding. Cultural awareness shapes successful branding. Many brands trust experienced freelancers for projects. <strong><a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}>Saaddesign</a></strong> delivers tailored visual solutions professionally I collaborate closely with clients personally. I focus on research and creative direction. My approach builds trust and authority. Strong design builds long term brand value.</p>

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
                                    <p className="item-popup">Choosing the right logo shapes your business future. Each type offers unique benefits. Strategic selection builds recognition and trust. Professional guidance ensures strong results. I bring years of design experience. If you want impactful identity, contact me today. Let us create something powerful together.</p>

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
