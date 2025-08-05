import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/medha-patil/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p><a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Medha Patil</a> 💜</p>
    </footer>
  );
}

export default Footer;