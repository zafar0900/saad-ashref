import React from "react";
import Link from "next/link";
import portfolioData from "@/constant/portfolio-details/portfolioDetails-data";

const PortfolioDetails = () => {
  return (
    <section className="portfolio-details-area section-padding-bottom overflow-hidden"> 
      <div className="container  ">
        <div className="row">
        <div className="col-12">
            <div className="breadcrumb__header text-center">
              {/* <span className="breadcrumb__sub-title">{subTitle}</span> */}
              <h1
                className="luxury-heading"
                data-delay="1"
                style={{textAlign:"left"}}
              >
                 Rooms Planet
              </h1>
            </div>
          </div>
          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-brand-identity-design-01.webp" alt="Rooms Planet" />
            </div> 

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-brand-identity-design-02.webp" alt="Rooms Planet" />
            </div> 

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-brand-identity-design-03.webp" alt="Rooms Planet" />
            </div> 

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-brand-identity-design-04.webp" alt="Rooms Planet" />
            </div> 

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-branding-design-01.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-branding-design-02.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-branding-design-03.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-branding-design-04.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-website-ui-design-01.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-website-ui-design-02.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-website-ui-design-03.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-website-ui-design-04.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-website-ui-design-05.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-website-ui-design-06.webp" alt="Rooms Planet" />
            </div>

            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/room/rooms-planet-branding-hero_image.webp" alt="Rooms Planet" />
            </div>


          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PortfolioDetails;
