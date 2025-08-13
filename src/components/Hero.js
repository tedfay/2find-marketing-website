import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Your Marketing Should Make More Sense (and Less Work)</h1>
        <p className="subtitle">
          Fresh perspective and practical implementation for businesses ready to move forward
        </p>
        <p className="hero-description">
          You're running a successful business. You sense opportunities in your marketing but don't 
          have time to investigate them all. Maybe you're updating product information in five different 
          places. Maybe you wonder if ChatGPT recommends your competitors when people ask about your 
          industry. Maybe you suspect your expensive marketing tools aren't actually talking to each other. 
          I bring pattern recognition from hundreds of similar situations to help you see what's really 
          there - and build practical paths forward.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="cta-button primary">
            Let's Talk About What's Possible →
          </a>
          <a href="#stories" className="cta-button secondary">
            See How Others Moved Forward
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
