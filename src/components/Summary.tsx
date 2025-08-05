import React from 'react';
import FadeIn from './FadeIn';
import '../assets/styles/Summary.scss';

function Summary() {
  return (
    <div className="summary-section" id="summary">
      <FadeIn>
        <h1>Summary</h1>
        <p>
          Hi, I’m Medha, a Robotics Engineer and creative technologist passionate about designing machines that don’t just move, but think, learn, and solve. With a background that blends electronics, automation, and embedded systems, I enjoy building real-world systems that bridge mechanical precision with intelligent control.
        </p>
        <p>
          From developing EEG-powered fall prediction systems to prototyping autonomous robots and humanoid mechanisms, my projects reflect both technical depth and a love for purposeful innovation. Whether it's leveraging ROS, OpenBCI, or IoT frameworks, I’m driven by curiosity and a commitment to making tech more adaptive, ethical, and impactful. My work often sits at the crossroads of research and application, where each prototype is a question answered and a new one asked.
        </p>
      </FadeIn>
    </div>
  );
}

export default Summary;
