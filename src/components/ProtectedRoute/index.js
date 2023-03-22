import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const Protected = ({ islogged, ...props }) => {
  if (!islogged) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default Protected;
