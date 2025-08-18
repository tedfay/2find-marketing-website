import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-flex">
        <div className="hero-content">
          <h1>
            Smarter Marketing, Less Guesswork
          </h1>
          <p className="subtitle">
            Unlock new growth for your business—without more busywork.
          </p>
          <p className="hero-description">
            You’re busy running a successful company. I help you see the highest-impact marketing opportunities—then make them happen. 
            From untangling messy tools to leveling up your brand’s visibility, you’ll get perspective, clarity, and practical execution that moves your business forward.
          </p>
          <a href="#contact" className="cta-button primary">
            Let’s Talk Growth →
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/images/2find-homepage-graphic-nobg.svg"
            alt="Abstract illustration symbolizing clarity and growth"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;