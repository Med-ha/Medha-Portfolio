import React, { useState } from "react";
import '../assets/styles/Project.scss';
import Project1 from '../assets/images/Project1.png';
import p1_2 from '../assets/images/p1_2.jpg';
import p1_3 from '../assets/images/p1_3.png';
import p1_4 from '../assets/images/p1_4.png';

import p2_2 from '../assets/images/p2_2.jpg';
import p2_3 from '../assets/images/p2_3.jpg';
import p2_4 from '../assets/images/p2_4.png';

import Project3 from '../assets/images/Project3.png';
import p3_2 from '../assets/images/p3_2.png';
import p3_3 from '../assets/images/p3_3.jpeg';
import p3_4 from '../assets/images/p3_4.png';

import Project4 from '../assets/images/Project4.png';
import p4_2 from '../assets/images/p4_2.png';
import p4_3 from '../assets/images/p4_3.png';
import p4_4 from '../assets/images/p4_4.png';
import p4_5 from '../assets/images/p4_5.png';

import Project5 from '../assets/images/Project5.png';
import p5_2 from '../assets/images/p5_2.jpg';
import p5_3 from '../assets/images/p5_3.jpg';
import p5_4 from '../assets/images/p5_4.jpg';

import Project6 from '../assets/images/Project6.png';
import p6_2 from '../assets/images/p6_2.png';
import p6_3 from '../assets/images/p6_3.png';

type ProjectData = {
  title: string;
  description: string;
  tags: string[];
  side: 'left' | 'right';
  mediaType: 'image' | 'youtube';
  media: string;
  gallery: string[];
  paperLink?: string;
};

const projects: ProjectData[] = [
  {
    title: 'Electronics for Real-Time Fall Prediction System',
    description: 'Built a multi-sensor fall prediction system combining EEG and accelerometer data to detect instability in subjects. Implemented signal preprocessing and real-time classification. Focused on helping elderly or epileptic patients by alerting caregivers before a fall happens.',
    tags: ['Medical Robotics', 'cEEGrid', 'Motion Sensors', 'OpenBCI'],
    side: 'left',
    mediaType: 'image',
    media: Project1,
    gallery: [p1_2, p1_3, p1_4]
  },
  {
    title: 'Educational Cobot Work Cell for Smart Manufacturing',
    description: 'Designed and implemented an educational work cell integrating a collaborative robot (Cobot), machine vision, and modular fixtures to teach smart manufacturing principles. The system featured a vision-based part recognition module and automated quality control loop. Tailored for academic labs, the work cell emphasized Industry 4.0 readiness, safety, and real-time adaptability.',
    tags: ['Educational Robotics', 'Automated Workcell', 'Quality Control', 'Machine Vision'],
    side: 'right',
    mediaType: 'youtube',
    media: 'https://www.youtube.com/embed/Mf4t9k2MtN8?si=YrTWrUk35r2bfOfr',
    gallery: [p2_2, p2_3, p2_4]
  },
  {
    title: 'Hector SLAM-Based Mobile Robot',
    description: 'Developed and simulated a 2D autonomous mobile robot using Hector SLAM in ROS and Linux for indoor mapping and localization. The robot utilized LiDAR for real-time scan matching, enabling accurate SLAM without odometry. Rviz was used for dynamic visualization of trajectories and occupancy grids. Ideal for low-cost indoor navigation systems and research applications.',
    tags: ['ROS', 'Hector SLAM', 'LiDAR', 'Navigation'],
    side: 'left',
    mediaType: 'image',
    media: Project3,
    gallery: [p3_2, p3_3, p3_4],
    paperLink: 'https://thegrenze.com/index.php?display=page&view=journalabstract&absid=2180&id=8'
  },
  {
    title: 'Smart Water Management using IoT',
    description: 'Developed an end-to-end IoT-based Smart Water Management system with ESP32 and sensors for water quality (pH, TDS), tank level (Ultrasonic), and flow rate. Data was visualized via ThingSpeak and real-time alerts were triggered for overflow or contamination. The project targeted urban homes and rural water distribution systems.',
    tags: ['IoT', 'Water Quality Monitoring', 'Smart Living', 'Water Management'],
    side: 'right',
    mediaType: 'image',
    media: Project4,
    gallery: [p4_2, p4_3, p4_4, p4_5],
    paperLink: 'https://easychair.org/publications/preprint/hBfV'
  },
  {
    title: '6DOF Robotic Arm',
    description: 'Built a 6 Degrees-of-Freedom (DOF) industrial-style robotic arm using servo motors for precise joint control, capable of performing tasks like pick-and-place, painting, and welding simulations. The arm was programmed using an Arduino board and wirelessly controlled via a custom Android app over Bluetooth. The app included seven sliders, six for joint control and one for speed, allowing real-time manipulation and angle adjustments for each servo. Ideal for demonstrating industrial automation principles on a compact, low-cost platform.',
    tags: ['Robotic Arm', 'Bluetooth', '6DOF', 'Embedded Systems'],
    side: 'left',
    mediaType: 'youtube',
    media: 'https://www.youtube.com/embed/EDMR5XB4Rbo?si=WCXLI0LN9HMXRFud',
    gallery: [p1_2, p1_3, p1_4]
  },
  {
    title: 'RoboCon 2021 – Theme: “Throwing Arrows into Pots” (Jimo, China)',
    description: 'Competed in ABU RoboCon 2021, an Asia-Pacific International robotics competition, designing autonomous and manual robots inspired by the traditional Chinese archery game of “Throwing Arrows into Pots.” Our team developed high-speed bots capable of object shooting, and inter-bot coordination using embedded controllers and custom actuation mechanisms. Among over 500 participating teams, we proudly ranked 16th All India, showcasing strong innovation in strategy, precision control, and gameplay engineering.',
    tags: ['ABU RoboCon', 'Sem-Autonomous Bots', 'Research', 'Team Anonymous'],
    side: 'right',
    mediaType: 'image',
    media: Project5,
    gallery: [p5_2, p5_3, p5_4]
  },
  {
    title: 'Flipkart Grid 3.0 Robotics Challenge',
    description: 'Participated in the Flipkart Grid 3.0 Robotics Challenge, where we were tasked with solving a real-world warehouse automation problem. We designed a path-following autonomous mobile robot with computer vision for dynamic character recognition.',
    tags: ['Flipkart', 'Warehouse Bots', 'OCR', 'Challenge'],
    side: 'left',
    mediaType: 'youtube',
    media: 'https://www.youtube.com/embed/uakfvGvPMqY?si=KrowujjeYd-30LzQ',
    gallery: [p1_2, p1_3, p1_4]
  },
  {
    title: 'Smart Gate Entry Control System',
    description: 'Designed an automated gate entry system for residential buildings using RFID and a kiosk app for secure access to buildings. The system could track multiple users and log entries in a cloud database, reducing human dependency at security gates.',
    tags: ['Safety', 'RFID', 'Face Recognition', 'IOT'],
    side: 'right',
    mediaType: 'image',
    media: Project6,
    gallery: [p6_2, p6_3]
  }
];

