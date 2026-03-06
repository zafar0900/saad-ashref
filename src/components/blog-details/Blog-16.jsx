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
            question: "How do clients start working with a freelance designer in Dubai ?",
            answer:
                "Clients usually begin with consultations. They discuss goals and requirements clearly.",
        },
        {
            id: 2,
            question: "Do designers in Dubai follow fixed workflows ?",
            answer:
                "Yes. Structured workflows help manage timelines and expectations efficiently.",
        }, 
    ];

    const rightFaqs = [
        {
            id: 4,
            question: "Is communication important during design projects ?",
            answer:
                "Absolutely. Clear communication prevents misunderstandings and revisions.",
        },
        {
            id: 5,
            question: "Do freelancers handle revisions professionally ?",
            answer:
                "Yes. Revisions follow agreed limits and client feedback.",
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
                    <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Top 10 Freelance Graphic Designers in Dubai 2026 </h1>

                    <div className="col-12 p-xxl-0">
                        <div className="blog-details__thumb reveal left overflow-hidden">
                            <img src="/assets/blog/blog-16/Top 10 Freelance Graphic Designers in Dubai 2026.png" alt="Top 10 Freelance Graphic Designers in Dubai 2026" />
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
                                    Identifying the appropriate freelance graphic designer in Dubai can change your business. An experienced designer will develop a visual identity that will appeal to clients and create trust. A lot of companies find it hard to select the appropriate designer amongst a lot of options. This is a guide to the Top 10 Freelance Graphic Designers in Dubai 2025. The designers have distinct experience in social media, branding, and illustration.  These professionals will provide you with an up-to-date website design, social media graphics, and even a total brand redesign.</p>
                                     

                                </div>
                            </div>

                        </div>
                         


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    SaadDesign – Creative & Strategic Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    SaadDesign is a pioneering company in the Dubai freelance design industry. He deals with clean and modern designs to both large and small businesses. His designs are unique and tactical, whether it is brand identity or graphics on social media. <strong><a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}>SaadDesign</a></strong> is a visual storyteller that aims at enabling brands to shine in competitive markets. He also provides examples that make them more interesting and memorable. Having a professional portfolio and good reviews by clients, SaadDesign is a good option to companies that need effective visual solutions. <br /><strong><a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}>saaddesign.ae</a></strong></p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-16/Theo Adamson – Luxury, Minimal & Clarity.png" alt="Theo Adamson – Luxury, Minimal & Clarity" />
                                </div>
                            </div>
                        </div>




                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Theo Adamson – Luxury, Minimal & Clarity
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-16/Colin Stewart – Digital-First Brand Experiences.png" alt="Colin Stewart – Digital-First Brand Experiences" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Theo Adamson designs are elegant and minimalistic in nature, which comes across as sophisticated. His work is geared towards luxury branding of luxury companies. All the projects are characterized by simplicity and clarity, which precondition the high visual hierarchy. The portfolio of Theo exhibits minimal designs, elegant typography, and classic designs. Companies that want to have high quality designs rely on his knowledge to boost their brand image. <br /><strong><a href="https://www.theoadamson.com/"  style={{  color:'#139bfe' }}>theoadamson.com</a></strong></p>

                                </div>
                            </div>

                           
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Colin Stewart – Digital-First Brand Experiences
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Colin Stewart has made his specialty in interactive digital branding. He concentrates on the involvement of users with the contemporary functional designs. Colin has websites, mobile interfaces and brand images that appeal on the internet. He adds value to the designs by focusing on user experience and therefore makes designs aesthetic and efficient. His approach is strategic and digital-first, which is beneficial to startups and established businesses. <br /><strong><a href="https://www.colinstewartdesign.com/"  style={{  color:'#139bfe' }}>colinstewartdesign.com</a></strong></p>

                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Nazeeha Ajmal – Fresh, Minimal & Aesthetic
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Nazeeha Ajmal produces understated and visually purist designs. Her initiatives tend to focus on startups and small enterprises. She is concentrated on contemporary design that is professional and friendly. Nazeeha focuses on the readability, simplicity, and a single brand appearance in all the materials. Her designs are fresh and elegant, which can fit digital and print media. <br /><strong><a href="https://www.nazeehaajmal.com/"  style={{  color:'#139bfe' }}>nazeehaajmal.com</a></strong> </p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-16/Nazeeha Ajmal – Fresh, Minimal & Aesthetic.png" alt="Nazeeha Ajmal – Fresh, Minimal & Aesthetic" />
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Zeeshan – Design + Development Knowledge. 
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-16/Development Knowledge.png" alt="Zeeshan – Design + Development Knowledge. " />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Zeeshan is a graphic designer with development capabilities. He develops websites that are appealing to the eye and practical digital solutions. His designs are usually interactive and responsive. Zeeshan is concerned with the user-friendly interfaces and the performance optimization. His versatility is valued by business people who want a single professional to design and develop their business.<br /><strong><a href="https://www.zeeshan.co /"  style={{  color:'#139bfe' }}>zeeshan.co </a></strong> </p>

                                </div>
                            </div>

                           
                        </div>



                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Shabeeq - Narrative and Perennial Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Shabeequ pays a strong emphasis on narrative branding. His work focuses on narration in an attempt to make memorable pictures. Both projects show eternal aesthetics and effective communication. Shabeeq is associated with those companies interested in making their brand identity to be memorable. His designs are sophisticated, professional and customer oriented. <br /><strong><a href="https://www.shabeeq.com  /"  style={{  color:'#139bfe' }}>shabeeq.com  </a></strong></p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-16/Shabeeq - Narrative and Perennial Branding.png" alt="Shabeeq - Narrative and Perennial Branding" />
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Fahad Khalid – Veteran Brand Identity Specialist. 
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-16/Fahad Khalid – Veteran Brand Identity Specialist.png" alt="Fahad Khalid – Veteran Brand Identity Specialist. " />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Fahad Khalid is a seasoned freelance graphic designer based in Dubai, with over two decades of experience designing for both print and web media. He is best known for creating clean, professional logo designs, strong branding systems, and comprehensive visual assets that help businesses communicate their identity with clarity and style. Fahad’s work reflects a rich understanding of both corporate and creative design needs, making brands look polished, memorable, and market-ready. He combines simplicity with strategic visual impact, earning long-term client trust in Dubai’s competitive creative scene.</p>

                                </div>
                            </div>

                           
                        </div>




                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Noor Fatima - Social Media Branding Specialist
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Noor Fatima is a social media graphic and brand designer. She develops images that increase online interest and publicity. She has Instagram posts, banners, and promotional graphics as well. Noor has colorful designs that are attractive and personal to the clients. Companies that want to be successful in the Internet are dependent on her imagination. <br /><strong>Portfolio: Behance: Noor Fatima. </strong></p>

                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Omar Hassan -Illustration-Based Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Omar Hassan relies on illustrations to produce unique brand images. His designs are creative, entertaining and catchy. Omar does brand identities, digital graphics, and campaign imageries. His illustration-based strategy is helpful to companies that are interested in creative storytelling using visuals.  <br /><strong>Website: Omar Hassan Artify </strong></p>

                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Sarah Malik -Minimal, Luxury and Elegant Branding
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Sarah Malik dwells on the luxury branding having less designist features. She provides advanced images to the elite customers. Her work is focused on the elegance, simplicity, and professional polish. Companies that are targeting high end markets use Sarah to show their brand values.  <br /><strong>Website: Sarah Malik Design </strong></p>

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
                                    <p className="item-popup">Selecting the appropriate freelance graphic designer in Dubai can boost your business. The list of the 10 best freelance graphic designers in Dubai 2025 indicates the best graphic designers in the areas of branding, social media, and illustration. Beginning with SaadDesign guarantees innovation and planning of your brand. Test portfolios, styles and skills to make the correct decision. A good designer will enhance your aesthetic identity, increase the number of clients, as well as your brand image. Make a step today and work with a professional and get the best design outputs.</p>

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
