import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Rating from 'react-rating'
import './ProductsCarousel.css'
import { Container } from 'react-bootstrap';

const ProductsCarousel = () => {
    const [productsCarousel, setProductsCarousel] = useState([])
    useEffect(() => {
        fetch('https://radiant-shore-26920.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProductsCarousel(data))
    }, []);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
        <div className='productCarousel-section'>
            <Container>
                <h2 className='product-title'>Special Products</h2>
                <Slider {...settings}>
                    {
                        productsCarousel.map(product => <div>

                            <div className='productCarousel-card'>
                                <img src={product.productImage} alt="" className='img-fluid' />
                                <div className="product-name">
                                    <h6>{product.productName}</h6>
                                    <Rating
                                        initialRating={product.rating}
                                        emptySymbol="far fa-star rating-icon"
                                        fullSymbol="fas fa-star rating-icon "
                                        readonly
                                    >
                                    </Rating>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </Container>
        </div >
    );
};

export default ProductsCarousel;