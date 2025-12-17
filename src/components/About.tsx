import { useEffect } from 'react';
import './About.css';
import profilePic from '../assets/profile.jpeg'; 

export default function About() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const endValueText = target.getAttribute('data-target');
          
          if (endValueText) {
            const endValue = parseInt(endValueText);
            const suffix = endValueText.replace(/[0-9]/g, '');
            
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              
              const easeOut = 1 - Math.pow(1 - progress, 3);
              
              const currentNumber = Math.floor(easeOut * endValue);
              target.innerText = currentNumber + suffix;

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                target.innerText = endValueText;
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(target);
          }
        }
      });
    }, { threshold: 0.5 });

    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => observer.observe(stat));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Passionate about crafting exceptional digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <div className="about-image-wrapper">
              <div className="image-glow"></div>
              <div className="image-container">
                <img 
                  src={profilePic} 
                  alt="About Me" 
                  className="profile-image"
                />
              </div>
            </div>

            {/* Stats moved to left column for better balance */}
            <div className="about-stats">
              <div className="stat-card">
                <h3 className="stat-number" data-target="5+">0+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number" data-target="50+">0+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number" data-target="30+">0+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-text-content">
              <h3 className="about-subtitle">Who I Am</h3>
              <p className="about-description">
                I'm a passionate software engineer with a love for creating elegant,
                efficient solutions to complex problems. With several years of experience
                in web development, I specialize in building responsive, user-friendly
                applications that make a difference.
              </p>
              <p className="about-description">
                My journey in software development began with a curiosity about how
                things work under the hood. Today, I work with modern technologies
                and frameworks to bring ideas to life, always focusing on clean code,
                best practices, and exceptional user experiences.
              </p>

              <div className="expertise-tags">
                <span className="tag">Web Development</span>
                <span className="tag">UI/UX Design</span>
                <span className="tag">Full Stack</span>
                <span className="tag">Problem Solver</span>
              </div>

              <div className="about-cta">
                <a href="#contact" className="cta-button">
                  <span>Let's Work Together</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#projects" className="cta-button secondary">
                  <span>View My Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
