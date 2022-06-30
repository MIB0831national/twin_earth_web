import * as React from 'react';
import {Button,CssBaseline,TextField,Link,Paper,Box,Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Img from '../../asset/logo.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/MIB0831national">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
            <Grid item xs={0} sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/Yh6K2eTr_FY)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor:'#70BFA3',  display: 'flex', 
            justifyContent: 'center',alignItems: 'center'}}>
                <Box sx={{my: 8,mx: 4,display: 'flex',flexDirection: 'column',alignItems: 'center',
                backgroundColor:'white',padding:"15px",borderRadius:"10px 10px 10px 10px"}}> 
                        <img src={Img} style={{maxWidth:'160px'}}/>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
                                color="success"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signUp" variant="body2">
                                        {"Don't have an account?"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                </Box>
            </Grid>
        </Grid>
    );
}