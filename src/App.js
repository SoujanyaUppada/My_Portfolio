import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const Projects = React.lazy(() => import('./components/Projects'))
const Contact = React.lazy(() => import('./components/Contact'))

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="App">
            <a href="#main" className="skip-link">Skip to main content</a>
            <Navbar />
            <main id="main">
              <Hero />
              <Suspense fallback={<div className="loading">Loading...</div>}>
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
