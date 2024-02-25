import React from 'react'
import './assests/about.css';
import Okr from './Okr';
import HomeCompanies from './HomeCompany';
import aboutUs_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/aboutus.svg';
import value_vision from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/vision_value.png';
import people_standing_office_holding_hands_together from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/people-standing-office-holding-hands-together.jpg";
import business_team_developing_project from "./assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/business-team-is-developing-new-project-sitting-desk-modern-office-photo-has-empty-space-your-text.jpg";
import { FaCheck } from 'react-icons/fa';
export default function AboutUs() {
    return (
        <>
            <section className='section-aboutus py-5 mt-5'>
                <div className='container'>
                    <div className='row justify-content-evenly align-items-center'>
                        <div className='col-md-5'>
                            <img src={aboutUs_cybdeer} className='w-100' alt='about-us' />
                        </div>
                        <div className='col-md-5'>
                            <h2 className='text-start heading-aboutus pb-3'>A Few Words About Us</h2>
                            <p className='para-aboutus text-start'>
                                Cybdeer Network Private limited is a leading provider of innovative technology solutions for businesses of all sizes. Since our founding in 2018, we have been dedicated to helping our clients stay ahead of the curve by providing cutting-edge solutions that increase efficiency, reduce costs, and enhance the overall customer experience.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='companies-section py-5'>
                <HomeCompanies />
            </section>
            {/* vision value */}
            <section className='section-value-vision py-5 mt-5'>
                <div className='container'>
                    <div className='row justify-content-evenly align-items-center'>
                        <div className='col-md-5'>
                            <p className='text-start heading-aboutus pb-3'>Customer Satisfaction Guaranteed: Why Cybdeer Netwrok PVT LTD Is the Top Choice for You.</p>
                            <p className='para-aboutus text-start text-light'>
                                With insights from customers, industry experts, and company representatives, this review provides a comprehensive look at Cybdeer Network PVT LTD innovative solutions for small businesses. Whether you're a small business owner looking to stay ahead of the curve or simply interested in the latest trends in technology and sustainability, this review has something for everyone.
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <img src={value_vision} className='w-100' alt='about-us' />
                        </div>
                    </div>
                </div>
            </section>
            {/* The Objectives and Key Results (OKR) */}
            <section className="The-Objectives-and-Key-Results py-5">
                <Okr />
            </section>

            {/* 
            <!-- We are awesome section --> */}
            {/* we are awsome */}
            <section className="Lets-make-something-great p-5">
                <div className="container Lets-make-something-container py-5">
                    <h4 className='text-center'>WE  ARE  STUNNING</h4>
                    <h1 className='text-center'>
                        <b>Let’s Do Great Stuff</b>
                    </h1>
                    <p className="text-center">
                        We strive to create a positive impact in the world by providing sustainable solutions that improve the lives of our customers and the communities we serve.
                        Innovation to solve complex problems and create new opportunities for growth and prosperity.
                    </p>
                </div>
            </section>
            {/* <!-- Contact with Us section --> */}
            <section id="find" className="find">
                <div className="container d-flex justify-content-between align-items-center py-5">
                    <p>Can't Find What You Are Looking For?
                    </p>
                    <a href='/ContactUs'><button className="cta-btn px-2">Contact With Us</button></a>
                </div>
            </section>
            {/* <!-- Our-mission section --> */}
            <section id="our-mission" className="our-mission py-4 my-5">
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className='col-md-5'>
                            <h1 className='text-start py-3 fw-bold'>Our Company Mission And Vision Here</h1>
                            <ul className='text-start p-0 ul-for-mission'>
                                <li><span><FaCheck /></span>&nbsp; Provide exceptional products and services to customers</li>
                                <li><span><FaCheck /></span>&nbsp; Combine innovative ideas with industry expertise</li>
                                <li><span><FaCheck /></span>&nbsp; Promote the well-being of customers, employees, and the environment</li>
                                <li><span><FaCheck /></span>&nbsp; Continually innovate and improve products and services</li>
                                <li><span><FaCheck /></span>&nbsp; Expand reach globally and establish as a trusted partner in every community served</li>
                                <li><span><FaCheck /></span>&nbsp; Foster a culture of collaboration, accountability, and continuous improvement among employees and stakeholders.</li>
                            </ul>
                        </div>
                        <div className='col-md-6 d-flex align-items-end'>
                            <img src={business_team_developing_project} className='w-100 position-relative img-mission' alt='business_team_developingproject' />
                            <img src={people_standing_office_holding_hands_together} className='w-25 position-absolute img-holding-hand' alt='people_standing_office_holding_handstogether' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
