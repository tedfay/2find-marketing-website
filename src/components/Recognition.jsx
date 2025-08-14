import React from 'react';

const Recognition = () => {
  const challenges = [
    {
      title: "The Update Marathon",
      problem: "Every product change means updating the website, then the dealer portal, then Amazon, then the print catalog... There has to be a better way.",
      solution: "There is. I've built these unified systems before."
    },
    {
      title: "The AI Blind Spot",
      problem: "When someone asks ChatGPT about our industry, are we even mentioned? Or is it sending people to competitors?",
      solution: "Let's find out - and fix it if needed."
    },
    {
      title: "The Expensive Mystery",
      problem: "We pay for seven different marketing tools but can't get a clear picture of what's actually driving growth.",
      solution: "I've untangled these exact knots dozens of times."
    },
    {
      title: "The Lottery Ticket Risk",
      problem: "If Sarah leaves, we lose three years of undocumented processes and all her vendor relationships.",
      solution: "Time to build sustainable systems with proper documentation."
    }
  ];

  return (
    <section className="recognition" aria-labelledby="recognition-heading">
      <div className="container">
        <h2 id="recognition-heading">Sound Familiar?</h2>
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <h3>{challenge.title}</h3>
              <p className="challenge-problem">{challenge.problem}</p>
              <p className="challenge-solution"><em>{challenge.solution}</em></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
