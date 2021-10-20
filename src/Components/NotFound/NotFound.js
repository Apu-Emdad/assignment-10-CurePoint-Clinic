import React from "react";
import image from "./images/sad.jpg";

const NotFound = () => {
  return (
    <div>
      <img src={image} alt="d" className="d-block mx-auto" />
      <h3 className="text-center">Sorry!</h3>
      <h3 className="text-center">The page you looking for is not found</h3>
    </div>
  );
};

export default NotFound;
