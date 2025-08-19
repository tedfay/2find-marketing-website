import React from "react";

interface Service {
  title: string;
  subtitle: string;
  text: string;
  button: boolean;
}

const services: Service[] = [
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
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              key={idx}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-blue-600 font-medium mb-4">
                  {service.subtitle}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.text}
              </p>
              {service.button && (
                <a 
                  className="btn-secondary" 
                  href="#contact"
                  aria-label={`Learn more about ${service.title}`}
                >
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
