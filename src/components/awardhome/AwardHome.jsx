"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";



function ServiceSection() {

    const categories = [
        {
            id: 1,
            icon: "/assets/portfolio/cheval.webp",
            label: "2012",
            event: "Present"
        },
        {
            id: 2,
            icon: "/assets/portfolio/mobile-app-category.webp",
            label: "2010-2012",
            event: "3 Years"
        },
        {
            id: 3,
            icon: "/assets/portfolio/e-commerce-category.webp",
            label: "2008-2010",
            event: "2 Years"
        },
        {
            id: 4,
            icon: "/assets/portfolio/website-dev-category.webp",
            label: "2007-2008",
            event: "1 Year"
        },
        {
            id: 5,
            icon: "/assets/portfolio/download-removebg-preview.png",
            label: "2005-2006",
            event: "1 Year"
        },
        {
            id: 6,
            icon: "/assets/portfolio/download__1_-removebg-preview.png",
            label: "2004-2005",
            event: "1 Year"
        }
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [arrowX, setArrowX] = useState(null);
    const categoriesRef = useRef(null);
    const circleRefs = useRef({});

    const updateArrow = (id) => {
        const circleEl = circleRefs.current[id];
        const containerEl = categoriesRef.current;
        if (!circleEl || !containerEl) return;
        const circleRect = circleEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        const center = circleRect.left + circleRect.width / 2 - containerRect.left;
        setArrowX(center);
    };

    // Measure after first paint so there's no jump from 0 to real position
    useEffect(() => {
        if (activeCategory) {
            requestAnimationFrame(() => updateArrow(activeCategory));
        }
    }, []);

    const handleCategoryClick = (id) => {
        const next = activeCategory === id ? null : id;
        setActiveCategory(next);
        if (next) updateArrow(next);
    };

    return (
        <>
            <div className="section portfolio">
                <div className="container portfoliolisting">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">

                        <div className="card-service-wrapper">
                            <div className="row">
                                <div className="col-lg-12 col-xl-12">
                                    <div className="section__header text-center">
                                        <h3 className="luxury-heading bottomluxury">
                                           Our work exprience
                                        </h3>

                                    </div>
                                </div>
                                <div className="categories" ref={categoriesRef}>
                                    {categories.map((cat) => (
                                        <div
                                            key={cat.id}
                                            ref={(el) => { circleRefs.current[cat.id] = el; }}
                                            className={`category-item col-md-2 ${activeCategory === cat.id ? "active" : ""}`}
                                            onClick={() => handleCategoryClick(cat.id)}
                                        >
                                            <div className="circle">
                                                <h5>{cat.label}</h5>
                                                <span>{cat.event}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Animated arrow pointing at active circle */}
                                <div className="arrow-track">
                                    <div
                                        className={`animated-arrow ${activeCategory && arrowX !== null ? "arrow-visible" : ""}`}
                                        style={{ transform: `translateX(calc(${arrowX ?? 0}px - 50%))` }}
                                    />
                                </div>
                            </div>



                            <div className="row   grid-spacer-2">

                                <div className="col-md-12">
                                    {(!activeCategory || activeCategory === 1) && (
                                        <div className="row portfolio-scroll" id="web-design">
                                            <div className="col-md-12 imagesport">
                                                <div className="portfolio-card">

                                                    <h3 className="lauxery ">SaadAshraf.net</h3>

                                                    <div className="subtitle">
                                                        Designer | Websites | Mobile Apps | Digital Marketing | Business Development
                                                    </div>

                                                    <p className="desc">
                                                        I'm enjoying working with Creative/Digital Agencies as a Senior Web Developer/Technical Director.
                                                        Usually agencies provides complete requirement from client to me and then I manage from my end to
                                                        deliver the project. Sometime, We also meet clients to discuss and understand the requirement and
                                                        to provide training on how to use CMS. I feel lucky that I got opportunities to work with some of
                                                        prestigious clients such as:
                                                    </p>

                                                    <ol className="work-list">
                                                        <li><span>1. Etihad Towers, Abu Dhabi</span> Website Development English & Arabic</li>
                                                        <li><span>2. Al Zahia Holding Company</span> Website Development</li>
                                                        <li><span>3. Yanbu Steel - Saudia Arabia</span> Build Corporate Website</li>
                                                        <li><span>4. eXtra - Saudia Arabia</span> Proposing E-Commerce Website + Mobile App</li>
                                                        <li><span>5. Atlantis</span> Aquaventure</li>
                                                        <li><span>6. Beeah School of Environment</span> Online Portal between Students & Teachers</li>
                                                        <li><span>7. Palm Jumeirah</span> Virtual Tour for Tiara Residence</li>
                                                        <li><span>8. Beeah School of Environment</span> Online Portal between Students & Teachers</li>
                                                        <li><span>9. NDK Pizza</span> Managing iOS App</li>
                                                        <li><span>10. Floor World</span> Managing E-Commerce Website with 3rd Party Inventory Software</li>
                                                        <li><span>11. Emirates Hills</span> Virtual Tour for Villa</li>
                                                        <li><span>12. Jumeirah South Villa</span> Virtual Tour for Properties</li>
                                                        <li><span>13, Al Barari Luxury Villa</span> Virtual Tour for Properties</li>
                                                        <li><span>14, Palm Jumeirah</span> Virtual Tour for Tiara Residence</li>
                                                    </ol>

                                                </div>
                                            </div>



                                        </div>
                                    )}
                                    {(!activeCategory || activeCategory === 2) && (
                                        <div className="row portfolio-scroll" id="mobile-app">
                                            <div className="col-md-12 imagesport">
                                                <div className="portfolio-card">

                                                    <h3 className="lauxery">MintTwist - UAE & UK
                                                    </h3>

                                                    <div className="subtitle">
                                                        Project Manager for MENA Region
                                                    </div>

                                                    <p className="desc">
                                                        MintTwist headoffice based in London, UK. MT hired me as a Project Manager to manage all the projects from Middle East. While working MT I got excellent opportunity to work some of very big clients plus I leared alot about Digital Marketing.
                                                    </p>

                                                    <ol className="work-list">
                                                        <li><span>1. Abu Dhabi Men's College</span> 1 Week Consultancy + RFP for New Website Designing</li>
                                                        <li><span>2. Grand Hyatt Muscat - Oman</span> Build iOS Application</li>
                                                        <li><span>3. Government Summit from Dubai Holding</span> Managing Existing Website</li>
                                                        <li><span>4. Yanbu Steel - Saudia Arabia</span> Build Corporate Website</li>
                                                        <li><span>5. eXtra - Saudia Arabia</span> Proposing E-Commmerce Website + Mobile App</li>
                                                        <li><span>6. Bin Hendi</span> Building Corporate Website</li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>

                                    )}
                                    {(!activeCategory || activeCategory === 3) && (
                                        <div className="row portfolio-scroll" id="Ecommerce">
                                            <div className="col-md-12 imagesport">
                                                <div className="portfolio-card">

                                                    <h3 className="lauxery">Flagship Projects - Dubai Media City
                                                    </h3>

                                                    <div className="subtitle">
                                                        Senior Website Designer Dubai
                                                    </div>

                                                    <p className="desc">
                                                        I was hired for His Highness Sheikh Majid Bin Mohammed private office to manage official Website however after providing excellent solution to Private Office of His Highess, I got opportunity to work on some other prestigious projects such as:
                                                    </p>

                                                    <ol className="work-list">
                                                        <li><span>1. His Highness Sheikh Maktoum Bin Mohammed</span> for designing a Website Layout</li>
                                                        <li><span>2. Etisalat - More Mondays Rewards</span> Build Etisalat Program 'More Mondays' Website</li>
                                                        <li><span>3. Etisalat - More Mondays Rewards</span> Email Marketing Campaign</li>
                                                        <li><span>4. Dubai Public Prosecution</span> iPhone Application with the integration of there existing system</li>
                                                    </ol>

                                                </div>
                                            </div>



                                        </div>

                                    )}
                                    {(!activeCategory || activeCategory === 4) && (
                                        <div className="row portfolio-scroll" id="SEO">
                                            <div className="col-md-12 imagesport">
                                                <div className="portfolio-card">

                                                    <h3 className="lauxery">Lotus Educational Institute - Dubai Knowledge Village
                                                    </h3>

                                                    <div className="subtitle">
                                                        Web Developer & Instruture
                                                    </div>

                                                    <p className="desc">
                                                        Building & Managing Institue Websites. Providing Website Training to International Students.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>

                                    )}
                                    {(!activeCategory || activeCategory === 5) && (
                                        <div className="row portfolio-scroll" id="ppc">
                                            <div className="col-md-12 imagesport">
                                                <div className="portfolio-card">

                                                    <h3 className="lauxery">Arbico Computers
                                                    </h3>

                                                    <div className="subtitle">
                                                        Gaming Computers Dristributors in UK

                                                    </div>

                                                    <p className="desc">
                                                        Web Designer - Managing E-Commerce Websites for updates, reporting and managing eBay Channels.

                                                    </p>



                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {(!activeCategory || activeCategory === 6) && (

                                        <div className="row portfolio-scroll" id="digital-market">
                                            <div className="col-md-12 imagesport">
                                                <div className="portfolio-card">

                                                    <h3 className="lauxery">Wiztech
                                                    </h3>

                                                    <div className="subtitle">
                                                        Software House

                                                    </div>

                                                    <p className="desc">
                                                        Started my career with Wiztech. My first website I ever build was for Education Institute.

                                                    </p>



                                                </div>
                                            </div>
                                        </div>


                                    )}


                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <style jsx>{`
        .categories {
          display: flex;
        //   flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom:20px ;
        }
 .luxury-heading.bottomluxury{
 margin-bottom:20px !important}
 .imagesport{
  padding:20px;
}

/* main box */
.portfolio-card{
  position:relative;
   
  linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.0) 35%);;
  border:1px solid #f0b02c;
  padding:30px 35px;
  text-align:left !important;
  
}

/* animated arrow track */
.arrow-track {
  position: relative;
  height: 24px;
  margin-bottom: 4px;
}

.animated-arrow {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 18px solid #f0b02c;
  opacity: 0;
  will-change: transform;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.animated-arrow.arrow-visible {
  opacity: 1;
}

.title{
  font-size:20px;
  font-weight:700;
  color:#2c4e6b;
  margin-bottom:6px;
}

.subtitle{
  font-size:14px;
  color:#fff;
  margin-bottom:15px;
}

.desc{
  font-size:14px;
  color:#5e6f7f;
  line-height:1.7;
  margin-bottom:15px;
}

.work-list{
  padding-left:0px !important;
}

.work-list li{
  font-size:14px;
   
  margin-bottom:6px;
  font-size:16px;
}

/* orange highlighted names */
.work-list li span{
  color:#e65100;
  font-weight:500;
}

/* responsive */

@media(max-width:768px){

  .portfolio-card{
    padding:20px;
  }

  .title{
    font-size:18px;
    
  }
    h3.title {
    color:#5e6f7f;
    }
  .subtitle{
    font-size:13px;
  }

  .desc{
    font-size:13px;
  }

  .work-list li{
    font-size:13px;
  }

}

.work-title {
  font-weight: 600;
   
}

.category-item {
       cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  cursor: pointer;
}

.circle {
  width: 100px;
  height: 100px;
//   background: #ff5a52;
 border: 3px solid #f0b02c;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}

.circle h5 {
  font-size: 14px;
  margin: 0;
  font-weight: 500;
}

.circle span {
  font-size: 14px;
  margin-top: 5px;
}

.category-item.active .circle {
  transform: scale(1.05);
  transition: 0.3s;
  background: #f0b02c;
  box-shadow: 0 0 10px #f0b02c, 0 0 20px #f0b02c;

}

 

 
  
        .category-item {
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .col-md-1 {
            width: 100%;
          }

          .categories {
            flex-direction: row;
            overflow-x: auto;
            overflow-y: hidden;
            gap: 15px;
            padding: 10px 0;
            align-items: center;
            -webkit-overflow-scrolling: touch;
          }

          .categories::-webkit-scrollbar {
            display: none;
          }

          .categories {
            scrollbar-width: none;
          }

          .category-item {
            flex: 0 0 auto;
          }

          .categories p {
            display: none;
          }

          .category-label {
            display: block !important;
            position: static;
            margin-top: 6px;
            display:none !important;
          }
        }
      `}</style>
            </div>
        </>
    );
}

export default ServiceSection;