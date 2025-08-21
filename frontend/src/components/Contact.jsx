import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    successMessage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous status when user starts typing
    if (formStatus.isError || formStatus.isSuccess) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        successMessage: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: '',
      successMessage: ''
    });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          errorMessage: '',
          successMessage: response.data.message
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      let errorMessage = 'Something went wrong. Please try again later.';
      if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: errorMessage,
        successMessage: ''
      });
    }
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
            
            {/* Status Messages */}
            {formStatus.isSuccess && (
              <div className="status-message success-message">
                <CheckCircle size={20} />
                <span>{formStatus.successMessage}</span>
              </div>
            )}
            
            {formStatus.isError && (
              <div className="status-message error-message">
                <AlertCircle size={20} />
                <span>{formStatus.errorMessage}</span>
              </div>
            )}
            
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
                  disabled={formStatus.isSubmitting}
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
                  disabled={formStatus.isSubmitting}
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
                  disabled={formStatus.isSubmitting}
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
                  disabled={formStatus.isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn-primary ${formStatus.isSubmitting ? 'btn-loading' : ''}`}
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;