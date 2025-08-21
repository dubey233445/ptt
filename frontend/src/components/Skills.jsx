import React from 'react';
import { Code, Database, Cloud, GitBranch, BarChart3, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "R", "SQL", "Java"],
      color: "blue"
    },
    {
      title: "ML/DL Frameworks",
      icon: <Brain size={24} />,
      skills: ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "Neural Networks", "CNN", "LSTM", "NLP"],
      color: "purple"
    },
    {
      title: "AI/Generative AI Tools",
      icon: <Brain size={24} />,
      skills: ["Generative AI", "Agentic AI", "LangChain", "LangGraph", "OpenAI API"],
      color: "green"
    },
    {
      title: "Big Data & Analytics",
      icon: <BarChart3 size={24} />,
      skills: ["Pandas", "NumPy", "Spark", "Hadoop"],
      color: "orange"
    },
    {
      title: "Visualization Tools",
      icon: <BarChart3 size={24} />,
      skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau"],
      color: "red"
    },
    {
      title: "Deployment/Cloud",
      icon: <Cloud size={24} />,
      skills: ["Flask", "FastAPI", "Docker", "AWS", "Google Cloud"],
      color: "cyan"
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "indigo"
    },
    {
      title: "Version Control",
      icon: <GitBranch size={24} />,
      skills: ["Git", "GitHub"],
      color: "gray"
    }
  ];

  const specializations = [
    "Feature Engineering",
    "Hyperparameter Tuning", 
    "Exploratory Data Analysis (EDA)",
    "Model Evaluation",
    "A/B Testing",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Comprehensive expertise across the AI/ML technology stack</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category ${category.color}`}>
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="specializations">
          <h3>Core Specializations</h3>
          <div className="specializations-grid">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-item">
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages</h3>
          <div className="languages">
            <div className="language-item">
              <span className="language">English</span>
              <span className="proficiency">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language">Hindi</span>
              <span className="proficiency">Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;