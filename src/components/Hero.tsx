import './Hero.css';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Abdullah Faisal</h1>
          <h2 className="hero-title">Software Engineer & Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
{`const developer = {
  name: "Your Name",
  role: "Software Engineer",
  skills: [
    "React", "TypeScript",
    "Node.js", "Python"
  ],
  passion: "Building great products"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
