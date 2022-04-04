import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://safe-tor-91730.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, isDelete]);
  const handelDeleteOrder = (id) => {
    fetch(`https://safe-tor-91730.herokuapp.com/deleteOrder/${id}`, {
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
    <div className="order-product">
      <Container>
        <h2 className="product-title">Ordered Products</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Order Date</th>
              <th>Product Color</th>
              <th>Product Price</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.productName}</td>
                <td>{order.date}</td>
                <td>{order.color}</td>
                <td>{order.productPrice}</td>
                <td>
                  <i
                    className="fas fa-trash-alt delete-icon"
                    onClick={() => handelDeleteOrder(order._id)}
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

export default MyOrder;
