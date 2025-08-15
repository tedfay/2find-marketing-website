import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import "./Header.css";

const NAV_LINKS = [
  { href: "#what-we-actually-do", label: "Services" },
  { href: "#what-progress-looks-like", label: "Stories" },
  { href: "#three-ways-to-start", label: "Contact" }
];

const Header = () => {
  const headerRef = useRef();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);


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

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (!mobileNavOpen) return;
    const firstFocusable = document.querySelector('.mobile-nav a, .mobile-nav button');
    if (firstFocusable) firstFocusable.focus();
    const trap = (e) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [mobileNavOpen]);


  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">
        <div className="header-section header-left">
          <a href="/" aria-label="Home" tabIndex={0} style={{ display: "flex", alignItems: "center" }}>
            <Logo className="logo" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="header-section header-center main-nav" aria-label="Main navigation">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} tabIndex={0}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button for mobile (moved to right) */}
        <div className="header-section header-right">
          <button
            className="hamburger"
            aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            type="button"
          >
            <span className="hamburger-box" aria-hidden="true">
              <span className={`hamburger-inner${mobileNavOpen ? " open" : ""}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <nav
        id="mobile-menu"
        className={`mobile-nav${mobileNavOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={mobileNavOpen ? 0 : -1}
                onClick={() => setMobileNavOpen(false)}
                style={{ minHeight: 44, minWidth: 44, display: "flex", alignItems: "center" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Overlay for closing menu */}
      {mobileNavOpen && <div className="nav-overlay" tabIndex={-1} aria-hidden="true" onClick={() => setMobileNavOpen(false)} />}

    </header>
  );
};

export default Header;