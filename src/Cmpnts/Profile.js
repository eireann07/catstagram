import React from 'react';
import Navbar from './Navbar' 
const Profile = () => {
    return(
        <>
        <Navbar/>
        <img class="profile" src="./Images/Erin.jpeg" alt = "developer"/>
        <h1>Hi! I'm Erin!</h1>
        <h4>I'm a junior full-stack developer who's recently graduated from The London App Brewery's Complete Web Development Bootcamp.
            I'm proficient in HTML, CSS, JavaScript, SQL, Python, and the MERN stack and I'm interested in UX/UI elements as well! 
            I'm a proud member of Girl Develop It, an organization that helps women build the skills necessary to succeed in tech. 
            I believe passionately in helping women and girls in STEM. 
            Prior to my career in web dev, I was a public school educator -- high school English -- and team lead.
            In addition to web development, I love to read, bake, run, paint, and practice yoga. 
        </h4>
        </>
        )
}

export default Profile; 