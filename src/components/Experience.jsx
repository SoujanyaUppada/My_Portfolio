import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experience = {
    company: "VCheck",
    position: "UI Developer Intern",
    duration: "Dec 2023 – Jun 2024",
    location: "Pune, Maharashtra",
    type: "Internship",
    description: "Worked on real-time projects developing responsive user interfaces and integrating frontend components with backend APIs.",
    responsibilities: [
      "Developed responsive UIs using MUI, React, and CSS based on design specifications",
      "Integrated frontend components with RESTful APIs to enhance user experience",
      "Implemented automated UI testing with Playwright for quality assurance",
      "Ensured code quality and maintainability using SonarCloud",
      "Utilized Git for version control and maintained organized workflow",
      "Collaborated effectively with team members using agile methodologies"
    ],
    technologies: [
      "React.js",
      "Material-UI (MUI)",
      "CSS3",
      "JavaScript",
      "RESTful APIs",
      "Playwright",
      "SonarCloud",
      "Git"
    ],
    achievements: [
      "Successfully delivered responsive UI components on time",
      "Improved code quality metrics through automated testing",
      "Enhanced user experience through API integration",
      "Maintained 95%+ code coverage with automated tests"
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Professional Experience</h2>
          <p>My journey in the professional world of web development</p>
        </motion.div>

        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="experience-card" variants={itemVariants}>
            <div className="experience-header">
              <div className="company-info">
                <div className="company-logo">
                  <Briefcase size={32} />
                </div>
                <div className="company-details">
                  <h3>{experience.position}</h3>
                  <h4>{experience.company}</h4>
                  <div className="experience-meta">
                    <span className="duration">
                      <Calendar size={16} />
                      {experience.duration}
                    </span>
                    <span className="location">
                      <MapPin size={16} />
                      {experience.location}
                    </span>
                    <span className="type">{experience.type}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-body">
              <motion.div
                className="experience-description"
                variants={itemVariants}
              >
                <p>{experience.description}</p>
              </motion.div>

              <motion.div
                className="experience-section"
                variants={itemVariants}
              >
                <h5>Key Responsibilities</h5>
                <ul className="responsibilities-list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={16} />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="experience-section"
                variants={itemVariants}
              >
                <h5>Technologies Used</h5>
                <div className="technologies-grid">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="experience-section"
                variants={itemVariants}
              >
                <h5>Key Achievements</h5>
                <ul className="achievements-list">
                  {experience.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={16} />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="experience-timeline"
            variants={itemVariants}
          >
            <h3>Career Timeline</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>UI Developer Intern</h4>
                  <p>VCheck • Dec 2023 - Jun 2024</p>
                  <span>First professional experience in web development</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Computer Science Student</h4>
                  <p>RGUKT Nuzvid • 2020 - 2024</p>
                  <span>Focused on web technologies and software development</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker current"></div>
                <div className="timeline-content">
                  <h4>Seeking New Opportunities</h4>
                  <p>Present</p>
                  <span>Looking for full-time UI/Frontend Developer positions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
