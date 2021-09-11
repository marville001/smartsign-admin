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
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";

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

const Vehicles = () => {
  const classes = useStyles();
  const { vehicles } = useContext(AuthContext);

  const [type, setType] = useState("all");
  const [signedIn, setSignedIn] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const filterVehicle = (t) => {
    if (t === "all") {
      return setFilteredVehicles(vehicles);
    }

    let tempVehicles = vehicles.filter((v) => {
      return v.type === t;
    });
    setFilteredVehicles(tempVehicles);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    filterVehicle(e.target.value);
  };

  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles]);

  return (
    <div>
      <Breadcrumb content="Vehicles" />
      <Container className={classes.container}>
        <Title>All Vehicles</Title>
        <br />
        <div className={classes.filterContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={handleTypeChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value={"visitor"}>Visitor</MenuItem>
              <MenuItem value={"staff"}>Staff</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl component="fieldset">
            <FormControlLabel
              control={
                <Checkbox
                  checked={signedIn}
                  onChange={() => setSignedIn(!signedIn)}
                  name="checkedA"
                />
              }
              label="Signed In?"
            />
          </FormControl> */}
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
                {/* <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Color</TableCell> */}
                <TableCell>Action</TableCell>
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
                  {/* <TableCell>{vehicle.make}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.color}</TableCell> */}
                  <TableCell>
                    <Link to={`/vehicles/details/${vehicle.id}`}>View</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Vehicles;
