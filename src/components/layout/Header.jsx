import { FaHome, FaChartBar, FaGraduationCap, FaUsers, FaTools, FaSearch, FaBell, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo-container">
            <div className="logo-mark">
              <div className="logo-squares">
                <div className="logo-square square-1"></div>
                <div className="logo-square square-2"></div>
                <div className="logo-square square-3"></div>
              </div>
            </div>
            <div className="logo-text">
              <h1>Alpha Phoenix</h1>
              <p>Trading Matrix</p>
            </div>
          </a>
          
          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              <li><a href="#" className="active" aria-current="page"><FaHome /> Home</a></li>
              <li><a href="#"><FaChartBar /> Library</a></li>
              <li><a href="#"><FaGraduationCap /> Academy</a></li>
              <li><a href="#"><FaUsers /> Community</a></li>
              <li><a href="#"><FaTools /> Tools</a></li>
            </ul>
          </nav>
          
          <div className="user-actions">
            <button className="search-btn" aria-label="Search"><FaSearch /></button>
            <button className="notification-btn" aria-label="Notifications">
              <FaBell />
              <span className="notification-count">2</span>
            </button>
            <button className="user-btn" aria-label="User profile">
              <div className="user-avatar">
                <FaUser />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}