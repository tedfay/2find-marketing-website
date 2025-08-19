import React from "react";

interface HelpItem {
  title: string;
  subtitle: string;
  text: string;
}

const helpItems: HelpItem[] = [
  {
    title: "Discovery & Insight",
    subtitle: "See What Others Miss",
    text: "Structured interviews, analytics review, and an AI visibility check reveal opportunities hidden in your customer data, tech stack, and market landscape."
  },
  {
    title: "Alignment & Planning", 
    subtitle: "Turn Ideas Into Action",
    text: "We help you define clear goals, align marketing with business priorities, and design systems that scale—so progress is measurable and momentum is real."
  },
  {
    title: "Implementation Partnership",
    subtitle: "Get It Done, Together", 
    text: "Work side-by-side with an experienced partner who brings practical expertise and a network of specialists to accelerate execution—while empowering your team for the future."
  }
];

export default function HowWeHelp() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          How We Help
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                {item.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
