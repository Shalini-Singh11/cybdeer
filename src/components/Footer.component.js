import React from 'react'
import './assests/footer.css';
import LogoCybdeerFooter from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/Logo_footer_cybdeer.svg';
import google_play from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/google_play.svg';
import twitter_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/twitter_cybdeer.svg';
import linkdin_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/linkdin_cybdeer.svg';
import instagram_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/instagram_cybdeer.svg';
import facebook_cybdeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/facebook_cybdeer.svg';
import { FaAngleRight } from 'react-icons/fa';
export default function Footer() {
    return (
        <>
            <section className='footer-section w-100 p-5'>
                <div className="container">
                    <div className='row justify-content-evenly align-items-center'>
                        <div className="col-md-4 float-left">
                            <ul className='text-start p-0'>
                                <li className='list-unstyled py-2'><img src={LogoCybdeerFooter} alt="logo-footer-cybdeer" /></li>
                                <li className='list-unstyled py-2'>Cybdeer Network Private limited is a leading provider of innovative technology solutions for businesses of all sizes.</li>
                                <li className='list-unstyled'><b>Email:</b>&nbsp;  info@cybdeer.com</li>
                                <li className="tel:123456789 list-unstyled"><b>Phone:</b>&nbsp; 7428274282</li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-start">
                            <ul className='p-0'><h4><b>Usefull Links</b></h4></ul>
                            <li><a href='/' className='text-decoration-none text-light'><FaAngleRight />&nbsp;Home</a></li>
                            <li><a href='/AboutUs' className='text-decoration-none text-light'><FaAngleRight />&nbsp;About Us</a></li>
                            <li><a href='/ContactUs' className='text-decoration-none text-light'><FaAngleRight />&nbsp;Contact Us</a></li>
                        </div>
                        <div className="col-md-3 text-start">
                            <ul className='p-0'><h4><b>Our Company</b></h4></ul>
                            <li><a href='https://paydeer.in/' className='text-decoration-none text-light' ><FaAngleRight />&nbsp;Paydeer</a></li>
                            <li><a href='https://webhubzone.in/' className='text-decoration-none text-light' ><FaAngleRight />&nbsp;WebHub Zone</a></li>
                            <li><a href='http://findeer.in/' className='text-decoration-none text-light' ><FaAngleRight />&nbsp;Findeer</a></li>
                            <li><a href='http://payvendors.in/' className='text-decoration-none text-light' ><FaAngleRight />&nbsp;Pay vendor</a></li>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer-section-second second-footer-container w-100 p-5'>
                <div className="container-fluid">
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-lg-4 col-md-4 style-for-lineAdjust text-center'>
                            <div className="copyright">
                                .All Rights Reserved<br />
                                &copy; Copyright <strong><span>Cybdeer Network Pvt Ltd</span></strong><br />
                                <p className='m-0'><a href="https://paydeer.in/refund-policy" className='text-decoration-none text-light bolder'>Refund Policy</a> | <a href="https://paydeer.in/privacy-policy" className='text-decoration-none text-light bolder'>Privacy policy</a> | <a href="https://paydeer.in/cookies-policy" className='text-decoration-none text-light bolder'>Cookies Policy</a></p>
                            </div>
                            <div className="credits">
                                Designed by <a href="https://paydeer.in/" className='text-decoration-none text-light bolder'>Cybdeer.com</a>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4'>

                            <div className='footer_logo_cybdeer d-flex flex-column justify-content-evenly align-items-center'>
                                <ul className='text-center'>
                                    <li className='list-unstyled'>Our Social Netwark</li>
                                    <li className='list-unstyled all-right-footer'>Connected 24/7 with Cybdeer</li>
                                </ul>
                                <div className='d-flex social-icons p-0'>
                                    <a href='https://twitter.com/paydeerindia'><img src={twitter_cybdeer} className="image-social-icons" alt="twitter" /></a>
                                    <a href='https://www.linkedin.com/company/cybdeer-network-private-limited/'><img src={linkdin_cybdeer} className="image-social-icons" alt="linkdin" /></a>
                                    <a href='https://www.instagram.com/Paydeer.business/'><img src={instagram_cybdeer} className="image-social-icons" alt="instagram" /></a>
                                    <a href='https://www.facebook.com/Paydeer.business'><img src={facebook_cybdeer} className="image-social-icons" alt="facebook" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4'>
                            <ul className='style-for-lineAdjust position-relative text-center'>
                                <li className='list-unstyled'><a href='https://play.google.com/store/apps/details?id=com.india.paydeer'><img src={google_play} alt="google_play" /></a></li>
                                <li className='list-unstyled all-right-footer'>Download Cybdeer App for Android</li>
                            </ul>
                        </div>


                    </div>
                    {/* <img src={line_footer} className="w-100 line-footer-second position-relative" alt="line-footer" /> */}
                </div>
            </section>

        </>
    )
}
