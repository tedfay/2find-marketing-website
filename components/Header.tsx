"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/services", label: "Services", type: "page" as const },
  { href: "/ai-discovery-audit", label: "AI Discovery Audit", type: "page" as const },
  { href: "#contact", label: "Contact", type: "anchor" as const }
];

const isHomePage = (pathname: string) => 
  pathname === "/" || pathname === "/index" || pathname === "/home";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const pathname = usePathname();
  const needsBackground = !isHomePage(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isHomePage(pathname)) {
      // On home page, scroll to bottom
      window.scrollTo({ 
        top: document.body.scrollHeight, 
        behavior: 'smooth' 
      });
    } else {
      // On other pages, go to home page bottom
      window.location.href = '/#contact';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isShrunk || needsBackground
        ? 'py-2 bg-white/90 backdrop-blur-sm shadow-sm' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="header-left">
          {isHomePage(pathname) ? (
            <button 
              className="logo-link hover:opacity-80 transition-opacity" 
              onClick={handleLogoClick}
              aria-label="Scroll to top"
            >
              <Logo />
            </button>
          ) : (
            <Link 
              className="logo-link hover:opacity-80 transition-opacity" 
              href="/" 
              aria-label="Go to home"
            >
              <Logo />
            </Link>
          )}
        </div>
        
        <nav className="main-nav">
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.type === "page" ? (
                  <Link 
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href}
                    onClick={handleContactClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
