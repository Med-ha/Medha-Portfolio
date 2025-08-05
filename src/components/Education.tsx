// src/components/Education.tsx
import React from "react";
import '../assets/styles/Education.scss';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Education() {
  return (
    <div className="education-section" id="education">
      <h1>Education</h1>
      <div className="education-timeline">
        <div className="edu-card">
          <h3>Drexel University</h3>
          <p className="degree">M.S. in Robotics & Autonomy</p>
          <p className="duration">2023 – 2025</p>
        </div>

        <div className="edu-card">
          <h3>Savitribai Phule Pune University</h3>
          <p className="degree">B.E. in Electronics and Telecommunication</p>
          <p className="duration">2019 – 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Education;