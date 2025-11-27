import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/agentDashboard.css";

export default function AgentDashboard() {
  const [showNotify, setShowNotify] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    "New customer added today",
    "2 policies pending approval",
    "Policy #PL-1234 approved",
  ];

  const stats = {
    customers: 32,
    totalPolicies: 54,
    approved: 40,
    rejected: 4,
    pending: 10,
  };

  const policies = [
    { id: 1, name: "Health Insurance", customer: "John Doe", status: "Approved" },
    { id: 2, name: "Vehicle Insurance", customer: "Amit Rao", status: "Pending" },
    { id: 3, name: "Life Insurance", customer: "Priya Sharma", status: "Rejected" },
    { id: 4, name: "Travel Insurance", customer: "Kiran Patel", status: "Approved" },
  ];

  return (
    <div className="agent-dashboard">

      {/* ------------------ MOBILE TOP BAR (Always Visible) ------------------ */}
      <div className="mobile-top">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <h3>Agent Dashboard</h3>

        <button className="notify-icon" onClick={() => setShowNotify(!showNotify)}>
          🔔
        </button>
      </div>

      {/* ------------------ SIDEBAR (Desktop + Mobile Slide) ------------------ */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Agent Panel</h2>

        <ul className="menu">
          <li>👥 Customers</li>
          <li>📄 Policies</li>
          <li>📌 Notices</li>
        </ul>
      </div>

      {/* ------------------ MAIN CONTENT ------------------ */}
      <div className="main-content">

        {/* HEADER */}
        <div className="header">
          <h2>Agent Dashboard</h2>

          <div className="header-right">

            <button className="notify-btn" onClick={() => setShowNotify(!showNotify)}>
              🔔
              <span className="notify-count">{notifications.length}</span>
            </button>

            <div className="agent-profile">
              <img
                src="https://ui-avatars.com/api/?name=Agent&background=0D6EFD&color=fff"
                alt="Agent"
              />
              <div>
                <h4>Agent Kumar</h4>
                <small>Senior Agent</small>
              </div>
            </div>

          </div>
        </div>

        {/* NOTIFICATION POPUP */}
        {showNotify && (
          <div className="notification-popup">
            <h4>Notifications</h4>
            <ul>
              {notifications.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        )}

        {/* STATS CARDS */}
        <div className="stats-grid">
          <div className="stat-card blue">
            <h3>{stats.customers}</h3>
            <p>Total Customers</p>
          </div>

          <div className="stat-card purple">
            <h3>{stats.totalPolicies}</h3>
            <p>Total Policies</p>
          </div>

          <div className="stat-card green">
            <h3>{stats.approved}</h3>
            <p>Approved</p>
          </div>

          <div className="stat-card red">
            <h3>{stats.rejected}</h3>
            <p>Rejected</p>
          </div>

          <div className="stat-card yellow">
            <h3>{stats.pending}</h3>
            <p>Pending</p>
          </div>
        </div>

        {/* ADD CUSTOMER BUTTON */}
        <button
          className="add-customer-btn"
          onClick={() => navigate("/add-customer")}
        >
          ➕ Add Customer
        </button>

        {/* POLICY TABLE */}
        <div className="card">
          <h3>All Policies</h3>

          <table className="policy-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Policy Name</th>
                <th>Customer</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {policies.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.customer}</td>
                  <td className={`status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
