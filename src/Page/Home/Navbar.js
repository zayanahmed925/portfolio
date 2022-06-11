import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return (
        <div>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/' className='font-bold'><p >Home</p></Link></li>
                            <li> <Link to='/blog' className='font-bold'><p className='py-8'>Blog</p></Link></li>
                            <li><Link to='/about' className='font-bold'><p >About Me</p></Link></li>



                        </ul>
                    </div>
                    {/* <a class="font-sans container pl-4 normal-case text-xl">Zehadul Islam</a> */}
                </div>
                <div class="navbar-end hidden lg:flex container pr-12">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/' className=''>Home</Link></li>
                        <li><Link to='/blog' className='px-8'>Blog</Link></li>
                        <li><Link to='/about' className='pr-8'>About Me</Link></li>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;