import React, { useState } from "react";

function StaffLogin({ setPage }) {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (id === "staff" && password === "1234") {
      setPage("staffDashboard");
    } else {
      alert("Invalid Staff Login");
    }
  };

  return (
    <div className="card">

      <h2>Staff Login</h2>

      <input
        type="text"
        placeholder="Staff ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <button
        className="back-btn"
        onClick={() => setPage("home")}
      >
        Back
      </button>

    </div>
  );
}

export default StaffLogin;