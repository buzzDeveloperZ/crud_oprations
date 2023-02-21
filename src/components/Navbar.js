import React from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static" sx={{ height: 60, justifyContent: "center" }}>
        <Toolbar variant="dense">
          <Link to="/" className="link">
            <Typography variant="h6" color="inherit" component="div">
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
