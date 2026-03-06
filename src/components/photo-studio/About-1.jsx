"use client";
import React from "react";
import aboutData from "@/constant/photo-studio/aboutData";
import Link from "next/link";

const About = () => {
  return (
    <section className="about-4-area section-mini-padding-top" id="about-4">
  <div className="container"> 
    <div className="row">
      <div className="col-12">
        <div className="section__header"> 

          {/* ⭐ Paragraph same as your image */}
            <h1 className=" luxury-heading">Freelance Graphic Designer Dubai</h1>
            <h3 className="section__title hero-text text-left font_size_custom">Delivering corporate branding and UI design solutions. My work as a freelance logo designer Dubai helps businesses across the Middle East communicate their vision with style and clarity.</h3>
          

          {/* ⭐ Green list like image */} 
          <ul className="green-list">
          <Link href="/graphic-design-dubai"><li>Graphic Design</li></Link>
          <Link href="/branding-design-dubai"><li>Branding Design</li></Link>
          <Link href="/logo-design-dubai"><li>Logo Design</li></Link>
          <Link href="/ui-ux-design-dubai"><li>UI UX Design</li></Link>
          <Link href="/web-design-dubai"><li>Web Design</li></Link> 
          </ul>

        </div>
      </div>
    </div>
  </div>

</section>


  );
};

export default About;
