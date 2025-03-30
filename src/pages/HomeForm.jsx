import React from 'react';
import './HomeForm.css'; // Ensure this CSS file exists

const HomeForm = () => {
  return (
    <div className="case-study-container">
      <div className="form-title">
        <h1>hello Surya</h1>
        <p>what's we gonna cook now?</p>
      </div>

      <form>
        <div className="form-group">
          <label>Write your case study title</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Sub topics needed?</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Number of pages required</label>
          <input type="number" />
        </div>

        <div className="button-container">
          <button type="submit">next</button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
