import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function PrivateRoute() {
  const { auth } = React.useContext(AuthContext)!;
  if (auth == null) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
