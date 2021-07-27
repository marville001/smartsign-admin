import {
  Container,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";
import { auth, db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
  btns: {
    display: "flex",
    flexDirection: "row",
  },
  deletebtn: {
    color: "red",
    cursor: "pointer",
    marginLeft: "10px",
  },
  editbtn: {
    color: "#000",
    cursor: "pointer",
  },
}));

const Users = () => {
  const classes = useStyles();

  const { users } = useContext(AuthContext);

  const extractDate = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month <= 9 ? `0${month}` : month;
    day = day <= 9 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete")) {
      let ref = db.ref(`Users/${id}/`);
      ref.remove();
    }
  };

  const handleEdit = (id) => {
    window.location.href = "/users/edit/" + id;
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
            {users
              .filter((user) => {
                return user.id !== auth.currentUser.uid;
              })
              .map((user, i) => (
                <TableRow key={user.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.idNumber}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{extractDate(user.date)}</TableCell>
                  <TableCell className={classes.btns} align="right">
                    <EditOutlined
                      onClick={() => handleEdit(user.id)}
                      className={classes.editbtn}
                    />
                    <DeleteOutline
                      className={classes.deletebtn}
                      color="red"
                      onClick={() => handleDelete(user.id)}
                    />
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
