import './styles/global.css';
import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ValueProps from "./components/ValueProps";
import Recognition from "./components/Recognition";
import Stories from "./components/Stories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <ValueProps />
        <Recognition />
        <Stories />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;