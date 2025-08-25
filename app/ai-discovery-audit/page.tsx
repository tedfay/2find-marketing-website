'use client';

export default function AIDiscoveryAudit() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://2findmarketing.com/#organization",
                "name": "2 Find Marketing LLC",
                "url": "https://2findmarketing.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://2findmarketing.com/images/2find-logo.png"
                }
              },
              {
                "@type": "Service",
                "@id": "https://2findmarketing.com/ai-discovery-audit#service",
                "name": "AI Discovery Audit",
                "description": "Transform your knowledge assets into discoverable competitive advantages through search and AI assistants",
                "provider": {
                  "@id": "https://2findmarketing.com/#organization"
                },
                "serviceType": "Marketing Consulting",
                "areaServed": "United States"
              },
              {
                "@type": "WebPage",
                "@id": "https://2findmarketing.com/ai-discovery-audit#webpage",
                "url": "https://2findmarketing.com/ai-discovery-audit",
                "name": "AI Discovery Audit - Your Knowledge = Your Competitive Advantage",
                "isPartOf": {
                  "@id": "https://2findmarketing.com/#website"
                },
                "about": {
                  "@id": "https://2findmarketing.com/ai-discovery-audit#service"
                },
                "description": "Your business already knows what customers need. I help you structure and deploy that knowledge so it works harder—reaching users through search and AI assistants to drive measurable business growth."
              },
              {
                "@type": "FAQPage",
                "@id": "https://2findmarketing.com/ai-discovery-audit#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do you make product knowledge discoverable?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We structure your product information and marketing content so it becomes findable when users search online or ask AI assistants about solutions in your industry—not just your brand name."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "What if our product data needs enhancement?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use AI to identify gaps in your content and product information, then enhance and structure it for maximum discoverability across all channels."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-emerald-500 text-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Knowledge = Your Competitive Advantage
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
                Your business already knows what customers need. I help you structure and deploy that knowledge so it works harder—reaching users through search and AI assistants to drive measurable business growth.
              </p>
              <a 
                href="#contact" 
                className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors inline-block"
              >
                Let's Make Your Knowledge Work Harder
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Start with Marketing. Scale to Everything.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your product information and marketing content already contain competitive advantages. Let's make them discoverable where customer decisions happen.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-10 rounded-xl mb-16 text-center">
              <h3 className="text-2xl font-bold mb-6">The Knowledge Transformation Opportunity</h3>
              <p className="text-lg leading-relaxed">
                <strong>If your product data is well-structured:</strong> We'll make it discoverable to users through search and AI assistants so customers find your products when they need solutions.<br/><br/>
                <strong>If it needs enhancement:</strong> We'll use AI to enrich your product data and marketing content, then ensure users can discover it across all channels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-emerald-500 text-center">
                <div className="text-4xl mb-6">🛒</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Hidden Revenue Opportunities</h3>
                <p className="text-gray-600">
                  Rich product specifications and industry expertise sit in systems where customers can't find them during research.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-emerald-500 text-center">
                <div className="text-4xl mb-6">🔍</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Invisible Product Knowledge</h3>
                <p className="text-gray-600">
                  Your detailed product data exists while competitors with less expertise rank higher in both search results and AI responses.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-emerald-500 text-center">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Disconnected Content</h3>
                <p className="text-gray-600">
                  Teams recreate the same information across systems instead of leveraging authoritative knowledge that already exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                The Knowledge Discovery Advantage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Forward-thinking organizations are positioning their knowledge assets for maximum user discovery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <div className="text-5xl font-bold text-emerald-500 mb-4">68%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  of shoppers use AI for product research<span className="text-xs align-super text-gray-500 font-medium ml-1">1</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-emerald-500 mb-4">4x</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  more product touchpoints through AI vs traditional search<span className="text-xs align-super text-gray-500 font-medium ml-1">2</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-emerald-500 mb-4">3x</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  faster content creation with structured knowledge systems<span className="text-xs align-super text-gray-500 font-medium ml-1">3</span>
                </div>
              </div>
            </div>
            
            {/* Footnotes */}
            <div className="max-w-3xl mx-auto text-left border-t pt-6">
              <p className="text-sm text-gray-500 mb-2">
                <span className="text-gray-500 font-medium mr-2">1</span>McKinsey Digital Commerce Survey, 2024
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="text-gray-500 font-medium mr-2">2</span>Search Engine Journal AI Discovery Study, 2024
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-gray-500 font-medium mr-2">3</span>Content Marketing Institute, 2024 B2B Content Marketing Report
              </p>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Marketing Entry Point, Organizational Platform
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Start where results show up fastest. Build the foundation that scales across your entire organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Immediate Discovery Results</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Your expertise becomes findable when users search online or ask AI assistants about solutions in your industry—not just your brand name.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">AI-Enhanced Knowledge Assets</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  We use AI to identify gaps in your content and product information, then enhance and structure it for maximum discoverability.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Scalable Knowledge Architecture</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  The same approach that drives marketing results becomes your foundation for customer service, sales enablement, and internal efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Our Knowledge-to-Discovery Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with your existing assets. Scale to organizational advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Knowledge Asset Assessment</h4>
                <p className="text-gray-600">
                  Audit your product information, marketing content, and existing systems to identify discovery opportunities and enhancement potential.
                </p>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Discovery Strategy Design</h4>
                <p className="text-gray-600">
                  Create the technical architecture to make your knowledge discoverable through search and AI while enhancing incomplete or outdated content.
                </p>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Marketing Implementation</h4>
                <p className="text-gray-600">
                  Deploy discoverable knowledge assets for immediate ecommerce impact, then create roadmap for organizational scaling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gray-50 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Let's Take Your Knowledge and Make It Work Harder
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your organization already knows what customers need. Let's show you how to make that expertise more discoverable and valuable.
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <form className="bg-white p-10 rounded-xl shadow-lg text-left">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-semibold text-blue-900">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-colors focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-semibold text-blue-900">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-colors focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block mb-2 font-semibold text-blue-900">
                    Company
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-colors focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="systems" className="block mb-2 font-semibold text-blue-900">
                    What systems hold your product/content data?
                  </label>
                  <input 
                    type="text" 
                    id="systems" 
                    name="systems" 
                    placeholder="e.g., Akeneo, Salsify, WordPress, Shopify, custom system"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-colors focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="challenge" className="block mb-2 font-semibold text-blue-900">
                    Biggest knowledge discovery challenge?
                  </label>
                  <textarea 
                    id="challenge" 
                    name="challenge" 
                    rows={3}
                    placeholder="e.g., Great content that customers never find, rich product data hidden from users..."
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-base transition-colors focus:border-emerald-500 focus:outline-none resize-vertical"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-amber-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Start Your Knowledge Discovery Audit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="bg-blue-900 text-white py-8 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <p>&copy; 2025 2 Find Marketing LLC. Your knowledge = your competitive advantage.</p>
          </div>
        </footer>
      </div>
    </>
  )
}