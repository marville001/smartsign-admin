import {
  Card,
  Container,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    minWidth: "250px",
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
    cursor:"default",
    marginRight:"20px"
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
          count={5}
          CardIcon={<SupervisorAccountIcon />}
          />

          <TopCard 
          classes={classes} 
          iconColor="purple" 
          title="Total Vehicles"
          count={13}
          CardIcon={<EmojiTransportationIcon />}
          />

          <TopCard 
          classes={classes} 
          iconColor="purple" 
          title="Total Signin Today"
          count={2}
          CardIcon={<InputIcon />}
          />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
