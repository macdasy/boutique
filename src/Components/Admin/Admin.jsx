import './Admin.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { AdminDashboard } from './AdminDashboard';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} style={{ color:'black' }} >
      {'Copyright © '}
      <Link style={{color:'blue'}} href=".">
        Urja
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Admin() {

    const [logged, setLogged] = useState(false);
    const  [err, setErr] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });

        const body = JSON.stringify({
          user: data.get('email'),
          pass: data.get('password'),
        });

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
        };

        const res = await fetch(`https://boutique-scpw.onrender.com/admin/login`, requestOptions);
        const msg = await res.json();
        console.log(msg.msg);
        console.log(msg.err);

        if(msg.err) return setErr(msg.err);
        
        setErr(msg.msg);
        setLogged(true);

    };

  return (

    <>
    { logged ? 
        <>
        
        <AdminDashboard />
        
        </>
        :
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Portal
          </Typography>
          <p style={{color:'red'}} > {err} </p>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background:'orange', color:'black' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    }
  </>
  );
}