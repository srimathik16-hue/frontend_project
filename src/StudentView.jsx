import React from "react";

function StudentView({ student, setPage }) {

  return (
    <div className="card student-view">

      <h2>Student Details</h2>

      <p><b>Name:</b> {student.name}</p>
      <p><b>ID:</b> {student.id}</p>
      <p><b>Department:</b> {student.department}</p>
      <p><b>Behaviour:</b> {student.behaviour}</p>
      <p><b>Arrears:</b> {student.arrears}</p>
      <p><b>Fees:</b> {student.fees}</p>
      <p><b>Exam Fees:</b> {student.examFees}</p>

      <button
        className="back-btn"
        onClick={() => setPage("home")}
      >
        Back
      </button>

    </div>
  );
}

export default StudentView;