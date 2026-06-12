import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateStatus = () => {

  const navigate = useNavigate();

  const handleSave = () => {
    alert("Status Updated Successfully");
    navigate("/allcomplaints");
  }
  return (
    <div>
        
      <br /><h2>Update Status</h2>

      <p>Complaint ID : CMP001</p>

      <select>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>

      <br /><br />

       <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default UpdateStatus
