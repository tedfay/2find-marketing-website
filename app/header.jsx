export default function Header() {
  return (
    <header>
      <nav className="nav container">
        <a className="logo-link" href="/">2 Find Marketing</a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy</a></li>
        </ul>
      </nav>
    </header>
  );
}