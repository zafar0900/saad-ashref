"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import { usePathname } from "next/navigation";

const ContactSection = () => {

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
    <section className="contact-area inner-hero-area section-padding-top-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content text-center">
              <h1
                className="luxury-heading "
                 
              >

                Contact Me
              </h1>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <div className="contact__wrapper">
              <div className="row g-4 g-xl-5">
                <div className="col-12 col-lg-5">
                  <div className="contact__info">
                    <h3 className="title">
                      Contact information
                    </h3>
                    <div className="digital-contacts">
                      <ul>
                        <li className="number_footer" >
                          +971 55 348 6284
                        </li>
                        <li className="sylefooter">
                          <Link
                            href="mailto:info@saaddesign.ae"
                            className=" sylefooter"
                          >
                            info@saaddesign.ae
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sylefooter">
                      <p>#821, Building 2, Bay Square, Business Bay, Dubai.</p>
                    </div>


                  </div>
                </div>
                <div className="col-12 col-lg-7">
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
    </section>
  );
};

export default ContactSection;
