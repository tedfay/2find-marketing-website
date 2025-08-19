import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <svg
    className={`logo-svg ${className || ''}`}
    width="150"
    height="60"
    viewBox="0 0 300 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Logo centered */}
    <g transform="translate(150, 60)">
      {/* Overlapping circles */}
      <circle cx="-40" cy="0" r="30" stroke="#1E3A8A" strokeWidth="3.5" fill="none"/>
      <circle cx="-15" cy="0" r="30" stroke="#10B981" strokeWidth="3.5" fill="none"/>
      
      {/* Center overlap with subtle fill */}
      <defs>
        <linearGradient id="overlapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#1E3A8A", stopOpacity:0.08}} />
          <stop offset="50%" style={{stopColor:"#10B981", stopOpacity:0.12}} />
          <stop offset="100%" style={{stopColor:"#10B981", stopOpacity:0.08}} />
        </linearGradient>
      </defs>
      <ellipse cx="-27.5" cy="0" rx="15" ry="30" fill="url(#overlapGradient)"/>
      
      {/* Text */}
      <text x="25" y="7" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="300" fill="#1E3A8A">2</text>
      <text x="48" y="7" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="700" fill="#1E3A8A">FIND</text>
    </g>
  </svg>
);

export default Logo;