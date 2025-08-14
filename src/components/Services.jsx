import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Discovery & Roadmap",
      timeline: "4-6 weeks",
      investment: "From $15,000",
      description: "Perfect when you sense opportunities but need outside perspective to prioritize them. I'll interview stakeholders, audit your tech stack, check your AI discovery presence, and create a practical roadmap that builds on what's already working.",
      deliverables: [
        "Fresh perspective on familiar challenges",
        "Technical audit that speaks business language",
        "90-day implementation roadmap with quick wins",
        "Clarity on what ChatGPT says about your industry"
      ],
      bestFor: "We know something's not quite right but can't put our finger on it."
    },
    {
      title: "Implementation Partnership",
      timeline: "Monthly ongoing",
      investment: "$5,000-$15,000/month",
      description: "Think of me as an experienced addition to your team. We work through your roadmap together, bring in specialists when needed, and build capabilities that last.",
      deliverables: [
        "Weekly working sessions to maintain momentum",
        "Hands-on help with implementation",
        "Access to my network of specialists",
        "Documentation so nothing lives in one person's head"
      ],
      bestFor: "We know what needs doing but need experienced guidance to do it right."
    }
  ];

  const projects = [
    {
      name: "The Consolidation Project",
      challenge: "12 websites → 1 platform",
      quote: "We inherited websites from three acquisitions plus our four brand sites. It's a maintenance nightmare.",
      experience: "I've consolidated 47 sites into one platform while preserving brand uniqueness."
    },
    {
      name: "The AI Discovery Project",
      challenge: "Invisible → Authoritative",
      quote: "Competitors show up when people ask ChatGPT about our industry. We don't.",
      experience: "I structure your content and data to be the cited authority."
    },
    {
      name: "The Integration Project",
      challenge: "Disconnected → Unified",
      quote: "Our PIM doesn't talk to our website, which doesn't talk to our dealer portal...",
      experience: "One update flows everywhere it needs to go."
    }
  ];

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading">Engagement Options That Match Your Reality</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <div className="service-meta">
                <span className="timeline">📅 {service.timeline}</span>
                <span className="investment">💼 {service.investment}</span>
              </div>
              <p>{service.description}</p>
              <div className="deliverables">
                <h4>You get:</h4>
                <ul>
                  {service.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="best-for"><strong>Best for:</strong> "{service.bestFor}"</p>
            </div>
          ))}
        </div>

        <div className="focused-projects">
          <h3>Focused Projects</h3>
          <p className="projects-intro">Specific expertise for defined challenges. I've done these exact projects before and know what works.</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>{project.name}</h4>
                <p className="project-challenge"><strong>{project.challenge}</strong></p>
                <p className="project-quote">"{project.quote}"</p>
                <p className="project-experience"><em>{project.experience}</em></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
