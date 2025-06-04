import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { userData } from './userData';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations!</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>{userData.contactUs.gmail}</span>
              </div>
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>{userData.contactUs.phone}</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>{userData.contactUs.location}</span>
              </div>
            </div>
            <div className="social-links">
              <a href={userData.contactUs.github}><FaGithub /></a>
              <a href={userData.contactUs.linkedIn}><FaLinkedin /></a>
              <a href={userData.contactUs.twiter}><FaTwitter /></a>
              <a href={userData.contactUs.instragram}><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;