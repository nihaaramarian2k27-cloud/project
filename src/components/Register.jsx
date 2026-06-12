import { Button, TextField,MenuItem } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const Register= () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <h3>Register</h3>
        <TextField label="Name" variant="outlined"/><br /><br />
        <TextField label="Email" variant="outlined"/><br /><br />
        <TextField label="Password" variant="outlined"/><br /><br />
        <TextField select label="Role"value={role}onChange={(e) => setRole(e.target.value)}>&nbsp;&nbsp;
        <MenuItem value="student">Student</MenuItem>&nbsp;&nbsp;
          <MenuItem value="admin">Admin</MenuItem>&nbsp;&nbsp;
        </TextField>
        <br />
        <br />
        <Button
  variant="contained"
  onClick={() => {
    localStorage.setItem("user", JSON.stringify({
      email,
      password,
      role
    }));
    
    alert("Registered Successfully");
    navigate("/login");
  }}
>
  Register
</Button>
    </div>
  )
}

export default Register
