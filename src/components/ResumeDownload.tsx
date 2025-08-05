import React from 'react';
import '../assets/styles/ResumeDownload.scss';
import { FaDownload } from 'react-icons/fa';

function ResumeDownload() {
  return (
    <div className="resume-download-section">
      <h2>📄 Download My Resume</h2>
      <a
        href="/MedhaPatil_Resume.pdf"
        download="MedhaPatil_Resume"
        className="download-btn"
      >
        <FaDownload style={{ marginRight: '8px' }} />
        Download Resume (PDF)
      </a>
    </div>
  );
}

export default ResumeDownload;
