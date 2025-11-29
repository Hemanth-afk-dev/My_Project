// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      {/* Top Navbar */}
      <header
        style={{
          padding: "15px 25px",
          background: "#ffffff",
          borderBottom: "2px solid #007bff",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          🎓 Scholarship Portal
        </div>

        <nav style={{ display: "flex", gap: "16px", fontSize: "15px" }}>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Student Login</Link>
          <Link to="/student">Student Dashboard</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: "0 24px 40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      {/* Simple Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px 0",
          borderTop: "1px solid #ddd",
          fontSize: "13px",
          color: "#555",
          background: "#f8f9fa",
        }}
      >
        © {new Date().getFullYear()} Scholarship Portal • Built with React & Firebase
      </footer>
    </BrowserRouter>
  );
}

export default App;