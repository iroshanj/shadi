import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const PrivateRoute = ({ Component }) => {
const [isAuthenticated, setIsAuthenticated] = useState(false);

var curUserGen = localStorage.getItem("curUser");
curUserGen = JSON.parse(curUserGen);

if(curUserGen != null && isAuthenticated==false){
    setIsAuthenticated(true)
} 

 // Your authentication logic goes here...
 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;