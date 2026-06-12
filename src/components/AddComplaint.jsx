import React from 'react'
import { TextField, Button, MenuItem } from '@mui/material'


const AddComplaint = () => {
  
  const complaintId = "CMP001";
  const date = new Date().toLocaleDateString();
   const handleSubmit = () => {alert("Complaint Submitted Successfully");
   
  }

  return (
    <div>
      <h2>Add Complaint</h2>

      <TextField label="Complaint ID"value={complaintId}disabled /> <br /><br />
      <TextField label="Complaint Title"variant="outlined"/><br /><br />
      <TextField select label="Category "defaultValue="">
        <MenuItem value="Classroom">Classroom</MenuItem>
        <MenuItem value="WiFi">WiFi</MenuItem>
        <MenuItem value="Electrical">Electrical</MenuItem>
        <MenuItem value="Water Supply">Water Supply</MenuItem>
        <MenuItem value="Laboratory">Laboratory</MenuItem>
        <MenuItem value="Hostel">Hostel</MenuItem>
        <MenuItem value="Library">Library</MenuItem>
        <MenuItem value="Transport">Transport</MenuItem>
        <MenuItem value="Cleaniness">Cleaniness</MenuItem>
       </TextField><br /><br />
       <TextField label="Location"variant="outlined"/><br /><br />
       <TextField label="Description"multiline rows={4}variant="outlined"/><br /><br />
       <TextField label="Date Submitted"value={date} disabled/><br /><br />
       <Button variant="contained" onClick={handleSubmit}>Submit Complaint</Button>
       </div>
  )
}

export default AddComplaint