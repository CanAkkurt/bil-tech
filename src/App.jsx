import React from 'react'
import img1 from './assets/images/plumbero-img39.png'
import img2 from './assets/images/plumbero-img6.png'
import img3 from './assets/images/plumbero-img7.png'

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <div className="container">
          <h1 className="title">Bil Tech Heating</h1>
          <p className="subtitle">Expert heating solutions for homes and businesses</p>
          <a className="cta" href="#gallery">See our work</a>
        </div>
      </header>

      <section className="services container">
        <h2>Heating Services</h2>
        <ul className="service-list">
          <li>Boiler installation & repair</li>
          <li>Radiator fitting & maintenance</li>
          <li>Underfloor heating</li>
          <li>Central heating upgrades</li>
          <li>Emergency heating repairs</li>
        </ul>
      </section>

      <section id="gallery" className="gallery container">
        <h2>Our Heating Work</h2>
        <p className="muted">See real heating projects and installations</p>
        <div className="grid">
          <figure className="card">
            <img src={img1} alt="Boiler installation" />
            <figcaption>Boiler installation</figcaption>
          </figure>
          <figure className="card">
            <img src={img2} alt="Radiator fitting" />
            <figcaption>Radiator fitting</figcaption>
          </figure>
          <figure className="card">
            <img src={img3} alt="Heating system maintenance" />
            <figcaption>Heating system maintenance</figcaption>
          </figure>
        </div>
        <p className="attribution muted">Images from local assets</p>
      </section>

      <section className="testimonials container">
        <h2>What Our Clients Say</h2>
        <blockquote className="testimonial">
          "Bil Tech Heating fixed our boiler fast and professionally. Highly recommended!"<br />
          <span className="author">— Sarah K.</span>
        </blockquote>
        <blockquote className="testimonial">
          "Excellent service and friendly staff. Our new heating system works perfectly."<br />
          <span className="author">— John D.</span>
        </blockquote>
      </section>

      <section className="contact container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="How can we help?" required></textarea>
          <button type="submit" className="cta">Send Message</button>
        </form>
        <p className="muted">Or call us: <strong>+1 234 567 890</strong></p>
      </section>

      <section className="features container">
        <div className="feature">
          <h2>Fast</h2>
          <p>Rapid response and efficient heating solutions.</p>
        </div>
        <div className="feature">
          <h2>Modern</h2>
          <p>Latest heating technology and eco-friendly options.</p>
        </div>
        <div className="feature">
          <h2>Accessible</h2>
          <p>Clear communication and transparent pricing.</p>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Bil Tech Heating</p>
        <p className="muted">Images: Local assets</p>
      </footer>
    </main>
  )
}
