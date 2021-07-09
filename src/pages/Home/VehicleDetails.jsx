import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },

  record: {
    width: 300,
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px",
  },
  status: {
    backgroundColor: "#f4f445",
    padding:"5px 10px",
    borderRadius:10
  },
  value: {
    color: "rgba(0,0,0,0.8)",
    textTransform:"uppercase"

  },
}));

const VehicleDetails = ({
  match: {
    params: { id },
  },
}) => {
  const classes = useStyles();

  const { vehicles } = useContext(AuthContext);

  const records = vehicles.filter((vehicle) => vehicle.id === id)[0];

  console.log(records);
  return (
    <div>
      <Breadcrumb content="Vehicle Details" />
      <Container className={classes.container}>
        <div className={classes.content}>
          <h4 className={classes.record}>
            <span>Status </span>
            <span className={`${classes.status} ${classes.value}`}>
              {"Signed In"}
            </span>
          </h4>
          <h4 className={classes.record}>
            <span>Plate </span>
            <span className={classes.value}>{records.plate}</span>
          </h4>
          <h4 className={classes.record}>
            <span>Make </span>
            <span className={classes.value}>{records.make}</span>
          </h4>
          <h4 className={classes.record}>
            <span>Model </span>
            <span className={classes.value}>{records.model}</span>
          </h4>
          <h4 className={classes.record}>
            <span>Color </span>
            <span className={classes.value}>{records.color}</span>
          </h4>
          <h4 className={classes.record}>
            <span>Driver Name </span>
            <span className={classes.value}>{records.driverName}</span>
          </h4>
          <h4 className={classes.record}>
            <span>Driver ID </span>
            <span className={classes.value}>{records.driverID}</span>
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default VehicleDetails;
