import React from 'react';
import serviceBanner1 from '../../../image/banner1.jpg'
import serviceBanner2 from '../../../image/banner2.jpg'
import serviceLogo1 from '../../../image/phone.png'
import serviceLogo2 from '../../../image/shpping.png'
import serviceLogo3 from '../../../image/service.png'
import serviceLogo4 from '../../../image/customer.png'

import './Service.css'

const Service = () => {
    return (
        <div className='service-banner my-4'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={serviceBanner2} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <img src={serviceBanner1} alt="" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-3 col-12">
                    <div className="service-section">
                        <img src={serviceLogo1} alt="" />
                        <h5>Contact With Us</h5>
                        <p>1248 12548 124</p>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="service-section">
                        <img src={serviceLogo2} alt="" />
                        <h5>Contact With Us</h5>
                        <p>Help All Aspects</p>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="service-section">
                        <img src={serviceLogo3} alt="" />
                        <h5>Contact With Us</h5>
                        <p>Life Time Support </p>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="service-section">
                        <img src={serviceLogo4} alt="" />
                        <h5>Contact With Us</h5>
                        <p>On Order Over</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;