import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer-simple">
      <div className="footer-simple-container">
        <div className="footer-simple-left">
          <span>© 2025 2 Find Marketing, LLC</span>
          <span className="dot">·</span>
          <a href="/terms" className="footer-link">Terms</a>
          <span className="dot">·</span>
          <a href="/privacy" className="footer-link">Privacy</a>
        </div>
        <div className="footer-simple-right">
          <a
            href="https://www.linkedin.com/company/2findmarketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-linkedin"
          >
            {/* LinkedIn SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#0077B5" d="M21 2.25H3A.75.75 0 0 0 2.25 3v18A.75.75 0 0 0 3 21.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75Z"/>
              <path fill="#fff" d="M6.72 18h-2.4V9h2.4v9ZM5.52 7.8A1.39 1.39 0 1 1 6.9 6.42c0 .77-.62 1.38-1.38 1.38ZM19.2 18h-2.4v-4.29c0-1.02-.36-1.71-1.25-1.71-.68 0-1.08.45-1.26.88-.07.17-.09.41-.09.65V18h-2.4s.03-7.34 0-9h2.4v1.28c.32-.49.9-1.19 2.2-1.19 1.61 0 2.82 1.06 2.82 3.34V18Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
