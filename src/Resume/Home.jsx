import "../Resume/Home.css";
import "../App.css";
import { motion } from "framer-motion";
import myImage from "../assets/PortfolioImage/MyImage.jpeg";
import ai from "../assets/logo/2ai-lab.png";
import tick from "../assets/logo/check-mark.png";
import { MdDescription } from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";
import lnnImage from "../assets/Project/lnn.png";

export default function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}  // Page will start from the left
                animate={{ opacity: 1, y: 0 }}     // Page will come to its position
                exit={{ opacity: 0, y: -100 }}      // Page will exit towards the right
                transition={{ duration: 1 }}     // Animation duration (0.5 seconds)
            >

                <div className="main-content">
                    <section className=" section .padd-15 " id="about">
                        <div className="container research home-info">
                            <h1><MdDescription /> Research Field</h1>
                            <a href="https://github.com/iamchenchu/LLNs-for-Early-Breast-Cancer-Detection">Early Breast Cancer Detection with Liquid Neural Networks (LNN)</a>
                            <p>This repository contains the implementation of a early breast cancer detection model using Liquid Neural Networks (LNNs) with Neural Circuit Policies (NCPs). The model processes ultrasound breast images from the BreastMNIST dataset to classify them as benign or malignant. This model objectives is not just detecting the cancer classification but also doing it with great computational efficiancy with reduced parameter count by leveraging the concept of LLNs.
                                <a href="https://github.com/iamchenchu/LLNs-for-Early-Breast-Cancer-Detection"><img src={lnnImage} alt="lnn-image" className="lnn-image image-in-paragraph " /></a>
                            </p>
                            <a className="btn link-item" href="https://github.com/iamchenchu/LLNs-for-Early-Breast-Cancer-Detection">See Research</a>
                        </div>

                        <div className="container role">
                            <h1><BsAwardFill /> My Role and Position</h1>
                            <h2>Graduate	Research Assistant	- 2AI lab</h2>
                            <a href="https://www.linkedin.com/company/kc-2ai/">USD,Vermillion(Aug 2023 to Present)<img src={ai} alt=" 2ai-lab" style={{ width: "2rem", height: "2rem", border: "1px solid #000", borderRadius: "50%" }} /></a>
                            <p><img src={tick} alt="tick-image" className="tick" /> Working	on	Liquid	Neural	Networks, gained knowledge	on	multiple	research	papers (CTRNN,	Neural	ODE,	NPCs) to	build	models	on	LNN,	also focusing	on
                                state-of-the-art architectures	in	LLM’s,	NLP,	Transformers,	Generative	AI	which	is	resulting	in	an 80%	accuracy in	model	performance	at	least. </p>
                            <p><img src={tick} alt="tick-image" className="tick" /> Involved	in	2 Liquid	Neural	Networks	projects	for	building,	training,	and	evaluating,	handling	a	diverse	range	of	projects	to	be	part	of	mathematical	software
                                building. Almost	more	than	60%	research	has	been	completed	already	in	last	6months.	Now	I	am	in	the	process	of	building	the	model	for	novel usage.</p>
                            <p><img src={tick} alt="tick-image" className="tick" />Guiding	10	Under	Graduation	students	and	resolving	their	doubts	in	ML	and	AI	subjects,	while	efficiently	managing	lab	operations	as	a	tech	savvy.</p>
                        </div>
                    </section>
                </div>
            </motion.div>
        </>
    );
}
