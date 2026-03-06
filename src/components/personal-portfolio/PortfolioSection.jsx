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
                Recent Work
              </h3>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {portfolioData?.portfolios?.map((item) => (
            <div key={item?.id} className="col-md-6">
              <PortfolioItem  
                image={item?.image}  
                title={item?.title}
                year={item?.year}
                tags={item?.tags} 
                revealAnimation={item?.revealAnimation}
                link={item?.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
