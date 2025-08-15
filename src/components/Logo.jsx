import React from "react";

const Logo = (props) => (
  <a href="#main-content" aria-label="Go to top">
    <svg
      viewBox="0 0 260 190"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="2 Find Marketing Logo"
      role="img"
      {...props}
      style={{ display: "block" }}
    >
      {/* Circles: 5% thicker stroke */}
      <circle cx="96" cy="85" r="50" stroke="#1E3A8A" strokeWidth="6.3" fill="none"/>
      <circle cx="164" cy="85" r="50" stroke="#10B981" strokeWidth="6.3" fill="none"/>
      {/* Text below with closer spacing */}
      <text
        x="40"
        y="175"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="48"
        fontWeight="300"
        fill="#1E3A8A"
        letterSpacing="2"
      >2</text>
      <text
        x="75"
        y="175"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="48"
        fontWeight="700"
        fill="#1E3A8A"
        letterSpacing="2"
      >FIND</text>
    </svg>
  </a>
);

export default Logo;