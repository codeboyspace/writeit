import React from 'react';
import { useLocation } from 'react-router-dom';
import './Download.css'; // Ensure this CSS file exists

const Download = () => {
  const location = useLocation();
  const { downloadUrl } = location.state || {};

  return (
    <div className="download-container">
      <div className="message">
        <p>Your document is ready to download</p>
      </div>
      <a href={downloadUrl} download>
        <div className="file-name">
          Click to download
        </div>
          </a>
        </div>
  );
};

export default Download;
