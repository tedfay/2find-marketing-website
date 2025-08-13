import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Recognition from './components/Recognition';
import Services from './components/Services';
import Stories from './components/Stories';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <header className="site-header">
        <nav className="main-nav">
          <div className="container">
            <div className="nav-brand">
              <span className="logo">2Find Marketing</span>
            </div>
            <ul className="nav-menu">
              <li><a href="#services">Services</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <Hero />
        <ValueProps />
        <Recognition />
        <Services />
        <Stories />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
