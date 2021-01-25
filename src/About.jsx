import React from 'react'
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
