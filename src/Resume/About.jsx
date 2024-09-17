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
                                        <h3 className="hello">Hello, my name is <span className="name">Chenchaiah Mekalathuru</span></h3>
                                        <h3 className="my-profession">I'm a passionate <span className="typing">Data Scientist / Machine Learning Engineer.</span></h3>
                                        <p>
                                            {/* <img src={myImage} alt="my-image" className="image-in-paragraph" /> */}
                                            My journey through the tech industry is marked by a dedication to not just excel in one area,
                                            but to develop a versatile, T-shaped skill set. While I specialize in cutting-edge <b>AI</b> technologies like
                                            <b> Liquid Neural Networks</b> and transformative AI methodologies, my proficiency doesn't stop there.


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
                                A seasoned senior manager with a robust background overseeing <b> 60+ employees</b>, I
                                deliberately shifted from a high-paying and esteemed position to pursue my passion in the
                                <b> Computer Science Industry</b>. This decision, while challenging, reflects my unwavering commitment to personal and
                                professional growth. Eager to prove my capabilities and replicate past successes in a
                                new domain, I am actively seeking an opportunity to start from scratch and emerge as a hero in the
                                ever-evolving landscape of the computer science industry.
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
                            <h3>I'm Chenchaiah Mekalathuru <span>AI/ML Engineer</span></h3>
                            <div className="row about-nav">
                                <div className="text-color nav-link">
                                    <ul>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                        <span>Mathematics </span> : <strong>Algebra, Statistics</strong> </li>
                                        <li className="nav-item"><FcNext className="next-icon"/>
                                           <span>Strong Command : </span> <strong>DSA, Python, C++</strong> </li>
                                        <li className="nav-item"><FcNext className="next-icon" />
                                            <span>Phone:</span> <strong>+160 5585 4711</strong></li>
                                        <li className="nav-item"><FcNext className="next-icon" />
                                            <span>Location:</span> <strong> United States of America</strong></li>
                                    </ul>
                                </div>
                                <div className="text-color nav-link">
                                    <ul>
                                        <li className="nav-item"><FcNext className="next-icon" />
                                            <span>Specialist : </span> <strong>AI, NLP, DL, ML, Computer Vision</strong> </li>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                            <span>Degree:</span> <strong>Master(AI-Specilist)</strong></li>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                        <span>Website:</span> <strong>www.example.com</strong></li>
                                        <li className="nav-item"><FcNext  className="next-icon"/>
                                            <span>Email:</span> <span> <a href="mailto:.Mekalathuru.Chenchaiah.@gmail.com" target="_blank" rel="noopener noreferrer"> mekalathuru.chenchaiah@gmail.com </a></span></li>
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


