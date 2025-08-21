import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ashish Dubey</span>
            </h1>
            <h2 className="hero-subtitle">AI Engineer & Machine Learning Specialist</h2>
            <p className="hero-description">
              Passionate about building intelligent systems that solve real-world problems. 
              Experienced in deep learning, computer vision, and predictive analytics with 
              a focus on delivering scalable AI solutions.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/ashishdubey" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ashish-dubey" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dubeyashish8957@gmail.com">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button onClick={() => scrollToSection('about')}>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;