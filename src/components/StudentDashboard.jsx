import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <h1> Student Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"10px"}}>
          <h3>Total</h3>
          <h2>5</h2>
        </div>

        <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"10px"}}>
          <h3>Pending</h3>
          <h2>2</h2>
        </div>

        <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"10px"}}>
          <h3>In Progress</h3>
          <h2>1</h2>
        </div>

        <div style={{border:"1px solid #ddd",padding:"20px",borderRadius:"10px"}}>
          <h3>Resolved</h3>
          <h2>2</h2>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <button onClick={() => navigate("/addcomplaint")}>
          Add Complaint
        </button>

        <button onClick={() => navigate("/mycomplaints")}>
          My Complaints
        </button>

        <button onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default StudentDashboard