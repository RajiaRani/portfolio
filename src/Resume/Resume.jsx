import React, { useState } from "react";
import "./Resume.css";
import {motion} from "framer-motion";
import lpu from "../assets/logo/lpu.png";
import usd from "../assets/logo/usd.png";
import byjus from "../assets/logo/byjuslogo.png";
import ai from "../assets/logo/2ai-lab.png";

export default function Resume() {
    const [showMoreEducation, setShowMoreEducation] = useState(false);
    const [showMoreExperience, setShowMoreExperience] = useState(false);
    
    const toggleEducation = () => {
        setShowMoreEducation(!showMoreEducation);
    };

    const toggleExperience = () => {
        setShowMoreExperience(!showMoreExperience);
    };

    return (
        <>
            <motion.div
            initial={{ opacity: 0, y: 100 }}  // Page will start from the left
            animate={{ opacity: 1, y: 0 }}     // Page will come to its position
            exit={{ opacity: 0, y: -100 }}      // Page will exit towards the right
            transition={{ duration: 1 }}  
            >
            <div className="main-container">
                <div className="main-content">
                    <section className="section padd-15 resume" id="resume">
                        <div className="container">
                            <div className="row">
                                <div className="section-title">
                                    <h2>Resume</h2>
                                </div>
                                <div>
                                    <h3>I'm Chenchaiah Mekalathuru <span>AI/ML Engineer.</span></h3>
                                    <p className="text-color">
                                        A seasoned senior manager with a robust background overseeing <span>60+ employees</span>,
                                        I deliberately shifted from a high-paying and esteemed position to pursue my passion in
                                        the computer science industry. This decision, while challenging, reflects my unwavering
                                        commitment to personal and professional growth. Eager to prove my capabilities and replicate past successes 
                                        in a new domain, I am actively seeking an opportunity to start from scratch and emerge as a hero in the ever-evolving landscape of the computer science industry.
                                    </p>
                                </div>

                                <div className="content padd-15 text-color" id="education">
                                    <h2>Summary</h2>
                                    <div className="timeline">
                                        <div className="timeline-logo">
                                            <div className="logo-info">
                                                <h3>Chenchaiah Mekalathuru</h3>
                                                <h4>Master of Science - MS, Computer Science (AI Specialization)</h4>
                                                <p>My journey through the tech industry is marked by a dedication to not just
                                                    excel in one area,</p>
                                                {showMoreEducation && (
                                                    <p>
                                                        but to develop a versatile, T-shaped skill set. While I specialize in cutting-edge AI technologies like 
                                                        Liquid Neural Networks and transformative AI methodologies, my proficiency doesn't stop there.
                                                    </p>
                                                )}
                                                <button className="seeMore" onClick={toggleEducation}>
                                                    {showMoreEducation ? "See Less" : "See More"}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <h3>Gained Skills</h3>
                                            <div className="timeline-info">
                                                <p>
                                                    Gained skills in Artificial Intelligence, Machine Learning, Generative
                                                    AI, Data Processing, Natural Language Processing, Data Modeling, Databases, Web Scraping, Data Analytics.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <br /> <br />
                                    <h2>Education</h2>
                                    <div className="timeline">
                                        <div className="timeline-logo">
                                            <div className="logo">
                                                <a href="https://www.linkedin.com/school/university-of-south-dakota/"><img src={usd} alt="USD Logo" /></a>
                                            </div>
                                            <div className="logo-info">
                                                <h3>University of South Dakota</h3>
                                                <h4>Master of Science - MS, Computer Science (AI Specialization)</h4>
                                                <span className="date"><i className="fa-solid fa-calendar"></i> Aug 2023 - May 2025</span>
                                                <p>GPA: 4.0</p>
                                            </div>
                                        </div>

                                        <div className="timeline-item">
                                            <div className="timeline-info">
                                                <p>
                                                    Gained skills in Artificial Intelligence, Machine Learning, Generative AI, Data Processing, Natural Language Processing,
                                                </p>
                                                {showMoreEducation && (
                                                    <p>
                                                        Data Modeling, Databases, Web Scraping, Data Analytics, Big Data Concepts: Algorithms, Data Structures, OOP, Probability and Statistics, Linear Algebra,
                                                        Calculus Software Cycle, Agile, Applied Mathematics.
                                                    </p>
                                                )}
                                                <button className="seeMore" onClick={toggleEducation}>
                                                    {showMoreEducation ? "See Less" : "See More"}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="timeline-logo">
                                            <div className="logo">
                                                <a href="https://www.linkedin.com/school/lovely-professional-university/"><img src={lpu} alt="LPU Logo" /></a>
                                            </div>
                                            <div className="logo-info">
                                                <h3>Lovely Professional University</h3>
                                                <h4>Bachelor's degree, Computer Science</h4>
                                                <span className="date"><i className="fa-solid fa-calendar"></i> Aug 2015 - 2019</span>
                                                <p>GPA: 3.5</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-info">
                                                <p>Gained skills in Programming, Web Development, Android Development, Java,
                                                    C++, R, C, Software Engineering,</p>
                                                {showMoreEducation && (
                                                    <p>
                                                        SQL, NoSQL, Database, Data Structures, Algorithms (DSA), Flask,
                                                        Express, Node.js, Django, JUnit for Python, React.js, REST.
                                                    </p>
                                                )}
                                                <button className="seeMore" onClick={toggleEducation}>
                                                    {showMoreEducation ? "See Less" : "See More"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content content2 padd-15 text-color" id="exp">
                                    <h2>Experience</h2>
                                    <div className="timeline">
                                        <div className="timeline-logo">
                                            <div className="logo">
                                                <a href="https://www.linkedin.com/company/kc-2ai/"><img src={ai} alt="2AI Lab Logo" /></a>
                                            </div>
                                            <div className="logo-info">
                                                <h3>Graduate Research Assistant</h3>
                                                <h4>USD Applied Artificial Intelligence Research Lab (𝟚ᗩ𝕀)</h4>
                                                <span>Jan 2024 - Present </span>
                                                <p>Vermillion, South Dakota, United States</p>
                                            </div>
                                        </div>
                                        <div className="timeline-info">
                                            <div className="timeline-item">
                                                <span className="date"><i className="fa-solid fa-calendar"></i> August 2023 - Present</span>
                                                <h4>Graduate Research Assistant - 2AI Lab - <span>USD, Vermillion</span></h4>
                                                <h4>Working On - <span>Liquid Neural Networks</span></h4>
                                                <p>Working on <span>Liquid Neural Networks</span>, gained knowledge on multiple research papers (CTRNN, Neural ODE, NPCs)
                                                    to build models on LNN, also focusing on state-of-the-art architectures in LLMs,
                                                    NLP, Transformers, Generative AI, which is resulting in an 80% accuracy in model performance at least.</p>
                                                {showMoreExperience && (
                                                    <ul>
                                                        <li>
                                                            Involved in 2 Liquid Neural Networks projects for building,
                                                            training, and evaluating, handling a diverse range of projects
                                                            to be part of mathematical software building. Almost more than 60%
                                                            research has been completed already in last 6 months. Now I am in the
                                                            process of building the model for novel usage.
                                                        </li>
                                                        <li>
                                                            Guiding 10 undergraduate students and resolving their doubts in ML and AI subjects, 
                                                            while efficiently managing lab operations as a tech savvy.
                                                        </li>
                                                    </ul>
                                                )}
                                                <button className="seeMore" onClick={toggleExperience}>
                                                    {showMoreExperience ? "See Less" : "See More"}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="timeline-logo">
                                            <div className="logo">
                                                <a href="https://www.linkedin.com/company/byjus/"><img src={byjus} alt="BYJU's Logo" /></a>
                                            </div>
                                            <div className="logo-info">
                                                <h3>BYJU'S</h3>
                                                <h4>Full-time</h4>
                                                <p>Hyderabad, Telangana, India</p>
                                            </div>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-info">
                                                <div className="timeline-item">
                                                    <h4>Senior Manager Business Development</h4>
                                                    <span className="date"><i className="fa-solid fa-calendar"></i> Feb 2022 - July 2023</span>
                                                    <ol>
                                                        <li> Manage a team of BDMs & Business Development Associates.</li>
                                                        <li>Responsible for Driving Online Sales on a week-to-week basis target.</li>
                                                        <li>Led a top-performing team of managers and BDA more than 60 in
                                                            the count, ensuring they exceeded company expectations.</li>
                                                    </ol>
                                                    {showMoreExperience && (
                                                        <div className="moreContent">
                                                            <ul>
                                                                <li>
                                                                    Given the responsibilities of the K12 project of Akash and
                                                                    was responsible for more than 15 branches all over 2 states.
                                                                </li>
                                                                <li>
                                                                    Consistently gave 35% more in revenue than the company's average by applying 
                                                                    agile and generated more than 5 million dollars as a team in a year.
                                                                </li>
                                                                <li>
                                                                    Succeeded in making 15+ managers from my team, surpassing
                                                                    numbers contributed by other senior managers by 40%.
                                                                </li>
                                                                <li>
                                                                    Privileged to collaborate closely with organization
                                                                    presidents designing and implementing
                                                                    strategic initiatives as they considered me the top 5%.
                                                                </li>
                                                                <li>
                                                                    Promoted rapidly to Manager, resulting in a 50% increase in
                                                                    team productivity. Achieved 40% product revenue growth in three months by
                                                                    planning and launching four new key features.
                                                                </li>
                                                                <li>Gave training on CRM software usage, which gave a 25% increase in productivity.</li>
                                                                <li>
                                                                    I embrace feedback, foster an inclusive culture, and demonstrate
                                                                    adaptability, committing to shared success in my first professional job.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                    <button className="seeMore" onClick={toggleExperience}>
                                                        {showMoreExperience ? "See Less" : "See More"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="myresume.pdf" download="myresume.pdf" className="btn hire-me link-item">Download CV</a>
                        </div>
                    </section>
                </div>
            </div>
            </motion.div>
        </>
    );
}
