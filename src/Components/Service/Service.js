import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ServiceDetail from "../Service Detail/ServiceDetail";
import "./Service.css";

const Service = (props) => {
  const { key, name, description, img, price } = props.course;

  const url = `/service/${key}`;
  const history = useHistory();
  const clickHandler = () => {
    history.push(url);
  };
  return (
    <div className="course bg-dark">
      <img src={img} alt="" className="img-fluid" /> <br />
      <h5 className="text-light ">{name}</h5>
      <button
        className="d-block mx-auto btn btn-danger px-3"
        onClick={clickHandler}
      >
        Details
      </button>
    </div>
  );
};

export default Service;
