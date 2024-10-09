import React, { useState } from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import lpu from "../assets/logo/lpu.png";
import pcm from "../assets/logo/pcm.png";
import byjus from "../assets/logo/byjuslogo.png";
import sd from "../assets/logo/sd.png";

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
                                        <h3>I'm  Rajia Rani <span>Full-Stack Engineer.</span></h3>
                                        <p className="text-color">

                                            👋 Hello Everyone.I'm Rajia Rani. <br />

                                            I've been rocking the teaching world for 3 years as an Assistant Professor of Chemistry and helping students for over 5 years as a tutor in Chemistry (grades 10-12) and Mathematics (grades 6-10). <br />

                                            👀 Because I love learning, I'm now getting into Web Development to switch to Computer Science and Engineering. I'm good at C, C++, Java, Python, HTML, CSS, JavaScript, SQL, MongoDB, React JS, Git, and Github , Tailwind , Bootstrap, MVC(Model,View,Controller). Let's dive into the tech world together! 🚀💻 <br />

                                            🌱 Beyond the programming languages, I also possess a strong command of foundational mathematical concepts like Linear Algebra and Calculus, specifically tailored for the dynamic needs of Computer Science. I'm enthusiastic about embracing new challenges and acquiring diverse skills. Let's connect and explore the exciting intersection of my teaching experience and burgeoning tech skills! 🌐💻✨ <br />


                                        </p>
                                    </div>

                                    <div className="content padd-15 text-color" id="education">
                                        <h2>Summary</h2>
                                        <div className="timeline">
                                            <div className="timeline-logo">
                                                <div className="logo-info">
                                                    <h3>Rajia Rani</h3>
                                                    <h4>Master of Science- MSc, (Master in Chemistry)</h4>
                                                    <p>My journey through as an Assistant Professor is marked by a dedication to not just excel in one area
                                                        but to develop a my liearning skills not only in particular stream but also in different stream.
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <h3>Gained Skills</h3>
                                                <div className="timeline-info">
                                                    <p>
                                                        Gained skills in Full-Stack, HTML, CSS, JavaScript, MERN,  Databases.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <br /> <br />
                                        <h2>Education</h2>
                                        <div className="timeline">


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
                                                    <h4>Master's degree,  Science</h4>
                                                    <span className="date"><i className="fa-solid fa-calendar"></i> July 2017 - 2019</span>
                                                    <p>CGPA : 7.2</p>
                                                </div>
                                            </div>
                                            <div className="timeline-logo">
                                                <div className="logo">
                                                    <a href="https://pcmsdcollege.com/"><img src={pcm} alt="LPU Logo" /></a>
                                                </div>
                                                <div className="logo-info">
                                                    <h3>PCM S.D.College for Women</h3>
                                                    <h4>Bachelor's of Science</h4>
                                                    <span className="date"><i className="fa-solid fa-calendar"></i> July 2014 - 2017</span>
                                                    <p>CGPA : 7.7</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="content content2 padd-15 text-color" id="exp">
                                        <h2>Experience</h2>
                                        <div className="timeline">
                                            <div className="timeline-logo">
                                                <div className="logo">
                                                    <a href="https://danishmanda.atononline.com/"><img src={sd} alt="sdLogo" /></a>
                                                </div>
                                                <div className="logo-info">
                                                    <h3> St.Soldier College</h3>
                                                    <h4>Assistant Professor in Chemistry</h4>
                                                    <span>July 2019 - July 2022 </span>
                                                    <p>3 years Experience</p>
                                                </div>
                                            </div>
                                            <div className="timeline-info">
                                                <div className="timeline-item">
                                                    <span className="date"><i className="fa-solid fa-calendar"></i> My Roles and Responsiblities</span>
                                                    <h4>Assistant Professor in Chemistry -St.Soldier College</h4>

                                                    <div>
                                                        <ul>
                                                            <li>I have taught Organic Chemistry to undergraduate students, during which I gained valuable experience and learned many new things.</li>
                                                            <li> I also serve as the head of the Organic Chemistry lab, where I guide students through various organic chemistry experiments.</li>
                                                            <li>I deliver lectures for undergraduate and graduate courses in chemistry, including subjects such as organic, inorganic, analytical, and physical chemistry. This involves preparing syllabi, lesson plans, assignments, and exams.</li>
                                                            <li>I supervise examinations for undergraduate students, ensuring the assessment process is conducted smoothly and fairly.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <a
                                        href={`Resume.pdf`}
                                        download="Resume.pdf"
                                        className="btn link-item">
                                        Download CV
                                    </a>
                            </div>
                        </section>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
