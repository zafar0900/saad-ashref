 "use client";
import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";
import { useState, useRef, useEffect } from "react";

const WebDesign = ({ slug }) => {


    const imageData = {
        title:
            "I create visual elements that enhance your brand's presence and engagement",
        backgroundImage: "./assets/service/webDesign/Web-Developer.jpg"
    };
    const leftFaqs = [
        {
          id: 1,
          question: "1. What makes a website effective for business goals",
          answer:
            "An effective website delivers clear information fast and guides users toward planned actions. Strong structure and good visuals help visitors trust the brand. Simple navigation improves engagement and supports conversions.",
        },
        {
          id: 2,
          question: "2. How long does a complete website project usually take",
          answer:
            "Project time depends on size and features. Most projects follow defined steps that include planning, design, content, testing, and launch. Clear communication helps maintain a smooth timeline.",
        },
        {
          id: 3,
          question: "3. Does design quality affect user trust online",
          answer:
            "Good design increases trust very quickly. Clean layouts, readable text, and organized sections help visitors feel confident. A professional look always supports stronger brand credibility.",
        },
      ];
      
      const rightFaqs = [
        {
          id: 4,
          question: "4. What is the benefit of mobile friendly design",
          answer:
            "Mobile friendly design ensures every visitor gets a clear experience. Many users browse on phones. A responsive layout helps them navigate easily and stay engaged.",
        },
        {
          id: 5,
          question: "5. How can a website improve customer engagement",
          answer:
            "Engagement improves when the structure feels simple and predictable. Clear calls to action guide users smoothly. Helpful content builds interest and supports meaningful interaction.",
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

            <div className="container">

                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading hadding-bottom">
                                Creative Concepts That Shape Strong Digital Identities
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                 src="/assets/service/webDesign/Website Designer.jpg"
                                alt="Website Designer"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__content">
                            <p className="item-popup">
                            A website must feel clear and meaningful from the first second. I create concepts that support each message with focus. The structure helps visitors understand your brand value instantly. Clean layouts help users move easily between sections. Strong visuals highlight the unique style of saaddesign.ae in every project. My concepts avoid clutter and keep your message sharp. Each page supports strong communication that lifts brand trust. I also use smooth interactions to improve the feel of the website. This helps users stay longer and explore more. Every detail aims to support your goals and create real value. A strong concept always helps your business stand out online.
                            </p>


                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                            Modern Layouts That Improve Every User Experience
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <p className="item-popup">
                            Good layout design controls how visitors move through your website. I build layouts that guide the eye through important details. Balanced spacing keeps everything simple and enjoyable. Clean sections help users find answers without confusion. Smooth structure improves the rhythm of browsing. I also consider mobile users while planning each layout. This ensures the experience stays easy on all screens. Good layout planning always supports stronger engagement. Saaddesign.ae projects follow this approach to deliver modern results. A clear layout builds trust and supports every digital goal. Start building an experience that helps visitors feel informed and confident.
                            </p>

                        </div>

                      

                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                               src="/assets/service/webDesign/Web Designing or Web Development.jpg"
                                alt="Web Designing or Web Development"
                            />
                        </div>
                    </div>

                </div>



                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                            USP of Website Design Service
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/webDesign/Website Designer (2).jpg"
                                alt="Website Designer (2)"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__content">
                            
                            <div className="about__content extra_padding">
                                <h5>1. Designs That Build Instant Trust</h5>
                                <p className="item-popup pragraph">
                                Every design creates a strong first impression that supports brand confidence. Clean layouts help visitors understand value quickly. Visual clarity keeps the experience smooth on every page. Trust grows when users feel the brand is professional and consistent.
                                </p>

                            </div>

                            <div className="about__content extra_padding">
                                <h5>2. User Journeys That Increase Conversions</h5>
                                <p className="item-popup pragraph">
                                Each page guides visitors toward clear actions. Smart placement of text and visuals improves decision making. Calls to action appear at natural points to support higher results.
                                </p>

                            </div>

                            <div className="about__content extra_padding">
                                <h5>3. Modern Layouts That Support All Devices</h5>
                                <p className="item-popup pragraph">
                                Responsive planning ensures a perfect view on phones, tablets, and computers. Mobile friendly structures keep navigation easy on small screens. Fast loading layout improves user experience for every visitor.
                                </p>

                            </div>

                            <div className="about__content extra_padding">
                                <h5>4. Brand Focused Visual Identity</h5>
                                <p className="item-popup pragraph">
                                Every color and shape supports a defined brand message. Designs highlight what makes the business unique. Consistent style builds strong recognition across the website. Visual power helps the brand stay memorable in the market.
                                </p>

                            </div>



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
                            Strategic Website Planning That Supports Business Growth
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/webDesign/Website Designer (3).jpg"
                                alt="Website Designer"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__content">
                            <p className="item-popup">
                            A successful website needs smart planning before design begins. I create strategies that fit your brand message and long-term goals. Each page serves a defined purpose that helps your visitors understand your value. Clear structure improves the way information flows. This boosts engagement and strengthens user trust. Saaddesign.ae focuses on clarity and purpose while building any plan. This keeps the final result powerful and consistent. I review each step to maintain quality. Growth starts with a website that feels clear, fast, and visually strong. My aim is to gives every business a premium touch through a trusted <strong>web design company Dubai</strong> approach.
                            </p>
                            <div className="about__content extra_padding">
                                <h5>Call to Action</h5>
                                <p className="item-popup pragraph">
                                Ready for a website that strengthens your brand and drives real action. Saaddesign.ae can create a strong digital presence for your business. Contact today for a design experience that delivers clarity and impact.
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
                    <div className="row  faq_margin">
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




            <div className="container container--extend">
                <div className="row first">
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

        </section >
    );
};

export default WebDesign;
