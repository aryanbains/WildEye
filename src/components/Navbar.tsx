import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WildEyeLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Eye outline */}
    <ellipse cx="18" cy="18" rx="15" ry="12" stroke="currentColor" strokeWidth="2.5" />
    
    {/* Pupil */}
    <circle cx="18" cy="18" r="6" fill="currentColor" />
    
    {/* Light reflection */}
    <circle cx="15" cy="15" r="1.5" fill="white" />
    
    {/* Eyelashes/rays */}
    <path d="M4 10L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 26L7 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 10L29 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 26L29 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 31V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Animal silhouette in pupil */}
    <path d="M20 17C20.5 16 21.5 16 22 17" stroke="white" strokeWidth="0.75" strokeLinecap="round" />
    <path d="M14 17C14.5 16 15.5 16 16 17" stroke="white" strokeWidth="0.75" strokeLinecap="round" />
    <path d="M16 19C17 20 19 20 20 19" stroke="white" strokeWidth="0.75" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <WildEyeLogo />
        <span className="logo-text">WildEye</span>
      </Link>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/live-camera" onClick={() => setMenuOpen(false)}>Live Camera</Link>
        <Link to="/map" onClick={() => setMenuOpen(false)}>Map</Link>
        <Link to="/alerts" onClick={() => setMenuOpen(false)}>Alerts</Link>
      </div>

      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        
        <Link to="/login" className="cta-button">Login</Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 