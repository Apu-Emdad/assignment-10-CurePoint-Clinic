import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { getPassword, getEmail, registerWithEmail, getName } = useAuth();
  return (
    <div className="w-50 mx-auto my-5 py-5">
      <input
        type="text"
        placeholder="name"
        onBlur={getName}
        className="w-100"
      />
      <br />
      <input
        type="email"
        className="w-100"
        placeholder="email"
        onBlur={getEmail}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="password"
        className="w-100"
        onBlur={getPassword}
      />{" "}
      <br />
      <button
        className="d-block mx-auto btn-danger"
        onClick={registerWithEmail}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
