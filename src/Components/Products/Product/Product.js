import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { productName, productImage, rating, price, _id } = product
    const url = `/product/${_id}`
    return (
        <div className='product-item'>
            <Col>
                <Link to={url} >
                    <Card className='product-card'>
                        <div className="box">
                            <img src={productImage} alt="" className='img-fluid' />
                            <div className="box-content">
                                <div className="content">
                                    <ul className='details-icon'>
                                        <li title='QuickView'><i className="far fa-eye"></i></li>
                                        <li title='Wishlist'><i className="far fa-heart"></i></li>
                                        <li title='Add to Cart'><i className="fas fa-cart-arrow-down"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Card.Body className='card-body'>
                            <Card.Title>{productName}</Card.Title>
                            <Card.Text>
                                <Rating
                                    initialRating={rating}
                                    emptySymbol="far fa-star "
                                    fullSymbol="fas fa-star "
                                    readonly
                                />
                                <p className='my-2'>USD : ${price}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </div >
    );
};

export default Product;