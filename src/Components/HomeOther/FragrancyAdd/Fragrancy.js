import React from "react";
import { Container } from "react-bootstrap";
import Fragrancy1 from "../../../image/Fragrancy1.jpg";
import Fragrancy2 from "../../../image/Fragrancy2.jpg";
import Fragrancy3 from "../../../image/pic.png";
import "./Fragrancy.css";

const Fragrancy = () => {
  return (
    <Container>
      <div className="row my-5">
        <div className="col-md-3 col-12">
          <img src={Fragrancy1} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 col-12">
          <div className="d-flex align-items-center justify-content-around Fragrancy-add">
            <img src={Fragrancy3} alt="" />
            <div className="">
              <h4>Aramis</h4>
              <h6> $ 400</h6>
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <img src={Fragrancy2} alt="" className="img-fluid" />
        </div>
      </div>
    </Container>
  );
};

export default Fragrancy;
