import React from 'react';
import '../assets/styles/Expertise.scss';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCode, faMicrochip, faCube, faScrewdriver, faStar } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';

const skills = [
  {
    category: '🤖 Robotics Stack',
    icon: faRobot,
    tools: ['ROS', 'Gazebo', 'Rviz', 'Hector SLAM']
  },
  {
    category: '💻 Programming',
    icon: faCode,
    tools: ['Python', 'C/C++', 'Embedded C', 'MATLAB']
  },
  {
    category: '🧰 Embedded + Hardware',
    icon: faMicrochip,
    tools: ['Arduino', 'ESP32', 'Jetson Nano', 'Raspberry Pi', 'IoT Systems']
  },
  {
    category: '🛠️ CAD + Simulation',
    icon: faCube,
    tools: ['SolidWorks', 'Inventor Professional', 'Circuit Design']
  },
  {
    category: '⚙️ Mechatronics & Research',
    icon: faScrewdriver,
    tools: ['Motor Control', 'KUKA', 'Prototyping', 'R&D', 'Technical Documentation']
  },
  {
    category: '🌸 Soft Skills',
    icon: faStar,
    tools: ['Curious mind', 'Fast learner', 'Creative thinker', 'Team collaborator']
  }
];

function Expertise() {
  return (
    <div className="skills-section" id="expertise">
      <h1>Skills & Tools</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <h3>{skill.category}</h3>
            <div className="chip-group">
              {skill.tools.map((tool, i) => (
                <Chip key={i} label={tool} className="skill-chip" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;