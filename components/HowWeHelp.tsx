import React from "react";
import '../styles/SectionCards.css'; // Generic, reusable section/card styles

export default function HowWeHelp() {
  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">How We Help</h2>
        <div className="cards">
          <div className="card">
            <h3 className="card-title">Discovery &amp; Insight</h3>
            <div className="card-subtitle">See What Others Miss</div>
            <p className="card-text">
              Structured interviews, analytics review, and an AI visibility check reveal opportunities hidden in your customer data, tech stack, and market landscape.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Alignment &amp; Planning</h3>
            <div className="card-subtitle">Turn Ideas Into Action</div>
            <p className="card-text">
              We help you define clear goals, align marketing with business priorities, and design systems that scale—so progress is measurable and momentum is real.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Implementation Partnership</h3>
            <div className="card-subtitle">Get It Done, Together</div>
            <p className="card-text">
              Work side-by-side with an experienced partner who brings practical expertise and a network of specialists to accelerate execution—while empowering your team for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}