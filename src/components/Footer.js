import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

export default function Footer() {
    return (
        <div className="footer">
            <span className="footer--icon">
                <a href="#" target="_blank">
                    <img src={twitter}></img>
                </a>
            </span>
            <span className="footer--icon">
                <a href="#" target="_blank">
                    <img src={facebook}></img>
                </a>
            </span>
            <span className="footer--icon">
                <a href="#" target="_blank">
                    <img src={instagram}></img>
                </a>
            </span>
            <span className="footer--icon">
                <a href="#" target="_blank">
                    <img src={github}></img>
                </a>
            </span>
        </div>
    )
}