import React, { useState } from "react";
import { BASE_URL } from "../api";

export default function Customer() {
  const [userRegistration, setUserRegistration] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    aadhaar: "",
    pan: "",
    address: "",
    agentid: "",
  });

  const handleClick = (e) => {
    setUserRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASE_URL}/customer/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegistration),
    });

    if (response.ok) {
      alert("Customer saved successfully!");

      setUserRegistration({
        id: "",
        name: "",
        email: "",
        number: "",
        aadhaar: "",
        pan: "",
        address: "",
        agentid: "",
      });
    } else {
      alert("Error saving customer!");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row w-50 mx-auto">

          <h1 className="text-center mb-4"><u>Add Customer</u></h1>

          <label className="my-2">Customer ID:</label>
          <input
            type="text"
            name="id"
            className="form-control"
            value={userRegistration.id}
            onChange={handleClick}
          />

          <label className="my-2">Name: <span className="text-danger">*</span></label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            value={userRegistration.name}
            onChange={handleClick}
          />

          <label className="my-2">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={userRegistration.email}
            onChange={handleClick}
          />

          <label className="my-2">Mobile Number: <span className="text-danger">*</span></label>
          <input
            type="tel"
            name="number"
            className="form-control"
            required
            pattern="[0-9]{10}"
            maxLength="10"
            value={userRegistration.number}
            onChange={handleClick}
          />

          <label className="my-2">Aadhaar Number: <span className="text-danger">*</span></label>
          <input
            type="tel"
            name="aadhaar"
            className="form-control"
            required
            pattern="[0-9]{12}"
            maxLength="12"
            value={userRegistration.aadhaar}
            onChange={handleClick}
          />

          <label className="my-2">PAN Number: <span className="text-danger">*</span></label>
          <input
            type="text"
            name="pan"
            className="form-control"
            required
            maxLength="10"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            title="Enter valid PAN (ABCDE1234F)"
            value={userRegistration.pan}
            onChange={handleClick}
          />

          <label className="my-2">Address:</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={userRegistration.address}
            onChange={handleClick}
          />

          <label className="my-2">Agent ID:</label>
          <input
            type="text"
            name="agentid"
            className="form-control"
            value={userRegistration.agentid}
            onChange={handleClick}
          />

          <button className="btn btn-primary mt-4 w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}
