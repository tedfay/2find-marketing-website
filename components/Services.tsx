'use client';

import React from 'react';

const ServiceCard = ({ 
  title, 
  duration, 
  description, 
  features, 
  isAIDiscovery = false,
  onServiceClick 
}) => {
  const handleLearnMoreClick = () => {
    // GA4 Event Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'service_interest', {
        event_category: 'lead_generation',
        event_label: title.toLowerCase().replace(/\s+/g, '_'),
        page_title: document.title,
        page_location: window.location.href,
        service_type: isAIDiscovery ? 'ai_discovery_audit' : 'general_service'
      });
    }
    
    if (onServiceClick) {
      onServiceClick(title);
    }
    
    // Navigate to appropriate page
    if (isAIDiscovery) {
      window.location.href = '/ai-discovery-audit';
    } else {
      // Scroll to contact section for other services
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
      <p className="text-emerald-600 font-semibold mb-4">{duration}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-emerald-500 mr-2 mt-1">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleLearnMoreClick}
        className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label={`Learn more about ${title}`}
      >
        {isAIDiscovery ? 'Start Your AI Discovery Audit' : 'Learn More'}
      </button>
    </div>
  );
};

const Services = () => {
  const handleServiceInteraction = (serviceName) => {
    console.log(`Service interaction: ${serviceName}`);
  };

  const services = [
    {
      title: "AI Discovery Audit",
      duration: "3-week engagement",
      description: "Transform your knowledge assets into discoverable competitive advantages. Start with immediate marketing results, scale to organizational platform.",
      features: [
        "Product data and content system assessment",
        "AI discoverability evaluation across platforms", 
        "Knowledge enhancement using AI tools",
        "Implementation roadmap for search and AI discovery"
      ],
      isAIDiscovery: true
    },
    {
      title: "Marketing Assessment & Strategic Roadmap", 
      duration: "4-6 week engagement",
      description: "Comprehensive analysis and strategic planning to transform your marketing operations into a measurable, accountable growth engine.",
      features: [
        "Stakeholder interviews with customers, team, and partners",
        "Analytics review and technology stack assessment", 
        "AI discovery audit - how you appear in ChatGPT and Gemini",
        "Strategic roadmap building on your strengths"
      ]
    },
    {
      title: "Fractional Marketing Operations Leadership",
      duration: "Ongoing partnership", 
      description: "Senior-level strategic leadership for organizations requiring continuous marketing operations guidance and implementation support.",
      features: [
        "Monthly strategic planning and execution oversight",
        "Technology stack optimization and vendor management",
        "Team development and process improvement", 
        "Performance measurement and ROI analysis"
      ]
    },
    {
      title: "Platform Consolidation & Web Development",
      duration: "Project-based",
      description: "Streamline your digital infrastructure by consolidating multiple platforms into unified, efficient systems that serve your business goals.",
      features: [
        "Multi-site consolidation and migration",
        "Custom web development and optimization",
        "System integration and automation",
        "Performance monitoring and maintenance planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Services That Scale With Your Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need a strategic assessment, ongoing leadership, or specific project implementation, 
            we meet you where you are and help you move forward with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              duration={service.duration} 
              description={service.description}
              features={service.features}
              isAIDiscovery={service.isAIDiscovery}
              onServiceClick={handleServiceInteraction}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">2x</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Lead Generation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">47</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Sites Unified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">85%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;