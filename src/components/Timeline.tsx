import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import Lottie from "lottie-react";
import drone from "../assets/lottie/Drone.json";

function Timeline() {

  return (
    <div id="history">
      <div className="items-container">

	<div className="floating_timeline">
  	<Lottie animationData={drone} loop={true} style={{ width: 180, height: 180 }} />
	</div> 

        <h1 className="section-title">Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb. 2024 - Mar. 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Drexel University, Philadelphia, PA</h4>
            <p>
              Senior Design, Fluid Systems, Renewable Energy, Graphical Communication (CAD), C+ Programming and Arduino
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun. 2024 - Dec. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Raptor Defense Company, Philadelphia, PA</h4>
            <p>
              Embedded Software, Navigation Systems, Research
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Sept. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Drexel University, Philadelphia, PA</h4>
            <p>
              Industrial Manufacturing Workcell, ROS2, 2D IFM, 6-DOF Robot, Educational Research
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr. 2022 - Aug. 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Embedded Systems Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">H3 Sciences, Pune, India</h4>
            <p>
              IOT Systems, Product Development, Circuit and CAD Design
            </p>
          </VerticalTimelineElement>
	<VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct. 2021 - Mar. 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Jr. Robotics Engineer- SW/HW (Intern)</h3>
            <h4 className="vertical-timeline-element-subtitle">GTQ Defence Systems, Pune, India</h4>
            <p>
              Embedded Systems, Robot Design, NVIDIA Jetson
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;