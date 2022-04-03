import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../image/about-intro.jpg'
import mission from '../../image/mission.png'
import vision from '../../image/vission.png'
import Contact from '../../Share/Contact/Contact';
import './AboutUs.css'
import OurTeam from './OurTeam/OurTeam';

const About = () => {
    return (
        <div>
            <Container>
                <h2 className='product-title '>About Us</h2>
                <p>WELCOME TO PERFUME DIRECT, THE BANGLADESH PREMIER ONLINE FRAGRANCE & BEAUTY STORE.</p>

                <div className="row my-5 about-intro">
                    <div className="col-md-6">
                        <h4>Our Company</h4>
                        <p>We have built an extensive global network of brands and suppliers which enables us to source the latest fragrance at a great price ,which is the reason. We are able to keep our prices low.</p>
                        <ul>
                            <li>Top Quality Product</li>
                            <li>Best Customer Service</li>
                            <li>30 Days money back guarantee</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className='about-gol'>
                            <img src={mission} alt="" />
                            <h4>Our Mission</h4>
                            <p>TO SUPPLY THE BIGGEST FRAGRANCE & COSMETICS BRANDS AT AFFORDABLE PRICES.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='about-gol'>
                            <img src={vision} alt="" />
                            <h4>Our Vision</h4>
                            <p>TO PROVIDE AN EXCEPTIONAL SHOPPING EXPERIENCE WITH AN EASY TO USE WEBSITE, FAST SHIPPING & OUTSTANDING CUSTOMER SERVICE.</p>
                        </div>
                    </div>
                </div>
                <div className="about-new">
                    <h3>New In !</h3>
                    <p>our latest collection is a combination of our designer's vision and our technical expert's invention. <br /> Take Dobrada for example, an eye-catching. Lightweight hybrid with boat shoe detailing </p>
                    <Link to='/products'>
                        <button>Shop Now</button>
                    </Link>
                </div>
                <OurTeam></OurTeam>
                <Contact></Contact>
            </Container>
        </div>
    );
};

export default About;