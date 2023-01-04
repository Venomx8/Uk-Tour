import "./HomeImgStyles.css";
import React from 'react'
import IntroImg from "../assets/1.jpg";
import { Link } from "react-router-dom";
const HomeImg = () => {
  return (
    <div className="home">
        <div className="mask">
            <img className="into-img" src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80" alt="" />
        </div>
        <div className="content">
            <p>Hey! My Name Is Vivek</p>
            <h1>Full Stack Developer.</h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>

    </div>
  )
}

export default HomeImg