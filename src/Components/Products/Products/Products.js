import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "../../../Share/Contact/Contact";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://safe-tor-91730.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="product-title">Trading Product</h2>
        <Row xs={1} md={4} className="g-4">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
        <Contact></Contact>
      </Container>
    </div>
  );
};

export default Products;
