import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="hero-content flex-1 max-w-lg">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smarter Marketing, Less Guesswork
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-6 font-medium">
              Unlock new growth for your business—without more busywork.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              You're busy running a successful company. I help you see the highest-impact marketing opportunities—then make them happen. 
              From untangling messy tools to leveling up your brand's visibility, you'll get perspective, clarity, and practical execution that moves your business forward.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center"
              aria-label="Contact us to discuss growth opportunities"
            >
              Let's Talk Growth 
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="hero-image flex-1 max-w-lg">
            <Image
              src="/images/2find-homepage-graphic-nobg.svg"
              alt="Abstract illustration symbolizing clarity and growth"
              width={500}
              height={400}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
