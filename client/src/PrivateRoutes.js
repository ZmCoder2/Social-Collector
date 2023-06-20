import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoutes = () => {
  const token = localStorage.getItem('id_token');
  // console.log("isToken?", token);
  if(token) {
    const decoded = jwt_decode(token);
    // console.log("Decoded Token", decoded);
    const exp = decoded.exp;
    // console.log("exp date", exp);
  
    // Get the current timestamp
    const now = Math.floor(Date.now() / 1000);
    // console.log("The current time", now);
  
    // Compare the expiration time with the current timestamp
    if (exp < now) {
      // The token has expired, clear the token from the cookies and redirect to the login page
      window.location.href = "/";
    }
  }

  return (
    token ? <Outlet /> : <Navigate to='/login' />
  )
}
export default PrivateRoutes;