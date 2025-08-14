import React from 'react';

const About = () => {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">Why I Do This Work</h2>
        
        <div className="about-content">
          <p>
            I've been in your shoes. I've managed million-dollar budgets, built teams from scratch, 
            and inherited "interesting" legacy systems. Over 20 years, I've learned that marketing 
            success isn't about revolutionary changes - it's about consistent execution of fundamentals 
            and systems that actually work together.
          </p>
          
          <p>
            I started 2Find Marketing after seeing too many smart businesses struggling with challenges 
            I'd already solved. Not because they weren't capable, but because they were too deep in 
            daily operations to step back and see the patterns.
          </p>
          
          <p>
            The landscape is shifting again. Your customers find businesses through Google, social media, 
            and increasingly through AI assistants. Every system we build today needs to work for all 
            these channels tomorrow.
          </p>
          
          <div className="principles">
            <h3>What Drives My Approach</h3>
            
            <div className="principle">
              <h4>Your Knowledge + My Patterns</h4>
              <p>You know your business. I know these patterns. Together we move faster than either could alone.</p>
            </div>
            
            <div className="principle">
              <h4>Documentation Over Dependencies</h4>
              <p>If it's not documented, it doesn't scale. Every process we build can run without me.</p>
            </div>
            
            <div className="principle">
              <h4>Measurement Over Hunches</h4>
              <p>Every recommendation ties to metrics you can track and outcomes you can measure.</p>
            </div>
            
            <div className="principle">
              <h4>Progress Over Perfection</h4>
              <p>Better to move forward sustainably than wait for the perfect solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
