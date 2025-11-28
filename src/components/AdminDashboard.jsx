import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/admindashboard.css";

const sampleStats = {
  customers: 1242,
  agents: 38,
  policiesThisMonth: 112,
  claimsThisMonth: 14,
};

const sampleNotices = [
  { id: 1, title: "Policy renewal reminder sent", time: "2h ago" },
  { id: 2, title: "New agent joined: Priya R.", time: "1d ago" },
  { id: 3, title: "Scheduled downtime (Sat 02:00–03:00)", time: "3d ago" },
];

const sampleCustomers = [
  { id: 1, name: "Sita Verma", policy: "Health Plus", lastPayment: "2025-11-01" },
  { id: 2, name: "Arjun Rao", policy: "Car Shield", lastPayment: "2025-10-19" },
  { id: 3, name: "Maya Singh", policy: "Life Secure", lastPayment: "2025-09-30" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="admin-dashboard dark-theme">

      {/* MOBILE TOP BAR */}
      <div className="mobile-top">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <h3>Insurance Admin</h3>

        <button className="notify-btn">🔔</button>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar glass-card ${menuOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Admin Panel</h2>

        <ul className="menu">
          <li className="active">
            <i className="bi bi-house-door-fill me-2"></i> Home
          </li>

          <li><button className="menu-btn" onClick={() => navigate("/agents/view")}>👥 Agents</button></li>
          <li><button className="menu-btn" onClick={() => navigate("/customer/view")}>🧑‍💼 Customers</button></li>
          <li><button className="menu-btn" onClick={() => navigate("/notice")}>🔔 Notices</button></li>
          <li><button className="menu-btn" onClick={() => navigate("/reports")}>📊 Reports</button></li>
          <li><button className="menu-btn" onClick={() => navigate("/claims")}>⚠️ Insurance Claims</button></li>
        </ul>

        
        
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2>Dashboard</h2>

          <div className="admin-profile">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=111&color=fff"
              alt="Admin"
            />
            <div>
              <h4>Admin</h4>
            </div>
          </div>
        </div>

        {/* PREMIUM STATS */}
        <div className="stats-grid">
          <StatCard title="Customers" value={sampleStats.customers}  />
          <StatCard title="Agents" value={sampleStats.agents}  />
          <StatCard title="Policies (Month)" value={sampleStats.policiesThisMonth}  />
          <StatCard title="Claims (Month)" value={sampleStats.claimsThisMonth}  />
        </div>

        {/* GRID LAYOUT */}
        <div className="content-grid">

          {/* LEFT SIDE */}
          <div>
            {/* Notices */}
            <div className="card glass-card">
              <div className="card-header">
                <h4>Notices</h4>
                <button className="view-btn">View All</button>
              </div>

              <ul className="notice-list">
                {sampleNotices.map((n) => (
                  <li key={n.id}>
                    <p>{n.title}</p>
                    <small>{n.time}</small>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="card glass-card">
              <h4 className="mb-3">Quick Actions</h4>

              <div className="action-grid">
                <button className="action-btn neon-btn" onClick={() => navigate("/add-agent")}>Add Agent</button>
                <button className="action-btn neon-btn" onClick={() => navigate("/add-customer")}>Add Customer</button>
                <button className="action-btn neon-btn" onClick={() => navigate("/notice")}>Create Notice</button>
                <button className="action-btn neon-btn" onClick={() => navigate("/GenerateReport")}>Generate Report</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Customer Table */}
            <div className="card glass-card">
              <h4>Recent Customers</h4>

              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Policy</th>
                    <th>Last Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {sampleCustomers.map((c) => (
                    <tr key={c.id}>
                      <td>{c.name}</td>
                      <td>{c.policy}</td>
                      <td>{c.lastPayment}</td>
                      <td><button className="btn-view neon-btn">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="summary-box glass-card">
              <h3>Overall Summary</h3>

              <div className="summary-stats">
                <PremiumStat title="Total Customers" value={sampleStats.customers} icon="👥" />
                <PremiumStat title="Active Agents" value={sampleStats.agents} icon="📌" />
                <PremiumStat title="Policies This Month" value={sampleStats.policiesThisMonth} icon="📄" />
                <PremiumStat title="Claims This Month" value={sampleStats.claimsThisMonth} icon="⚠️" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`stat-card glow-${color}`}>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

function PremiumStat({ title, value, icon }) {
  return (
    <div className="premium-stat">
      <span className="icon">{icon}</span>
      <div>
        <p className="label">{title}</p>
        <h4 className="value">{value}</h4>
      </div>
    </div>
  );
}
