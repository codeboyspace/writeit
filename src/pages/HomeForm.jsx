import React, { useState } from 'react';
import './HomeForm.css'; // Ensure this CSS file exists
import Preview from './Preview.jsx';

const HomeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subheadings: '',
    num_pages: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    const subheadingsArray = formData.subheadings.split(',').map(sub => sub.trim());
    const data = {
      title: formData.title,
      subheadings: subheadingsArray,
      num_pages: parseInt(formData.num_pages, 10),
    };
    return <Preview data={data} />;
  }

  return (
    <div className="case-study-container">
      <div className="form-title">
        <h1>hello friend</h1>
        <p>what's we gonna cook now?</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Write your case study title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} style={{fontSize: '19px'}} />
        </div>

        <div className="form-group">
          <label>Sub topics needed? (comma-separated)</label>
          <input type="text" name="subheadings" value={formData.subheadings} onChange={handleChange} style={{fontSize: '19px'}} />
        </div>

        <div className="form-group">
          <label>Number of pages required</label>
          <input type="number" name="num_pages" value={formData.num_pages} onChange={handleChange} style={{fontSize: '19px'}}/>
        </div>

        <div className="button-container">
          <button type="submit">next</button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
