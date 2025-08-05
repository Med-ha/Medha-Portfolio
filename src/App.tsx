import React, { useEffect } from "react";
import Summary from './components/Summary';
import Education from './components/Education';
import Miscellaneous from './components/Miscellaneous';
import ResumeDownload from './components/ResumeDownload';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="main-container dark-mode"> {/* Only dark mode now */}
      <Navigation />
      <FadeIn transitionDuration={700}>
        <Main />
        <Summary />
        <Expertise />
        <Education />
        <Timeline />
        <Project />
        <Miscellaneous />
        <ResumeDownload />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
