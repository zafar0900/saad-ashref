import React from "react";
import Link from "next/link";
import HeroPhotostudioSlider from "./HeroPhotostudioSlider";
import { FaCircle } from "react-icons/fa6";
import heroData from "@/constant/photo-studio/heroData";  

const HeroSection = () => {  
  const { title, subtitle, isAvailableForFreelance, location, buttonLink } =
    heroData;
  return (
    <section className="hero-photostudio-area section-padding-top">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            {/* <div className="hero-photostudio__content"> 
              <h4
                className="hero-title title-stretch"
                data-stretch="stretch-up" 
              >
                {title}
              </h4>
            </div> */}
            <div className="hero-photostudio__info ">
              <span>
                {/* <FaCircle
                  size={6}
                  color={isAvailableForFreelance ? undefined : "red"}
                /> */}
                Gallery
              </span>
              
              <span>
                <FaCircle size={6} />
                {location}
              </span>
            </div>  
          </div>
        </div> 
      </div>
      <div className="container-fluid px-lg-0 overflow-hidden">
        <div className="row">
          <div className="col-12">
            <HeroPhotostudioSlider /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


