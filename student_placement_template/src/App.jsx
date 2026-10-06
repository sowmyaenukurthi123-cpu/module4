import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from "./Student";

function Dashboard() {
  return (
    <div>
      <h1>Student Placement Dashboard</h1>

      <h2>Dashboard</h2>

      <div>
        <h3>Total Jobs Applied</h3>
        <p>5</p>
      </div>

      <div>
        <h3>Applications Under Review</h3>
        <p>3</p>
      </div>

      <div>
        <h3>Interviews Scheduled</h3>
        <p>2</p>
      </div>
    </div>
  );
}

function Jobs() {
  return (
    <div>
      <h1>Job Openings</h1>

      <ul>
        <li>TCS - Software Developer</li>
        <li>Infosys - System Engineer</li>
        <li>Accenture - Software Engineer</li>
      </ul>
    </div>
  );
}

function Applications() {
  return (
    <div>
      <h1>My Applications</h1>

      <p>TCS - Under Review</p>
      <p>Infosys - Interview Scheduled</p>
      <p>Accenture - Applied</p>
    </div>
  );
}

function Interviews() {
  return (
    <div>
      <h1>Interview Schedule</h1>

      <p>TCS - 10 October 2026</p>
      <p>Infosys - 15 October 2026</p>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h1>Notifications</h1>

      <p>Interview scheduled with TCS.</p>
      <p>New job opening available.</p>
      <p>Placement announcement updated.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link> {" | "}
        <Link to="/student">Profile</Link> {" | "}
        <Link to="/jobs">Jobs</Link> {" | "}
        <Link to="/applications">Applications</Link> {" | "}
        <Link to="/interviews">Interviews</Link> {" | "}
        <Link to="/notifications">Notifications</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;