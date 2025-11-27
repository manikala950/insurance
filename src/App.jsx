import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Customer from "./components/customer";
import CustomerDashboard from "./customer/CustomerDashboard";
import AgentDashboard from "./agent/AgentDashboard";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />

        {/* Extra */}
        <Route path="/add-customer" element={<Customer />} />
        

      </Routes>
    </Router>
  );
}
