import React from 'react';

const CTA = () => {
  return (
    <section className="cta-section" id="contact" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading">Three Ways to Start</h2>
        
        <div className="cta-options">
          <div className="cta-option">
            <h3>The Conversation</h3>
            <p className="cta-tagline">Let's talk about what's possible</p>
            <p>
              30 minutes. No pitch deck. Just a conversation about where you are and where 
              you want to go. If I can help, I'll tell you how. If someone else would be 
              better, I'll tell you who.
            </p>
            <a href="mailto:ted@2findmarketing.com?subject=Let's Talk About What's Possible" 
               className="cta-button primary">
              Schedule a Call
            </a>
          </div>
          
          <div className="cta-option">
            <h3>The Quick Assessment</h3>
            <p className="cta-tagline">See where you stand</p>
            <p>
              Five questions that reveal marketing opportunities. Takes 2 minutes. 
              You get immediate insights, no email required unless you want to go deeper.
            </p>
            <button className="cta-button secondary" 
                    onClick={() => alert('Assessment coming soon!')}>
              Take Assessment
            </button>
          </div>
          
          <div className="cta-option">
            <h3>The Direct Question</h3>
            <p className="cta-tagline">Ask me anything</p>
            <p>
              Sometimes you just have a specific question. Send it over. 
              I'll give you a straight answer.
            </p>
            <a href="mailto:ted@2findmarketing.com" className="cta-button tertiary">
              ted@2findmarketing.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
