import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-scroll";  // Import Link from react-scroll
import "../App.css";
import "./SideNavbar.css";

export default function SideNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="aside">
      <div className="logo">
        <a>
          <span className="name">R</span>ajia <span className="name">R</span>ani
        </a>
      </div>

      <nav id="navbar">
        <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-link">
            <Link to="home" smooth={true} duration={500}> {/* Scroll to home section */}
              <AiFillHome className="icon" /> Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="about" smooth={true} duration={500}> {/* Scroll to about section */}
              <FaUserTie className="icon" /> About
            </Link>
          </li>
          <li className="nav-link">
            <Link to="resume" smooth={true} duration={500}> {/* Scroll to resume section */}
              <FaFileAlt className="icon" /> Resume
            </Link>
          </li>
          <li className="nav-link">
            <Link to="project" smooth={true} duration={500}> {/* Scroll to projects section */}
              <FaTasks className="icon" /> Projects
            </Link>
          </li>
          <li className="nav-link">
            <Link to="certificate" smooth={true} duration={500}> {/* Scroll to certificates section */}
              <PiCertificateFill className="icon" /> Certificates
            </Link>
          </li>
          <li className="nav-link">
            <Link to="experience" smooth={true} duration={500}> {/* Scroll to experience section */}
              <FaBriefcase className="icon" /> Experience
            </Link>
          </li>
          <li className="nav-link">
            <Link to="contact" smooth={true} duration={500}> {/* Scroll to contact section */}
              <BsChatDotsFill className="icon" /> Contact
            </Link>
          </li>
        </ul>

        {/* Toggle between hamburger and close icon */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <AiFillCloseSquare /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </div>
  );
}
