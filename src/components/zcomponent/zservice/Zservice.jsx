"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import {
  sectionHeaderData,
  servicesData,
} from "@/constant/ai-consulting/services-data"; 
 
const Services = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleHover = (index) => {
    setActiveImageIndex(index);  
  }; 
  return (
    <section 
      id="services-3"
      className="services-3-area section-padding-top bg-white zservice" 
    >
      <div className="container container--extend">
        <div className="row">
          <div className="col-lg-12 col-xxl-12">
            <div className="section__header text-center">
              
              <h3 className=" luxury-heading"> 
                {sectionHeaderData.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="row servcie_card">
          <div className="col-12">
            <div className="services-3__thumb-content">
              <div className="services-3__thumb">
                {servicesData.map((service, index) => (
                  <Link href={service.link} key={index}>
                    <img
                      key={index}
                      src={service?.imgSrc}
                      alt={service?.alt}
                      className={`w-100 ${
                        activeImageIndex === index ? "active" : ""
                      }`}
                    />
                  </Link>
                 
                ))}
              </div>
              <div className="services-3__content text-black">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={`featcher item-popup ${
                      activeImageIndex === index ? "active" : ""
                    }`}
                    onMouseEnter={() => handleHover(index)}
                  >
                    <h3 className="featcher__title font_size_custom">
                    <Link href={service?.link}>
                      {service.title}
                      </Link>
                      <Link
                        href={service.link}
                        className={`common-btn__circle ${
                          activeImageIndex === index ? "active" : ""
                        }`}
                      >
                        <PiArrowUpRightBold />
                      </Link>
                    </h3>
                    {/* <p>{service.description}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
