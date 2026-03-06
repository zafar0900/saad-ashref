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
                 MAZON TOURS - SOCIAL MEDIA
              </h1>
            </div>
          </div>
          <div className="col-12 p-xxl-0">
            <div className="portfolio-details__thumb reveal right overflow-hidden">
              <img src="/assets/project/MAZON TOURS - SOCIAL MEDIA by SAAD DESIGN.jpg" alt="MAZON TOURS - SOCIAL MEDIA by SAAD DESIGN" />
            </div>
          </div>
        </div>
      </div>
      <div className="container container--extend" style={{display:'none'}}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-sm-9 col-lg-8 col-xl-7 col-xxl-6">
                <article
                  className="portfolio-details__content"
                  dangerouslySetInnerHTML={{
                    __html: portfolioData?.htmlContent,
                  }}
                ></article>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-sm-9 col-lg-8 col-xl-7 col-xxl-6 section-mini-padding-top">
                <div className="portfolio-details__navigations">
                  <Link
                    href="/portfolio-details"
                    className="common-btn__circle-move btn-hover btn-item"
                  >
                    Prev project
                    <i className="fa-solid fa-arrow-up rotate-negative-45"></i>
                    <span></span>
                  </Link>
                  <Link
                    href="/portfolio-details"
                    className="common-btn__circle-move btn-hover btn-item"
                  >
                    next project
                    <i className="fa-solid fa-arrow-up rotate-45"></i>
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
