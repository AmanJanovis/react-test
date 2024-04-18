import React, { useState, useEffect } from "react";
import logo from '../logo.svg';
export default function NavBar() {
    return (
        <>
            <header>
                <div className="main-menu">
                    <div className="page-width">
                        <nav>
                            <div className="menu-cover">
                                <div className="logo">
                                    <img src={logo} />
                                </div>
                                <ul className="menu">
                                    <li>Home</li>
                                    <li>Gallery</li>
                                    <li>About</li>
                                    <li>ContactUs</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}