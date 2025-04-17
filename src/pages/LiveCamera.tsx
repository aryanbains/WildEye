import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LiveCamera.css';

interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'inactive';
  lastDetection?: string;
}

const LiveCamera: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [cameras, setCameras] = useState<CameraFeed[]>([
    {
      id: '1',
      name: 'North Trail Camera',
      location: 'Ranthambore National Park',
      status: 'active',
      lastDetection: 'Tiger spotted 5 mins ago',
    },
    {
      id: '2',
      name: 'South Waterhole Camera',
      location: 'Serengeti National Park',
      status: 'active',
      lastDetection: 'Elephant herd passing 10 mins ago',
    },
    {
      id: '3',
      name: 'East Forest Camera',
      location: 'Amazon Rainforest',
      status: 'inactive',
    },
  ]);

  const [detections, setDetections] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time detections
    const interval = setInterval(() => {
      if (selectedCamera) {
        const newDetection = `Animal movement detected at ${new Date().toLocaleTimeString()}`;
        setDetections(prev => [newDetection, ...prev].slice(0, 10));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedCamera]);

  return (
    <div className="camera-container">
      <div className="camera-sidebar">
        <h2>Camera Feeds</h2>
        <div className="camera-list">
          {cameras.map((camera) => (
            <motion.div
              key={camera.id}
              whileHover={{ scale: 1.02 }}
              className={`camera-item ${selectedCamera === camera.id ? 'selected' : ''}`}
              onClick={() => setSelectedCamera(camera.id)}
            >
              <div className="camera-status" data-status={camera.status} />
              <div className="camera-info">
                <h3>{camera.name}</h3>
                <p>{camera.location}</p>
                {camera.lastDetection && (
                  <span className="last-detection">{camera.lastDetection}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="camera-main">
        {selectedCamera ? (
          <>
            <div className="camera-feed">
              <div className="camera-view">
                {/* Replace with actual camera feed */}
                <div className="placeholder-feed">
                  <h3>Live Camera Feed</h3>
                  <p>Camera ID: {selectedCamera}</p>
                </div>
              </div>
              <div className="camera-controls">
                <button className="control-button">
                  <i className="fas fa-expand"></i>
                </button>
                <button className="control-button">
                  <i className="fas fa-camera"></i>
                </button>
                <button className="control-button">
                  <i className="fas fa-video"></i>
                </button>
              </div>
            </div>

            <div className="detections-panel">
              <h3>Recent Detections</h3>
              <div className="detections-list">
                {detections.map((detection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="detection-item"
                  >
                    <span className="detection-time">
                      {new Date().toLocaleTimeString()}
                    </span>
                    <span className="detection-text">{detection}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="no-camera-selected">
            <h2>Select a camera to view live feed</h2>
            <p>Choose from the available camera feeds on the left</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveCamera; 