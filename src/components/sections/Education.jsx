import { FaSeedling, FaChartLine, FaRocket } from 'react-icons/fa';

export default function Education() {
  const learningPaths = [
    {
      id: 1,
      level: "Beginner",
      icon: <FaSeedling />,
      title: "Foundations of Trading",
      description: "Learn the essential concepts, terminology, and psychology of successful trading",
      stats: {
        lessons: 12,
        hours: 8
      },
      progress: 25,
      featured: true
    },
    {
      id: 2,
      level: "Intermediate",
      icon: <FaChartLine />,
      title: "Technical Analysis Mastery",
      description: "Deep dive into chart patterns, indicators, and price action strategies",
      stats: {
        lessons: 18,
        hours: 12
      },
      progress: 0,
      featured: false
    },
    {
      id: 3,
      level: "Advanced",
      icon: <FaRocket />,
      title: "Algorithmic Trading",
      description: "Develop, test, and deploy your own trading algorithms and expert advisors",
      stats: {
        lessons: 24,
        hours: 20
      },
      progress: 0,
      featured: false
    }
  ];

  return (
    <section className="education-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">DC Trading University</h2>
          <p className="section-subtitle">Structured learning paths for traders of all levels</p>
        </div>
        
        <div className="learning-paths">
          {learningPaths.map(path => (
            <div key={path.id} className={`path-card card ${path.level.toLowerCase()} ${path.featured ? 'featured' : ''}`}>
              <div className="path-header">
                <div className="path-level">
                  {path.icon}
                  <span>{path.level}</span>
                </div>
                <div className="path-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${path.progress}%` }}></div>
                  </div>
                  <span>{path.progress}% Complete</span>
                </div>
              </div>
              <h3 className="path-title">{path.title}</h3>
              <p className="path-desc">{path.description}</p>
              
              <div className="path-stats">
                <div className="stat">
                  <i className="fas fa-book-open"></i>
                  <span>{path.stats.lessons} Lessons</span>
                </div>
                <div className="stat">
                  <i className="fas fa-clock"></i>
                  <span>{path.stats.hours} Hours</span>
                </div>
              </div>
              
              <button className="path-btn btn">
                {path.progress > 0 ? 'Continue Learning' : 'Start Path'} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}