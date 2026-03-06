import FaqAccordion from '@/components/photo-studio/FaqAccordion';

const Faq = () => {
  return (
    <div className="faq-2-area bg-smoky-black section-padding-top-bottom">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
            <h3 className="luxury-heading  ">
              Frequently Asked Question
            </h3>
            </div>
          </div>  
        </div>
        <div className="row service_testing_div">
          <div className="col-12">
            <FaqAccordion/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
