"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import OffcanvasSocial from "../OffcanvasSocial";

const Footer = () => {
  const pathname = usePathname();
  const hideForm = pathname === "/contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    message: "",
  }); 

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message please try again latter.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong please try again latter.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="footer-area   bg-vampire-black">
      {/* <div className="footer__top">
        <div className="container container--extend">
          <div className="row justify-content-end">
            <div className="col">
              <div className="footer__top-social">
                <ul>
                  <li>
                    <Link href="https://www.facebook.com/mistersaadae/">
                      facebook
                      <PiArrowUpRightBold size={20} />
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="https://www.instagram.com/mistersaadae/">
                      instagram
                      <PiArrowUpRightBold size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/saadwebdesigner/">
                      Linkedin
                      <PiArrowUpRightBold size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer__center  ">
        {!hideForm && (
          <div className="container ">

            <div className="row  ">
              <div className="col-12">
                <div className="contact__wrapper">
                  <div className="row g-4 g-xl-5">
                    <div className="col-12 col-lg-6">
                      <div className="contact__info">
                        <h3 className="title">
                          Contact information
                        </h3>
                        <div className="digital-contacts">
                          <ul>
                            <li className="number_footer" >
                            +971 55 3486 284
                            </li>
                            <li  className="sylefooter">
                              <Link
                                href="mailto:saad@saadashraf.net "
                                className=" sylefooter"
                              >
                                saad@saadashraf.net
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="sylefooter">
                          <p>Level 8, Bay Square, Business Bay,
                          Dubai, UAE.</p>
                        </div>


                      </div>
                    </div> 

                    <div className="col-12 col-lg-6">
                      <div className="contact__form-wrapper">
                        <form className="contact__form" onSubmit={handleSubmit}>
                          <div className="row g-4">

                            <div className="col-md-6">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="name" 
                                  placeholder="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="input-group">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="phone"
                                  placeholder="phone no"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="input-group">
                                <textarea
                                  name="message"
                                  placeholder="message"
                                  rows="5"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <button className="common-btn" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                              </button>
                            </div>

                            {status && (
                              <div className="col-12">
                                <p style={{ color: "#fff" }}>{status}</p>
                              </div>
                            )}

                          </div>
                        </form>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footer__bottom bg-black">
        <div className="container container--extend">
          <div className="row gx-4 gy-2">
            <div className="col-lg-4 order-3 order-lg-1">
              <p className="footer__copyright">
                © 2025 Mister Saad | All Rights Reserved
              </p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="footer__back-to-top">
                <Link href="#header" className="section-link">
                  <i className="fas fa-angle-up"></i>
                  Back To Top
                </Link>
              </div>
            </div>
            <div className="col-lg-4 order-2 order-lg-3">
              <div className="footer__nav social-share">
              <ul>
                <OffcanvasSocial
                  link="https://www.facebook.com/mistersaadae/"
                  socialType="facebook"
                  className="dark"
                />
                
                <OffcanvasSocial
                  link="https://www.instagram.com/mistersaadae/"
                  socialType="instagram"
                  className="dark"
                />
                <OffcanvasSocial
                  link="https://www.linkedin.com/in/saadwebdesigner/"
                  socialType="linkedin"
                  className="dark"
                />
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
