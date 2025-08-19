import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
// import Recognition from "../components/Recognition";
// import ValueProps from "../components/ValueProps";
import Services from "../components/Services";
// import HowWeHelp from "../components/HowWeHelp";
// import Stories from "../components/Stories";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        {/* <Recognition /> */}
        {/* <ValueProps /> */}
        <Services />
        {/* <HowWeHelp /> */}
        {/* <Stories /> */}
        <CTA />
      </main>
    </>
  );
}