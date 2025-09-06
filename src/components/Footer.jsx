import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SoujanyaUppada',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/uppada-soujanya',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:soujanyauppada23@gmail.com',
      icon: <Mail size={20} />
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Soujanya Uppada</h3>
            <p>UI Developer passionate about creating beautiful and functional web experiences.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Soujanya Uppada. Made with{' '}
            <Heart size={16} className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
