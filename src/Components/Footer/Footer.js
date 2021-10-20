import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="d-flex justify-content-around bg-dark text-light py-5">
      <div className="d-flex justify-content-around">
        <div>
          <i class="fab fa-facebook"></i>
        </div>
        <div className="px-5">
          <i class="fab fa-twitter-square"></i>
        </div>
        <div className="px-5">
          <i class="fab fa-instagram-square"></i>
        </div>
        <div className="px-5">
          <i class="fab fa-reddit-square"></i>
        </div>
      </div>
      <div>
        <i class="far fa-copyright"></i>All rights reserved
      </div>
    </div>
  );
};

export default Footer;
