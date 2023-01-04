import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import pc from "../assets/pic.jpg";
import pc2 from "../assets/pic2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Im a Full Stack Developer.I create responsive and secure websites for my clients.
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </p>
        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={pc} alt="" className="img"/>
            </div>

            <div className="img-stack bottom">
                <img src="https://images.unsplash.com/photo-1672256108113-bbb547b2bd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="img"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent;