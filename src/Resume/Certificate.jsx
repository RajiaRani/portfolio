import React, { useState } from "react";
import "./Certificate.css";
import { motion } from "framer-motion";
import html1 from "../assets/certificates/html1.png";
import html2 from "../assets/certificates/html2.png";
import react from "../assets/certificates/react.png";
import buildInterface from "../assets/certificates/buildingInterface.png";
import reactfullstack from "../assets/certificates/reactfullstack.png";
import css from "../assets/certificates/css.png";
import github from "../assets/certificates/github.png";
import algo from "../assets/certificates/algo.png";
import ai from "../assets/certificates/ai-part1.png";
import toolkit from "../assets/certificates/algo-toolkit.png";
import mathPrep from "../assets/certificates/mathPrep.png";
import selection from "../assets/certificates/selection.png";
import el from "../assets/certificates/el.png";
import re from "../assets/certificates/rescsion.png";
import ve from "../assets/certificates/vector.png";
import handOn from "../assets/certificates/handOn.png";

export default function Certificate() {
    const [showAll, setShowAll] = useState(false);

    const certificates = [
        { src: html1, alt: "Introduction to HTML5", link: "https://www.coursera.org/account/accomplishments/verify/WTYMZT8DKC9M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
        { src: html2, alt: "Introduction to HTML", link: "https://www.coursera.org/account/accomplishments/verify/JFTVDAMY4P94?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project" },
        { src: css, alt: "CSS Basics", link: "https://courses.edx.org/certificates/71ba7af918ff418a831600cbfab4bc85" },
        { src: react, alt: "React Basics", link: "https://www.coursera.org/account/accomplishments/verify/P6E569X9FNAM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
        { src: buildInterface, alt: "React.js: Building an Interface", link: "https://www.linkedin.com/learning/certificates/0e89add5ba4781578b8650cca7e61062a6ec853a973d7d290f11b8fb4c455b4a" },
        { src: reactfullstack, alt: "Preview React: Creating and Hosting a Full-Stack Site", link: "https://www.linkedin.com/learning/certificates/3d631a4d205e794ae56afb4558488157251da9085661903a5825f1de038624c6" },
        { src: algo, alt: "Algorithms on Graphs", link: "https://www.coursera.org/account/accomplishments/verify/49GR62XB6MCE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
        { src: github, alt: "Getting Started with Git and GitHub", link: "https://www.coursera.org/account/accomplishments/verify/7Q7MUK54BDE5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
        { src: ai, alt: "Math for AI beginner part 1 Linear Algebra", link: "https://www.coursera.org/account/accomplishments/verify/DEP2TLR8XW6Q?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
        { src: toolkit, alt: "Algorithmic Toolbox", link: "https://www.coursera.org/learn/algorithmic-toolbox/home/module/1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta" },
        { src: mathPrep, alt: "Math Prep: College & Work Ready", link: "https://www.coursera.org/learn/tsi-math-prep/home/module/1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta" },
        { src: handOn, alt: "Programming in C++: A Hands-on Introduction", link: "https://coursera.org/share/3003c2b873e41f04514530ed958dcc7c" },
        { src: selection, alt: "C++ Basics: Selection and Iteration", link: "https://coursera.org/share/1a2de014aac9cc4ddcf954e944691cef" },
        { src:ve , alt: "C++ Basic Structures: Vectors, Pointers, Strings, and Files", link: "https://coursera.org/share/c306f8233ad1a3ab6c9633d76aa444bc" },
        { src:re , alt: "C++ Object Basics: Functions, Recursion, and Objects", link: "https://coursera.org/share/41eae9fdd32a0f1ba26fb752bc205000" },
        { src: el, alt: "Object-Oriented C++: Inheritance and Encapsulation", link: "https://coursera.org/share/fabec83cb18d6b2d5f706e07e02ee995" }
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
