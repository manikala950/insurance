import React, { useState } from "react";

export default function Claims() {

  const [search, setSearch] = useState({
    claimId: "",
    customer: "",
    status: "",
  });

  const claims = [
    { id: 501, customer: "Akhil", policy: "Car Shield", amount: 15000, status: "Pending" },
    { id: 502, customer: "Sita", policy: "Health Plus", amount: 32000, status: "Approved" },
  ];

  const filtered = claims.filter((c) =>
    (search.claimId === "" || c.id.toString().includes(search.claimId)) &&
    (search.customer === "" || c.customer.toLowerCase().includes(search.customer.toLowerCase())) &&
    (search.status === "" || c.status === search.status)
  );

  return (
    <div className="main-content">

      <div className="dashboard-header">
        <h2>Insurance Claims</h2>
        <button className="action-btn">+ New Claim</button>
      </div>

      {/* Filters */}
      <div className="card">
        <h4>Search Filters</h4>

        <div className="action-grid">
          <input className="input" placeholder="Claim ID" onChange={(e)=>setSearch({...search,claimId:e.target.value})}/>
          <input className="input" placeholder="Customer" onChange={(e)=>setSearch({...search,customer:e.target.value})}/>
          
          <select className="input" onChange={(e)=>setSearch({...search,status:e.target.value})}>
            <option value="">Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <h4>Claim List</h4>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Customer</th>
              <th>Policy</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.customer}</td>
                <td>{c.policy}</td>
                <td>₹{c.amount}</td>
                <td>{c.status}</td>
                <td><button className="btn-view">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}
