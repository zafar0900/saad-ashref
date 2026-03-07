import Link from "next/link";
import Marquee from "react-fast-marquee";
import portfolioData from "@/constant/personal-portfolio/portfolio-data";
import PortfolioItem from "@/components/personal-portfolio/PortfolioItem";

const PortfolioSection = () => {
    return (
        <section className="portfolio-area   bg-ecedde before-shape after-shape z-0">


            <div className="container container--extend">
                <div className="row">
                    <div className="col-lg-12 col-xxl-12">
                        <div className="section__header text-center">

                            <h3 className=" luxury-heading haddingspace">
                                EVENT AND WORKSHOP
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div key={1} className="col-md-4 ">
                        <div className="portfolio__item">
                            <figure className={`item__thumb reveal left`}>
                                <img src='/assets/about/saad-ashraf-web-developer-dubai (2).jpg' alt='saad-ashraf-web-developer-dubai' />
                                <div className="item__footer hadding">
                                    <h4 className="item__title">
                                        Digital/E-Commerce Initiatives by
                                        Dubai Startup HUB hosted at
                                        Dubai Expo 2020.
                                    </h4>
                                </div>

                            </figure>

                        </div>
                    </div>

                    <div key={2}  className="col-md-4 ">
                        <div className="portfolio__item">
                            <figure className={`item__thumb reveal bottom`}>
                                <img src='/assets/about/saad-ashraf-web-developer-dubai.jpg' alt='saad-ashraf-web-developer-dubai' />
                                <div className="item__footer hadding">
                                    <h4 className="item__title">
                                        Marketing Event at Marriott to discuss
                                        about brands Collaboration, Investments
                                        Smart Technologies & Regions
                                    </h4>
                                </div>

                            </figure>

                        </div>
                    </div>

                    <div key={3}  className="col-md-4 ">
                        <div className="portfolio__item">
                            <figure className={`item__thumb reveal right`}>
                                <img src='/assets/about/saad-ashraf-web-designer-dubai (1).jpg' alt='saad-ashraf-web-developer-dubai' />
                                <div className="item__footer hadding">
                                    <h4 className="item__title">
                                        Digital Meetup to discuss about the
                                        Google Products including PPC, Adwords,
                                        Analytics, SEO, Business Listing & Ads.
                                    </h4>
                                </div>

                            </figure>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
