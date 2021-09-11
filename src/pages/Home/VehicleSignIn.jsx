import {
  Container,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  TableContainer,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
  },
  tcontainer: {
    maxHeight: 440,
  },
}));

const VehicleSignIn = () => {
  const classes = useStyles();
  const [signedIn, setSignedIn] = useState(false);
  const [records, setRecords] = useState([]);
  const [vType, setVType] = useState("");

  const { signedVehicles } = useContext(AuthContext);
  const [filteredVehicles, setFilteredVehicles] = useState(signedVehicles);

  const handleTypeChange = (event) => {
    let type = event.target.value;
    setVType(type)
    filterVehicleType(type)
  };

  useEffect(() => {
    setFilteredVehicles(signedVehicles);
  }, [signedVehicles]);

  const filterVehicleType = (t) => {
    if (t === "all") {
      return setFilteredVehicles(signedVehicles);
    }

    let tempVehicles = signedVehicles.filter((v) => {
      return v.type === t;
    });
    setFilteredVehicles(tempVehicles);
  };

  const handleSignedInChange = () => {
    const signed = !signedIn
    setSignedIn(signed);
    filterVehicleSigned(signed?"in":"out")
  };

   const filterVehicleSigned = (status) => {
    let tempVehicles = filteredVehicles.filter((v) => {
      return v.status === status;
    });

    setFilteredVehicles(tempVehicles);
  };

  return (
    <div>
      <Breadcrumb content="Vehicles Sign In Records" />
      <Container className={classes.container}>
        <Title>All Records</Title>
        <br />
        <div className={classes.filterContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={vType}
              onChange={handleTypeChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value={"visitor"}>Visitor</MenuItem>
              <MenuItem value={"staff"}>Staff</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset">
            <FormControlLabel
              control={
                <Checkbox
                  checked={signedIn}
                  onChange={handleSignedInChange}
                  name="checkedA"
                />
              }
              label="Signed In?"
            />
          </FormControl>
        </div>
        <br />

        <TableContainer className={classes.tcontainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Driver Name</TableCell>
                <TableCell>Driver ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Plate</TableCell>
                <TableCell>Sign In Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Sign out Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredVehicles.map((vehicle, i) => (
                <TableRow key={vehicle.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{vehicle.driverName}</TableCell>
                  <TableCell>{vehicle.driverID}</TableCell>
                  <TableCell>{vehicle.type}</TableCell>
                  <TableCell>{vehicle.plate}</TableCell>
                  <TableCell>{vehicle.date}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
                  <TableCell>{vehicle.sdate ? vehicle.sdate : "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default VehicleSignIn;
