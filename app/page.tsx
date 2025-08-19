import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="pt-20"> {/* Add padding for fixed header */}
      <Hero />
      <About />
      <Services />
      <CTA />
    </main>
  );
}
