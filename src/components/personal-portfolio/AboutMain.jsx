import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data"; 

const AboutMain = () => {  
  return (
    <section className='about-area  bg-ecedde after-shape'> 
      <div className="container">
        
        <div className="row extra_forAbout"> 
          <div className="col-xl-12"> 
            <div className="section__header">
               
              <h3 className="luxury-heading ">
              {aboutData?.headerInfo?.greeting} {aboutData?.headerInfo?.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="row  justify-content-end service_testing_div">
          <div className="col-xl-6 d-none d-xl-block">
            <div className="   overflow-hidden image_testing">
              <img
                  style={{height:"450px"}}
                src={aboutData?.decorativeImage?.src}
                alt={aboutData?.decorativeImage?.alt}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about__content">
              {aboutData?.content?.paragraphs.map((paragraph, index) => (
                <p key={index} className="item-popup">
                  {paragraph}
                </p>
              ))}
              <Link href={aboutData?.content?.cta?.href} className="common-btn">
                {aboutData?.content?.cta?.text}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default AboutMain;
