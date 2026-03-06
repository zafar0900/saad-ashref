"use client";
import React from "react";

const WhatsAppFloating = () => {
  return (
    <>
      <a
        href="https://wa.me/971553486284"  // ✅ your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 85px;
          right: 34px;
          width: 56px;
          height: 56px;
          background-color: #25d366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          z-index: 9999;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        /* Mobile spacing */
        @media (max-width: 576px) {
          .whatsapp-float {
            bottom: 85px;
            right: 33px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloating;
