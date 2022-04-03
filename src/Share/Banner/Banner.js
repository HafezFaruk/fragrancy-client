import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className=' banner-section d-flex align-items-center justify-content-between'>
            <div className='banner-text'>
                <h4>Perfume is the best makeup for..</h4>
                <p>“Perfume puts the finishing touch to elegance — a <br /> detail that subtly underscores the look, an invisible extra that <br /> completes a man and a woman’s personality.  Without it, there is something missing.”</p>
                <Link to='/products'>
                    <button className='btn btn-danger'>Shop Now</button>
                </Link>
            </div>
            <div >

            </div>
        </div>
    );
};

export default Banner;