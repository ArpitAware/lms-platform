import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* 🔹 Navbar */}
      <header
        style={{
          padding: "15px 30px",
          background: "#0f172a",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>My LMS</h2>
        <nav style={{ display: "flex", gap: "20px" }}>
          <span>Home</span>
          <span>Courses</span>
          <span>Contact</span>
        </nav>
      </header>

      {/* 🔹 Main Content */}
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* 👈 All pages render here */}
      </main>

      {/* 🔹 Footer */}
      <footer
        style={{
          padding: "15px",
          background: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        © 2026 My LMS. All rights reserved.
      </footer>
    </div>
  );
}

export default App;