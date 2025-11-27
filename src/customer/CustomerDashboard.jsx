import React, { useState } from "react";
import "../style/customerDashboard.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function CustomerDashboard() {
  const [showNotify, setShowNotify] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const customer = {
    name: "John Doe",
    email: "john@example.com",
    mobile: "9876543210",
    aadhaar: "1234 5678 9012",
    pan: "ABCDE1234F",
    address: "Hyderabad, Telangana",
    agentid: "AGT1023",
  };

  const notifications = [
    "Vehicle insurance due in 5 days",
    "Health policy renewal successful",
    "Claim #CLM9090 under review",
  ];

  const policyChart = {
    labels: ["Health", "Vehicle", "Travel"],
    datasets: [
      {
        label: "Policies",
        data: [1, 1, 1],
        backgroundColor: ["#4285f4", "#34a853", "#ea4335"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className={`customer-dashboard ${dark ? "dark-mode" : ""}`}>

      {/* ---------------------- MOBILE TOP NAV BAR (ALWAYS VISIBLE) ---------------------- */}
      <div className="mobile-top always-visible">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <h3>Dashboard</h3>

        <button className="dark-toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀" : "🌙"}
        </button>
      </div>

      {/* ---------------------- SIDEBAR (DESKTOP + MOBILE) ---------------------- */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Menu</h2>

        <ul className="menu">
          <li>👤 Agent ID: {customer.agentid}</li>
          <li>📄 Policies</li>
          <li>📌 Notices</li>
        </ul>
      </div>

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <div className="main-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2>Customer Dashboard</h2>

          <div className="right-tools">
            <button
              className="notify-btn"
              onClick={() => setShowNotify(!showNotify)}
            >
              🔔
              <span className="badge">{notifications.length}</span>
            </button>

            <button className="dark-toggle desktop-dark" onClick={() => setDark(!dark)}>
              {dark ? "☀" : "🌙"}
            </button>
          </div>
        </div>

        {/* NOTIFICATIONS POPUP */}
        {showNotify && (
          <div className="notification-popup">
            <h4>Notifications</h4>
            <ul>
              {notifications.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CUSTOMER PROFILE CARD */}
        <div className="card animated-card">
          <h3>Customer Profile</h3>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Mobile:</strong> {customer.mobile}</p>
          <p><strong>Aadhaar:</strong> {customer.aadhaar}</p>
          <p><strong>PAN:</strong> {customer.pan}</p>
          <p><strong>Address:</strong> {customer.address}</p>
        </div>

        {/* POLICIES CARD */}
        <div className="card animated-card">
          <h3>Your Policies</h3>
          <ul>
            <li>✔ Health Insurance – Active</li>
            <li>✔ Vehicle Insurance – Active</li>
            <li>❌ Travel Insurance – Expired</li>
          </ul>
        </div>

        {/* POLICY CHART CARD */}
        <div className="card animated-card">
          <h3>Policy Overview</h3>
          <Bar data={policyChart} />
        </div>

        {/* POLICY TRACKING CARD */}
        <div className="card animated-card">
          <h3>Policy Tracking</h3>

          <div className="tracking-container">
            <div className="step completed">
              <span className="circle">1</span>
              <p>Claim Submitted</p>
            </div>

            <div className="bar completed"></div>

            <div className="step completed">
              <span className="circle">2</span>
              <p>Under Review</p>
            </div>

            <div className="bar"></div>

            <div className="step">
              <span className="circle">3</span>
              <p>Approved</p>
            </div>

            <div className="bar"></div>

            <div className="step">
              <span className="circle">4</span>
              <p>Completed</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
