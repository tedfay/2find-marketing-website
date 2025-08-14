import React, { useEffect, useRef } from "react";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 60) {
          headerRef.current.classList.add("shrunk");
        } else {
          headerRef.current.classList.remove("shrunk");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">
        <div className="header-section header-left">
          <Logo className="logo" />
        </div>
        <nav className="header-section header-center main-nav" aria-label="Main navigation">
          <ul>
            <li>
              <a href="#what-we-actually-do">Services</a>
            </li>
            <li>
              <a href="#what-progress-looks-like">Stories</a>
            </li>
            <li>
              <a href="#three-ways-to-start">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-section header-right" />
      </div>
    </header>
  );
};

export default Header;