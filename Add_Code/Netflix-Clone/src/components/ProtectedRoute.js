import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  // user authentication state
  const { user } = UserAuth();
  // if else statement to check if user is logged in
  if (!user) {
    //if not logged in, return to home page
    return <Navigate to="/" />;
  } else {
    //else return wrapped components in authenicated state
    return children;
  }
};

export default ProtectedRoute;
