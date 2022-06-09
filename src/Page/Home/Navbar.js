import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <div>
            <header className='header'>
                <div className='container d_flex'>
                    <div className=''>
                        <img src='' alt='' />
                    </div>

                    <div className='navlink container'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a className='fw-bolder' href='#home'>home</a>
                            </li>
                            <li>
                                <a className='fw-bolder' href='#portfolio'>portfolio</a>
                            </li>

                            <li>
                                <a className='fw-bolder' href='#contact'>contact</a>
                            </li>
                            {/* <li>
                                <button className='home-btn'>BUY NOW</button>
                            </li> */}
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;