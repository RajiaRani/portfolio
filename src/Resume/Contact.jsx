import React, { useState } from "react";
import "./Contact.css";
import "../App.css";
import { motion } from "framer-motion";

export default function Contact() {
    // State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        // You can add form submission logic here (e.g., send an email)
        console.log("Form submitted:", { name, email, subject, message });
    };

    return (
        <>
        <motion.div
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:-100}}
          transition={{duration:0.5}}
          >
              <div className="main-container">
                <div className="main-content">
                    <section className="contact section" id="contact">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Contact Me</h2>
                                </div>
                            </div>
                            <h3 className="contact-title padd-15">Have you any questions?</h3>
                            <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
                            <div className="row">
                                {/* Contact Info item start */}
                                <div className="contact-info-item padd-15">
                                    <div className="icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <h4>Call Me On</h4>
                                    <p>+91 83607-19956</p>
                                </div>
                                {/* Contact Info item end */}
                                {/* Contact Info item start */}
                                <div className="contact-info-item padd-15">
                                    <div className="icon">
                                        <i className="fa fa-map-marker-alt"></i>
                                    </div>
                                    <h4>Address:</h4>
                                    <p>India</p>
                                </div>
                                {/* Contact Info item end */}
                                {/* Contact Info item start */}
                                <div className="contact-info-item padd-15">
                                    <div className="icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <h4>Email:</h4>
                                    <p><a href="mailto:rajiarani.syal.@gmail.com">rajiarani.syal@gmail.com</a></p>
                                </div>
                                <div className="contact-info-item padd-15">
                                    <div className="icon">
                                        <i className="fa fa-globe-europe"></i>
                                    </div>
                                    <h4>Portfolio:</h4>
                                    <p><a href="https://iamchenchu.github.io/Portfolio">My portfolio link</a></p>
                                </div>
                            </div>
                            <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                            <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                            <div className="row">
                                <div className="contact-form padd-15">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="form-item col-6 padd-15">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-item col-6 padd-15">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-item col-12 padd-15">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        value={subject}
                                                        onChange={(e) => setSubject(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-item col-12 padd-15">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Message"
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button type="submit" className="btn">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
          
        </>
    );
}
