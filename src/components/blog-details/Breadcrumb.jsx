import React from "react";

const BREADCRUMB_DATA = {
  "top-reasons-why-professional-logo-design-in-dubai": {
    category: "Logo Design",
    title: "Top Reasons Why Professional Logo Design in Dubai",
    author: "Willomson",
    date: "12 February, 2024",
    read: "3 min read",
  },

  "why-startups-prefer-working-with-a-freelance-graphic-designer-dubai": {
    category: "Graphic Design",
    title: "Why Startups Prefer Working with a Freelance Graphic Designer Dubai",
    author: "Admin",
    date: "18 February, 2024",
    read: "4 min read",
  },
};

const Breadcrumb = ({ slug }) => {
  const data = BREADCRUMB_DATA[slug];

  // ✅ if slug not found → render nothing
  if (!data) return null;

  return (
    <section className="breadcrumb-area section-padding-top">
      <div className="container container--extend">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <div className="breadcrumb__header text-center">
              {/* <span className="breadcrumb__sub-title">{data.category}</span> */}
              <h1 className="breadcrumb__title split-text right text-initial">
                {data.title}
              </h1>
            </div>
          </div>

          {/* <div className="col-12 section-mini-padding-top">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="blog-details__info">

                  <div className="info-item">
                    <img
                      src="/assets/images/blog-details-area/blog-author.png"
                      alt="author"
                    />
                    <div className="item-content">
                      <p className="info-title">Written by</p>
                      <p className="info">{data.author}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="item-content">
                      <p className="info-title">Published</p>
                      <p className="info">{data.date}</p>
                    </div>
                  </div>

                  <div className="info-item none">
                    <div className="item-content">
                      <p className="info-title">Viewed</p>
                      <p className="info">{data.read}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
