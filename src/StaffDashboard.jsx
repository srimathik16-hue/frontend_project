import React, { useState } from "react";

function StaffDashboard({
  students,
  setStudents,
  setPage,
}) {

  const [newStudent, setNewStudent] = useState({
    name: "",
    id: "",
    password: "",
    department: "",
    behaviour: "",
    arrears: "",
    fees: "",
    examFees: "",
  });

  const addStudent = () => {

    setStudents([...students, newStudent]);

    setNewStudent({
      name: "",
      id: "",
      password: "",
      department: "",
      behaviour: "",
      arrears: "",
      fees: "",
      examFees: "",
    });
  };

  const deleteStudent = (id) => {
    const updated = students.filter(
      (s) => s.id !== id
    );

    setStudents(updated);
  };

  return (
    <div>

      <h2>Staff Dashboard</h2>

      <div className="card">

        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="ID"
          value={newStudent.id}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              id: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={newStudent.password}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              password: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={newStudent.department}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              department: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Behaviour"
          value={newStudent.behaviour}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              behaviour: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Arrears"
          value={newStudent.arrears}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              arrears: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Fees"
          value={newStudent.fees}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              fees: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Exam Fees"
          value={newStudent.examFees}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              examFees: e.target.value,
            })
          }
        />

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      <div className="table-container">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Department</th>
              <th>Behaviour</th>
              <th>Arrears</th>
              <th>Fees</th>
              <th>Exam Fees</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.department}</td>
                <td>{student.behaviour}</td>
                <td>{student.arrears}</td>
                <td>{student.fees}</td>
                <td>{student.examFees}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteStudent(student.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      <button
        className="back-btn"
        onClick={() => setPage("home")}
      >
        Logout
      </button>

    </div>
  );
}

export default StaffDashboard;