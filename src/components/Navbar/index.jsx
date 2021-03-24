import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "./../../assets/commerce.png";

export default function Navbar({totalItems}) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" className={classes.image} /> 
            E-Commerce.js
          </Typography>
        </Toolbar>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Show Cart Items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </AppBar>
    </>
  );
}
