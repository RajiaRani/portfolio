import React, { useState } from "react";
import "./Project.css";
import "../App.css";
import { motion } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import img from "../assets/Project/wonderlust.png";

export default function Project() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            title: "Mini-Wonderlust ",
            description: "In this project, I aimed to replicate the Airbnb website. After learning the necessary technologies, I applied them to implement my project.",
            details: [
                "In this project, I aimed to replicate the Airbnb website. After learning the necessary technologies, I applied them to implement my project.",
                "he main technologies used for this project include HTML, CSS, Bootstrap, JavaScript, Node.js, Express, and MongoDB for the database. I also utilized Middleware and Error-Handling concepts. For authentication, I implemented the Passport npm package. The project is deployed using Render, a free hosting platform."
            ],
            created: "25 June 2024",
            technologies: "Full Stack using MERN",
            role: "Frontend",
            link: "https://miniwonderlust-project.onrender.com/listings",
            img: img // Project-specific image
        },
     
        {
            title: "My Portfolio",
            description:"This is my personal portfolio project, entirely crafted by me.",
            details: [
               "I built this portfolio using HTML, CSS, and JavaScript.",
               "I incorporated React to make it dynamic and interactive.",   
                "Responsive design is ensured with media queries, allowing it to adapt seamlessly across all devices. The project was built from the ground up, showcasing my skills and creativity."
            ],
            created: "Jan 2024",
            technologies: "HTML, CSS, JavaScript, React",
            role: "Frontend",
            link: "http://127.0.0.1:5173/portfolio/",
            img: img,
        }
    ];

    const openPopup = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
         <motion.div
         initial={{opacity:0, x:-100}}
         animate={{opacity:1, x:0}}
         exit={{opacity:0, x:100}}
         transition={{duration:0.5}}

         >
            <div className="main-container">
                <div className="main-content">
                    <section className="service section portfolio-section" id="project">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Recent Work</h2>
                                </div>
                            </div>
                            <div className="row">
                                {projects.map((project, index) => (
                                    <div className="service-item padd-15" key={index}>
                                        <div className="service-item-inner portfolio-item">
                                            <div className="portfolio-item-thumbnail">
                                                <img src={project.img} alt="" />
                                            </div>
                                            <h3 className="portfolio-item-title">{project.title}</h3>
                                            {/* <p>{project.description}</p> */}
                                            <button type="button" className="btn view-project-btn" onClick={() => openPopup(project)}>
                                                View &nbsp;<FaExternalLinkAlt />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Popup for project details */}
            {isPopupOpen && selectedProject && (
                <div className="portfolio-popup">
                    <div className="pp-inner">
                        <div className="pp-content">
                            <div className="pp-header">
                                <button type="button" className="btn pp-close" onClick={closePopup}>
                                <RxCrossCircled />
                                </button>
                                <div className="pp-thumbnail">
                                    <img src={selectedProject.img} alt="" />
                                </div>
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.description}</p>
                                <button>View Online</button>
                            </div>
                            <div className="pp-body">
                                <ul>
                                    {selectedProject.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                                <ul>
                                    <li>Created - <span>{selectedProject.created}</span></li>
                                    <li>Technologies used - <span>{selectedProject.technologies}</span></li>
                                    <li>Role - <span>{selectedProject.role}</span></li>
                                    <li>View Online - <span><a href={selectedProject.link} target="_blank" rel="noopener noreferrer">{selectedProject.link}</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </motion.div>
        </>
      
    );
};


