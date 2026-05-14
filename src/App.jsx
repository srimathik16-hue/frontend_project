import React, { useState } from "react";
import "./App.css";

import Home from "./Home";
import StaffLogin from "./StaffLogin";
import StudentLogin from "./StudentLogin";
import ParentLogin from "./ParentLogin";
import StaffDashboard from "./StaffDashboard";
import StudentView from "./StudentView";
import ParentView from "./ParentView";

function App() {

  const [page, setPage] = useState("home");

  const [students, setStudents] = useState([
    {
      name: "Arun",
      id: "101",
      password: "101",
      department: "CSE",
      behaviour: "Good",
      arrears: "0",
      fees: "Paid",
      examFees: "Paid",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="container">

      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "staffLogin" && (
        <StaffLogin setPage={setPage} />
      )}

      {page === "studentLogin" && (
        <StudentLogin
          students={students}
          setSelectedStudent={setSelectedStudent}
          setPage={setPage}
        />
      )}

      {page === "parentLogin" && (
        <ParentLogin
          students={students}
          setSelectedStudent={setSelectedStudent}
          setPage={setPage}
        />
      )}

      {page === "staffDashboard" && (
        <StaffDashboard
          students={students}
          setStudents={setStudents}
          setPage={setPage}
        />
      )}

      {page === "studentView" && (
        <StudentView
          student={selectedStudent}
          setPage={setPage}
        />
      )}

      {page === "parentView" && (
        <ParentView
          student={selectedStudent}
          setPage={setPage}
        />
      )}

    </div>
  );
}

export default App;