import { Card, Container, makeStyles } from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#eee",
    padding: "10px 20px",
  },
  container: {
    padding: "20px",
  },
  cards: {
    display: "flex",
    flexDirection:"row"
  },
  card:{
      width:"150px"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Breadcrumb content="/Dashboard/" />
      <Container className={classes.container}>
        <div className="cards">
          <Card className={classes.card}>
            <h4>hello</h4>
          </Card>
          <Card>
            <h4>hello</h4>
          </Card>
          <Card>
            <h4>hello</h4>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
