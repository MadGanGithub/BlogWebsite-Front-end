import * as React from 'react';
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
import AppBar from  "./appbar.js";
import { useEffect,useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        MadStuffs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {


    //Specifications of username and password
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    //Initial conditions
    const[user,setUser]=useState('');
    const[validUser,setValidUser]=useState(false);
    const[userFocus,setUserFocus]=useState(false);

    const[pass,setPass]=useState('');
    const[validPass,setValidPass]=useState(false);
    const[passFocus,setPassFocus]=useState(false);

    const[match,setMatch]=useState('');
    const[validMatch,setValidMatch]=useState(false);
    const[matchFocus,setMatchFocus]=useState(false);

    const[err,setErr]=useState('');
    const[success,setSuccess]=useState(false);

    //when username is changed,it should check whether the username is under the given conditions
    useEffect(() => {
        const result=USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidUser(result);
    }, [user])
    
    //when password is changed,it should check whether the password is under the given conditions
    useEffect(() => {
        const result=PWD_REGEX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
        const matche= pass===match;
        setValidMatch(matche);
    }, [pass, match])

    
    useEffect(() => {
        setErr('');
    }, [user, pass, match])


  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <AppBar/>
      <Container component="main" maxWidth="sm">
  
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow:5,
            padding:5 
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  aria-invalid={validUser?"false":"true"}
                  aria-describedby="invalid_format"
                  autoFocus
                  onChange={(e)=>setUser(e.target.value)}
                  onFocus={(e)=>setUserFocus(true)}
                  onBlur={setUserFocus(false)}
                />
                <p id='invalid_format' className={userFocus && user && !validUser ?"instructions":"offscreen"}>
                  Shit is there
                </p>
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
              <Grid item xs={12}>
              <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"black"}}
            >
              Subscribe
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  );
}