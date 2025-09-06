import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Cloud, Zap, Users, Database } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A responsive weather forecasting application built with React.js and CSS. Features real-time weather data integration using OpenWeatherMap API with a clean, user-friendly interface.",
      longDescription: "This weather application provides users with accurate, real-time weather information for any location worldwide. The app features a modern design with dynamic weather icons, detailed forecasts, and responsive layouts that work seamlessly across all devices.",
      technologies: ["React.js", "CSS3", "OpenWeatherMap API", "JavaScript", "HTML5"],
      features: [
        "Real-time weather data integration",
        "Responsive design for all devices",
        "Dynamic weather icons and animations",
        "Location-based weather search",
        "Clean and intuitive user interface"
      ],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "https://github.com/SoujanyaUppada/Weather_App",
      category: "Frontend",
      status: "Completed",
      icon: <Cloud size={24} />
    },
    {
      id: 2,
      title: "Project Management Tool",
      description: "A full-stack collaborative web application for efficient project and task management, inspired by platforms like Trello and Jira. Built with Python/Flask backend and React.js frontend.",
      longDescription: "This comprehensive project management solution enables teams to organize, track, and collaborate on projects effectively. The application features drag-and-drop functionality, real-time updates, user authentication, and a robust backend API.",
      technologies: ["Python", "Flask", "React.js", "MySQL", "Redux", "React Beautiful DnD"],
      features: [
        "Drag-and-drop task management",
        "Real-time collaboration features",
        "User authentication and authorization",
        "Project and task organization",
        "RESTful API design",
        "Responsive dashboard interface"
      ],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "https://github.com/SoujanyaUppada/project-management-tool",
      category: "Full Stack",
      status: "Completed",
      icon: <Users size={24} />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>A showcase of my recent work and technical capabilities</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >


              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    <span className={`project-category ${project.category.toLowerCase().replace(' ', '-')}`}>
                      {project.category}
                    </span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-details">
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <Zap size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    <h4>Technologies</h4>
                    <div className="tech-stack">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href={project.demoUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default Projects