function Project() {
  const [popupImages, setPopupImages] = useState<string[] | null>(null);

  const openGallery = (images: string[]) => {
    setPopupImages(images);
  };

  const closeGallery = () => {
    setPopupImages(null);
  };

  return (
    <div className="projects-section" id="projects">
      <h1>Projects</h1>
      <div className="projects-timeline">
        {projects.map((project, index) => (
          <div className={`project-entry ${project.side}`} key={index}>
            {project.mediaType === 'youtube' ? (
              <div className="project-image">
                <iframe
  width="90%"
  height="300"
  src={`${project.media}?rel=0&modestbranding=1&showinfo=0`}
  title={project.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ borderRadius: '10px' }}
></iframe>

              </div>
            ) : (
              <div className="project-image" onClick={() => openGallery(project.gallery)}>
                
		<img
  src={project.media}
  alt={`${project.title} main`}
  style={
    project.title === 'Smart Water Management using IoT'
      ? { width: '90%', maxWidth: '550px' }
      : project.title === 'RoboCon 2021 – Theme: “Throwing Arrows into Pots” (Jimo, China)'
    ? { width: '75%', maxWidth: '450px' }
    : project.title === 'Smart Gate Entry Control System'
    ? { width: '80%', maxWidth: '450px' }
    : {}
  }
/>



              </div>
            )}

            <div className="project-details">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
  <div className="tags">
    {project.tags.map((tag, i) => (
      <span className="tag" key={i}>{tag}</span>
    ))}
  </div>
  {project.paperLink && (
    <a
      href={project.paperLink}
      target="_blank"
      rel="noopener noreferrer"
      className="paper-link"
    >
      📄 View Published Paper
    </a>
  )}
</div>

          </div>
        ))}
      </div>

      {popupImages && (
        <div className="popup-overlay" onClick={closeGallery}>
          <div className="popup-gallery" onClick={e => e.stopPropagation()}>
            {popupImages.map((img, index) => (
              <img src={img} alt={`popup-${index}`} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
