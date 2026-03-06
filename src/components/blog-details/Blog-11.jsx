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
            question: "What will be the graphic design trends in 2026 in Dubai? ",
            answer:
                "The trends are concerned with simplicity, technology and cultural relevance.",
        },
        {
            id: 2,
            question: "What is the importance of personalization in design ?",
            answer:
                "Engagement and trust Customer trust is enhanced by personalization.",
        },
        {
            id: 3,
            question: "What is the impact of AI on graphic design ?",
            answer:
                "AI helps in accelerating work processes and data-driven creativity.",
        },
    ];

    const rightFaqs = [
        {
            id: 4,
            question: "Why do brands choose freelancers ?",
            answer:
                "Freelancers are flexible and can provide new creative views.",
        },
        {
            id: 5,
            question: "What is the role of culture in Dubai design ?",
            answer:
                "Culture brings in the element of authenticity and locality.",
        },
        {
            id: 6,
            question: "What can businesses do to anticipate the next generation of design ?",
            answer:
                "They need to make investments in tactical and flexible design solutions.",
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
                    <h1 className="luxury-heading" style={{ marginBlock: "10px" }}>Graphic Design Trends in Dubai for 2026 </h1>

                    <div className="col-12 p-xxl-0">
                        <div className="blog-details__thumb reveal left overflow-hidden">
                            <img src="/assets/blog/blog-11/Graphic Design Trends in Dubai for 2026.png" alt="Graphic Design Trends in Dubai for 2026" />
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
                                    Dubai continues leading visual innovation across digital and print platforms. Brands now demand clarity, speed, and emotional connection. Designers respond with smarter visuals and meaningful layouts. Technology and culture strongly influence modern creative decisions. Local businesses expect global standards with regional identity. Design now supports branding, marketing, and user trust. Storytelling in visual has become a necessity of the audience involvement. Designers are fast in changing to new tools and expectations. This change alters the visual communication of the brands. The creative sector in Dubai is expanding and there is high demand of talented individuals. Companies want modern and meaningful designs. Knowing future trends can keep the brands competitive. Designers should match creativity and strategy. The following sections explain key graphic design trends shaping Dubai in 2026.</p>

                                </div>
                            </div>

                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Minimalist Design with Cultural Depth</h5>
                                    <p className="item-popup">
                                    Minimalist design continues growing across Dubai’s creative industry. Designers now combine simplicity with cultural symbolism. Clean layouts improve focus and message clarity. Arabic patterns inspire modern visual balance. Designers remove clutter while preserving emotional impact. Color palettes remain soft yet meaningful. White space improves content readability and brand trust. Cultural depth creates local relevance and authenticity. Brands prefer minimal visuals that communicate faster. This trend supports digital platforms and mobile viewing. Simplicity also improves loading speed and user experience. Designers focus on purposeful typography and spacing. Minimalism reflects professionalism and confidence. Dubai brands value elegance with subtle regional influence. This approach strengthens visual identity across industries.</p>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Bold Typography for Brand Recognition</h5>
                                    <p className="item-popup">
                                    Typography plays a powerful role in modern branding. Designers now use bold fonts to express personality. Strong typography improves brand recall and visibility. Dubai brands prefer confident and readable typefaces. Designers balance creativity with legibility. Custom fonts gain popularity across digital campaigns. Typography now acts as a visual anchor. Designers use contrast to guide viewer attention. Large text enhances mobile viewing experiences. Bold fonts support marketing headlines effectively. This trend helps brands stand out in crowded markets. Designers pair typography with clean layouts. Strategic font choices improve emotional impact. Typography now defines tone and credibility. Dubai businesses increasingly invest in typographic branding.</p>

                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Motion Graphics for Digital Engagement
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Motion graphics dominate digital content strategies. Designers use animation to explain ideas quickly. Short visual movements capture audience attention. Brands use motion for social media storytelling. Animated elements increase interaction rates. Designers apply subtle motion to interfaces. Motion improves user guidance and clarity. Videos and reels rely heavily on motion graphics. This trend supports digital advertising growth. Designers optimize animations for fast loading. Motion creates emotional connection with viewers. Dubai brands use motion for modern appeal. Designers balance creativity with performance. Motion graphics now shape digital brand presence. This trend will grow stronger in 2026.</p>

                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-11/Motion Graphics for Digital Engagement.png" alt="Motion Graphics for Digital Engagement" />
                                </div>
                            </div>
                        </div>






 









                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Sustainable Design Choices
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden ">
                                    <img src="/assets/blog/blog-11/Sustainable Design Choices.png" alt="Sustainable Design Choices" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Sustainability influences design decisions across Dubai. Designers choose ecofriendly color palettes. Digital first designs reduce print waste. Brands highlight sustainability through visuals. Designers use natural tones and textures. Sustainable visuals build brand responsibility. Consumers value ethical branding more now. Designers avoid excessive visual elements. Simplicity supports sustainable communication. This trend aligns with global environmental goals. Dubai brands promote green initiatives visually. Designers create timeless designs that last longer. Sustainability improves brand trust and loyalty. Visual responsibility becomes a competitive advantage. This trend shapes future design strategies.
                                    </p>

                                </div>
                            </div>
                        </div>

 
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    AI Assisted Creative Processes
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 justify-content-end section-bottom">
                            
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Artificial intelligence supports creative workflows in 2026. Designers use AI for faster ideation. Tools help generate layout suggestions. AI improves efficiency without replacing creativity. Designers refine AI outputs manually. This balance ensures originality and control. AI helps analyze audience preferences. Designers create data driven visuals. Automation saves time during revisions. Dubai studios adopt AI powered tools widely. Designers focus more on strategy and storytelling. AI enhances productivity and consistency. Ethical use remains important for originality. This trend transforms design workflows. Designers who adapt gain competitive advantage.
                                    </p>
                                    <h5>Hyper Personalized Visual Content</h5>
                                    <p>Personalization drives modern marketing success. Designers create visuals for specific audiences. Data helps tailor design elements precisely. Personalized visuals increase engagement rates. Brands segment audiences by behavior. Designers adjust colors and layouts accordingly. This approach improves conversion rates. Dubai businesses value targeted communication. Designers use personalization across digital platforms. Custom visuals feel more relevant and authentic. This trend strengthens brand relationships. Personalization also supports customer loyalty. Designers collaborate with marketing teams closely. Data guided creativity becomes standard practice. Personalized design defines future branding success.</p>
                                    <h5>Immersive Visual Storytelling</h5>
                                    <p>Storytelling remains central to effective design. Designers create immersive visual narratives. Visuals now guide users through experiences. Brands use storytelling for emotional connection. Designers combine images, text, and motion. This approach improves message retention. Dubai brands prefer story driven campaigns. Visual journeys increase audience engagement. Designers focus on narrative structure. Storytelling supports brand values and mission. This trend applies to websites and ads. Designers plan visuals strategically. Immersive stories feel memorable and impactful. Storytelling builds trust and authenticity. This trend will dominate brand communication.</p>
                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-11/AI Assisted Creative Processes.png" alt="AI Assisted Creative Processes"  width={'100%'}/>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Local Expertise and Global Standards
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">
                        <div className="col-xl-6 d-none d-xl-block">
                                <div className="   overflow-hidden right_image">
                                    <img src="/assets/blog/blog-11/Local Expertise and Global Standards.png" alt="Local Expertise and Global Standards" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content">
                                    <p className="item-popup">
                                    Dubai designers balance global trends with local insight. Businesses seek culturally aware visuals. A <strong><a hhref="https://www.saaddesign.ae/graphic-design-dubai"  style={{  color:'#139bfe' }}>graphic designer Dubai</a></strong> understands regional expectations. Designers adapt global styles for local audiences. Cultural sensitivity improves brand acceptance. Dubai’s diverse market demands inclusive visuals. Designers reflect multicultural values respectfully. Global standards ensure professional quality. Local expertise adds authenticity and relevance. This balance strengthens brand positioning. Designers research audience preferences carefully. Visual harmony supports international growth. Dubai remains a global creative hub. Designers bridge cultures through thoughtful design. This approach defines successful branding strategies.</p>

                                </div>
                            </div>

                           
                        </div>


                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Freelance Designers Shaping Innovation</h5>
                                    <p className="item-popup">
                                    Freelancers influence Dubai’s creative landscape strongly. A <strong><a href="https://www.saaddesign.ae/"  style={{  color:'#139bfe' }}>freelance graphic designer Dubai</a></strong> offers flexibility and innovation. Businesses prefer agile creative support. Freelancers adapt quickly to trends. They bring fresh perspectives to projects. Many brands value direct collaboration. Freelancers manage projects efficiently. Their independence supports creative freedom. Dubai’s startup scene fuels freelance demand. Freelancers deliver cost effective solutions. They often specialize in niche styles. This trend supports creative diversity. Freelancers build strong client relationships. Their role will expand in 2026. Innovation thrives through freelance creativity.</p>

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__content left_content">
                                    <h5>Professional Design Expectations Rising</h5>
                                    <p className="item-popup">
                                    Businesses now expect higher design standards. A <strong>professional graphic designer Dubai</strong> delivers strategic visuals. Brands demand consistency across platforms. Designers align visuals with business goals. Professionalism reflects brand credibility. Designers manage brand guidelines carefully. Quality assurance becomes essential. Businesses invest more in design expertise. Designers collaborate with marketing teams. Strategic thinking supports visual success. Professional designers handle complex projects confidently. Dubai brands value reliability and skill. Design now influences customer decisions directly. High standards shape competitive advantage. Professional expertise remains crucial for growth.</p>

                                </div>
                            </div>


                        </div>


                        



                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Independent Creative Identities
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Independent designers build strong personal brands. A <strong>Dubai graphic designer</strong> often showcases unique style. Personal branding attracts ideal clients. Designers highlight signature aesthetics. Social platforms support visibility and credibility. Independent identities foster trust and recognition. Clients prefer designers with clear vision. Designers communicate values through portfolios. This trend supports long term career growth. Independence encourages creative experimentation. Dubai’s market welcomes diverse styles. Designers balance creativity with client needs. Personal branding improves market positioning. Strong identities lead to premium opportunities. This trend empowers creative professionals.</p>



                                </div>
                            </div>


                        </div>






                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section__header">

                                    <h3 className="luxury-heading">
                                    Trusted Creative Partners
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-end section-bottom">

                            <div className="col-xl-12">
                                <div className="about__content">
                                    <p className="item-popup">Businesses prefer long term creative partnerships. Trusted designers understand brand vision deeply. Many brands recommend saad design.ae as the best freelance graphic designer. Reliability builds confidence and loyalty. Designers deliver consistent quality over time. Partnerships reduce onboarding effort. Designers anticipate brand needs effectively. Trust improves communication and efficiency. Long term collaboration supports brand evolution. Dubai businesses value dependable creative support. Designers grow alongside client brands. This relationship fosters innovation and stability. Trusted partners drive sustained success. This approach defines future creative collaborations. </p>

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
