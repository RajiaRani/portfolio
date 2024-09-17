import React, { useState } from "react";
import "./Certificate.css";
import { motion } from "framer-motion";
import ai from "../assets/certificates/Ai.png";
import dl from "../assets/certificates/DL.png";
import ml from "../assets/certificates/ML.png";
import ml2 from "../assets/certificates/ML2.png";
import py from "../assets/certificates/python.png";
import javaandroid from "../assets/certificates/javaforAndroid.png";
import py2 from "../assets/certificates/python2.png";
import learnjava from "../assets/certificates/learnJava.png";
import dsa from "../assets/certificates/dsa.png";
import git from "../assets/certificates/Git.png";
import linux from "../assets/certificates/linux.png";
import coding from "../assets/certificates/coding.png";
import projectmanagement from "../assets/certificates/projectmangement.png";

export default function Certificate() {
    const [showAll, setShowAll] = useState(false);

    const certificates = [
        { src: ai, alt: "AI Applications with Python and Flask", link: "https://www.coursera.org/account/accomplishments/certificate/9UDX3YD94SU2" },
        { src: dl, alt: "Unsupervised Learning, Recommenders, Reinforcement Learning", link: "https://www.coursera.org/account/accomplishments/certificate/A87XC363QS7U" },
        { src: ml, alt: "Machine Learning Specialization", link: "https://www.coursera.org/account/accomplishments/specialization/certificate/86ZYQ7F5TTN3" },
        { src: ml2, alt: "Supervised Machine Learning: Regression and Classification", link: "https://www.coursera.org/account/accomplishments/certificate/Q89RDQEHJJ3Z" },
        { src: py, alt: "Crash Course on Python", link: "https://www.coursera.org/account/accomplishments/verify/5SFB8EW3ADMC" },
        { src: javaandroid, alt: "Java for Android", link: "https://www.coursera.org/account/accomplishments/verify/3QQ5DPTPU8PW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
        { src: py2, alt: "Python for Data Science, AI & Development", link: "https://www.coursera.org/account/accomplishments/certificate/8GJVAS7UN97N" },
        { src: learnjava, alt: "Learn Java", link: "https://www.codechef.com/certificates/public/f9ca576" },
        { src: dsa, alt: "Data Structures", link: "https://www.coursera.org/account/accomplishments/certificate/58TU5BBSF2ZT" },
        { src: git, alt: "Getting Started with Git and GitHub", link: "https://www.coursera.org/account/accomplishments/certificate/3ZVCCRS7HX3T" },
        { src: linux, alt: "Linux Fundamentals", link: "https://www.coursera.org/account/accomplishments/verify/TED5CRLEVZHQ" },
        { src: coding, alt: "Supervised Machine Learning: Regression and Classification", link: "https://www.coursera.org/account/accomplishments/certificate/Q89RDQEHJJ3Z" },
        { src: projectmanagement, alt: "Foundations of Project Management", link: "https://www.coursera.org/account/accomplishments/verify/JJ5SK6838ZMK" }
    ];

    // Calculate which certificates to show based on state
    const visibleCertificates = showAll ? certificates : certificates.slice(0, 9);

    return (
        <>
        <motion.div
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        >
        <div className="main-container">
                <div className="main-content">
                    <section className="certificates section padd-15" id="certificate">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Certificates</h2>
                                </div>
                            </div>
                            <div className="row image-container">
                                {visibleCertificates.map((cert, index) => (
                                    <div className="certificate-img" key={index}>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                            <img src={cert.src} alt={cert.alt} />
                                            <p>{cert.alt}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <button className="btn see-more" onClick={() => setShowAll(!showAll)}>
                                {showAll ? "See Less" : "See More"}
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
            
        </>
    );
}
