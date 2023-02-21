import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserCreate = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // form data

  const Create = (event) => {
    event.preventDefault();  // page ne reload thata atkave.

    var data = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    };

    axios
      .post(`https://www.melivecode.com/api/users/create`, data)

      .then((res) => {
        alert(res.data.message);
        if (res.data.status == "ok") {
          navigate("/");
        }
      })
      .catch((err) => console.log("error...", err));
  };

  // updated data
  useEffect(() => {
    if (id) {
      axios.get(`https://www.melivecode.com/api/users/${id}`).then((result) => {
        // console.log(result.data.user.fname);
        setFname(result.data.user.fname);
        setLname(result.data.user.lname);
        setUsername(result.data.user.username);
        setEmail(result.data.user.email);
        setAvatar(result.data.user.avatar);
      });
    }
  }, [id]);

  const Update = (event) => {
    event.preventDefault();
    var data = {
      id: id,
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    };

    axios
      .put(`https://www.melivecode.com/api/users/update`, data)
      .then((res) => {
        alert(res.data.message);
        if (res.data.status == "ok") {
          navigate("/");
        }
      })
      .catch((err) => console.log("error...", err));
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">User</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              required
              label="First Name"
              variant="outlined"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              name="firstName"
              autoComplete="fname"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              required
              value={lname}
              label="Last Name"
              variant="outlined"
              onChange={(e) => setLname(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              required
              value={username}
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              required
              value={email}
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              required
              value={avatar}
              label="Avatar"
              variant="outlined"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={id ? Update : Create}
        >
          {id ? "Update" : "Create"}
        </Button>
      </form>
    </Container>
  );
};
export default UserCreate;
