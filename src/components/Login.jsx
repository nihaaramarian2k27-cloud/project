import React, { useState } from 'react'
import { TextField, Button, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const handleLogin = () => {

    if (role === "student") {
      navigate("/studentdashboard");
    }
    else if (role === "admin") {
      navigate("/admindashboard");
    }

  }

  return (
    <div>

      <h2>Login</h2>

      <TextField label="Email" />
      <br /><br />

      <TextField label="Password" type="password" />
      <br /><br />

      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </TextField>

      <br /><br />

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
  Login
</Button>

    </div>
  )
}

export default Login
