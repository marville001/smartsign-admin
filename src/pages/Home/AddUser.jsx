import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
}));

const AddUser = () => {
  const classes = useStyles();
  return (
    <div>
      <Breadcrumb content="New User" />
      <Container className={classes.container}>
        <Title>Add New User</Title>
        <Grid container spacing={3} md={8}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              variant="outlined"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="first-name"
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color={"primary"}
              style={{ width: "100%" }}
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
