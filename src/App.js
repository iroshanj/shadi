import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/Form.css";
import Viewone from "./Pages/Viewone";
import Register from "./Modules/Register/Register";
import Dashboard from "./Modules/Dashboard/Dashboard";
import Login from "./Modules/Login/Login";
 import Success from "./Pages/Success";
import Profile from "./Modules/Profile/Profile";
import Update from "./Modules/Update/Update";
import PrivateRoute from './PrivateRoute';
import ProfileUpdateSuccess from "./Pages/ProfileUpdateSuccess";
import Phonepe from "./Pages/Phonepe";

function App() {
  const isAuthenticated = true; 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Viewone />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />

        <Route path="dashboard" element={<PrivateRoute Component={Dashboard} />} />
        
         
         
        <Route path="myprofile" element={<PrivateRoute Component={Profile} />} />
        <Route path="update" element={<PrivateRoute Component={Update} />} />
        <Route path="phonepe" element={<PrivateRoute Component={Phonepe} />} />
        <Route path="update-success" element={<PrivateRoute Component={ProfileUpdateSuccess} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
