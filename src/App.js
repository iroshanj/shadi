import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Form.css";
import Viewone from "./Viewone";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Login from "./Login";
 import Success from "./Success";
import Profile from "./Profile";
import Update from "./Update";
import PrivateRoute from './PrivateRoute';
import ProfileUpdateSuccess from "./ProfileUpdateSuccess";
import Phonepe from "./Phonepe";

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
