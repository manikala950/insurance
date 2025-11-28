import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Customer from "./components/customer";
import CustomerDashboard from "./customer/CustomerDashboard";
import AgentDashboard from "./agent/AgentDashboard";
import Agents from "./agent/Agent";
import Notice from "./pages/Notice";
import Claims from "./pages/Claims";
import AddAgent from "./components/Agentadd";

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
        <Route path="/agents/view" element={<Agents />} />
        {/* Extra */}
        <Route path="/add-customer" element={<Customer />} />
        <Route path="/notice" element={<Notice />} />
         <Route path="/claims" element={<Claims />} />
        <Route path="/add-agent" element={<AddAgent />} />

      </Routes>
    </Router>
  );
}
