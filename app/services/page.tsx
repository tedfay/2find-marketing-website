export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Marketing Strategy That Works in the AI Age
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your business is already successful, and your team has deep knowledge about what needs to happen next. 
            I bring structured methodology, cross-industry experience, and fresh perspective to help you move from insight to action.
          </p>
          <a href="/ai-discovery-audit" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Start Your AI Discovery Audit
          </a>
        </div>
      </section>

      {/* Three Service Options */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Ways We Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need strategic guidance, ongoing partnership, or focused project execution.
            </p>
          </div>

          <div className="space-y-12">
            {/* Service 1: Assessment */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Marketing Assessment & Strategic Roadmap
                </h3>
                <p className="text-green-600 font-semibold mb-4">4-6 week engagement</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive analysis and strategic planning to understand your full potential and create 
                  actionable roadmaps for improvement.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Discovery Process</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Stakeholder interviews with customers, team, and partners</li>
                      <li>• Analytics review and technology stack assessment</li>
                      <li>• AI discovery audit - how you appear in ChatGPT and Gemini</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strategic Output</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Strategic roadmap building on your strengths</li>
                      <li>• Prioritized action plan with quick wins</li>
                      <li>• Clear measurement frameworks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-sm text-gray-700">
                    <strong>Perfect for companies who:</strong> Know they need to evolve their marketing approach 
                    but want strategic clarity before significant investment.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Partnership */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Implementation Partnership
                </h3>
                <p className="text-green-600 font-semibold mb-4">Monthly engagement</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ongoing strategic guidance and tactical execution support to implement improvements 
                  at a sustainable pace while building your team's capabilities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What We Do Together</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Analytics optimization and dashboard development</li>
                      <li>• Content strategy for AI-optimized discovery</li>
                      <li>• Marketing automation and lead nurture setup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How We Work</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Regular strategy sessions and progress reviews</li>
                      <li>• Knowledge transfer and team capability building</li>
                      <li>• Vendor coordination when specialized expertise adds value</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-sm text-gray-700">
                    <strong>Perfect for companies who:</strong> Want to actively improve marketing effectiveness 
                    while building internal capabilities for long-term success.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Projects */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Focused Project Consulting
                </h3>
                <p className="text-green-600 font-semibold mb-4">Specific deliverables</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Targeted expertise for specific technical or strategic challenges that need expert attention 
                  within a defined scope and timeline.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technical Projects</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Website platform consolidation and migration</li>
                      <li>• Analytics implementation and GA4 migration</li>
                      <li>• Marketing automation system setup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strategic Projects</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Content strategy for AI-optimized discovery</li>
                      <li>• Vendor selection and RFP management</li>
                      <li>• Process documentation and team training</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-sm text-gray-700">
                    <strong>Perfect for companies who:</strong> Have specific challenges that need expert attention 
                    within a defined scope and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Progress Actually Looks Like
            </h2>
            <p className="text-lg text-gray-600">
              Real outcomes from recent engagements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">47</div>
              <div className="text-gray-600 mb-3">Websites Unified</div>
              <div className="text-xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-gray-600 text-sm">Cost Reduction</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">12+</div>
              <div className="text-gray-600 mb-3">GA4 Migrations</div>
              <div className="text-xl font-bold text-green-600 mb-1">Zero</div>
              <div className="text-gray-600 text-sm">Data Loss</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">2x</div>
              <div className="text-gray-600 mb-3">Lead Generation</div>
              <div className="text-xl font-bold text-green-600 mb-1">60 Days</div>
              <div className="text-gray-600 text-sm">Average Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You Can Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span><strong>Response times:</strong> Within 4 hours during business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span><strong>Communication style:</strong> Collaborative, not prescriptive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span><strong>Documentation:</strong> Everything we build, you own</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span><strong>Focus:</strong> Build capabilities within your team</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes This Different</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3 mt-1">•</span>
                  <span>Fresh eyes and structured methodology from cross-industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3 mt-1">•</span>
                  <span>Future-ready systems discoverable by both customers and AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3 mt-1">•</span>
                  <span>Partnership approach that builds long-term capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3 mt-1">•</span>
                  <span>Every initiative tied to measurable business outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make Your Business Discoverable in the AI Age?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start with our comprehensive AI Discovery Audit to see exactly how your business appears 
            when prospects ask AI assistants for recommendations in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ai-discovery-audit" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your Free AI Discovery Audit
            </a>
            <a href="/how-we-work" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Learn About Our Process
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}