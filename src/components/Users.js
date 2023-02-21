import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserData = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    UsersGet();
  }, []);

  //Getting Data
  const UsersGet = () => {
    axios
      .get("https://www.melivecode.com/api/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log("err...", err));
  };

  const UserDelete = (id) => {
    let data = { id: id };
    // console.log(data);
    axios
      .delete("https://www.melivecode.com/api/users/delete", { data })
      .then((result) => {
        // console.log(result);
        alert(result.data.message);
        if (result.data.status == "ok") {
          UsersGet();
        }
      })
      .catch((err) => console.log("err...", err));
  };

  return (
    <Container maxWidth="lg">
      <Link to="/create" className="link">
        <Button variant="contained" sx={{ marginTop: 10, marginBottom: 3 }}>
          Create
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="left">First</TableCell>
              <TableCell align="left">Last</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          {users.map((user) => (
            <TableBody>
              <TableRow key={user.id}>
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Avatar src={user.avatar} />
                  </Box>
                </TableCell>
                <TableCell align="left">{user.fname}</TableCell>
                <TableCell align="left">{user.lname}</TableCell>
                <TableCell align="left">{user.username}</TableCell>
                <TableCell align="center">
                  <ButtonGroup>
                    <Button onClick={() => navigate(`/update/${user.id}`)}>
                      Edit
                    </Button>
                    <Button onClick={() => UserDelete(user.id)}>Del</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserData;
