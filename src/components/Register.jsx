import { Button, TextField,MenuItem } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const Register= () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
  return (
    <div>
        <h3>Register</h3>
        <TextField label="Name" variant="outlined"/><br />
        <TextField label="Email" variant="outlined"/><br />
        <TextField label="Password" variant="outlined"/><br />&nbsp;&nbsp;
        <TextField select label="Role"value={role}onChange={(e) => setRole(e.target.value)}>&nbsp;&nbsp;
<MenuItem value="student">Student</MenuItem>&nbsp;&nbsp;
<MenuItem value="admin">Admin</MenuItem>&nbsp;&nbsp;
</TextField>
        <Button
  variant="contained"
  onClick={() => {
    if (role === "student") {
      navigate("/dashboard");
    } else if (role === "admin") {
      navigate("/admindashboard");
    }
  }}
>
  Register
</Button>
    </div>
  )
}

export default Register
