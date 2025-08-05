import React from "react";
import '../assets/styles/Miscellaneous.scss';
import Humanoid from '../assets/images/Humanoid.png';
import Lottie from "lottie-react";
import robot from "../assets/lottie/Anima Bot.json";


const items = [
  {
    title: 'Wall-E',
    type: 'youtube',
    media: 'https://www.youtube.com/embed/GBWzLt0MBi4'
  },
  {
    title: 'Drone',
    type: 'youtube',
    media: 'https://www.youtube.com/embed/vsLInqbCtk4?si=9JGII9iO-_-Bd5PH'
  },
  {
    title: 'KUKA Training: KUKA College',
    type: 'youtube',
    media: 'https://www.youtube.com/embed/cd9rPDTrudM?si=dPMVOnynyMrrErbp'
  },
  {
    title: 'Humanoid Defense Robot Design',
    type: 'image',
    media: Humanoid
  },
  {
    title: 'Three Wheel Holonomic Drive',
    type: 'youtube',
    media: 'https://www.youtube.com/embed/P2gE4uxsHKc?si=Inqi5w_Dni4ZvZJS'
  },
  {
    title: 'Line Following Robot: My first robot',
    type: 'youtube',
    media: 'https://www.youtube.com/embed/9s0DSY9nDxc?si=EfcaRRxwukMXgdIB'
  }
];

function Miscellaneous() {
  return (
    <div className="misc-section" id="miscellaneous">

	<div className="floating_mis">
  	<Lottie animationData={robot} loop={true} style={{ width: 180, height: 180 }} />
	</div>

      <h1>Miscellaneous Projects</h1>
      <div className="misc-gallery">
        {items.slice(0, 6).map((item, index) => (
          <div className="misc-item" key={index}>
            {item.type === 'video' ? (
              <video controls>
                <source src={item.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : item.type === 'youtube' ? (
              <iframe
                width="100%"
                height="200"
                src={item.media}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={item.media} alt={item.title} />
            )}
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Miscellaneous;
