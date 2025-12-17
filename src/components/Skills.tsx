import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 93 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'CSS/SASS', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Agile', level: 85 },
      { name: 'Testing', level: 82 }
    ]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${isVisible ? 'animate' : ''}`}
                        data-level={skill.level}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.15}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}