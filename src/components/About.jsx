import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'
import './About.css'

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "RGUKT Nuzvid (IIIT)",
      period: "2020 - 2024",
      gpa: "8.5",
      location: "Nuzvid"
    },
    {
      degree: "Pre University Course",
      institution: "RGUKT Nuzvid (IIIT)",
      period: "2018 - 2020",
      gpa: "8.4",
      location: "Nuzvid"
    },
    {
      degree: "Secondary School Certificate",
      institution: "AP Model School (Karavanja)",
      period: "2018",
      gpa: "10.0",
      location: "Karavanja"
    }
  ]

  const certifications = [
    "Data Structures Course - Coursera",
    "Introduction to Front end Development - Coursera",
    "Programming with JavaScript - Coursera",
    "React - Coursera"
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know more about my background, education, and journey</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Soujanya Uppada</h3>
            <p>
              I'm a passionate UI Developer with a strong foundation in Computer Science Engineering 
              from RGUKT Nuzvid (IIIT). My journey in web development began during my undergraduate 
              studies, where I discovered my love for creating intuitive and visually appealing user interfaces.
            </p>
            <p>
              With hands-on experience in modern web technologies like React, JavaScript, and CSS, 
              I enjoy transforming complex problems into simple, beautiful, and intuitive solutions. 
              My recent internship at VCheck gave me valuable real-world experience in developing 
              responsive UIs and working with RESTful APIs.
            </p>
            <p>
              I'm constantly learning and staying updated with the latest trends in web development. 
              My goal is to create digital experiences that not only look great but also provide 
              exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <h4>6+</h4>
              <p>Months Experience</p>
            </div>
            <div className="stat-item">
              <h4>5+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h4>4</h4>
              <p>Certifications</p>
            </div>
          </motion.div>
        </div>

        <div className="about-details">
          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>
              <GraduationCap className="section-icon" />
              Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="education-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span className="period">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                      <span className="location">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                      <span className="gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>
              <Award className="section-icon" />
              Certifications
            </h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Award size={20} />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
