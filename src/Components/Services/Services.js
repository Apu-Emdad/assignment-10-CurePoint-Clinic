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
    <div className="bg-secondary text-light ">
      <h3>We provide {services.length} courses</h3>
      <div className="course-container">
        {services.map((service) => (
          <Service course={service} key={service.key}></Service>
        ))}{" "}
      </div>
    </div>
  );
};

export default Services;
