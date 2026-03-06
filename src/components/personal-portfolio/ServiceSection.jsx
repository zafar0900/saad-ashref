// components/ServiceSection.jsx

import React from "react";
import ServiceItem from "@/components/personal-portfolio/ServiceItem";
import servicesData from "@/constant/personal-portfolio/services-data";

const ServiceSection = () => {    
  const { title, services } = servicesData;
  
  const upServices = services?.filter(service => service?.position === "up");
  const downServices = services?.filter(service => service?.position === "down");

  return (
    <section className="service-area section-padding-top-bottom position-relative">
      <div className="container">
        <div className="row  ">
          <div className="col-lg-12 col-xl-12">
            <div className="section__header text-center">
              <h3 className="luxury-heading">
                {title}
              </h3>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container container--extend section-mini-padding-top">
        <div className="row">
          <div className="col-12"> 
            <div className="service__items">
              <div className="service__items-up">
                {upServices.map((service) => (
                  <ServiceItem
                    key={service?.id}
                    title={service?.title}
                    description={service?.description}
                    link={service?.link}
                  />
                ))}
              </div>
              {/* <div className="service__items-down">
                {downServices.map((service) => (
                  <ServiceItem
                    key={service?.id}
                    title={service?.title}
                    description={service?.description}
                    link={service?.link}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;