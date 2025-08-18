"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import "./Header.css";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
];

const isHomePage = (pathname) => pathname === "/" || pathname === "/index" || pathname === "/home";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When clicking logo: if on home, scroll to top; else navigate to home
  const handleLogoClick = (e) => {
    if (isHomePage(pathname)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // else, let Link do its navigation to home
  };

  return (
    <header className={`header${isShrunk ? " shrunk" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link className="logo-link" href="/" onClick={handleLogoClick} aria-label="Home and scroll to top">
            <Logo />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;