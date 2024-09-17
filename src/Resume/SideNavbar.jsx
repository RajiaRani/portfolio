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
import "../App.css";
import "./SideNavbar.css";

export default function SideNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage state for the menu open/close

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="aside">
      <div className="logo">
        <a>
          <span>C</span>henchaiah <span>M</span>ekalathuru
        </a>
      </div>

      <nav id="navbar">
        <ul className={`nav ${isMenuOpen ? "open" : ""}`}> {/* Add "open" class when menu is open */}
          <li className="nav-link">
            <AiFillHome className="icon" /> Home
          </li>
          <li className="nav-link">
            <FaUserTie className="icon" /> About
          </li>
          <li className="nav-link">
            <FaFileAlt className="icon" /> Resume
          </li>
          <li className="nav-link">
            <FaTasks className="icon" /> Projects
          </li>
          <li className="nav-link">
            <PiCertificateFill className="icon" /> Certificates
          </li>
          <li className="nav-link">
            <FaBriefcase className="icon" /> Experience
          </li>
          <li className="nav-link">
            <BsChatDotsFill className="icon" /> Contact
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
