'use client';

import React from 'react';

const CTA = () => {
  const handleAIDiscoveryClick = () => {
    // GA4 Event Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ai_audit_click', {
        event_category: 'lead_generation',
        event_label: 'cta_section',
        page_title: document.title,
        page_location: window.location.href,
        cta_position: 'main_cta_section'
      });
    }
    
    // Navigate to AI Discovery Audit page
    window.location.href = '/ai-discovery-audit';
  };

  const handleSecondaryClick = () => {
    // GA4 Event Tracking for secondary action
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'contact_click', {
        event_category: 'lead_generation', 
        event_label: 'cta_section_secondary',
        page_title: document.title,
        page_location: window.location.href,
        cta_position: 'main_cta_section'
      });
    }
    
    // Scroll to contact form or open contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to See What Your Knowledge Could Accomplish?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          Start with our AI Discovery Audit to understand how your expertise could work harder 
          across every channel, then explore broader strategic opportunities.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-emerald-400">
            What You'll Discover
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-semibold mb-2">Hidden Opportunities</h4>
              <p className="text-sm opacity-90">
                Where your knowledge assets could be working harder to attract customers
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Quick Wins</h4>
              <p className="text-sm opacity-90">
                Immediate improvements you can implement to boost discoverability
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold mb-2">Growth Roadmap</h4>
              <p className="text-sm opacity-90">
                Strategic plan for scaling from marketing wins to organizational advantage  
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleAIDiscoveryClick}
            className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-blue-900"
            aria-label="Begin your AI Discovery Audit to understand your knowledge potential"
          >
            Begin Your AI Discovery Audit
          </button>
          
          <button
            onClick={handleSecondaryClick}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            aria-label="Discuss your specific marketing challenges"
          >
            Discuss Your Specific Needs
          </button>
        </div>

        {/* Social proof / trust element */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-lg opacity-75 mb-4">
            "Your business already knows what customers need. Let's make that knowledge work harder."
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm opacity-60">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>25 years marketing experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Enterprise-level expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Proven AI integration methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;