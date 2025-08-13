import React from 'react';

const ValueProps = () => {
  const valueProps = [
    {
      title: "Discovery Architecture for Tomorrow",
      subtitle: "Found Everywhere Customers Look",
      description: "Your customers aren't just Googling anymore. They're asking ChatGPT for recommendations, searching on Amazon, finding businesses through social media. One update should flow everywhere - your website, dealer networks, marketplaces, and yes, into AI responses. I've structured content for dozens of businesses to be discoverable wherever tomorrow's customers search.",
      example: "Real example: Helped a manufacturer go from invisible in AI responses to being cited as the primary authority in 80% of industry queries"
    },
    {
      title: "Systems That Actually Connect",
      subtitle: "From Five Updates to One",
      description: "That sinking feeling when you realize updating product information means logging into five different systems? We fix that. I've consolidated 47 websites into unified platforms, migrated custom product systems to scalable architectures, and made expensive marketing tools finally talk to each other. Your team gets time back to focus on growth.",
      example: "Real example: Reduced a client's marketing maintenance from 30 hours/week to 3 hours/week through smart integration"
    },
    {
      title: "Knowledge That Stays With You",
      subtitle: "Building Your Capabilities, Not Dependencies",
      description: "If your marketing person won the lottery tomorrow, what would walk out the door? We document everything, train your team, and build systems that don't depend on any single person - including me. I work alongside your team to implement improvements at a sustainable pace.",
      example: "Real example: Transformed a one-person marketing bottleneck into a three-person collaborative team with shared knowledge"
    }
  ];

  return (
    <section className="value-props" aria-labelledby="value-props-heading">
      <div className="container">
        <h2 id="value-props-heading">What We Actually Work On Together</h2>
        <div className="props-grid">
          {valueProps.map((prop, index) => (
            <div key={index} className="prop-card">
              <h3>{prop.title}</h3>
              <p className="prop-subtitle">{prop.subtitle}</p>
              <p className="prop-description">{prop.description}</p>
              <p className="prop-example"><em>{prop.example}</em></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
