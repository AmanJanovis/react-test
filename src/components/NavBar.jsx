import React from "react";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <>
            <header>
                <div className="main-menu">
                    <div className="page-width">
                        <nav>
                            <div className="menu-cover">
                                <div className="logo">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <ul className="menu">
                                    <li><Link to={`/`}>Home</Link></li>
                                    <li><Link to={`/gallery`}>Gallery</Link></li>
                                    <li><Link to={`/about`}>About</Link></li>
                                    <li><Link to={`/contact-us`}>ContactUs</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}