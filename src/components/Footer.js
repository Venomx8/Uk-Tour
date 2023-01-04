import "./FooterStyles.css";
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>248 House No.</p>
                        <p>Dehradun, UK.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +91 8968-03-4982
                </h4>
                </div>

                <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                ranaanku982@gmail.com
                </h4>
                </div>
            </div>
            <div className="right">
                <h4>About This Company</h4>
                <p>This is me Vivek.CEO & Founder of UkTour. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer