import React from "react";
import testimonialData from "@/constant/about/testimonial-data";
import TestimonialSlider from "@/components/about/TestimonialSlider";

const Testimonial = () => {
  return ( 
    <section className="testimonial-area section-padding-top-bottom bg-ecedde before-shape after-shape">
      <div className="container container--extend">
        <div className="row   text-center section-mini-padding-bottom">
          <div className="col-sm-12 col-md-12 col-xl-12">
            <div className="section__header">
            <h3 className="luxury-heading  ">
                Clients Testimonials
              </h3>
            </div>
          </div>  
        </div>
        <div className="row overflow-hidden">
          <div className="col-12">
            <TestimonialSlider testimonials={testimonialData?.testimonials}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
