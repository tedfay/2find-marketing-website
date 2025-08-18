import React from "react";
import "../styles/SectionCards.css";

const services = [
  {
    title: "Consulting",
    subtitle: "Expert Guidance",
    text: "Get focused, actionable marketing guidance when you need it most. I help you clarify your strategy and next steps—no jargon, just real advice.",
    button: false,
  },
  {
    title: "Retained Services",
    subtitle: "Ongoing Partnership",
    text: "Ongoing support for teams that want continuous expertise and execution. I handle your marketing roadmap so you can focus on what you do best.",
    button: false,
  },
  {
    title: "Fractional Executive",
    subtitle: "Leadership On Demand",
    text: "Need senior marketing leadership without a full-time hire? I step in as your part-time executive, driving strategy, mentoring teams, and building momentum.",
    button: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <div className="cards">
          {services.map((service, idx) => (
            <div
              className={`card${!service.button ? " card--autoheight" : ""}`}
              key={idx}
            >
              <div className="card-title">{service.title}</div>
              {service.subtitle && (
                <div className="card-subtitle">{service.subtitle}</div>
              )}
              <div className="card-text">{service.text}</div>
              {service.button && (
                <a className="card-action" href="#">
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

