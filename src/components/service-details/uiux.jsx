"use client";
import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";
import { useState, useRef, useEffect } from "react";

const Uiux = ({ slug }) => {


    const imageData = {
        title:
            "I create visual elements that enhance your brand's presence and engagement",
        backgroundImage: "./assets/service/uiux/Mobile-App-UI-UX.jpg",
    };

    const leftFaqs = [
        {
          id: 1,
          question: "1. What does UI UX design include and why is it important",
          answer:
            "UI UX design involves the entire structure, graphics and the flow of a digital product. UI also concentrates on the appearance, the distance between items, the colors, icons, and the design. UX is concerned with the way people navigate through the screens, the feeling they have when using the product, and how effortless they are to accomplish tasks. Good UI UX enhances comprehension, minimizes confusion and provides a seamless experience in all devices. Whenever a product is perceived as easy and straightforward to use, users will remain longer and engage more. This contributes to increased conversions, increased trust and enhanced professional digital image of any business.",
        },
        {
          id: 2,
          question: "3. How long does a UI UX design project usually take",
          answer:
            "The time will be determined by the scale of the project, the quantity of the screens, and the complexity of the flow. Small projects that are plain in structure could be completed within a short schedule. Bigger products such as dashboards or mobile applications require additional research, planning and testing. Every step will involve discovery, user flow mapping, wireframes, design concepts, refinements, and polishing. ",
        },
        {
          id: 3,
          question: "5. Why should businesses invest in professional UI UX design",
          answer:
            "Professional UI UX design helps businesses create stronger digital experiences that users trust. A polished interface improves clarity, reduces frustration, and makes navigation simple. Strong UX planning guides users toward important actions, which improves conversions and overall performance. ",
        }, 
      ];
    
      const rightFaqs = [
        {
          id: 5,
          question: "2. How does UI UX design help increase user engagement",
          answer:
            "UI UX design is more engaging because it takes the user through a smooth and easy process. Users will remain longer when screens are readable and actions are predictable. Easy navigation saves time and makes the visitors achieve what they want easily. Powerful images make the product look contemporary and credible. Clear transitions, easy to read text, and spacing keep the users on track. Minor aspects such as the position of the buttons and contrasts in colors affect the comfort of the user. These enhancements make the visitor browse more pages, go back and make important actions. Good UI UX is one that brings valuable interaction that enhances long-term engagement.",
        },
        {
          id: 6,
          question: "4. What is the difference between UI and UX in simple terms",
          answer:
            "UI determines the visual appearance of the products such as colors, icons, layout, spacing, and visual style. It forms the outlook and forms the initial impression on the users. UX determines the functionality and the experience of the product during the interaction with it. UX is concerned with the flow, steps, clarity and movement between screens. UI is regarding beauty and form. UX relates to reason, ease and simplicity. The two should collaborate in order to create a seamless experience. Good UI and poor UX will make a product confusing to the user. A product that is well-designed in terms of UX yet poorly designed in terms of UI will be boring or old-fashioned.",
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

                            <h3 className="luxury-heading">
                                Complete UI UX Design Services for Every Digital Platform
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/uiux/2151833348.jpg"
                                alt="UXUI"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__content">
                            <p className="item-popup">
                                UI and UX solutions cover mobile applications, websites, dashboards, and complete digital systems. Every business carries its own usability challenges and visual communication needs. Some brands require a full product redesign to improve clarity and performance. Others only need refined interface adjustments to solve specific issues. Many projects also demand structured user flow planning to help visitors move smoothly from one step to another. All these requirements are handled within a single organized process that maintains stability and direction. This approach creates consistent experiences across every screen size and platform. Companies searching for a professional <strong>ui and ux designer dubai</strong> often choose saaddesign.ae because the results stay clear, balanced, and user centered. The goal is always to improve comfort, understanding, and overall digital confidence for every user who interacts with the product.
                            </p>


                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__header">

                            <h3 className="luxury-heading">
                                UI UX Services Include
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5>User Interface Design</h5>
                            <p className="item-popup pragraph">
                                I design clean and modern interface layouts. Each screen focuses on clarity, balance, and interaction comfort.
                            </p>

                        </div>

                        <div className="about__content extra_padding">
                            <h5>User Experience Mapping</h5>
                            <p className="item-popup pragraph">
                                User journeys are planned with structured flowcharts and page logic. Every step supports simple navigation and easy task completion.
                            </p>

                        </div>
                        <div className="about__content extra_padding">
                            <h5>Mobile App UI UX</h5>
                            <p className="item-popup pragraph">
                                Interfaces are tailored for mobile screens with touch friendly controls and simple patterns for smooth use.
                            </p>

                        </div>
                        <div className="about__content extra_padding">
                            <h5>Wireframes and Prototypes</h5>
                            <p className="item-popup pragraph">
                                Interactive prototypes help preview the experience before development. They support clear decision making.
                            </p>
                        </div>

                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                                src="/assets/service/uiux/UI  UX Design.jpg"
                                alt="UI  UX Design"
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
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                 src="/assets/service/uiux/UI & UX Design.jpg"
                                alt="UI & UX Design"
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

                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5>Design Systems and Components</h5>
                            <p className="item-popup">
                                Colors, typography, icons, and reusable UI elements are created with consistency. This system maintains long term design quality.
                            </p>
                            <div className="about__content extra_padding">
                                <h5>Dashboard and Web App Design</h5>
                                <p className="item-popup pragraph">
                                    Complex systems are simplified into organized layouts that improve user control and decision making
                                </p>
                                <ul className="custom-list">
                                    <li><strong>Some need branding.</strong></li>
                                    <li><strong>Some need marketing designs.</strong></li>
                                    <li><strong>Others need regular digital content.</strong></li>
                                </ul>

                            </div>



                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                               src="/assets/service/uiux/UI & UX Designer.jpg"
                                alt="UI & UX Designer"
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
                                Our Graphic Design Process
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                src="/assets/service/uiux/UI & UX Development.jpg"
                                alt="UI & UX Development"
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

                <div className="row g-4 justify-content-end  ">

                    <div className="col-xl-6">
                        <div className="about__content">
                            <h5>Design Systems and Components</h5>
                            <p className="item-popup">
                                Colors, typography, icons, and reusable UI elements are created with consistency. This system maintains long term design quality.
                            </p>
                            <div className="about__content extra_padding">
                                <h5>Dashboard and Web App Design</h5>
                                <p className="item-popup pragraph">
                                    Complex systems are simplified into organized layouts that improve user control and decision making
                                </p>
                                <ul className="custom-list">
                                    <li><strong>Some need branding.</strong></li>
                                    <li><strong>Some need marketing designs.</strong></li>
                                    <li><strong>Others need regular digital content.</strong></li>
                                </ul>

                            </div>



                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden left_image">
                            <img

                                 src="/assets/service/uiux/UI & UX serives Design.png"
                                alt="UI & UX serives Design"
                            />
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-end  ">
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="   overflow-hidden">
                            <img

                                   src="/assets/service/uiux/ui and ux designer dubai.jpg"
                                alt="ui and ux designer dubai"
                            />
                        </div>
                    </div>

                    <div className="col-xl-6">


                        <div className="about__content extra_padding">
                            <h5>Why Brands Get UI UX from saaddesign.ae</h5>
                            <p className="item-popup pragraph">
                            </p>
                            <ul className="custom-list" style={{ marginTop: "20px" }}>
                                <li>Strong visual balance that supports clean and modern interfaces.</li>
                                <li>User focused planning that improves clarity on every screen.</li>
                                <li>Simple interaction patterns that increase comfort and trust.</li>
                                <li>Creative ideas that make the product stand out in the market.</li>
                                <li>Clear structure that reduces confusion for new users.</li>
                                <li>Fast and focused delivery for smooth experience building.</li>
                                <li>Designs shaped to support future growth and product expansion.</li>
                            </ul>

                        </div>
                        <div className="about__content extra_padding">
                            <h5>Call To Action</h5>
                            <p className="item-popup pragraph">
                                Start building a digital experience that feels simple, clear, and powerful.
                                Contact saaddesign.ae today to design an interface that users love.
                            </p>


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

export default Uiux;
