import React from 'react';

interface ValueProp {
  title: string;
  subtitle: string;
  description: string;
  example: string;
}

const valueProps: ValueProp[] = [
  {
    title: "Discovery Architecture for Tomorrow",
    subtitle: "Found Everywhere Customers Look",
    description: "Your customers aren't just Googling anymore. They're asking ChatGPT for recommendations, searching on Amazon, finding businesses through social media. One update should flow everywhere - your website, dealer networks, marketplaces, and yes, into AI responses. I've structured content for dozens of businesses to be discoverable wherever tomorrow's customers search.",
    example: "Real example: Helped a manufacturer go from invisible in AI responses to being cited as the primary authority in 80% of industry queries"
  },
  {
    title: "Systems That Actually Connect",
    subtitle: "From Five Updates to One",
    description: "That sinking feeling when you realize updating product information means logging into five different systems? We fix that. I've consolidated 47 websites into unified platforms, migrated custom product systems to scalable architectures, and made expensive marketing tools finally talk to each other. Your team gets time back to focus on growth.",
    example: "Real example: Reduced a client's marketing maintenance from 30 hours/week to 3 hours/week through smart integration"
  },
  {
    title: "Knowledge That Stays With You",
    subtitle: "Building Your Capabilities, Not Dependencies",
    description: "If your marketing person won the lottery tomorrow, what would walk out the door? We document everything, train your team, and build systems that don't depend on any single person - including me. I work alongside your team to implement improvements at a sustainable pace.",
    example: "Real example: Transformed a one-person marketing bottleneck into a three-person collaborative team with shared knowledge"
  }
];

const ValueProps = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="value-props-heading">
      <div className="container mx-auto px-4">
        <h2 id="value-props-heading" className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          What We Actually Work On Together
        </h2>
        <div className="space-y-12">
          {valueProps.map((prop, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  {prop.subtitle}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-center">
                {prop.description}
              </p>
              <p className="text-sm text-gray-500 italic text-center bg-gray-50 p-4 rounded">
                {prop.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
