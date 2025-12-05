import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import './Hero.css'
import resume from "../assests/Soujanya_Uppada_Resume.pdf";

const Hero = () => {


  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SoujanyaUppada',
      icon: <Github size={24} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/uppada-soujanya',
      icon: <Linkedin size={24} />
    },
    {
      name: 'Email',
      url: 'mailto:soujanyauppada23@gmail.com',
      icon: <Mail size={24} />
    }
  ]

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Soujanya Uppada
            </motion.h1>
            
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              UI Developer & React Enthusiast
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Passionate about creating beautiful, responsive, and user-friendly web applications 
              using modern technologies like React, JavaScript, and CSS. I love turning ideas 
              into interactive digital experiences.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href={resume}
                className="btn btn-primary"
                download="Soujanya_Uppada_Resume.pdf"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="image-placeholder">
              <div className="profile-circle">
                <img src="/code_girl.jpg" alt="Profile" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
