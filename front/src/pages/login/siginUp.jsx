import * as React from 'react';
import {Button,CssBaseline,TextField,Grid,Box,Container} from '@mui/material';
import Img from '../../asset/logo.png';


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div class="signUpDiv">
      <Container component="main" maxWidth="xs" style={{backgroundColor:'white',padding:"15px",margin:"15px",borderRadius:"10px 10px 10px 10px"}}>
        <CssBaseline />
        <Box class='signUpTop'>
        <img src={Img} style={{maxWidth:'160px', paddingBottom:'20px'}}/>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 , paddingBottom:'50px'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='success'
              sx={{ mt: 3, mb: 2, }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      </div>
  );
}