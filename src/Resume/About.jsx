import React, { useState } from "react";
import Skills from "./Skills";
import "./About.css";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FcNext } from "react-icons/fc";

export default function About(){

    return (
        <>
        <motion.div
         initial={{opacity:0, y:100}}
         animate={{opacity:1, y:0}}
         exit={{opacity:0, y:-100}}
         transition={{duration:0.5}}
        >
            <div className="main-content">
            {/* ======= About Section Start ====== */}
            <section className="about section " id="home">
            <div className="container">
                                <div className="row">
                                    <div className="home-info">
                                        <h3 className="hello">Hello, my name is <span className="name">Rajia Rani</span></h3>
                                        <h3 className="my-profession">I'm a passionate <span className="typing">Full Stack, Web Developer.</span></h3>
                                        <p>
                                            {/* <img src={myImage} alt="my-image" className="image-in-paragraph" /> */}
                                            I've been rocking the teaching world for 3 years as an Assistant Professor of Chemistry and helping students for over 5 years as a tutor in Chemistry (grades 10-12) and Mathematics (grades 6-10).
                                            Because I love learning, I'm now getting into Web Development to switch to Computer Science and Engineering. I'm good at C, C++, Java, Python, HTML, CSS, JavaScript, SQL, MongoDB, React JS, Git, and Github , Tailwind , Bootstrap, MVC(Model,View,Controller). Let's dive into the tech world together! 🚀💻


                                        </p>
                                    </div>

                                    <Link to="/contact" className="btn link-item">
                                        Contact me
                                    </Link>
                                    &nbsp;    &nbsp;
                                    <a
                                        href={`/Resume.pdf`}
                                        download="myresume.pdf"
                                        className="btn link-item">
                                        Download CV
                                    </a>


                                </div>
                            </div>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>About Me</h2>
                        </div>
                        <div className="about-intro">
                            <p>
                            Hello Everyone.I'm Rajia Rani.

I've been rocking the teaching world for 3 years as an Assistant Professor of Chemistry and helping students for over 5 years as a tutor in Chemistry (grades 10-12) and Mathematics (grades 6-10). <br />
👀 Because I love learning, I'm now getting into Web Development to switch to Computer Science and Engineering. I'm good at C, C++, Java, Python, HTML, CSS, JavaScript, SQL, MongoDB, React JS, Git, and Github , Tailwind , Bootstrap, MVC(Model,View,Controller). Let's dive into the tech world together! 🚀💻 <br />

🌱 Beyond the programming languages, I also possess a strong command of foundational mathematical concepts like Linear Algebra and Calculus, specifically tailored for the dynamic needs of Computer Science. I'm enthusiastic about embracing new challenges and acquiring diverse skills. Let's connect and explore the exciting intersection of my teaching experience and burgeoning tech skills! 🌐💻✨
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="about-img">
                            {/* <div className="img-box">
                                <img src="Images/image.png" alt="about-img" />
                            </div> */}
                        </div>
                        <div className="about-heading">
                            <h3>I'm Rajia Rani<span> Full- Stack Engineer</span></h3>
                            <div className="row about-nav">
                                <div className="text-color nav-link">
                                    <ul>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                        <span>Mathematics </span> : <strong>Linear Algebra , Calculus </strong> </li>
                                        <li className="nav-item"><FcNext className="next-icon"/>
                                           <span>Strong Command : </span> <strong>DSA, C++, MERN</strong> </li>
                                        <li className="nav-item"><FcNext className="next-icon" />
                                            <span>Phone:</span> <strong>+91 83607-19956</strong></li>
                                        <li className="nav-item"><FcNext className="next-icon" />
                                            <span>Location:</span> <strong>Hyderbad, India</strong></li>
                                    </ul>
                                </div>
                                <div className="text-color nav-link">
                                    <ul>
                                        <li className="nav-item"><FcNext className="next-icon" />
                                            <span>Specialist : </span> <strong>Chemistry, Matematics, Full-Stack</strong> </li>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                            <span>Degree:</span> <strong>Master(Chemistry)</strong></li>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                        <span>Website:</span> <strong>www.example.com</strong></li>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                            <span>Email:</span> <span> <a href="mailto:.rajiarani.syal.@gmail.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"22px"}}> rajiarani.syal@gmail.com </a></span></li>
                                    </ul>
                                </div>
                            </div>
                          
                        </div>

                       
                    </div>
                    <Skills/>
                    <a className="btn link-item">More About Me</a>  &nbsp;    &nbsp;
                    <a className="btn link-item">Contact Me</a>
                </div>
            </section>
            {/* ======= About Section End ====== */}
        </div>

        </motion.div>
        </>
        
    );
};


