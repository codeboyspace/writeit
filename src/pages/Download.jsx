import React from 'react';
import './Download.css'; // Ensure this CSS file exists

const Download = () => {
  return (
    <div className="download-container">
      <div className="message">
        <p>Your document is ready to download</p>
      </div>

      <div className="download-box">
        <div className="file-name">
          Clouding_CaseStudy.pdf
        </div>
        <div className="download-button">
          <a href="#" download>
            <span className="icon">↓</span>
          </a>
        </div>
      </div>

      <div className="experience-input">
        <input type="text" placeholder="Share your experience here" />
      </div>
    </div>
  );
};

export default Download;
