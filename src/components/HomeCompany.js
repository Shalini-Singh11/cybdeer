import React from 'react'
import './assests/home.css';
import companies_theme from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/companies_theme_img.svg';
import Logo_Paydeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/Logo_Paydeer.svg';
import Logo_Webhub from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/logoWebhub.svg';
import Logo_Findeer from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/logoFindeer.svg';
import Logo_payVendors from './assests/all_images_cybdr/IMAGES_CYBDEER_WEBSITE/Logo_Payvendor.svg';

export default function HomeCompanies() {
  return (
    <div>
      <div className='container'>
        <h2 className="heading-okr text-center py-3">
          Our Company
        </h2>
        <div className='row justify-content-around align-items-center g-5'>
          <div className="col-md-3 contain-companies d-flex justify-content-center align-items-center" style={{ "--i": "1" }}>
            <a href='https://paydeer.in/'><img src={Logo_Paydeer} /></a>          
          </div>
          <div className="col-md-3 contain-companies d-flex justify-content-center align-items-center" style={{ "--i": "2" }}>           
            <a href='https://webhubzone.in/'><img src={Logo_Webhub} /></a>          
          </div>
          <div className="col-md-3 contain-companies d-flex justify-content-center align-items-center" style={{ "--i": "3" }}>           
            <a href='http://findeer.in/'><img src={Logo_Findeer} /></a>          
          </div>
          <div className="col-md-3 contain-companies d-flex justify-content-center align-items-center" style={{ "--i": "4" }}>           
            <a href='http://payvendors.in/'><img src={Logo_payVendors} /></a>          
          </div>
        </div>
      </div>
    </div>
  )
}