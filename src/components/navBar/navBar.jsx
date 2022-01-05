import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#263238",
    margin: 0,
  },
  arrow: {
    color: "#f57f17",
  },
  title: {
    color: "white",
  },
  menuSliderContainer: {
    width: 300,
    background: "#212121",
    height: "100%",
  },
  listItem: {
    color: "#f57f17",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Inicio", listPath: "/" },
  { listIcon: <Home />, listText: "Cargar Recaudacion", listPath: "/recaudaciones" },
  { listIcon: <AssignmentInd />, listText: "Mostrar Recaudacion", listPath: "/recaudacionesTotales" },
  { listIcon: <Apps />, listText: "Cargar choferes", listPath: "/cargarChofer" },
  { listIcon: <ContactMail />, listText: "Mostrar choferes", listPath: "/choferes" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      {/* <Avatar className={classes.avatar} src={Img} alt="Mahmudul Alam" /> */}
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.arrow} />
            </IconButton>
              <Typography variant="h5" className={classes.title}>
                TAXIS
              </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </>
  );
};

export default Navbar;
