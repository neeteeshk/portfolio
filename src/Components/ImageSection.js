import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Neeteesh Kumar</span></h4>
                <p className="about-text">
                I'm a software engineer, open to every opportunity and learning that comes my way. Currently working at Amazon in delivering impactful projects and ideas
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Neeteesh Kumar</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English, Hindi</p>
                        <p>: Rajauli, Nawada, Bihar 805125</p>
                        <p>: India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
