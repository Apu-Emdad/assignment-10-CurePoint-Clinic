import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="service-container bg-secondary text-light w-100 ">
      <h3 className="text-center">We provide {services.length} Services</h3>
      <div className="course-container row text-center ">
        {services.map((service) => (
          <Service course={service} key={service.key}></Service>
        ))}{" "}
      </div>
    </div>
  );
};

export default Services;
