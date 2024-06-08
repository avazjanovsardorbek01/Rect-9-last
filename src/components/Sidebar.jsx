import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AlbumIcon from "@mui/icons-material/Album";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarToggle }) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="persistent"
      open={!sidebarToggle}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#333",
          color: "#fff",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemIcon sx={{ color: "#fff" }}>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon sx={{ color: "#fff" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/albums">
          <ListItemIcon sx={{ color: "#fff" }}>
            <AlbumIcon />
          </ListItemIcon>
          <ListItemText primary="Albums" />
        </ListItem>
        <ListItem button component={Link} to="/todos">
          <ListItemIcon sx={{ color: "#fff" }}>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
