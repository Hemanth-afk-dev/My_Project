// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="card">
        <h1 className="card-title">🎓 Scholarship Portal</h1>
        <p className="card-subtitle">
          A simple portal for students to register, apply for scholarships, and
          track their application status online.
        </p>

        {/* Quick action buttons */}
        <div className="btn-row">
          <Link to="/register" className="btn btn-primary">
            🧑‍🎓 Student Register
          </Link>
          <Link to="/login" className="btn btn-success">
            🔑 Student Login
          </Link>
          <Link to="/admin" className="btn btn-secondary">
            🛠 Admin Panel
          </Link>
        </div>

        {/* Features section */}
        <div style={{ marginTop: "32px", textAlign: "left" }}>
          <h2 style={{ marginBottom: "10px" }}>Key Features</h2>
          <ul style={{ lineHeight: "1.9", fontSize: "16px", color: "#444" }}>
            <li>✔ Student registration with CGPA and year of study</li>
            <li>✔ Secure student login using email and password</li>
            <li>✔ Scholarships listed with eligibility and last date</li>
            <li>✔ Online application submission by eligible students</li>
            <li>✔ Admin review panel to approve or reject applications</li>
            <li>✔ Student can track status: Pending / Approved / Rejected</li>
          </ul>
        </div>
      </div>
    </div>
  );
}