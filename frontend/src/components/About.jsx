import React from 'react';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Deep expertise in neural networks, computer vision, and NLP"
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern frameworks"
    },
    {
      icon: <Database size={32} />,
      title: "Data Science",
      description: "Advanced analytics, feature engineering, and model optimization"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Predictive Analytics",
      description: "Creating models that drive business insights and decisions"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Building the future with artificial intelligence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a versatile technology professional with expertise in Python, SQL, and modern 
              machine learning frameworks. My passion lies in building predictive models, automating 
              workflows, and deploying scalable applications that make a real impact.
            </p>
            <p>
              With hands-on experience in data analysis, feature engineering, and model optimization, 
              I specialize in applying data-driven approaches to solve practical problems across diverse 
              domains. I'm currently pursuing my B.Tech in Computer Science with specialization in 
              AI & Machine Learning.
            </p>
            <p>
              My recent work includes developing AI-powered systems for gesture recognition, 
              creating intelligent chatbots, and building predictive models that have achieved 
              significant performance improvements in real-world applications.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;