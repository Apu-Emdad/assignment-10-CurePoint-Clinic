import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Home.css";
import image from "./images/bg-image.jpg";

const Home = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("./popular.json")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="home-container bg-secondary">
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <img src={image} className="img-fluid" alt="" />
            </div>
            {/* extra section-1  */}
            <div class="col-6 col-md-6 text-left text-light">
              <h2>CurePoint Healthcare</h2>
              <h5>Be our Member</h5>

              <h6>
                and keep your future{" "}
                <span className="text-danger fw-bold fs-1">SAFE</span>
              </h6>
              <p>
                A class of medical instruction in which patients are examined
                and discussed. 2 : a group meeting devoted to the analysis and
                solution of concrete problems or to the acquiring of specific
                skills or knowledge writing clinics golf clinics. 3a : a
                facility (as of a hospital) for diagnosis and treatment of
                outpatients. a class of medical instruction in which patients
                are examined and discussed. 2 : a group meeting devoted to the
                analysis and solution of concrete problems or to the acquiring
                of specific skills or knowledge writing clinics golf clinics. 3a
                : a facility (as of a hospital) for diagnosis and treatment of
                outpatients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-intro  ">
        <h1 className="text-warning text-center">Our Popular Services</h1>

        <div>
          <div className="row   g-4">
            {popular.map((p) => (
              <div className="col-sm-12 col-md-4">
                <div className=" course bg-dark h-100">
                  <img src={p.img} alt="" className="img-fluid" /> <br />
                  <h5 className="text-light ">{p.name}</h5>
                  <p className="text-light">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* extra section 2  */}
        <div>
          <h4 className="text-center" style={{ color: "white" }}>
            visit <Link to="/services">Services</Link> to see every service we
            provide
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
