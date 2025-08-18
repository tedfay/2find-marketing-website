import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CTA from "../components/CTA";
// Import any other sections you have, e.g. Testimonials, Portfolio, etc.

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* Add more sections/components here as needed */}
      <CTA />
    </main>
  );
}