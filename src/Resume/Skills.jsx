import React, { useState } from "react";
import "./Skills.css";
import "../App.css";
import python from "../assets/png-512/Python.png";
import java from "../assets/png-512/Java.png";
import Cplus from "../assets/png-512/C++-(CPlusPlus).png";
import C from "../assets/png-512/C.png";
import mysql from "../assets/png-512/MySQL.png";
import kotlin from "../assets/png-512/Kotlin.png";
import html from "../assets/png-512/HTML5.png";
import css from "../assets/png-512/CSS3.png";
import js from "../assets/png-512/JavaScript.png";
import cuda from "../assets/png-512/cuda.png";
import julia from "../assets/png-512/Julia.png";
import R from "../assets/png-512/R-.png";

// Libraries
import tensorflow from "../assets/png-512/TensorFlow.png";
import pytorch from "../assets/png-512/PyTorch.png";
import scikit from "../assets/png-512/scikit-learn.png";
import pandas from "../assets/png-512/Pandas.png";
import numpy from "../assets/png-512/NumPy.png";
import matplotlib from "../assets/png-512/Matplotlib.png";
import keras from "../assets/png-512/Keras.png";
import seaborn from "../assets/png-512/seaborn.png";
import scipy from "../assets/png-512/scipy.png";
import tableau from "../assets/png-512/tableau.png";
import opencv from "../assets/png-512/OpenCV.png";

// Technologies
import mongodb from "../assets/png-512/MongoDB.png";
import android from "../assets/png-512/Android.png";
import docker from "../assets/png-512/Docker.png";
import git from "../assets/png-512/Git.png";
import kubernetes from "../assets/png-512/Kubernetes.png";
import cicd from "../assets/png-512/ci.png";
import aws from "../assets/png-512/AWS.png";
import hadoop from "../assets/png-512/Apache-Hadoop.png";
import azure from "../assets/png-512/Azure.png";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("lang");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="main-content">
                <section className="skills-container skills" id="skill">
                    <h1>Skills :</h1>
                    <p className="text-color about-intro">
                        Beyond the world of algorithms and data models, I'm also a skilled software developer with hands-on experience in web and app development,
                        fluent in a suite of programming languages and technologies including Python, Java, C++, SQL, Kotlin, and more.
                    </p>
                    <div className="about-tabs">
                        <button
                            type="button"
                            className={`tab-item ${activeTab === 'lang' ? 'active' : ''}`}
                            onMouseEnter={() => handleTabClick('lang')}
                        >
                            <i className="fa-solid fa-keyboard"></i> Language
                        </button>
                        <button
                            type="button"
                            className={`tab-item ${activeTab === 'lib' ? 'active' : ''}`}
                            onMouseEnter={() => handleTabClick('lib')}
                        >
                            <i className="fa-regular fa-bookmark"></i> Libraries
                        </button>
                        <button
                            type="button"
                            className={`tab-item ${activeTab === 'tech' ? 'active' : ''}`}
                            onMouseEnter={() => handleTabClick('tech')}
                        >
                            <i className="fa-solid fa-code"></i> Technologies
                        </button>
                    </div>

                    {/* Skill Tabs Content */}
                    <div className={`skills tab-content ${activeTab === 'lang' ? 'active' : ''}`} id="lang">
                        <div className="tech-stack">
                            <div className="item"><img src={python} alt="Python" />Python</div>
                            <div className="item"><img src={java} alt="Java" />Java</div>
                            <div className="item"><img src={Cplus} alt="C++" />C++</div>
                            <div className="item"><img src={C} alt="C" />C</div>
                            <div className="item"><img src={mysql} alt="SQL" />SQL</div>
                            <div className="item"><img src={kotlin} alt="Kotlin" />Kotlin</div>
                            <div className="item"><img src={html} alt="HTML" />HTML</div>
                            <div className="item"><img src={css} alt="CSS" />CSS</div>
                            <div className="item"><img src={js} alt="JavaScript" />JavaScript</div>
                            <div className="item"><img src={cuda} alt="Cuda" />Cuda</div>
                            <div className="item"><img src={julia} alt="Julia" />Julia</div>
                            <div className="item"><img src={R} alt="R" />R</div>
                        </div>
                    </div>

                    <div className={`skills tab-content ${activeTab === 'lib' ? 'active' : ''}`} id="lib">
                        <div className="tech-stack tech-stack-second">
                            <div className="item"><img src={tensorflow} alt="TensorFlow" />TensorFlow</div>
                            <div className="item"><img src={pytorch} alt="PyTorch" />PyTorch</div>
                            <div className="item"><img src={scikit} alt="Scikit-learn" />Scikit-learn</div>
                            <div className="item"><img src={pandas} alt="Pandas" />Pandas</div>
                            <div className="item"><img src={numpy} alt="NumPy" />NumPy</div>
                            <div className="item"><img src={matplotlib} alt="Matplotlib" />Matplotlib</div>
                            <div className="item"><img src={keras} alt="Keras" />Keras</div>
                            <div className="item"><img src={seaborn} alt="Seaborn" />Seaborn</div>
                            <div className="item"><img src={scipy} alt="SciPy" />SciPy</div>
                            <div className="item"><img src={tableau} alt="Tableau" />Tableau</div>
                            <div className="item"><img src={opencv} alt="OpenCV" />OpenCV</div>
                        </div>
                    </div>

                    <div className={`skills tab-content ${activeTab === 'tech' ? 'active' : ''}`} id="tech">
                        <div className="tech-stack">
                            <div className="item"><img src={mysql} alt="MySQL" />MySQL</div>
                            <div className="item"><img src={mongodb} alt="MongoDB" />MongoDB</div>
                            <div className="item"><img src={android} alt="Android" />Android</div>
                            <div className="item"><img src={docker} alt="Docker" />Docker</div>
                            <div className="item"><img src={git} alt="Git" />Git</div>
                            <div className="item"><img src={kubernetes} alt="Kubernetes" />Kubernetes</div>
                            <div className="item"><img src={cicd} alt="CI/CD" />CI/CD</div>
                            <div className="item"><img src={aws} alt="AWS" />AWS</div>
                            <div className="item"><img src={hadoop} alt="Hadoop" />Hadoop</div>
                            <div className="item"><img src={azure} alt="Azure" />Azure</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
