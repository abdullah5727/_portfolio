import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team chat, file sharing, and project timeline visualization.',
    tags: ['TypeScript', 'React', 'Firebase', 'Material-UI'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics platform using machine learning to provide actionable insights and predictive analytics for business intelligence.',
    tags: ['Python', 'React', 'TensorFlow', 'D3.js'],
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Comprehensive social media management tool for scheduling posts, analyzing engagement, and managing multiple accounts from one interface.',
    tags: ['Next.js', 'MongoDB', 'Redis', 'Chart.js'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with detailed forecasts, interactive maps, severe weather alerts, and location-based recommendations.',
    tags: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
    image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Portfolio CMS',
    description: 'Content management system specifically designed for creative professionals to showcase their work with customizable templates.',
    tags: ['Vue.js', 'Express', 'MongoDB', 'AWS S3'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A selection of projects I've worked on
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="project-btn">View Details</button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
