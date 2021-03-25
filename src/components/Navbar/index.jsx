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
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img src={logo} alt="Commerce.js" className={classes.image} />
            E-Commerce.js
          </Typography>
        </Toolbar>
        <div className={classes.grow} />
        {/* hidden the Cart icon in Cart Page */}
        {location.pathname === "/" && (
          <div>
            <Link exact to="/cart" className={classes.button}>
              <IconButton aria-label="Show Cart Items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary" to="/cart">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </div>
        )}
      </AppBar>
    </>
  );
}
