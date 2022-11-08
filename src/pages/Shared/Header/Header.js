import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/logo2.jpg'

const Header = () => {
    return (
        <div className=" bg-black position sticky top-0 z-10">
            <div className="m-auto container navbar py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Item 1</a></li>
                            <li tabIndex={0}>
                                <a href='/' className="justify-between">
                                    Parent
                                </a>
                            </li>
                            <li><a href='/'>Item 3</a></li>
                        </ul>
                    </div>
                    <Link href='/' className=" normal-case text-xl"><img src={Logo} alt="" /></Link>
                    <h3 className='text-white text-2xl'>Optic Thirst</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        <li><a className='text-white' href='/'>Home</a></li>

                        <li><a className='text-white' href='/servicecatagory'>service</a></li>
                        <li >
                            <a className='text-white' href='/blog'>
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;