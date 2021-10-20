import userEvent from "@testing-library/user-event";
import React from "react";
import { Redirect, Route, useHistory } from "react-router";
// import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
const PrivateRoute = (props) => {
  const history = useHistory();

  const { children, ...rest } = props;
  const { user } = useAuth();
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    />
  );
};

export default PrivateRoute;
