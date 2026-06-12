import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <h1> Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h3>Total <br />Complaints</h3>
          <h2>10</h2>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h3>Pending <br />Complaints</h3>
          <h2>4</h2>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h3>In Progress</h3>
          <h2>3</h2>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h3>Resolved <br />Complaints</h3>
          <h2>3</h2>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <button onClick={() => navigate("/allcomplaints")}>
          View All Complaints
        </button>

        <button onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default AdminDashboard