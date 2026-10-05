import { useState } from "react";

function Student(props) {
  const [marks, setMarks] = useState(75);

  return (
    <div>
      <h1>Student Marks</h1>

      <h2>Name: {props.name}</h2>
      <h3>Subject: {props.subject}</h3>
      <h3>Marks: {marks}</h3>

      <button onClick={() => setMarks(marks + 5)}>
        Add 5 Marks
      </button>

      <button onClick={() => setMarks(marks - 5)}>
        Remove 5 Marks
      </button>
    </div>
  );
}

function App() {
  return (
    <Student
      name="Rahul"
      subject="React"
    />
  );
}

export default App;