import React from 'react'
import heating1 from './assets/images/heating1.jpg'
import heating2 from './assets/images/heating2.jpg'
import heating3 from './assets/images/heating3.jpg'

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Bedankt! We nemen binnenkort contact met u op.')
  }

  return (
    <main className="app">
      <header className="hero">
        <div className="container">
          <h1 className="title">Bil Tech Verwarming</h1>
          <p className="subtitle">Expert verwarmingsoplossingen voor huizen en bedrijven</p>
          <a className="cta" href="#gallery">Bekijk ons werk</a>
        </div>
      </header>

      <section className="services container">
        <h2>Verwarmingsdiensten</h2>
        <ul className="service-list">
          <li>Ketelinstallatie & reparatie</li>
          <li>Radiatormontage & onderhoud</li>
          <li>Vloerverwarming</li>
          <li>Centrale verwarmingsupgrades</li>
          <li>Noodstopbeurten verwarming</li>
        </ul>
      </section>

      <section id="gallery" className="gallery container">
        <h2>Ons verwarmingswerk</h2>
        <p className="muted">Zie echte verwarmingsprojecten en installaties</p>
        <div className="grid">
          <figure className="card">
            <img src={heating1} alt="Ketelinstallatie" />
            <figcaption>Ketelinstallatie</figcaption>
          </figure>
          <figure className="card">
            <img src={heating2} alt="Radiatormontage" />
            <figcaption>Radiatormontage</figcaption>
          </figure>
          <figure className="card">
            <img src={heating3} alt="Onderhoud verwarmingssysteem" />
            <figcaption>Onderhoud verwarmingssysteem</figcaption>
          </figure>
        </div>
      </section>

      <section className="testimonials container">
        <h2>Wat onze klanten zeggen</h2>
        <blockquote className="testimonial">
          "Bil Tech Verwarming repareerde onze ketel snel en professioneel. Zeer aanbevolen!"<br />
          <span className="author">— Sarah K.</span>
        </blockquote>
        <blockquote className="testimonial">
          "Uitstekende service en vriendelijk personeel. Ons nieuwe verwarmingssysteem werkt perfect."<br />
          <span className="author">— John D.</span>
        </blockquote>
      </section>

      <section className="contact container">
        <h2>Neem contact met ons op</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Uw naam" required />
          <input type="email" placeholder="Uw e-mailadres" required />
          <textarea placeholder="Hoe kunnen we u helpen?" required></textarea>
          <button type="submit" className="cta">Bericht verzenden</button>
        </form>
        <p className="muted">Of bel ons: <strong>+31 (0) 6 1234 5678</strong></p>
      </section>

      <section className="features container">
        <div className="feature">
          <h2>Snel</h2>
          <p>Snelle respons en efficiënte verwarmingsoplossingen.</p>
        </div>
        <div className="feature">
          <h2>Modern</h2>
          <p>Nieuwste verwarmingstechnologie en milieuvriendelijke opties.</p>
        </div>
        <div className="feature">
          <h2>Betrouwbaar</h2>
          <p>Duidelijke communicatie en transparante prijzen.</p>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Bil Tech Verwarming</p>
        <p className="muted">Alle rechten voorbehouden</p>
      </footer>
    </main>
  )
}
