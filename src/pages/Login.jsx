import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {auth} from "../firebase";

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
  loginBtn: {
    width: "100%",
    marginTop: "20px",
    backgroundColor: "#1b1f23",
    "&:hover": {
      backgroundColor: "#1b1f23",
    },
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginSubmit = () => {
    if (email == "" || password == "") {
      updateError("All fields are required");
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      updateError("Invalid email");
    } else if (password.length < 8) {
      updateError("Password should be 8 characters or more");
    } else {
      handleLogin();
    }
  };

  const updateError = (error) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const handleLogin = async () => {
    console.log(email, password);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        updateError(error.code);
      } else {
        updateError("Failed to Login. Try again later");
      }
    }
  };

  return (
    <Container className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <h3 style={{ margin: "20px 0" }}>Welcome Back</h3>
        {error && <div className="error">{error}</div>}
        <div className={classes.inputs}>
          <TextField
            className={classes.input}
            label="Email or Username"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" style={{ display: "block", textAlign: "right" }}>
            Forgot password?
          </a>
          <Button
            onClick={loginSubmit}
            className={classes.loginBtn}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
