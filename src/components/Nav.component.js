import React from 'react'
import { Link } from "react-router-dom";
import './assests/nav.css';
import { FaBars } from 'react-icons/fa';
import LogoCybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/Logo_cybdeer.svg';
export default function nav() {
    return (
        <>
            <nav>
                <div className="container-fluid nav__main-contain p-0">
                    <a href="/">
                        <img
                            src={LogoCybdeer}
                            className="cybdeer-logo"
                            alt="cybdeer_logo"
                        />
                    </a>
                    <div className="nav__menus">
                        <ul className="nav_menu_lists d-flex align-items-center justify-content-center">
                            <li><Link to ="/" className="text-center">Home</Link></li>
                            <li><Link to="/AboutUs" className="text-center">About Us</Link></li>
                            <li><Link to="/ContactUs" className="text-center">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="nav-toggle"><FaBars /></div>
                </div>
            </nav>
        </>
    )
}

