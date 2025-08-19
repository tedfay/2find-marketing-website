import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link 
            href="/privacy-policy" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm text-gray-600">
          © 2025 2 Find Marketing, LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;