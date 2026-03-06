"use client";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

const FaqItem = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion.Item
      eventKey={data.id}
      className="faq-2__item"
      onClick={() => setOpen(!open)}
    >
      <Accordion.Header>
        <span className="faq-title">{data.question}</span>
        <span className="faq-icon">{open ? "-" : "+"}</span>
      </Accordion.Header>

      <Accordion.Body>{data.answer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default FaqItem;
