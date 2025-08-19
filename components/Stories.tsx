import React from 'react';

const Stories = () => {
  const stories = [
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

  return (
    <section className="stories" id="results" aria-labelledby="stories-heading">
      <div className="container">
        <h2 id="stories-heading">What Progress Actually Looks Like</h2>
        
        <div className="stories-grid">
          {stories.map((story, index) => (
            <article key={index} className="story-card">
              <h3>{story.title}</h3>
              <div className="story-content">
                <div className="story-section">
                  <h4>Challenge:</h4>
                  <p>{story.challenge}</p>
                </div>
                <div className="story-section">
                  <h4>What We Did:</h4>
                  <p>{story.action}</p>
                </div>
                <div className="story-section">
                  <h4>Result:</h4>
                  <p>{story.result}</p>
                </div>
                <blockquote className="story-quote">
                  <p>"{story.quote}"</p>
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
