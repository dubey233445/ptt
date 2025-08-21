import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Zidio Development",
      duration: "Mar 2025 – Jun 2025",
      location: "Remote",
      responsibilities: [
        "Contributed to multi-modal emotion recognition and predictive analytics projects",
        "Implemented deep learning models with TensorFlow & Keras to improve performance",
        "Conducted data preprocessing, feature extraction, and hyperparameter tuning for optimized results"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Technology Company",
      duration: "Apr 2024 – Jun 2024",
      location: "Remote",
      responsibilities: [
        "Developed a predictive model for diabetes detection, achieving 85% accuracy using Random Forest & Logistic Regression",
        "Optimized a lead scoring model, improving lead classification by 20% through feature engineering",
        "Deployed machine learning models using Flask & FastAPI for real-time predictions"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p>Building expertise through hands-on projects and real-world applications</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-main">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="duration">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="location">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>
                      <TrendingUp size={16} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <div className="education-header">
              <h4>B.Tech in Computer Science Engineering (AI & ML)</h4>
              <span className="duration">Aug 2023 – Present</span>
            </div>
            <p>K R Mangalam University, Haryana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;