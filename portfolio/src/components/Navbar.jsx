import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const fixedNav = ()=>{
            if(window !== undefined){
                if(window.scrollY > 50){
                    setScrolled(true);
                }else{
                    setScrolled(false);
                }
            }
        };

        window.addEventListener("scroll",fixedNav);

        return ()=> window.removeEventListener("scroll",fixedNav);
    },[]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="left">
                <h1>Shubham</h1>
            </div>
            <div className="right">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <ul className="list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;