import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch("https://safe-tor-91730.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isDelete]);

  const handelDeleteProduct = (id) => {
    fetch(`https://safe-tor-91730.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are you sure delete Order ?");
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
  };
  return (
    <div className="manage-product">
      <Container>
        <h2 className="product-title">All Product</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Rating</th>
              <th>Product Price</th>
              <th>Product Color</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.productName}</td>
                <td>{product.productImage}</td>
                <td>{product.rating}</td>
                <td>{product.price}</td>
                <td>{product.Color}</td>
                <td>
                  <i
                    className="fas fa-trash-alt delete-icon"
                    onClick={() => handelDeleteProduct(product._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageProduct;
