// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Bharath's Resume</h1>
        <p>Software Developer | Location</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> bharath@example.com</p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile/">LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Bharath420">Bharath420</a></p>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Job Title - Company Name</h3>
          <p><em>Location | Dates</em></p>
          <ul>
            <li>Responsibility or accomplishment #1</li>
            <li>Responsibility or accomplishment #2</li>
            <li>Responsibility or accomplishment #3</li>
          </ul>
        </div>
        {/* Add more jobs as needed */}
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Degree - University Name</h3>
          <p><em>Location | Dates</em></p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill #1</li>
          <li>Skill #2</li>
          <li>Skill #3</li>
          {/* Add more skills */}
        </ul>
      </section>

      <footer>
        <p>Created with React | © Bharath</p>
      </footer>
    </div>
  );
}

export default App;
