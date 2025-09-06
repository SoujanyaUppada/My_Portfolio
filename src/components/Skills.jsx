import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Monitor, Settings, Cloud, GitBranch } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Core Java", level: 80 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Monitor size={24} />,
      skills: [
        { name: "React JS", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Material-UI", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings size={24} />,
      skills: [
        { name: "Visual Studio Code", level: 95 },
        { name: "Eclipse", level: 80 },
        { name: "IntelliJ IDEA", level: 75 },
        { name: "Playwright", level: 75 }
      ]
    },
    {
      title: "Version Control",
      icon: <GitBranch size={24} />,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 }
      ]
    },
    {
      title: "Operating Systems",
      icon: <Cloud size={24} />,
      skills: [
        { name: "Windows", level: 90 },
        { name: "Linux", level: 75 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>Here are the technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>What I Bring to the Table</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Frontend Development</h4>
              <p>Creating responsive and interactive user interfaces using modern React.js and CSS frameworks</p>
            </div>
            <div className="summary-item">
              <h4>Problem Solving</h4>
              <p>Strong analytical skills with experience in data structures and algorithms</p>
            </div>
            <div className="summary-item">
              <h4>Collaboration</h4>
              <p>Experience working in teams using Git for version control and agile methodologies</p>
            </div>
            <div className="summary-item">
              <h4>Continuous Learning</h4>
              <p>Always staying updated with latest technologies and best practices in web development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
