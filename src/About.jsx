import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/img3.svg";
import Common from "./Common";

function About() {
    return (
        <div>
            <Common 
            name="Welcome to About Page" 
            imgsrc={web} 
            visit="/contact" 
            btname="Contact Now"
            />
        </div>
    )
}

export default About
