import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = props => {

  
  let { 
    email , 
    password , 
    handleInputChange,
    handleInputSubmit,
    rememberMe
  } = props

  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar >
        <LockOutlinedIcon/>
      </Avatar>
    
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <form className={classes.form} noValidate onSubmit={handleInputSubmit} >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          value = { email }
          label = "Email"
          onChange = { handleInputChange }
          
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          value = { password }
          label="Password"
          onChange = { handleInputChange }
          
          autoComplete="current-password"
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary"checked={rememberMe} onChange={handleInputChange} />}
            label="Remember me"
          />
      <Button 
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        className={classes.submit}
      >
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
    </div>
  </Container>
  )

}



export class LoginForm extends Component {
  render() {    
    let { 
      email , 
      email_v, 
      password_v, 
      password , 
      handleInputChange,
      handleInputSubmit,
      rememberMe
    } = this.props
    return (
      < LoginForm
      email={email}
      email_v={email_v}
      password_v={password_v} 
      password={password}
      handleInputChange={handleInputChange}
      handleInputSubmit={handleInputSubmit}
      rememberMe={rememberMe}
      />
    );
  }
}

export default Login;
