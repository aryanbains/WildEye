import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const sanctuaries = [
    {
      id: 1,
      name: 'Ranthambore National Park',
      image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28',
      description: 'Home to majestic tigers and diverse wildlife in Rajasthan, India.',
    },
    {
      id: 2,
      name: 'Serengeti National Park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description: 'Famous for the annual migration of wildebeest and zebras.',
    },
    {
      id: 3,
      name: 'Amazon Rainforest',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      description: 'The world\'s largest tropical rainforest with unparalleled biodiversity.',
    },
  ];

  return (
    <div className="home-container">
      <header className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Protecting Wildlife Through Technology</h1>
          <p>Join us in conserving endangered species using cutting-edge edge computing and AI</p>
          <button onClick={() => navigate('/login')} className="cta-button">
            Get Started
          </button>
        </motion.div>
      </header>

      <section className="features-section">
        <h2>Our Technology</h2>
        <div className="features-grid">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <i className="fas fa-brain"></i>
            <h3>Edge AI</h3>
            <p>Real-time animal detection using lightweight ML models</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <i className="fas fa-satellite"></i>
            <h3>Satellite Monitoring</h3>
            <p>Track environmental changes and habitat conditions</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <i className="fas fa-bolt"></i>
            <h3>Low Power Design</h3>
            <p>Optimized for remote areas with limited power supply</p>
          </motion.div>
        </div>
      </section>

      <section className="sanctuaries-section">
        <h2>Protected Sanctuaries</h2>
        <div className="sanctuaries-grid">
          {sanctuaries.map((sanctuary) => (
            <motion.div
              key={sanctuary.id}
              whileHover={{ scale: 1.02 }}
              className="sanctuary-card"
            >
              <div className="sanctuary-image" style={{ backgroundImage: `url(${sanctuary.image})` }} />
              <div className="sanctuary-content">
                <h3>{sanctuary.name}</h3>
                <p>{sanctuary.description}</p>
                <button className="learn-more">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 WildEye Conservation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home; 