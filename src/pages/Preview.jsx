import React from 'react';
import './Preview.css'; // Ensure this CSS file exists
import caseStudyImage from '../assets/template.png'; // Import your image

const Preview = () => {
  return (
    <div className="preview-container">
      <div className="image-container">
        <img src={caseStudyImage} alt="Case Study" className="case-study-image" />
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="your name" />
        </div>

        <div className="form-group">
          <label>Registration Number:</label>
          <input type="text" placeholder="reg number" />
        </div>

        <div className="form-group">
          <label>Subject Code:</label>
          <input type="text" placeholder="subject code" />
        </div>

        <div className="form-group">
          <label>Subject Name:</label>
          <input type="text" placeholder="subject name" />
        </div>

        <div className="form-group">
          <label>Date of Submission:</label>
          <input type="text" placeholder="date of submission" />
        </div>

        <div className="form-group">
          <label>Class:</label>
          <input type="text" placeholder="class" />
        </div>

        <div className="button-container">
          <button type="submit">write</button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
