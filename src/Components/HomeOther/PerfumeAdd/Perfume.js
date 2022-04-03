import React from 'react';
import { Container } from 'react-bootstrap';
import perfume1 from '../../../image/Perfume1.jpg'
import perfume2 from '../../../image/Perfume2.jpg'
import perfume3 from '../../../image/pic.png'
import './Perfume.css'

const Perfume = () => {
    return (
        <Container>
            <div className="row my-5">
                <div className="col-md-3 col-12">
                    <img src={perfume1} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6 col-12">
                    <div className="d-flex align-items-center justify-content-around perfume-add">
                        <img src={perfume3} alt="" />
                        <div className="">
                            <h4>Aramis</h4>
                            <h6> $ 400</h6>
                            <div>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <img src={perfume2} alt="" className='img-fluid' />
                </div>
            </div>
        </Container>
    );
};

export default Perfume;