import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllComplaints = () => {
    const navigate = useNavigate();
  return (
    <div>
      <br /><h2>All Complaints</h2>

      <hr />

      <h3>CMP001</h3>
      <p>Student : Rahul</p>
      <p>Title : Fan Not Working</p>
      <p>Status : Pending</p>
      <button onClick={() => navigate("/updatestatus")}>
       Update Status
      </button>
      <hr />

      <h3>CMP002</h3>
      <p>Student : Arun</p>
      <p>Title : WiFi Issue</p>
      <p>Status : In Progress</p>

      <button onClick={() => navigate("/updatestatus")}>
      Update Status
  
      </button>
    <hr />
    </div>
  )
}

export default AllComplaints