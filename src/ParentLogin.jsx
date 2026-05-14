import React, { useState } from "react";

function ParentLogin({
  students,
  setSelectedStudent,
  setPage,
}) {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const student = students.find(
      (s) =>
        s.id === id &&
        s.password === password
    );

    if (student) {
      setSelectedStudent(student);
      setPage("parentView");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="card">

      <h2>Parent Login</h2>

      <input
        type="text"
        placeholder="Student ID"
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

export default ParentLogin;