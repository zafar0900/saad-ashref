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
                 Dubai Tourism - Mobile App
              </h1>
            </div>
          </div>
          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-02.webp" alt="dubai_tourism_mobile-app_ui-design-02" />
            </div>
          </div>

          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-01.webp" alt="dubai_tourism_mobile-app_ui-design-02" />
            </div>
          </div> 
          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-03.webp" alt="dubai_tourism_mobile-app_ui-design-03" />
            </div>
          </div>

          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-04.webp" alt="dubai_tourism_mobile-app_ui-design-04" />
            </div>
          </div>
          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-05.webp" alt="dubai_tourism_mobile-app_ui-design-05" />
            </div>
          </div>

          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden dubai">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-06.webp" alt="dubai_tourism_mobile-app_ui-design-06" />
            </div>
          </div>

          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden">
              <img src="/assets/project/dubai/dubai_tourism_mobile-app_ui-design-07.webp" alt="dubai_tourism_mobile-app_ui-design-07" />
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default PortfolioDetails;
