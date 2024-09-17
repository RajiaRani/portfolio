import React, { useState } from "react";
import "./Project.css";
import "../App.css";
import { motion } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import img from "../assets/Project/project.jpg";

export default function Project() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            title: "Bitcoin Predict - Time Series Forecasting, Python, TensorFlow",
            description: "Built a comprehensive machine learning model that predicts Bitcoin prices using historical time series data.",
            details: [
                "Built a comprehensive machine learning model that predicts Bitcoin prices using historical time series data.",
                "Enhanced Forecast Accuracy: Accomplished a 20% improvement in prediction accuracy as measured by mean absolute percentage error (MAPE) by employing LSTM and 1D CNN models.",
                "Improved Data Utilization: Achieved a 30% increase in the model’s ability to capture market trends.",
                "Reduced Model Experimentation Time: Accomplished a 40% reduction in time spent on model trials.",
                "Enhanced Market Insight: Provided valuable predictive insights into Bitcoin's future price movements."
            ],
            created: "4 Dec 2022",
            technologies: "Python, TensorFlow",
            role: "Frontend",
            link: "www.domain.com",
            img: img // Project-specific image
        },
        {
            title: "Predictive Modeling & Algorithm Development - LSTM, RNN, ARIMA",
            description: "Predicted stock price with 98% accuracy to enable the company to make informed investments!",
            details: [
                "Developed and executed a machine learning project using Python.",
                "Automated data extraction and preprocessed over 20,000 data points.",
                "Applied exploratory data analysis to identify key trends.",
                "Presented actionable insights to stakeholders."
            ],
            created: "4 Dec 2022",
            technologies: "Matplotlib, Scikit-learn",
            role: "Frontend",
            link: "www.domain.com",
            img: img // Project-specific image
        },
        {
            title: "Web Scraping, Data Visualization & Regression Modeling",
            description: "Developed and executed a machine learning project to predict outcomes using Python.",
            details: [
                "Predicted stock price with 98% accuracy.",
                "Determined optimal pricing strategies.",
                "Made multiple touch-sensitive ML systems to improve safety networks."
            ],
            created: "4 Dec 2022",
            technologies: "LSTM, RNN, ARIMA",
            role: "Frontend",
            link: "www.domain.com",
            img: img // Project-specific image
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


