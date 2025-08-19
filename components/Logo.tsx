import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <svg
    className={`logo-svg ${className || ''}`}
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="10"
      y="25"
      fontSize="18"
      fontWeight="bold"
      fill="currentColor"
    >
      2Find
    </text>
    <text
      x="10"
      y="35"
      fontSize="10"
      fill="currentColor"
      opacity="0.8"
    >
      MARKETING
    </text>
  </svg>
);

export default Logo;
