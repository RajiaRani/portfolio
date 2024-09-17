import "../Resume/Body.css";
import whatsapp from "../assets/SocialMedia/whatsapp.png";
import email from "../assets/SocialMedia/mail.png";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Skills from "./Skills.jsx";
import SideNavbar from "./SideNavbar.jsx";
import Certificate from "./Certificate.jsx";
import Contact from "./Contact.jsx";
import Project from "./Project.jsx";
import About from "./About.jsx";
import Footer from "../Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";  // Only Routes

export default function Body() {
  return (
    <>
        <SideNavbar />
    <div className="body">

    <div className="main-body-container">
      <div className="whatsapp-image">
        <a href="https://wa.me/16055854711" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <div className="email-image">
        <a href="mailto:.Mekalathuru.Chenchaiah.@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="Email" />
        </a>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
       <About />
      <Home/>

      <Resume />
      <Project />
      <Certificate />
      <Contact />
    </div>
    </div>
    <Footer/>
    </>
  );
}
