import React from 'react'
import img1 from '../../../image/Blog/pic1.png'
import img2 from '../../../image/Blog/pic2.png'
import img3 from '../../../image/Blog/pic3.png'
import img4 from '../../../image/Blog/pic4.png'
import img5 from '../../../image/Blog/pic5.png'
import img6 from '../../../image/Blog/pic6.png'
import './RecentPost.css'

const RecentPost = () => {
    return (
        <div>
            <h5 className='my-4'>Recent Post</h5>
            <div className=" d-flex align-items-center justify-content-between post-section">
                <div>
                    <p>10 Feb 2021</p>
                </div>
                <div className='post-img'>
                    <img src={img1} alt="" className='img-fluid' />
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-center post-section">
                <div>
                    <p>01 Jun 2020</p>

                </div>
                <div className='post-img'>
                    <img src={img2} alt="" className='img-fluid' />
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-center post-section">
                <div>
                    <p>10 Dec 2021</p>

                </div>
                <div className='post-img'>
                    <img src={img3} alt="" className='img-fluid' />
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-center post-section">
                <div>
                    <p>01 Sep 2019</p>

                </div>
                <div className='post-img'>
                    <img src={img4} alt="" className='img-fluid' />
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-center post-section">
                <div>
                    <p>20 Aug 2021</p>

                </div>
                <div className='post-img'>
                    <img src={img5} alt="" className='img-fluid' />
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-center post-section">
                <div>
                    <p>01 Nov 2021</p>
                </div>
                <div className='post-img'>
                    <img src={img6} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default RecentPost;