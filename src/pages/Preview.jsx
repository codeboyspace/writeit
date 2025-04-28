import React, { useState } from 'react';
import './Preview.css'; // Ensure this CSS file exists
import caseStudyImage from '../assets/template.png'; // Import your image
import { useNavigate } from 'react-router-dom';

const Preview = ({ data }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    class_name: '',
    reg_no: '',
    subject_name: '',
    subject_code: '',
    date_of_submission: '',
  });

  const [currentJobId, setCurrentJobId] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const requestData = {
      title: data.title,
      subheadings: data.subheadings,
      num_pages: data.num_pages,
      user_details: userDetails,
    };

    try {
      // Submit generation request
      const response = await fetch(`https://18d9-2401-4900-7b92-4edd-f8c2-f446-3113-f944.ngrok-free.app/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const responseData = await response.json();
      const jobId = responseData.job_id;
      setCurrentJobId(jobId);

      setStatusMessage(`Your case study is being generated. Job ID: <code>${jobId}</code>`);

      // Start polling for job status
      pollJobStatus(jobId);
    } catch (error) {
      setStatusMessage(`<p class="error">Error: ${error.message}</p>`);
      setLoading(false);
    }
  };

  const pollJobStatus = async (jobId) => {
    try {
      const response = await fetch(`https://18d9-2401-4900-7b92-4edd-f8c2-f446-3113-f944.ngrok-free.app/status/${jobId}`);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Update status message
      let statusHtml = `<p>Status: <strong>${data.status}</strong></p>`;

      if (data.status === 'completed') {
        statusHtml += '<p class="success">Your case study PDF has been successfully generated!</p>';
        setLoading(false);
        setStatusMessage(statusHtml);

        // Navigate to the Download page with the download URL
        const downloadUrl = `https://18d9-2401-4900-7b92-4edd-f8c2-f446-3113-f944.ngrok-free.app/download/${jobId}`;
        navigate('/download', { state: { downloadUrl } });

        return; // Stop polling
      } else if (data.status === 'failed') {
        statusHtml += `<p class="error">Generation failed: ${data.error || 'Unknown error'}</p>`;
        setLoading(false);
        setStatusMessage(statusHtml);
        return; // Stop polling
      } else {
        // Still processing, continue polling
        setStatusMessage(statusHtml);
        setTimeout(() => pollJobStatus(jobId), 5000); // Poll every 5 seconds
      }
    } catch (error) {
      setStatusMessage(`<p class="error">Error checking status: ${error.message}</p>`);
      setLoading(false);
    }
  };

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="preview-container">
      <div className="image-container">
        <img src={caseStudyImage} alt="Case Study" className="case-study-image" />
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={data.title} readOnly style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Subheadings:</label>
          <ul>
            {data.subheadings.map((subheading, index) => (
              <li key={index}>{subheading}</li>
            ))}
          </ul>
        </div>

        <div className="form-group">
          <label>Number of Pages:</label>
          <input type="number" value={data.num_pages} readOnly style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={userDetails.name} onChange={handleChange} placeholder="your name" style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Registration Number:</label>
          <input type="text" name="reg_no" value={userDetails.reg_no} onChange={handleChange} placeholder="reg number" style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Subject Code:</label>
          <input type="text" name="subject_code" value={userDetails.subject_code} onChange={handleChange} placeholder="subject code" style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Subject Name:</label>
          <input type="text" name="subject_name" value={userDetails.subject_name} onChange={handleChange} placeholder="subject name" style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Date of Submission:</label>
          <input type="text" name="date_of_submission" value={userDetails.date_of_submission} onChange={handleChange} placeholder="date of submission" style={{fontSize: '19px'}}/>
        </div>

        <div className="form-group">
          <label>Class:</label>
          <input type="text" name="class_name" value={userDetails.class_name} onChange={handleChange} placeholder="class" style={{fontSize: '19px'}}/>
        </div>

        <div className="button-container">
          <button type="submit" onClick={handleSubmit}>write</button>
        </div>

        
        <div id="loadingIndicator" style={{ display: loading ? 'block' : 'none' }}>
          <div className="spinner"></div>
        </div>
        <button id="downloadBtn" style={{ display: 'none' }}>Download PDF</button>
      </div>
    </div>
  );
};

export default Preview;
