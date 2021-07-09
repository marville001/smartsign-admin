import {
  Container,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,

} from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
}));

const Users = () => {
  const classes = useStyles();

  const { users } = useContext(AuthContext);

  const extractDate = (d) => {
    const date = new Date(d);
    console.log(date);

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month <= 9 ? `0${month}` : month;
    day = day <= 9 ? `0${day}` : day;

    console.log(year, month, day);

    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <Breadcrumb content="Users" />
      <Container className={classes.container}>
        <Title>All Users</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>email</TableCell>
              <TableCell>ID Number</TableCell>
              <TableCell>role</TableCell>
              <TableCell>status</TableCell>
              <TableCell>Date Added</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, i) => (
              <TableRow key={user.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.idNumber}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{extractDate(user.date)}</TableCell>
                <TableCell align="right">
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Users;
