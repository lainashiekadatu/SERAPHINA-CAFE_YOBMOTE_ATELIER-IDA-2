import React, { useState } from "react";
import "./Contact.css"; // Fixed: Added ../ dahil nasa loob na ito ng pages folder

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>May katanungan o feedback? Gusto naming marinig mula sa iyo!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Location</h3>
            <p>123 Atelier St., Baguio City, Philippines</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+63 912 345 6789</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>hello@cafeyobmote.com</p>
          </div>
          <div className="info-item">
            <h3>⏰ Hours</h3>
            <p>Mon - Sun: 8:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="success-message">
              <h2>Salamat!</h2>
              <p>Ang iyong mensahe ay naipadala na. Mag-eemail kami sa iyo agad.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="primaryBtn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;