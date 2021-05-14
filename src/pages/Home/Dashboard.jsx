import {
  Card,
  Container,
  Icon,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    minWidth: "150px",
    margin: "10px 5px",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  },
  cardIcon: {
    width: "60px",
    height: "60px",
    backgroundColor: "#eee",
    margin: "20px 10px",
    cursor:"default"
  },
}));

const TopCard = ({ iconColor,classes, count, title, CardIcon }) => {
  return (
    <Card className={classes.card}>
      <IconButton
        edge="start"
        className={classes.cardIcon}
        color="inherit"
        aria-label="menu"
        style={{color: iconColor?iconColor:"red"}}
      >
        {CardIcon}
      </IconButton>
      <div>
        <h2>{count}</h2>
        <h4>{title}</h4>
      </div>
    </Card>
  );
};

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Breadcrumb content="Dashboard" />
      <Container className={classes.container}>
        <div className={classes.cards}>
        <TopCard 
          classes={classes} 
          iconColor="purple" 
          title="Total Users"
          count={200}
          CardIcon={<Icon>add_circle</Icon>}
          />
          <TopCard 
          classes={classes} 
          iconColor="purple" 
          title="Total Users"
          count={200}
          CardIcon={<Icon>add_circle</Icon>}
          />
          <TopCard 
          classes={classes} 
          iconColor="purple" 
          title="Total Users"
          count={200}
          CardIcon={<Icon>add_circle</Icon>}
          />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
