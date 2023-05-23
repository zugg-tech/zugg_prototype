import  React,{useState} from "react";
import "../assets/css/Navbar.css";
import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CancelIcon from '@mui/icons-material/Cancel';
import Modal from './Modal.js'
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";




const drawerWidth = 270;
const navItems = ["Home", "Sign up as Creator", "Contact Us"];

function DrawerAppBar(props) {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "left" }}>
      <IconButton onClick={handleDrawerToggle} style={{cursor:'pointer',float:'left',width:'10px',height:'10px',marginTop:'0.7rem',marginLeft:' 0.7rem'}}>
                          <CancelIcon />
                    </IconButton>
      <Typography
        color="#EF0078"
        style={{
          marginLeft: "6rem",
          fontFamily: "Open Sans",

          fontSize: "1.5rem ",
          fontWeight: "700",
        }}
        variant="h6"
        sx={{ my: 2 }}
      >
        ZUGG
      </Typography>
      <Divider />
      <List sx={{ textAlign: "center", paddingLeft: "1.5rem" }}>
        {navItems.map((item, index) => {
          if (index === navItems.length - 1) {
            return (
              <Button
                style={{
                  backgroundColor: "#EF0078",
                  color: "white",
                  width: "10rem",
                  height: "2.4rem",
                  marginRight: "2rem",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  textTransform: "none",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
                onClick={handleOpen}
              >
                {item}
              </Button>
            );
          } else if (index === 1) {
            return (
              <Button
                href="http://tinyurl.com/zuggregistration"
                className="Button"
                style={{
                  paddingRight: "3rem",
                  color: "#757575",
                  fontFamily: "Open Sans",
                  textTransform: "none",
                  fontWeight: "700",
                  textAlign: "center",
                }}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            );
          } else {
            return (
              <Button
                className="Button"
                style={{
                  paddingRight: "3rem",
                  color: "#EF0078",
                  fontFamily: "Open Sans",
                  textTransform: "none",
                  fontWeight: "700",
                  textAlign: "center",
                }}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            );
          }
        })}
      </List>
    </Box>
  );
  const theme = createTheme({
    typography: {
      fontFamily: `"Asap", sans-serif`,
      fontSize: 32,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    button: {
      label: {
        color: "#757575",
      },
    },
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar elevation={0} style={{ background: "white" }} component="nav">
        <Toolbar>
          <Typography
            className="Logo"
            marginLeft="7.7rem"
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
            color="#EF0078"
          >
            ZUGG
          </Typography>
          <IconButton
            size="large"
            style={{ marginLeft: "auto", marginRight: "0" }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: "black",
              backgroundColor: "white",
              marginTop: "1rem",
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <ThemeProvider theme={theme}> */}

          {/* </ThemeProvider> */}

          <Box
            paddingRight="4rem"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item, index) => {
              if (index === navItems.length - 1) {
                return (
                  <Button
                    style={{
                      backgroundColor: "#EF0078",
                      color: "white",
                      width: "10rem",
                      height: "2.4rem",
                      marginRight: "2rem",
                      fontFamily: "Open Sans",
                      fontWeight: "700",
                      fontSize: "0.95rem",
                      textTransform: "none",
                    }}
                    onClick={handleOpen}
                  >
                    {item}
                  </Button>
                );
              } else if (index === 1) {
                return (
                  <Button
                    href="http://tinyurl.com/zuggregistration"
                    className="Button"
                    style={{
                      paddingRight: "3rem",
                      color: "#757575",
                      fontFamily: "Open Sans",
                      textTransform: "none",
                      fontWeight: "700",
                    }}
                    key={item}
                    sx={{ color: "#fff" }}
                  >
                    {item}
                  </Button>
                );
              } else {
                return (
                  <Button
                    className="Button"
                    style={{
                      paddingRight: "3rem",
                      color: "#EF0078",
                      fontFamily: "Open Sans",
                      textTransform: "none",
                      fontWeight: "700",
                    }}
                    key={item}
                    sx={{ color: "#fff" }}
                  >
                    {item}
                  </Button>
                );
              }
            })}
            {open && <Modal open={open} handleClose={handleClose} />}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          className=".MuiDrawer-paperAnchorDockedRight"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
