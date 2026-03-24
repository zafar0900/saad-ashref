"use client";
import React, { useState } from "react";
import Link from "next/link";
import blogPosts from "@/constant/blog/blog-data";

// const categories = ["all", "marketing", "branding", "video", "web-design"];
const categories = [
  "all",
  ...[...new Set(blogPosts.flatMap((post) => post?.categories))],
];
const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts = blogPosts.filter((post) =>
    activeFilter === "all" ? true : post?.categories?.includes(activeFilter)
  );

  return ( 


    <section className="blog-area blog-filter-area section-padding-top-bottom before-shape after-shape">

      <div className="container">
        {/* Filter Links */}
        <div className="row">
          <div className="col-12">
            <div className="section__header">

              {/* ⭐ Paragraph same as your image */}
              <h4 className=" luxury-heading spacing_blog">Blog</h4>






            </div>
          </div>
        </div>

        {/* Blog Posts Row */}
        <div className="row blog__items blog-filter__mixItUp">
          {filteredPosts
            .sort((a, b) => b.id - a.id) // DESC order by ID
            .map((post) => (
              <div
                key={post?.id}
                className={`col-12 branding web-design ${post?.categories?.join(" ")}`}
              >
                <div className={`blog__item ${post?.effect}`}>
                  <div className="blog-content">

                    {/* BLOG DATE */}
                    <div className="blog-meta">


                      {/* DATE DESCRIPTION */}
                      <p className="blog-date-desc">{post?.date}</p>
                    </div>

                    {/* BLOG TITLE */}
                    <h4 className="luxury-heading">
                      <Link href={`/blog/${post.slug}`}>
                        {post?.title}
                      </Link>
                    </h4>

                    {/* READ MORE BUTTON */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="common-btn common-btn--color-reverse"
                    >
                      Read More
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>

                  {/* BLOG IMAGE */}
                  <figure className="blog-thumb">
                    <Link href={`/blog/${post.slug}`}>
                      <img
                        src={post?.image}
                        alt={post?.title}
                        className="blog-thumb-image"
                      />
                    </Link>
                  </figure>

                </div>
              </div>
            ))}
        </div>


      </div>
    </section>
  );
};

export default BlogSection;
