import React from 'react';

interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

const challenges: Challenge[] = [
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

const Recognition = () => {
  return (
    <section className="py-20 bg-blue-50" aria-labelledby="recognition-heading">
      <div className="container mx-auto px-4">
        <h2 id="recognition-heading" className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          Sound Familiar?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {challenge.problem}
              </p>
              <p className="text-blue-600 font-medium italic">
                {challenge.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
