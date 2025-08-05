import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myPhoto from "../assets/images/Medha1.jpeg";
import Lottie from "lottie-react";
import robotAnimation from "../assets/lottie/Chatbot.json";
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
	  <img src={myPhoto} alt="Medha Patil" />
          {/*<img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />*/}
        </div>


        <div className="content">
          <div className="social_icons">      
            <a href="https://www.linkedin.com/in/medha-patil/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
<div className="location-wrapper">
    <LocationOnIcon />
    <span className="location-text">Philadelphia, PA</span>
  </div>
          </div>

          <h1>Medha Patil</h1>
          <p>Robotics and Autonomy Engineer | Electronics and Telecommunication Engineer</p>

          <div className="mobile_social_icons">

            <a href="https://www.linkedin.com/in/medha-patil/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>

          </div>
        </div>
	<div className="floating">
  	<Lottie animationData={robotAnimation} loop={true} style={{ width: 180, height: 180 }} />
	</div>
      </div>
    </div>
  );
}

export default Main;