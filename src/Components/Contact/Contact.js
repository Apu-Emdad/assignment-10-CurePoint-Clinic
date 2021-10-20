import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <img
          src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
          className="head-img"
          alt=""
        />
      </div>
      <div className="contact-us bg-secondary  text-light">
        <div className="d-flex pt-3 justify-content-center ">
          <h1>Contact Us</h1>
        </div>
        <div className="container contact-form ">
          <form method="post">
            <h3>Please send us your feedback </h3>
            <div className="row">
              <div className="col-md-6">
                <div className=" p-2">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div className=" p-2">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div className=" p-2">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=" p-2">
                  <textarea
                    name="txtMsg"
                    className="form-control message"
                    placeholder="Your Message *"
                  ></textarea>
                </div>
                <div className=" p-2">
                  <button type="button" class="btn btn-primary px-5 py-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
