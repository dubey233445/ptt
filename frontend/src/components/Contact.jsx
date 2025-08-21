import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - will be connected to backend later
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "dubeyashish8957@gmail.com",
      link: "mailto:dubeyashish8957@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 87659 98219",
      link: "tel:+918765998219"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Haryana, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/ashishdubey",
      link: "https://github.com/ashishdubey"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/ashish-dubey",
      link: "https://linkedin.com/in/ashish-dubey"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's discuss how AI can transform your business or collaborate on exciting projects</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-section">
              <h3>Contact Information</h3>
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-section">
              <h3>Connect With Me</h3>
              <div className="social-items">
                {socialLinks.map((item, index) => (
                  <div key={index} className="social-item">
                    <div className="social-icon">
                      {item.icon}
                    </div>
                    <div className="social-details">
                      <h4>{item.title}</h4>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="availability">
              <h3>Availability</h3>
              <p>
                Currently seeking opportunities in AI/ML roles and open to freelance 
                projects. Available for consultations and collaborations.
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project inquiry / Collaboration / Job opportunity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;