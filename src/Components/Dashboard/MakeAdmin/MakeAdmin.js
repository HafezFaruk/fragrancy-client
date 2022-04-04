import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handelAdminSubmit = (e) => {
    const user = { email };
    fetch("https://safe-tor-91730.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container>
      <h2 className="product-title">Make an Admin</h2>
      <div className="admin-form">
        <form onSubmit={handelAdminSubmit}>
          <input
            type="email"
            onBlur={handelOnBlur}
            placeholder="Enter Admin Email *"
          />
          <button className="btn btn-dark" type="submit">
            Make Admin
          </button>
        </form>
      </div>
      {success && <Alert>User Successfully create</Alert>}
    </Container>
  );
};

export default MakeAdmin;
