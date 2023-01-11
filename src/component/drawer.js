import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CardHeader from '@mui/material/CardHeader';
import avatar from "../assets/avatar.png";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { NavLink } from "react-router-dom";



export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
  
    left: false,
    
  });
  const list_style={
    color:"black"
  }


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menu_color={
    color:"white"
  }

  const list = (anchor) => (
    <Box
      sx={{ width:250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CardHeader avatar="../assets/avatar.png" style={{backgroundColor:"black"}}/>
      <Divider />
      <List>
        
          <NavLink to={"/"}><ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='Home'/> 
            </ListItemButton>
          </ListItem>
          </NavLink>

          <ListItem disablePadding>
          <NavLink to={"./"}><ListItemButton>
              <ListItemIcon>
                <InfoIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItemButton>
            </NavLink>
          </ListItem>
          

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactMailIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='Contact Us' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LockOpenIcon style={list_style}/>
              </ListItemIcon>
              
            </ListItemButton>
          </ListItem>
      
      </List>
    </Box>
  );

  return (
    <div>
      {
      ['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={menu_color}/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}