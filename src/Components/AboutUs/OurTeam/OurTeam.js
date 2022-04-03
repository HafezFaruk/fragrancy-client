import React from 'react';
import img1 from '../../../image/team-1.jpg'
import img2 from '../../../image/team-2.jpg'
import img3 from '../../../image/team-3.jpg'
import img4 from '../../../image/team-4.jpg'

const OurTeam = () => {
    return (
        <div>
            <div className="my-5">
                <h4>Our Team</h4>
                <p>To keep to date with Our new arrivals ,offers and giveaway <br /> why not follow us on instagram,facebook, youtube or twitter? </p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <img src={img1} alt="" className='img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5>Gary D. Morgan</h5>
                        <p>Position</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={img2} alt="" className='img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5>Gary D. Morgan</h5>
                        <p>Position</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={img3} alt="" className='img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5>Gary D. Morgan</h5>
                        <p>Position</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={img4} alt="" className='img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5>Gary D. Morgan</h5>
                        <p>Position</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;