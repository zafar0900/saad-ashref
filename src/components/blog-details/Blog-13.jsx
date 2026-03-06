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
            question: "What services does a freelance graphic designer offer ?",
            answer:
                "They offer branding, marketing, digital, and print design services.",
        },
        {
            id: 2,
            question: "Are freelance designers suitable for businesses ?",
            answer:
                "Yes, they support startups and established brands.",
        },
        {
            id: 3,
            question: "Do freelancers provide revisions ?",
            answer:
                "Yes, most include revisions.",
        },
    ];

    const rightFaqs = [
        {
            id: 4,
            question: "Are freelance designers cost-effective ?",
            answer:
                "Yes, they offer flexible pricing.",
        },
        {
            id: 5,
            question: "Can freelancers handle long-term work ?",
            answer:
                "Yes, many work on ongoing projects.",
        },
        {
            id: 6,
            question: "Do freelancers follow brand guidelines ?",
            answer:
                "Yes, they maintain consistency .",
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
                    <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>What Services Does a Freelance Graphic Designer Offer? </h1>

                    <div className="col-12 p-xxl-0">
                        <div className="blog-details__thumb reveal left overflow-hidden">
                            <img src="/assets/blog/blog-13/What Services Does a Freelance Graphic Designer Offer.png" alt="What Services Does a Freelance Graphic Designer Offer" />
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
                                        Design plays a major role in brand success today. Businesses need visuals that communicate clearly. Strong graphics build trust and recognition quickly. Many companies now prefer flexible creative professionals. A <strong><a href="https://www.saaddesign.ae/" style={{ color: '#139bfe' }}>freelance graphic designer Dubai</a></strong> helps brands grow visually. Freelancers provide tailored solutions for different industries. They work closely with clients for better results. Their services support digital and offline marketing needs. Design affects how users feel about a brand. Clean visuals improve engagement and conversions. Freelancers adapt quickly to changing trends. In this blog, you will discover what services a freelance graphic designer offers. </p>

                                </div>
                            </div>

                        </div>
                        


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                        Brand Identity Design
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                        Brand identity creates a business personality. Designers build visual systems for brands. This includes colours and fonts. Identity ensures consistency everywhere. Customers recognize brands faster. Designers study business values first. Visual identity reflects brand purpose. A <strong>graphic designer Dubai</strong> understands market preferences. Local insights improve relevance. Designers create guidelines for usage. These guidelines maintain consistency. Strong identity increases trust. Businesses appear professional instantly. Identity design supports long-term branding. Freelancers refine visuals through feedback. This service builds a solid foundation.</p>

                                    <h3 className="luxury-heading">
                                        Logo Design Services
                                    </h3>
                                    <p className="item-popup">Logo design represents a brand visually. A <strong><a href="https://www.saaddesign.ae/logo-design-dubai/" style={{ color: '#139bfe' }}>logo designer Dubai </a></strong> ensures that designs focus on simplicity and meaning. Logos must scale easily for different uses. Freelancers research competitors first to avoid similarity issues. A professional graphic designer Dubai creates original concepts tailored to your brand. Designers test logos across multiple platforms. Colour choice impacts perception, while typography adds personality. Logos appear on all brand assets, and designers deliver multiple formats. Revisions refine the final result, ensuring a polished outcome. Strong logos improve brand recognition and credibility. This service is ideal for startups and rebrands. </p>
                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-13/Brand Identity Design.png" alt="Brand Identity Design" />
                                </div>
                            </div>
                        </div>







                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-12">
                                <div className="about__content">
                                    <h5>Marketing Design Services</h5>
                                    <p className="item-popup">
                                        Marketing design attracts attention. Designers create promotional visuals. These include banners and ads. Visual hierarchy guides viewers. Clear messaging drives action. Designers align visuals with campaigns. Marketing assets support sales goals. Freelancers optimize designs for platforms. Print and digital needs differ. A Dubai graphic designer understands regional trends. Cultural relevance improves response. Designers focus on clarity. Strong visuals increase conversions. Marketing design boosts brand visibility. This service supports growth strategies.
                                    </p>

                                </div>

                            </div>


                        </div>
                        <div className="row">
                            <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Social Media Graphics </h1>

                            <div className="col-12 p-xxl-0">
                                <div className="blog-details__thumb reveal left overflow-hidden">
                                    <img src="/assets/blog/blog-13/Social Media Graphics.png" alt="Social Media Graphics" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="about__content " style={{marginTop:'10px'}}>
                                   
                                    <p className="item-popup">
                                    Social media needs engaging visuals. Designers create posts and stories. Consistency improves brand recall. Freelancers follow platform guidelines. Visual content increases interaction. Templates save time for brands. Designers plan themes carefully. Colors reflect brand identity. Typography ensures readability. Designers adapt to trends. An experienced graphic designer in Dubai understands audience behavior. Visual storytelling builds engagement. Social graphics support campaigns. This service strengthens online presence. Brands grow through visuals.
                                    </p>

                                </div>

                            </div> 
                        </div> 



                        <div className="row">
                            <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Website Graphic Design </h1>

                            <div className="col-12 p-xxl-0">
                                <div className="blog-details__thumb reveal left overflow-hidden">
                                    <img src="/assets/blog/blog-13/Website Graphic Design.png" alt="Website Graphic Design" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="about__content " style={{marginTop:'10px'}}>
                                   
                                    <p className="item-popup">
                                    Website visuals affect user experience. Designers create layouts and banners. Clean design improves navigation. Freelancers align visuals with branding. Icons guide users clearly. Designers ensure responsive visuals. Pages load efficiently. Visual balance enhances usability. Designers collaborate with developers. Website graphics support conversions. Visual clarity reduces bounce rates. This service enhances credibility. Users trust professional websites. Design supports digital success. Strong visuals retain visitors.
                                    </p>

                                </div>

                            </div> 
                        </div> 


                        <div className="row">
                            <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Print Design Services </h1>

                            <div className="col-12 p-xxl-0">
                                <div className="blog-details__thumb reveal left overflow-hidden">
                                    <img src="/assets/blog/blog-13/Print Design Services.png" alt="Print Design Services" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="about__content " style={{marginTop:'10px'}}>
                                   
                                    <p className="item-popup">
                                    Packaging influences buying decisions. Designers create labels and boxes. Visual appeal attracts customers. Information must remain clear. Designers balance design and function. Packaging supports branding. Freelancers research market competitors. Shelf visibility matters greatly. Colors guide emotions. Typography affects readability. Designers ensure print accuracy. Packaging enhances product value. This service suits retail brands. Strong packaging improves sales.
                                    </p>

                                </div>

                            </div> 
                        </div> 

                        <div className="row">
                            <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Presentation Design </h1>

                            <div className="col-12 p-xxl-0">
                                <div className="blog-details__thumb reveal left overflow-hidden">
                                    <img src="/assets/blog/blog-13/Presentation Design.png" alt="Presentation Design" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="about__content " style={{marginTop:'10px'}}>
                                   
                                    <p className="item-popup">
                                    Presentations communicate ideas visually. Designers structure slides clearly. Visual flow improves understanding. Charts simplify data. Freelancers align presentations with branding. Consistency builds professionalism. Designers reduce clutter. Clear visuals support decision-making. Presentations support sales meetings. Corporate decks need precision. Designers ensure readability. This service improves communication. Strong presentations create impact. Visual clarity builds confidence.
                                    </p>

                                </div>

                            </div> 
                        </div> 

                        <div className="row">
                            <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Custom Illustration Services </h1>

                            <div className="col-12 p-xxl-0">
                                <div className="blog-details__thumb reveal left overflow-hidden">
                                    <img src="/assets/blog/blog-13/Custom Illustration Services.png" alt="Custom Illustration Services" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="about__content " style={{marginTop:'10px'}}>
                                   
                                    <p className="item-popup">
                                    Illustrations add uniqueness. Designers create custom graphics. Original visuals stand out. Illustrations support storytelling. Designers match style with brand tone. Custom graphics avoid stock usage. Freelancers draw icons and visuals. Illustrations simplify concepts. Visual creativity improves engagement. Designers ensure scalability. This service adds personality. Brands differentiate visually. Illustrations enhance campaigns. Creative visuals attract attention.
                                    </p>
                                    <h5>Infographic Design</h5>
                                    <p className="item-popup">
                                    Infographics present information visually. Designers organize data clearly. Visual hierarchy guides readers. Icons support understanding. Infographics suit blogs and reports. Freelancers simplify complex topics. Colour coding improves clarity. Infographics increase content value. Shareable visuals boost reach. Designers ensure accuracy. This service supports SEO content. Visual data improves retention. Infographics educate audiences effectively.
                                    </p>
                                </div>

                            </div> 
                        </div> 


                        <div className="row">
                            <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Brand Consistency Management </h1>

                            <div className="col-12 p-xxl-0">
                                <div className="blog-details__thumb reveal left overflow-hidden">
                                    <img src="/assets/blog/blog-13/Brand Consistency Management.png" alt="Brand Consistency Management" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="about__content " style={{marginTop:'10px'}}>
                                   
                                    <p className="item-popup">
                                    Consistency strengthens branding. Designers manage visual assets. Correct usage maintains identity. Freelancers audit brand materials. Inconsistencies weaken trust. Designers correct visual errors. Guidelines ensure uniformity. Asset management saves time. Teams collaborate easily. Consistency improves recognition. This service supports long-term branding. Visual harmony builds reliability. Brands always appear professional.
                                    </p>
                                    <h5>Creative Consultation</h5>
                                    <p className="item-popup">
                                    Consultation guides design decisions. Freelancers review existing visuals. They suggest improvements. Strategy aligns visuals with goals. Creative direction saves resources. Designers share industry insights. Planning reduces revisions. Consultation supports rebranding. Expert advice improves outcomes. Freelancers guide visual growth. This service adds strategic value. Informed decisions lead to success. Creativity meets business goals.
                                    </p>
                                    <h5>Why Businesses Prefer Freelancers</h5>
                                    <p>Freelancers offer flexibility. Businesses save costs. Direct communication improves clarity. Freelancers adapt quickly. Personalized attention benefits clients. Freelancers handle diverse projects. Quality remains consistent. Turnaround times are faster. Brands' scale design needs to be easy. Freelancers build strong relationships. Trust grows over time. Businesses gain creative partners. This model suits modern brands.</p>
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
                                    <p className="item-popup">Freelance graphic designers offer valuable services. They support branding and marketing needs. Visual communication drives business success. Freelancers provide flexible solutions. Each service adds measurable value. Businesses benefit from creative expertise. Platforms like <strong><a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}>saaddesign</a></strong> connect brands with talent. One skilled designer can transform visuals. Clean design improves trust and engagement. Investing in design supports growth. Strong visuals attract customers. Freelancers remain essential today. Creative services build lasting impressions.</p>

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
