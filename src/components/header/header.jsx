import React from 'react'
import "../header/header.css"
import Typed from "react-typed";
const Header = () => {
    return (
     <div className="header-wraper">
     <div className="main-info">
     <h1>Machine Learning and websites promotions</h1>
     <Typed
     className="typed-text"
     strings={["Data science","Machine learning","Image Processing"]}
     typeSpeed={40}
     backSpeed={60}
     loop
     />
     <a href="#" className="btn-main-offer">Contact Me</a>
     
     </div>
     </div>
    )
}

export default Header
