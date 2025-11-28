import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";

export default function Customer() {
  const navigate = useNavigate();

  const [customerList, setCustomerList] = useState([]);
  const [search, setSearch] = useState("");
  const [success, setSuccess] = useState("");

  const [userRegistration, setUserRegistration] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    aadhaar: "",
    pan: "",
    address: "",
  });

  /* ----------------------------------------------
      LOAD CUSTOMER DATA FROM BACKEND
  ---------------------------------------------- */
  const loadData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/public/customer/all`);
      const data = await res.json();
      setCustomerList(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
  }, []);

  /* ----------------------------------------------
      HANDLE INPUT CHANGE
  ---------------------------------------------- */
  const handleClick = (e) => {
    setUserRegistration({ ...userRegistration, [e.target.name]: e.target.value });
  };

  /* ----------------------------------------------
      SUBMIT FORM DATA
  ---------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().slice(0, 10);

    try {
      const response = await fetch(`${BASE_URL}/public/customer/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userRegistration, createdDate: today }),
      });

      if (response.ok) {
        setSuccess("Customer Added Successfully 🎉");
        setTimeout(() => setSuccess(""), 3000);

        setCustomerList([
          ...customerList,
          { ...userRegistration, createdDate: today },
        ]);

        setUserRegistration({
          id: "",
          name: "",
          email: "",
          number: "",
          aadhaar: "",
          pan: "",
          address: "",
        });
      } else {
        alert("Failed to save customer.");
      }
    } catch (error) {
      alert("Server Error! Check Console.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000, #1c1c1c, #333333)",
        color: "#FFD700",
        fontFamily: "Poppins, sans-serif",
        paddingBottom: "50px",
      }}
    >
      {/* ----------------------------------------------
          PREMIUM GOLDEN CSS
      ---------------------------------------------- */}
      <style>
        {`
        .gold-input {
          background: rgba(0,0,0,0.7);
          border: 1px solid gold;
          color: gold;
          border-radius: 8px;
          padding: 10px;
        }
        .gold-input:focus {
          box-shadow: 0 0 12px gold;
          transform: scale(1.02);
          transition: 0.25s;
        }
        .glass-card {
          backdrop-filter: blur(14px);
          background: rgba(255,255,255,0.08);
          border: 1px solid gold;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 0 15px rgba(255,215,0,0.25);
        }
        .gold-btn {
          background: linear-gradient(90deg, #FFD700, #f2c400, #FFD700);
          border: none;
          color: black;
          font-weight: 700;
          border-radius: 8px;
          padding: 10px;
          transition: 0.3s;
        }
        .gold-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 18px gold;
        }
        tr:hover {
          background: rgba(255,215,0,0.18);
          transition: 0.25s;
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(10px); }
          to { opacity:1; transform:translateY(0); }
        }
        .anim { animation: fadeIn 0.8s ease; }
      `}
      </style>

      {/* ----------------------------------------------
          HEADER BUTTONS
      ---------------------------------------------- */}
      <div className="d-flex justify-content-between p-3">
        <button className="btn btn-outline-warning fw-bold" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <button className="btn btn-outline-warning fw-bold" onClick={() => navigate("/nextpage")}>
          Next ➡
        </button>
      </div>

      {/* ----------------------------------------------
          TITLE
      ---------------------------------------------- */}
      <h1 className="text-center fw-bold anim" style={{ fontSize: "45px" }}>
        ⭐ Premium Customer Registry – PAN India 🇮🇳
      </h1>
      <p className="text-center" style={{ opacity: 0.75 }}>
        Trusted Nationwide Insurance Customer Management System
      </p>

      {/* SUCCESS ALERT */}
      {success && (
        <div className="alert alert-success text-center fw-bold anim" style={{ width: "40%", margin: "auto" }}>
          {success}
        </div>
      )}

      {/* ----------------------------------------------
          CUSTOMER FORM
      ---------------------------------------------- */}
      <form onSubmit={handleSubmit}>
        <div className="row w-50 mx-auto glass-card mt-3">

          <input
            type="text"
            name="id"
            placeholder="Customer ID (10 digits)"
            pattern="[0-9]{10}"
            maxLength="10"
            className="form-control gold-input my-2"
            value={userRegistration.id}
            onChange={handleClick}
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control gold-input my-2"
            value={userRegistration.name}
            onChange={handleClick}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control gold-input my-2"
            value={userRegistration.email}
            onChange={handleClick}
          />

          <input
            type="tel"
            name="number"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            maxLength="10"
            className="form-control gold-input my-2"
            value={userRegistration.number}
            onChange={handleClick}
            required
          />

          <input
            type="tel"
            name="aadhaar"
            placeholder="Aadhaar Number"
            pattern="[0-9]{12}"
            maxLength="12"
            className="form-control gold-input my-2"
            value={userRegistration.aadhaar}
            onChange={handleClick}
            required
          />

          <input
            type="text"
            name="pan"
            placeholder="PAN Number"
            maxLength="10"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            className="form-control gold-input my-2"
            value={userRegistration.pan}
            onChange={handleClick}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="form-control gold-input my-2"
            value={userRegistration.address}
            onChange={handleClick}
          />

          <button className="btn gold-btn mt-3 w-100 py-2">
            Save Customer
          </button>
        </div>
      </form>

      {/* ----------------------------------------------
          SEARCH BAR
      ---------------------------------------------- */}
      <div className="d-flex justify-content-center mt-4">
        <input
          type="text"
          placeholder="Search by Name / Mobile / PAN"
          className="form-control text-center"
          style={{
            width: "260px",
            background: "black",
            color: "gold",
            border: "1px solid gold",
            borderRadius: "25px",
          }}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      {/* ----------------------------------------------
          CUSTOMER TABLE
      ---------------------------------------------- */}
      <div className="container mt-4 glass-card">
        <h3 className="text-center fw-bold">Registered Customers Database</h3>

        <table className="table table-bordered text-center mt-3">
          <thead>
            <tr style={{ fontWeight: "800", fontSize: "17px", color: "gold" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Aadhaar</th>
              <th>PAN</th>
              <th>Address</th>
              <th>Added Date</th>
              <th>Our Customer</th>
            </tr>
          </thead>
          <tbody>
            {customerList
              .filter((c) =>
                Object.values(c).join(" ").toLowerCase().includes(search)
              )
              .map((c, index) => (
                <tr key={index}>
                  <td>{c.customerId}</td>
                  <td>{c.name}</td>
                  <td>{c.number}</td>
                  <td>{c.aadhar}</td>
                  <td>{c.pan}</td>
                  <td>{c.address}</td>
                  <td>{c.createdDate}</td>
                  <td>
                    <button className="btn btn-sm gold-btn px-3">
                      VERIFIED
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
