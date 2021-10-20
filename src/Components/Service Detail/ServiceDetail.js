import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://api.jsonbin.io/b/6170371aaa02be1d445c3a39")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  let findService = {};
  for (const service of services) {
    if (serviceID == service.key) {
      findService = { ...service };
    }
  }
  console.log(findService);
  return (
    <div className="service-detail text-center">
      <h1 className="text-center">{findService.name}</h1>
      <div>
        <img src={findService.img} alt="" className="d-block mx-auto w-50" />
      </div>
      <p className="mx-auto w-75 ">{findService.description}</p>
      <div>
        <button className="btn-danger d-block mx-auto ">
          Be our member: ${findService.price}
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
