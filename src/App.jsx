import React from 'react'

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <div className="container">
          <h1 className="title">Bil Tech</h1>
          <p className="subtitle">Modern landing page built with React + Vite</p>
          <a className="cta" href="#get-started">Get started</a>
        </div>
      </header>

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
      </footer>
    </main>
  )
}
