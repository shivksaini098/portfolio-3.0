import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { userData } from './userData';

const Experience = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
        {userData.Experience.map((exp, i) => (
          <div className="contact-content">
            <div className="contact-info">
              <h3>{exp.title}</h3>
              <div className="about-text">
                <p>{exp.description}</p>
                <div className="skills">
                  <h3>My Skills</h3>
                  <div className="skill-tags">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};


export default Experience;