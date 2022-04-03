import React from 'react';
import Banner from '../../Share/Banner/Banner';
import Contact from '../../Share/Contact/Contact';
import CarouselSlider from '../Carousel/Carousel';
import Perfume from '../HomeOther/PerfumeAdd/Perfume';
import ProductsCarousel from '../HomeOther/ProductCarousel/ProductsCarousel';
import Products from '../Products/Products/Products';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <Products></Products>
            <Service></Service>
            <ProductsCarousel></ProductsCarousel>
            <Perfume></Perfume>
            <Contact></Contact>
        </div>
    );
};

export default Home;