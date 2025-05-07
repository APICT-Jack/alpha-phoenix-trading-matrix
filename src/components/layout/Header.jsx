// src/components/Layout/Header.jsx
import { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaChartBar, 
  FaGraduationCap, 
  FaUsers, 
  FaTools, 
  FaBell, 
  FaUser,
  FaTimes,
  FaChevronDown,
  FaSignOutAlt
} from 'react-icons/fa';
import { 
  FiCheck, 
  FiClock, 
  FiBellOff 
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';  // Updated path
import AuthModal from '../auth/AuthModal';  // Updated path
import './Header.css';  // Make sure this file exists

// ... rest of your Header component code ...

const NotificationsPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('signals');
  
  // Notification data for all tabs
  const notificationsData = {
    signals: [
      {
        id: 1,
        title: 'BTC/USD Buy Signal',
        message: 'Strong buy signal detected on 4H chart with RSI divergence',
        time: '5 min ago',
        unread: true,
        type: 'signal'
      },
      {
        id: 2,
        title: 'ETH/USD Take Profit',
        message: 'Price reached your take profit level at $2,850',
        time: '1 hour ago',
        unread: false,
        type: 'signal'
      }
    ],
    chats: [
      {
        id: 1,
        title: 'New message in Pro Traders',
        message: 'John_Doe: Check this ascending triangle on GBP/JPY',
        time: '15 min ago',
        unread: true,
        type: 'chat'
      }
    ],
    community: [
      {
        id: 1,
        title: 'Reply to your post',
        message: 'SarahTrader commented on your market analysis',
        time: '2 hours ago',
        unread: true,
        type: 'community'
      }
    ],
    events: [
      {
        id: 1,
        title: 'Live Trading Session',
        message: 'Starting in 30 minutes with senior analyst',
        time: 'Tomorrow',
        unread: false,
        type: 'event'
      }
    ],
    study: [
      {
        id: 1,
        title: 'New Lesson Available',
        message: 'Advanced Fibonacci Retracement techniques added',
        time: '3 days ago',
        unread: false,
        type: 'study'
      }
    ],
    bank: [
      {
        id: 1,
        title: 'Deposit Processed',
        message: 'Your $1,000 deposit is now available',
        time: '2 days ago',
        unread: false,
        type: 'bank'
      }
    ]
  };

  const tabs = [
    { id: 'signals', label: 'Signals', icon: '📈', count: 2 },
    { id: 'chats', label: 'Chats', icon: '💬', count: 1 },
    { id: 'community', label: 'Community', icon: '👥', count: 1 },
    { id: 'events', label: 'Events', icon: '📅', count: 0 },
    { id: 'study', label: 'Study', icon: '📚', count: 0 },
    { id: 'bank', label: 'Bank', icon: '💳', count: 0 }
  ];

  const markAllAsRead = () => {
    // Implementation would update state/API in real app
    console.log('All notifications marked as read');
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.notifications-container')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="notifications-overlay">
      <div className="notifications-container">
        <div className="notifications-header">
          <h2>Notifications</h2>
          <div className="notifications-actions">
            <button className="mark-all-read" onClick={markAllAsRead}>
              <FiCheck /> Mark all as read
            </button>
            <button className="close-notifications" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
        </div>
        
        <div className="notifications-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`notification-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
              {tab.count > 0 && <span className="tab-badge">{tab.count}</span>}
            </button>
          ))}
        </div>
        
        <div className="notifications-content">
          {notificationsData[activeTab]?.length > 0 ? (
            notificationsData[activeTab].map(notification => (
              <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                <div className="notification-icon">
                  {tabs.find(t => t.id === activeTab)?.icon}
                </div>
                <div className="notification-details">
                  <h3 className="notification-title">{notification.title}</h3>
                  <p className="notification-message">{notification.message}</p>
                  <div className="notification-meta">
                    <span className="notification-time">
                      <FiClock /> {notification.time}
                    </span>
                    {notification.unread && <span className="unread-dot"></span>}
                  </div>
                </div>
                <div className="notification-actions">
                  <button className="action-btn">View</button>
                  <button className="action-btn dismiss">Dismiss</button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <FiBellOff />
              </div>
              <h3>No notifications</h3>
              <p>You don't have any {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, signOut } = useAuth();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-btn') && !event.target.closest('.user-dropdown')) {
        setShowUserDropdown(false);
      }
      if (!event.target.closest('.notification-btn') && !event.target.closest('.notifications-container')) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserAction = () => {
    if (user) {
      setShowUserDropdown(!showUserDropdown);
      setShowNotifications(false);
    } else {
      setShowAuthModal(true);
      setShowUserDropdown(false);
    }
  };

  const handleLogout = () => {
    signOut();
    setShowUserDropdown(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo-container">
              <div className="logo-mark">
                <div className="logo-squares">
                  <div className="logo-square square-1"></div>
                  <div className="logo-square square-2"></div>
                  <div className="logo-square square-3"></div>
                </div>
              </div>
              <div className="logo-text">
                <p>TM</p>
                <p>Trading Matrix</p>
              </div>
            </a>
            
            <nav className="main-nav">
              <ul>
                <li><a href="#" className="active"><FaHome /> Home</a></li>
                <li><a href="#"><FaChartBar /> Library</a></li>
                <li><a href="#"><FaGraduationCap /> Academy</a></li>
                <li><a href="#"><FaUsers /> Community</a></li>
                <li><a href="#"><FaTools /> Tools</a></li>
              </ul>
            </nav>
            
            <div className="user-actions">
              <button 
                className={`notification-btn ${showNotifications ? 'active' : ''}`}
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserDropdown(false);
                }}
              >
                <FaBell />
                <span className="notification-count">3</span>
              </button>
              
              <div className="user-container">
                <button 
                  className={`user-btn ${showUserDropdown ? 'active' : ''}`}
                  onClick={handleUserAction}
                >
                  <div className="user-avatar">
                    {user ? (
                      user.name.charAt(0).toUpperCase()
                    ) : (
                      <FaUser />
                    )}
                  </div>
                  {user && (
                    <span className="user-name">
                      {user.name.split(' ')[0]}
                    </span>
                  )}
                  {user && <FaChevronDown className="chevron" />}
                </button>

                {user && showUserDropdown && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <div className="dropdown-avatar">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="dropdown-user-info">
                        <div className="dropdown-name">{user.name}</div>
                        <div className="dropdown-email">{user.email}</div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a href="/profile" className="dropdown-item">
                      My Profile
                    </a>
                    <a href="/settings" className="dropdown-item">
                      Account Settings
                    </a>
                    <a href="/subscription" className="dropdown-item">
                      Subscription
                    </a>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout" onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {showNotifications && (
        <NotificationsPanel onClose={() => setShowNotifications(false)} />
      )}
      
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          initialForm="login"
        />
      )}
    </>
  );
}