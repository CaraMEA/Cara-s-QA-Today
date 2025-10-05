import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      {/* Sticky top nav */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Cara’s QA Today</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <header id="home" className="section hero">
        <div className="container hero-inner">
          <h1>Quality you can trust.</h1>
          <p>
            I’m Cara — a QA specialist focused on shipping reliable, bug-free
            experiences.
          </p>
          <a href="#projects" className="btn">See my work</a>
        </div>
      </header>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="grid">
            <article className="card">
              <div className="card-media" aria-hidden="true" />
              <div className="card-body">
                <h3>Bug Bash — Mobile Checkout</h3>
                <p>
                  Led exploratory + regression passes; prevented a cart-loss
                  edge case for >20k users.
                </p>
                <a href="#" className="card-link" onClick={(e)=>e.preventDefault()}>
                  Case study coming soon →
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card-media" aria-hidden="true" />
              <div className="card-body">
                <h3>Payments Retry Flow</h3>
                <p>
                  Wrote test plans and automated smoke checks; reduced failed
                  payment retries by 35%.
                </p>
                <a href="#" className="card-link" onClick={(e)=>e.preventDefault()}>
                  Read more →
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card-media" aria-hidden="true" />
              <div className="card-body">
                <h3>Accessibility Sweep</h3>
                <p>
                  WCAG spot-fixes and keyboard flows; improved Lighthouse
                  accessibility score from 72 → 95.
                </p>
                <a href="#" className="card-link" onClick={(e)=>e.preventDefault()}>
                  Details →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <div className="container about-inner">
          <img
            src="/images/aboutme.png"
            alt="About me"
            className="avatar"
          />
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              Hi, I’m Cara! I’m passionate about Quality Assurance and love
              finding bugs before users do. I thrive on delivering polished,
              reliable products that users can trust. Outside of work, I enjoy
              exploring the latest testing tools and pushing myself to solve new
              challenges in creative ways.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <a href="mailto:your.email@example.com" className="contact-card">
              <span className="contact-label">Email</span>
              <span className="contact-value">your.email@example.com</span>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/your-linkedin</span>
            </a>
            <a href="https://github.com/CaraMEA" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/CaraMEA</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Cara’s QA Today
        </div>
      </footer>
    </>
  );
}
