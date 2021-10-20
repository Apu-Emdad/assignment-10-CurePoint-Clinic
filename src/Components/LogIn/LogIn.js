import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div>
      <h1 className="text-center">Please Log-in</h1>
      <button
        onClick={signInUsingGoogle}
        className="d-block btn-danger mx-auto"
      >
        Sign in with google
      </button>
      <h2 className="text-center">
        <Link to="/register"> New user?</Link>
      </h2>
    </div>
  );
};

export default Login;
