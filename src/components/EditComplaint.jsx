import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditComplaint = () => {

  const navigate = useNavigate();

  const handleUpdate = () => {
    alert("Complaint Updated Successfully");
    navigate("/mycomplaints");
  }

  return (
    <div>
      <h2>Edit Complaint</h2>

      <input type="text" defaultValue="Fan Not Working" />

      <br /><br />

      <button onClick={handleUpdate}>
        Update Complaint
      </button>
    </div>
  )
}

export default EditComplaint;