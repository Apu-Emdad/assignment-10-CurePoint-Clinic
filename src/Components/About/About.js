import React from "react";
import image from "./images/bg-image.jpg";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="d-flex mt-5 justify-content-center">
          <h1>About Us</h1>
        </div>
        <section class="hero-banner py-5 mt-3">
          <div class="container">
            <div class="row row align-items-center">
              <div class="col-lg-5 offset-lg-1 order-lg-1">
                <img
                  src="https://image.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg"
                  class="img-fluid"
                  alt="Web Development"
                />
              </div>
              <div class="col-lg-6">
                <h1 class="mt-3">
                  Welcome To The <br /> CurePoint Healthcare
                </h1>
                <p class="lead  my-5">
                  a class of medical instruction in which patients are examined
                  and discussed. 2 : a group meeting devoted to the analysis and
                  solution of concrete problems or to the acquiring of specific
                  skills or knowledge writing clinics golf clinics. 3a : a
                  facility (as of a hospital) for diagnosis and treatment of
                  outpatients. a class of medical instruction in which patients
                  are examined and discussed. 2 : a group meeting devoted to the
                  analysis and solution of concrete problems or to the acquiring
                  of specific skills or knowledge writing clinics golf clinics.
                  3a : a facility (as of a hospital) for diagnosis and treatment
                  of outpatients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
