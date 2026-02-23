import React from 'react'
import img1 from './assets/images/plumbero-img39.png'
import img2 from './assets/images/plumbero-img6.png'
import img3 from './assets/images/plumbero-img7.png'

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <div className="container">
          <h1 className="title">Bil Tech</h1>
          <p className="subtitle">Modern plumbing landing page built with React + Vite</p>
          <a className="cta" href="#gallery">See our work</a>
        </div>
      </header>

      <section id="gallery" className="gallery container">
        <h2>Our Work</h2>
        <p className="muted">Real plumbing projects and tools</p>

        <div className="grid">
          <figure className="card">
            <img src={img1} alt="Plumbing work" />
            <figcaption>Plumbing repair</figcaption>
          </figure>

          <figure className="card">
            <img src={img2} alt="Plumber at work" />
            <figcaption>Professional plumbers</figcaption>
          </figure>

          <figure className="card">
            <img src={img3} alt="Pipes and tools" />
            <figcaption>Pipe installation</figcaption>
          </figure>
        </div>
        <p className="attribution muted">Images from local assets</p>
      </section>

      <section className="features container">
        <div className="feature">
          <h2>Fast</h2>
          <p>Blazing fast dev server and builds with Vite.</p>
        </div>
        <div className="feature">
          <h2>Modern</h2>
          <p>React 18 and modern tooling out of the box.</p>
        </div>
        <div className="feature">
          <h2>Accessible</h2>
          <p>Semantic markup and responsive design.</p>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Bil Tech</p>
        <p className="muted">Images: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
      </footer>
    </main>
  )
}
