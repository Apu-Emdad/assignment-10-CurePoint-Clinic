import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <Container fluid className="bg-dark header">
      <h4 className="text-light text-left">CurePoint HealthCare</h4>
      <div className="row justify-content-end">
        <div className="col-md-6 col-sm-12">
          <NavLink className="item" activeStyle={activeStyle} to="/home">
            Home
          </NavLink>
          <NavLink className="item" activeStyle={activeStyle} to="/services">
            Services
          </NavLink>
          <NavLink className="item" activeStyle={activeStyle} to="/about">
            About
          </NavLink>
          <NavLink className="item" activeStyle={activeStyle} to="/contact">
            Contact Us
          </NavLink>
          <NavLink className="item" activeStyle={activeStyle} to="/bmi">
            BMI
          </NavLink>
        </div>
        <div className="col-md-6 col-sm-12">
          {user.displayName && (
            <span style={{ color: "gray" }}>
              {user.displayName}
              <span>
                <button className="btn-danger " onClick={logout}>
                  Log Out
                </button>
              </span>{" "}
            </span>
          )}

          {user.displayName || (
            <span>
              <NavLink className="item" activeStyle={activeStyle} to="/login">
                Log-In
              </NavLink>

              <NavLink
                className="item"
                activeStyle={activeStyle}
                to="/register"
              >
                Register
              </NavLink>
            </span>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
