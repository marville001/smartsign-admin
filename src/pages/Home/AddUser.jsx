import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";
import { auth, db } from "../../firebase";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
}));

const AddUser = () => {
  const classes = useStyles();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [idno, setIdno] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const updateError = (error) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const handleAddUser = () => {
    if (
      fName === "" ||
      lName === "" ||
      email === "" ||
      password === "" ||
      idno === "" ||
      role === ""
    ) {
      updateError("All fields are required");
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      updateError("Invalid email");
    } else if (password.length < 8) {
      updateError("Password should be 8 characters or more");
    } else if (idno.length < 8) {
      updateError("Id number should be 8 characters");
    } else {
      addSubmit();
    }
  };

  const generateUserDocument = (user) => {
    if (!user) return;
    const uid = user.uid;
    const userRef = db.ref("Users").child(uid);

    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDay();

    const _user = {
      email,
      firstname: fName,
      lastname: lName,
      idNumber: idno,
      role,
      status: active ? "active" : "not active",
      date: `${year}-${month}-${day}`,
    };

    userRef.set(_user);
  };

  const addSubmit = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user);

      showConfirmed("User Added Successfully");

      setFName("");
      setLName("");
      setEmail("");
      setIdno("");
      setPassword("");
      setRole("");
      setActive(false);
    } catch (error) {
      updateError(error.message);
    }
  };

  const showConfirmed = (msg) => {
    setConfirm(msg);
    setTimeout(() => {
      setConfirm("");
    }, 5000);
  };

  return (
    <div>
      <Breadcrumb content="New User" />
      <Container className={classes.container}>
        <Title>Add New User</Title>
        {error && <div className="error">{error}</div>}
        {confirm && <div className="confirm">{confirm}</div>}
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              variant="outlined"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="first-name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              variant="outlined"
              label="Last name"
              fullWidth
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              type="email"
              variant="outlined"
              label="Enter Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="idno"
              name="idno"
              variant="outlined"
              label="ID Number"
              type="number"
              fullWidth
              value={idno}
              onChange={(e) => setIdno(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="password"
              name="password"
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="role"
              name="role"
              select
              label="Select Role"
              variant="outlined"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              SelectProps={{
                native: true,
              }}
            >
              <option></option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value={active}
                  onChange={(e) => setActive(e.target.checked)}
                  color="secondary"
                  name="active"
                />
              }
              label="Active"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color={"primary"}
              style={{ width: "100%" }}
              onClick={handleAddUser}
            >
              Add User
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddUser;
