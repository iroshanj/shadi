import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Form.css";
import Viewone from "./Viewone";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Payment from "./Payment";
import Success from "./Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Viewone />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
