
import React from 'react'
import { useNavigate } from "react-router-dom";

const MyComplaints = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>My Complaints</h2>

      <hr />

      <h3>CMP001</h3>
      <p>Title : Fan Not Working</p>
      <p>Category : Classroom</p>
      <p>Status : Pending</p>

      <button onClick={() => navigate("/editcomplaint")}>Edit</button>
      <button style={{
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer"
     }}
     onClick={() => alert("Complaint Deleted Successfully")}>
     Delete
     </button>
     <hr />
      <h3>CMP002</h3>
      <p>Title : WiFi Issue</p>
      <p>Category : Library</p>
      <p>Status : Resolved</p>

      <button onClick={() => navigate("/editcomplaint")}>Edit</button>
      <button
  style={{
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer"
  }}
  onClick={() => alert("Complaint Deleted Successfully")}
>
  Delete
</button>

    </div>
  )
}

export default MyComplaints