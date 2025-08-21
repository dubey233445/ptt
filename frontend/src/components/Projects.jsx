import React from 'react';
import { ExternalLink, Github, Eye, Brain, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ISL Gesture Recognition System",
      description: "Built an AI-powered real-time sign language recognition system using CNN+LSTM architecture. Achieved 90% accuracy in Indian Sign Language (ISL) gesture classification with advanced computer vision techniques.",
      technologies: ["TensorFlow", "OpenCV", "Flask", "LSTM", "CNN", "Python"],
      icon: <Eye size={32} />,
      features: [
        "Real-time gesture recognition with 90% accuracy",
        "CNN+LSTM hybrid architecture for temporal modeling",
        "Computer vision preprocessing pipeline",
        "Flask web application for easy deployment"
      ],
      metrics: {
        accuracy: "90%",
        framework: "TensorFlow",
        type: "Computer Vision"
      },
      githubLink: "#", // Placeholder
      liveLink: "#"    // Placeholder
    },
    {
      title: "Travel Chatbot",
      description: "Created an AI-powered chatbot for travel recommendations and itinerary planning. Implemented advanced NLP and sentiment analysis, improving response accuracy by 35% over baseline models.",
      technologies: ["Python", "NLP", "Flask", "React", "OpenAI API", "Sentiment Analysis"],
      icon: <MessageSquare size={32} />,
      features: [
        "Intelligent travel recommendations",
        "Automated itinerary planning",
        "Sentiment analysis for user preferences",
        "React-based interactive interface"
      ],
      metrics: {
        improvement: "35%",
        framework: "OpenAI API",
        type: "Natural Language Processing"
      },
      githubLink: "#", // Placeholder
      liveLink: "#"    // Placeholder
    },
    {
      title: "Diabetes Prediction Model",
      description: "Developed a comprehensive predictive model for diabetes detection achieving 85% accuracy. Utilized ensemble methods combining Random Forest and Logistic Regression with advanced feature engineering.",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Logistic Regression", "Pandas"],
      icon: <Brain size={32} />,
      features: [
        "85% prediction accuracy",
        "Ensemble modeling approach",
        "Comprehensive feature engineering",
        "Statistical analysis and validation"
      ],
      metrics: {
        accuracy: "85%",
        method: "Ensemble Learning",
        type: "Predictive Analytics"
      },
      githubLink: "#", // Placeholder
      liveLink: "#"    // Placeholder
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Innovative AI solutions that demonstrate technical expertise and real-world impact</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link" title="View Source Code">
                    <Github size={20} />
                  </a>
                  <a href={project.liveLink} className="project-link" title="View Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span className="metric-label">{key}:</span>
                      <span className="metric-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note">
          <p>
            <strong>Note:</strong> Project links will be updated with live GitHub repositories 
            and demo links. Each project showcases different aspects of AI/ML development 
            from computer vision to natural language processing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;