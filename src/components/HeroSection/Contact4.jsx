"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";

import Image from "next/image";
export default function Contact4() {
  const form = useRef();

  const sandMail = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
  
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    // -----------------------
    // 🔴 FRONTEND VALIDATION
    // -----------------------
  
    // Name check
    if (!data.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
  
    // Phone check
    if (!data.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }
  
    // Email empty
    if (!data.email.trim()) {
      toast.error("Email is required!");
      return;
    }
  
    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
  
    // Message check
    if (!data.message.trim()) {
      toast.error("Please type your message.");
      return;
    }
  
    // -----------------------
    // 🟢 SEND TO API
    // -----------------------
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        toast.error(result.message || "Failed to send! Try again.");
        return;
      }
  
      toast.success("Message sent successfully!", { autoClose: 3000 });
      form.current.reset();
  
    } catch (error) {
      toast.error("Server error! Please try again later.");
    }
  };
  
  return (
    <div
      className="contact-area-left-portfolio-fixed finance banner-personal-portfolio signle-section svg_image22"
      id=" "
    >
     
      <div className="row">
        <div className="col-lg-12 center-light-wrapper">
          <div className="center-light" />
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="tmp-contact-form contact-form-style-1">
                <form ref={form} onSubmit={sandMail}>
                  <div className="form-group">
                      <input
                            className="input-field"
                            name="name"
                            id="contact-name"
                            placeholder="Your Name"
                            type="text"
                            required
                          />
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <input
                            className="input-field"
                            id="contact-email"
                            name="email"
                            placeholder="Your Email"
                            type="email"
                            required
                          />
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                      <input
                            className="input-field"
                            name="phone"
                            id="contact-phone"
                            placeholder="Phone Number"
                            type="number"
                            required
                          />
                    <span className="focus-border"/>
                  </div>
                  <div className="form-group">
                      <textarea
                            className="input-field"
                            placeholder="Your Message"
                            name="message"
                            id="contact-message"
                            required
                            defaultValue={""}
                          />
                    <span className="focus-border" />
                  </div>
                  <div className="form-group svg_image25">
                    <div className="tmp-button-here">
                      <button
                        className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon w-100"
                        type="submit"
                      >
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">Submit</span>
                          <div className="btn-hack" />
                          <Image
                            alt=""
                            className="btn-bg"
                            src="/assets/images/button/btg-bg.svg"
                            width={195}
                            height={56}
                          />
                          <Image
                            alt=""
                            className="btn-bg-hover"
                            src="/assets/images/button/btg-bg-2.svg"
                            width={193}
                            height={62}
                          />
                          <span className="btn-icon">
                            <i className="ffa-sharp fa-regular fa-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="ffa-sharp fa-regular fa-arrow-right" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
