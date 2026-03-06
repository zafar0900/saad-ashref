import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";

const AboutMain = () => { 
  return (
    <section className='about-area  bg-ecedde after-shape about_profile'>
      <div className="container">
        
        <div className="row   justify-content-end  ">
          <div className="col-xl-6 d-none d-xl-block">
            <div className="   overflow-hidden image_testing">
              <img
                  style={{height:"380px"}}
                src={aboutData?.decorativeImage?.src}
                alt={aboutData?.decorativeImage?.alt}
              />
            </div> 
          </div>
          <div className="col-xl-6">
            <div className="about__content">
                <p  className="item-popup">
                  Hello, my name is Saad, and I am a freelance graphic designer and logo designer in Dubai, who assists brands in appearing modern, meaningful, and visually strong.
                </p>
                <p  className="item-popup">
                I have over 15 years of experience working with top agencies, multinational brands, and startups that grow rapidly in the world. I handle all-digital projects, concept-to-launch such as web development, search engine optimization, social media, and mobile apps.
                </p>
                <p  className="item-popup">
                  My work combines strategy with clear images, so that each brand will feel human, balanced and professional. I aim at clarity, structure, and powerful visual narration whether it comes to developing a powerful identity system or developing the digital presence of a brand.
                  </p>
                <p  className="item-popup">
                Being a freelance logo designer in Dubai, I create identities that do not only look good but also work in real markets. Each project receives a considered approach, ensuring that the brand voice is understandable, assertive, and memorable.
                </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
