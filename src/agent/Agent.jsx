import React, { useState } from "react";

export default function Agents() {
  const [search, setSearch] = useState({
    id: "",
    name: "",
    state: "",
    district: "",
    mandal: "",
  });

  const agents = [
    { id: 101, name: "Arun Kumar", state: "AP", district: "Guntur", mandal: "Mangalagiri" },
    { id: 102, name: "Ravi Teja", state: "TS", district: "Hyderabad", mandal: "LB Nagar" },
  ];

  const filtered = agents.filter(a =>
    (search.id === "" || a.id.toString().includes(search.id)) &&
    (search.name === "" || a.name.toLowerCase().includes(search.name.toLowerCase())) &&
    (search.state === "" || a.state === search.state) &&
    (search.district === "" || a.district === search.district) &&
    (search.mandal === "" || a.mandal === search.mandal)
  );

  return (
    <div className="main-content">

      <div className="dashboard-header">
        <h2>Agents</h2>
        <button className="action-btn">+ Add Agent</button>
      </div>

      {/* Filters */}
      <div className="card">
        <h4>Search Filters</h4>
        <div className="action-grid">
          <input className="input" placeholder="ID" onChange={(e)=>setSearch({...search,id:e.target.value})}/>
          <input className="input" placeholder="Name" onChange={(e)=>setSearch({...search,name:e.target.value})}/>
          <select className="input" onChange={(e)=>setSearch({...search,state:e.target.value})}>
            <option value="">State</option>
            <option>AP</option><option>TS</option>
          </select>
          <input className="input" placeholder="District" onChange={(e)=>setSearch({...search,district:e.target.value})}/>
          <input className="input" placeholder="Mandal" onChange={(e)=>setSearch({...search,mandal:e.target.value})}/>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <h4>Agent List</h4>
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
              <th>District</th>
              <th>Mandal</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map(a => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.state}</td>
                <td>{a.district}</td>
                <td>{a.mandal}</td>
                <td><button className="btn-view">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
