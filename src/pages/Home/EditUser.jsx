import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";
import { db } from "../../firebase";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
}));

const EditUser = (props) => {
  const classes = useStyles();
  const { users } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const id = props.match.params.id;
  const user = users.filter((user) => user.id === id)[0];

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [idno, setIdno] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(false);
  const [date, setDate] = useState("");

  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  console.log(setLoading);


  useEffect(() => {
    setFName(user?.firstname);
    setLName(user?.lastname);
    setEmail(user?.email);
    setIdno(user?.idNumber);
    setRole(user?.role);
    setDate(user?.date);
    setActive(user?.status === "active" ? true : false);
  }, [user]);

  const handleEditUser = () => {
    let ref = db.ref(`Users/${id}/`);
    ref
      .set({
        date: date,
        email: email,
        firstname: fName,
        idNumber: idno,
        lastname: lName,
        role: role,
        status: active ? "active" : "not active",
      })
      .then(() => {
        alert("User Updated Successfully");
      })
      .catch((e) => {
        alert("An error occured");
        setError(error);
      });
  };

  const showConfirmed = (msg) => {
    setConfirm(msg);
    setTimeout(() => {
      setConfirm("");
    }, 5000);
  };
  console.log(showConfirmed);
  if (loading) return <h2>Loading.....</h2>;
  return (
    <div>
      <Breadcrumb content="New User" />
      <Container className={classes.container}>
        <Title>Edit User</Title>
        {error && <div className="error">{error}</div>}
        {confirm && <div className="confirm">{confirm}</div>}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
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
              disabled
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
              disabled
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
              disabled
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
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => setActive(e.target.checked)}
                  color="secondary"
                  name="active"
                  checked={active}
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
              onClick={handleEditUser}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EditUser;
