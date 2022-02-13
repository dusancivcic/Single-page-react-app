
import '../../App.css';
import {  Link, NavLink } from "react-router-dom"
import Main from './Main'
import AboutPage from './AboutPage';
import React, { useState, useEffect } from "react";

function NavBar() {
    const [scroll, setScroll] = useState(false)
    const [scroll2, setScroll2] = useState(false)
    const hamburger = document.querySelector('.hamburger')
    const hamburgerPopout = document.querySelector('.hamburger-popout')

    const funkciju = () => {
      hamburgerPopout.classList.toggle('active')
    }

  
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll2(window.scrollY > 20);
          console.log('aaa')
        });
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
          console.log('aaa')
        })
    }, [])

  return (
   <>
     <section className={`navbar-section ${scroll ? 'active' : ''}`}>
        <div className='navbar-container'>
            <h3>LOGO</h3>
            <div className='nav-links'>
                <ul>
                    <li><NavLink activeClassName='activenav' to="/" exact>Home</NavLink></li>
                    <li><NavLink activeClassName='activenav' to="about" >About</NavLink></li>
                    <li><NavLink activeClassName='activenav' to="blog">Blog</NavLink></li>
                     <li><a href="#contact">Contact</a></li> 
                </ul>
            </div>
        </div>
    </section>

    
    <section className={`mobile-nav-section ${scroll2 ? 'active' : ''}`}>
      <div className='mobile-nav-container'>
        <h3>LOGO</h3>
        <div className='hamburger' onClick={funkciju}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='hamburger-popout'>
        <ul>
            <li><NavLink activeClassName='activenav' to="/" exact>Home</NavLink></li>
            <li><NavLink activeClassName='activenav' to="about" >About</NavLink></li>
            <li><NavLink activeClassName='activenav' to="blog">Blog</NavLink></li>
            <li><a href="#contact">Contact</a></li> 
        </ul>
      </div>
    </section>
   </>
    
  );
}

export default NavBar;
