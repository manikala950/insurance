import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/notice.css"
export default function Notice() {
  const navigate = useNavigate();
  const [newNotice, setNewNotice] = useState("");
  const [notices, setNotices] = useState([
    { id: 1, text: "Policy renewal reminder sent", time: "2h ago" },
    { id: 2, text: "Scheduled downtime — Saturday 2AM–3AM", time: "1d ago" },
  ]);

  const addNotice = () => {
    if (!newNotice.trim()) return;
    setNotices([{ id: Date.now(), text: newNotice, time: "Just now" }, ...notices]);
    setNewNotice("");
  };

  return (
    <div className="container py-3">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-light">Notices</h2>

        <button
          className="btn btn-warning fw-bold"
          onClick={() => navigate(-1)}
        >
          ⬅ Back
        </button>
      </div>

      {/* CREATE NOTICE */}
      <div className="card bg-dark text-light border-secondary mb-4">
        <div className="card-body">
          <h4 className="mb-3">Create Notice</h4>

          <textarea
            className="form-control bg-secondary text-light"
            rows={3}
            placeholder="Type new notice..."
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
          />

          <button className="btn btn-info mt-3 w-100 fw-bold" onClick={addNotice}>
            Post Notice
          </button>
        </div>
      </div>

      {/* NOTICE LIST */}
      <div className="card bg-dark text-light border-secondary">
        <div className="card-body">
          <h4 className="mb-3">All Notices</h4>

          <ul className="list-group">
            {notices.map((n) => (
              <li
                key={n.id}
                className="list-group-item d-flex justify-content-between align-items-center bg-secondary text-light border-dark"
              >
                <span>{n.text}</span>
                <small className="text-warning">{n.time}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
