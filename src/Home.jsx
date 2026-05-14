import React from "react"
import logo from'./assets/logo.png'

function Home({ setPage }) {
  return (
    <div>

      <div className="logo-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />

        <h1>Student Tracker</h1>
      </div>

      <div className="home-buttons">
        <button onClick={() => setPage("staffLogin")}>
          Staff Login
        </button>

        <button onClick={() => setPage("studentLogin")}>
          Student Login
        </button>

        <button onClick={() => setPage("parentLogin")}>
          Parent Login
        </button>
      </div>

    </div>
  );
}

export default Home;