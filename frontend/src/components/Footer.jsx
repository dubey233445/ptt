import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Ashish Dubey</h3>
              <p>AI Engineer & Machine Learning Specialist</p>
              <p className="footer-tagline">
                Building intelligent systems that solve real-world problems
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                  <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</button></li>
                  <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                  <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
                  <a href="https://github.com/ashishdubey" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/ashish-dubey" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:dubeyashish8957@gmail.com">
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              <div className="footer-section">
                <h4>Technologies</h4>
                <div className="footer-tech">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>React</span>
                  <span>FastAPI</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} Ashish Dubey. Built with <Heart size={16} /> using React & modern web technologies.
              </p>
            </div>
            
            <button className="back-to-top" onClick={scrollToTop}>
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;