import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  form: {
    minWidth: 500,
  },
  inputs: {
    border: "1px solid #eee",
    padding: "20px 20px 20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 8px .2px rgba(0,0,0,0.5)",
  },
  input: {
    width: "100%",
    margin: "10px 0",
  },
  loginBtn:{
      width:"100%",
      marginTop:"20px",
      backgroundColor:"#1b1f23",
      '&:hover': {
        backgroundColor: '#1b1f23'
      }
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <h3 style={{ margin: "20px 0" }}>Welcome Back</h3>
        <div className={classes.inputs}>
          <TextField
            className={classes.input}
            label="Email or Username"
            variant="outlined"
            type="email"
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="outlined"
            type="password"
          />
          <a href="#" style={{ display: "block", textAlign: "right" }}>
            Forgot password?
          </a>
          <Button className={classes.loginBtn} variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
