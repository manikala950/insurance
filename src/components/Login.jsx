import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

export default function Login() {
  const navigate = useNavigate();

  // Dummy Login Users
  const users = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    agent: { username: "agent01", password: "agent123", role: "agent" },
    customer: { username: "cust01", password: "cust123", role: "customer" }
  };

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Check if user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("userRole");
    if (loggedInUser) {
      navigate(`/${loggedInUser}`);
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = form;

    if (username === users.admin.username && password === users.admin.password) {
      localStorage.setItem("userRole", "admin");
      navigate("/admin");
      return;
    }

    if (username === users.agent.username && password === users.agent.password) {
      localStorage.setItem("userRole", "agent");
      navigate("/agent");
      return;
    }

    if (username === users.customer.username && password === users.customer.password) {
      localStorage.setItem("userRole", "customer");
      navigate("/customer");
      return;
    }

    setError("Invalid username or password!");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2 className="text-center mb-4">Insurance Login</h2>

        {error && <div className="error-box">{error}</div>}

        <input
          type="text"
          placeholder="Enter Username"
          className="login-input"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="login-input"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="login-btn">Login</button>

        <div className="sample-credentials">
          <p><strong>Admin:</strong> admin / admin123</p>
          <p><strong>Agent:</strong> agent01 / agent123</p>
          <p><strong>Customer:</strong> cust01 / cust123</p>
        </div>
      </form>
    </div>
  );
}
