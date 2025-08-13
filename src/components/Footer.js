import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Experience</h3>
            <ul>
              <li>20+ years in digital marketing and operations</li>
              <li>Consolidated 47 websites into unified platforms</li>
              <li>Migrated dozens of enterprise systems</li>
              <li>Built teams from 1 to 50 people</li>
              <li>Managed budgets from $10K to $10M</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Pattern Recognition</h3>
            <ul>
              <li>Worked with startups to Fortune 500</li>
              <li>B2B and B2C experience</li>
              <li>Manufacturing, financial services, nonprofits, SaaS</li>
              <li>Based in Morton Grove, IL (but patterns are universal)</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Network Effect</h3>
            <p>
              I maintain relationships with specialists in analytics, development, 
              content, and design. When you need specific expertise, I know who to call.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="accessibility-statement">
            This site exceeds WCAG 2.1 AA standards because good marketing works for everyone. 
            Encounter a barrier? Let me know: 
            <a href="mailto:accessibility@2findmarketing.com"> accessibility@2findmarketing.com</a>
          </p>
          <p className="copyright">
            © 2024 2Find Marketing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
