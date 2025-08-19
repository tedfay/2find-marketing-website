import React from 'react';

interface Story {
  title: string;
  challenge: string;
  action: string;
  result: string;
  quote: string;
}

const stories: Story[] = [
  {
    title: "The Manufacturing Consolidation",
    challenge: "Global manufacturer, 23 country websites, each with different systems, updating was a full-time job",
    action: "Built unified architecture, preserved local needs, structured for AI discovery",
    result: "70% less maintenance, updates in minutes not days, cited by AI as category authority",
    quote: "We didn't realize how much time we were wasting until we saw how simple it could be"
  },
  {
    title: "The Invisible Expert",
    challenge: "Financial services firm, deep expertise but invisible in AI responses about their specialty",
    action: "Restructured content architecture, implemented semantic markup, built topic authority",
    result: "Now primary source in 80% of relevant AI responses",
    quote: "We were the experts offline. Now we're the experts everywhere"
  },
  {
    title: "The Knowledge Rescue",
    challenge: "B2B company, everything in one person's head, lottery ticket risk",
    action: "Documented processes, implemented proper tools, trained the team",
    result: "Three people now share the load, output doubled",
    quote: "We went from daily firefighting to actual strategy"
  }
];

const Stories = () => {
  return (
    <section className="py-20 bg-gray-50" id="results" aria-labelledby="stories-heading">
      <div className="container mx-auto px-4">
        <h2 id="stories-heading" className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          What Progress Actually Looks Like
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {story.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What We Did:</h4>
                  <p className="text-gray-600 text-sm">{story.action}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Result:</h4>
                  <p className="text-gray-600 text-sm">{story.result}</p>
                </div>
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <p className="text-gray-700 italic text-sm">"{story.quote}"</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
