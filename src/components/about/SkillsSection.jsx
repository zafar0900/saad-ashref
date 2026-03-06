// components/SkillsSection.jsx
"use client";
import React from "react";
import skillsData from "@/constant/webflow-developer/skills-data";
import SkillItem from "@/components/SkillItem";

const SkillsSection = () => {
  return (
    <section className="skills-2-area about_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* use the same class strategy that works for you */}
            <div className="skills-carousel skills-2__items">
              {skillsData?.map((skill) => (
                <div key={skill?.id} className="skills-slide">
                  <SkillItem
                    className="skills__item--extend"
                    name={skill?.name}
                    image={skill?.image}
                    progress={skill?.progress}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* MOBILE ONLY */
        @media (max-width: 576px) {
          .skills-carousel {
            display: flex !important;
            flex-wrap: nowrap !important;
            gap: 16px;

            overflow-x: auto !important;
            overflow-y: hidden !important;

            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;

            padding-bottom: 12px !important;
          }

          /* hide scrollbar */
          .skills-carousel::-webkit-scrollbar {
            display: none;
          }

          .skills-slide {
            flex: 0 0 90%;
            max-width: 90%;
            scroll-snap-align: center;
          }
        }
      `}</style>

    </section>
    
  );
};

export default SkillsSection;


 
