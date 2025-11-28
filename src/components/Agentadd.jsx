import React, { useState } from "react";
import axios from "axios";
import "../style/agentadd.css";
import { useNavigate } from "react-router-dom";

export default function AddAgent() {

  const navigate = useNavigate();

  const [agent, setAgent] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    mandal: "",
    address: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setAgent({ ...agent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/agents", agent);

      setSuccess("Agent added successfully!");
      setTimeout(() => setSuccess(""), 3000);

      // Reset form
      setAgent({
        name: "",
        phone: "",
        email: "",
        state: "",
        district: "",
        mandal: "",
        address: ""
      });

      // Redirect after 1 sec
      setTimeout(() => navigate("/admin"), 1500);

    } catch (error) {
      console.error("Error adding agent:", error);
      alert("Failed to add agent");
    }
  };

  return (
    <div className="main-content">

      {/* ---------- HEADER + BREADCRUMB ---------- */}
      <div className="dashboard-header">
        <div>
          <h2>Add Agent</h2>
          <p className="breadcrumb">
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => navigate("/admin")}
            >
              ← Back
            </button>
          </p>
        </div>
      </div>

      {/* SUCCESS MESSAGE */}
      {success && <div className="alert alert-success">{success}</div>}

      {/* ---------- FORM CARD ---------- */}
      <div className="card">
        <h4>Agent Details</h4>

        <div className="row g-3">

          <div className="col-md-4">
            <input className="form-control"
              name="name"
              value={agent.name}
              placeholder="Full Name"
              onChange={handleChange} />
          </div>

          <div className="col-md-4">
            <input className="form-control"
              name="phone"
              value={agent.phone}
              placeholder="Phone Number"
              onChange={handleChange} />
          </div>

          <div className="col-md-4">
            <input className="form-control"
              name="email"
              value={agent.email}
              placeholder="Email Address"
              onChange={handleChange} />
          </div>

          <div className="col-md-4">
            <select className="form-control"
              name="state"
              value={agent.state}
              onChange={handleChange}>
              <option value="">Select State</option>
              <option>AP</option>
              <option>TS</option>
            </select>
          </div>

          <div className="col-md-4">
            <input className="form-control"
              name="district"
              value={agent.district}
              placeholder="District"
              onChange={handleChange} />
          </div>

          <div className="col-md-4">
            <input className="form-control"
              name="mandal"
              value={agent.mandal}
              placeholder="Mandal"
              onChange={handleChange} />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              name="address"
              rows="3"
              value={agent.address}
              placeholder="Address"
              onChange={handleChange}
            />
          </div>

        </div>

        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>

    </div>
  );
}
