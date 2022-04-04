import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductsCarousel from "../../HomeOther/ProductCarousel/ProductsCarousel";
import useAuth from "../../../Hooks/useAuth";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [productDetails, setProductsDetails] = useState({});
  useEffect(() => {
    fetch(`https://safe-tor-91730.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductsDetails(data));
  }, [id]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://safe-tor-91730.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product Successfully Inserted ");
          reset();
        }
      });
  };
  return (
    <Container>
      <div className="row my-5">
        <div className="col-md-3">
          <div className="product-img">
            <img src={productDetails.productImage} alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-info">
            <h4>{productDetails.productName}</h4>
            <p>{productDetails.productDescription}</p>
            <p>Price : ${productDetails.price}</p>
            <p>Color : {productDetails.Color}</p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="purchase-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("productName")}
                defaultValue={productDetails.productName}
              />
              <input
                {...register("productPrice")}
                defaultValue={productDetails?.price}
              />
              <input {...register("email")} defaultValue={user?.email} />
              <input {...register("date")} type="date" />
              <select {...register("color")}>
                <option value="Black">Black</option>
                <option value="Pink">Pink</option>
                <option value="Blue">Blue</option>
              </select>
              <button type="submit">Purchase</button>
            </form>
          </div>
        </div>
      </div>
      <div className="product-specification">
        <div>
          <h4>More Details</h4>
          <ul>
            <li>
              Top notes of tart Italian lemon, crisp green apple and clean
            </li>
            <li>
              Cooling mint oil open the fragrancy with a burst of fresh
              exuberance, energizing
            </li>
            <li>
              Finally, base notes of Atlas cedar, fresh-cut Virginian cedar,
              oakmoss
            </li>
            <li>
              Brut has been the popular choice of men and sports stars in the UK
              since 1964.
            </li>
            <li>
              The sophisticated, spicy scent will make you feel confident with
              its fresh and distinctive fragrance.
            </li>
          </ul>
        </div>
        <div>
          <h4>Key Specification</h4>
          <ul>
            <li>Fully immerse yourself in the elegant and exotic Mancera</li>
            <li>
              Middle notes of heady Indonesian patchouli leaf, delicate violet
              and rich Bulgarian
            </li>
            <li>
              Dubai Amethyst by Bond No 9 is an amber floral fragrance for women
              and men
            </li>
          </ul>
        </div>
      </div>
      <ProductsCarousel></ProductsCarousel>
    </Container>
  );
};

export default SingleProduct;
