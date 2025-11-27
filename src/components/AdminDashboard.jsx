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
    <div className="admin-dashboard">

      {/* ---------------------- MOBILE TOP BAR ---------------------- */}
      <div className="mobile-top">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <h3>Insurance Admin</h3>

        <button className="notify-btn">
          🔔
        </button>
      </div>

      {/* ---------------------- SIDEBAR (Desktop + Mobile Slide) ---------------------- */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Admin Panel</h2>

<ul className="menu">

  <li className="active">
    <i className="bi bi-house-door-fill me-2"></i> Home
  </li>

  <li>
    <button
      className="btn btn-primary w-100 text-start"
      onClick={() => navigate("/agents/view")}
    >
      <i className="bi bi-people-fill me-2"></i>
      Agents
    </button>
  </li>

  <li>
    <button
      className="btn btn-primary w-100 text-start"
      onClick={() => navigate("/customer/view")}
    >
      <i className="bi bi-person-lines-fill me-2"></i>
      Customers
    </button>
  </li>

  <li>
    <button
      className="btn btn-primary w-100 text-start"
      onClick={() => navigate("/notice")}
    >
      <i className="bi bi-bell-fill me-2"></i>
      Notices
    </button>
  </li>

  <li>
    <button
      className="btn btn-primary w-100 text-start"
      onClick={() => navigate("/reports")}
    >
      <i className="bi bi-folder2-open me-2"></i>
      Reports
    </button>
  </li>

  <li>
    <button
      className="btn btn-primary w-100 text-start"
      onClick={() => navigate("/claims")}
    >
      <i className="bi bi-file-earmark-check-fill me-2"></i>
      Insurance Claims
    </button>
  </li>

</ul>


        <div className="version-box">Version <strong>1.0.0</strong></div>
      </div>

      {/* ---------------------- MAIN CONTENT ---------------------- */}
      <div className="main-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2>Dashboard</h2>

          <div className="admin-profile">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff"
              alt="Admin"
            />
            <div>
              <h4>Admin</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </div>

        {/* TOP STATS */}
        <div className="stats-grid">
          <StatCard title="Customers" value={sampleStats.customers} />
          <StatCard title="Agents" value={sampleStats.agents} />
          <StatCard title="Policies (This Month)" value={sampleStats.policiesThisMonth} />
          <StatCard title="Claims (This Month)" value={sampleStats.claimsThisMonth} />
        </div>

        {/* GRID LAYOUT */}
        <div className="content-grid">

          {/* LEFT COLUMN */}
          <div>

            {/* Notices */}
            <div className="card">
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
            <div className="card">
              <h4 className="mb-3">Quick Actions</h4>

              <div className="action-grid">
                <button className="action-btn" onClick={()=>navigate("/add-agent")}>Add Agent</button>

                <button
                  className="action-btn"
                  onClick={() => navigate("/add-customer")}
                >
                  Add Customer
                </button>

                <button className="action-btn" onClick={()=>navigate("/create-notice")}>Create Notice</button>
                <button className="action-btn" onClick={()=>navigate("/GenerateReport")}>Generate Report</button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* Customers Table */}
            <div className="card">
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
                      <td><button className="btn-view">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Box */}
            <div className="summary-box">
              <h3>Overall Summary</h3>

              <div className="summary-stats">
                <PremiumStat title="Total Customers" value={sampleStats.customers} icon="👥" />
                <PremiumStat title="Active Agents" value={sampleStats.agents} icon="🧑‍💼" />
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

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
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
