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
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    margin:"10px 5px"
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const renderCard = () => (
    <Card className={classes.card}>
      <h4>hello</h4>
    </Card>
  );

  return (
    <div>
      <Breadcrumb content="/Dashboard/" />
      <Container className={classes.container}>
        <div className={classes.cards}>
          {renderCard()}
          {renderCard()}
          {renderCard()}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
