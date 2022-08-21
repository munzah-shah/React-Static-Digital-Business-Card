import React from "react";
import picture from "../images/picture.jpg";
import mail from "../images/Mail.png";
import linkedin from "../images/linkedin.png";

export default function Info() {
    return (
        <div className="info">
            <div className="info--picture">
                <img src={picture}></img>
            </div>
            <div className="info--intro">
                <h1 className="info--intro_name">Munzah Shah</h1>
                <h2 className="info--intro_title">Computer Engineer</h2>
                <h3 className="info--intro_github"><a href="https://github.com/munzah-shah" target="_blank">check my github</a></h3>
            </div>
            <div className="info--buttons">
                <a href="mailto:munzah.shah00@gmail.com" className="info--buttons_btn">
                    <img src={mail}></img>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/munzah-shah/" target="_blank" className="info--buttons_btn">
                    <img src={linkedin}></img>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}