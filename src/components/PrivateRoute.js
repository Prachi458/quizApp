import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, isSubmitted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isSubmitted ? children : <Redirect to={"/"} />)}
    />
  );
};

export default PrivateRoute;
