import React from "react";

function Student() {
  const student = {
    name: "Phanindra",
    regNo: "24XXXXXX",
    branch: "Electronics and Computer Engineering",
    email: "student@example.com",
  };

  return (
    <div>
      <h1>Student Profile</h1>

      <div>
        <h2>{student.name}</h2>
        <p>Registration No: {student.regNo}</p>
        <p>Branch: {student.branch}</p>
        <p>Email: {student.email}</p>
      </div>
    </div>
  );
}

export default Student;