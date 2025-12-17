import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '03014470769'; // ← Replace with YOUR WhatsApp number (no +, no spaces)

    const text = `New Contact Message:%0A%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, '_blank');

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div
              className="info-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Email</h3>
              <a
                href="mailto:abdullahfaisal5727@gmail.com"
                className="info-link"
              >
                abdullahfaisal5727@gmail.com
              </a>
            </div>

            <div
              className="info-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2" />
                  <path d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2" />
                  <path d="M7 4a2 2 0 012-2" />
                  <path d="M15 2a2 2 0 012 2" />
                </svg>
              </div>
              <h3>Phone</h3>
              <a href="tel:+923004567890" className="info-link">
                +92 3014470769
              </a>
            </div>

            <div
              className="info-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-5.686-6-10a6 6 0 0112 0c0 4.314-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </div>
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
            </div>

            <div
              className="info-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/abdullah-faisal-6085b920a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.fiverr.com/abdullah_shykh0" target="_blank" rel="noopener noreferrer">Fiverr</a>
                <a href="https://www.instagram.com/abdullah_faisal081?igsh=MW5jamJvMmMxMngycg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Abdullah Faisal. All rights reserved.</p>
      </footer>
    </section>
  );
}
