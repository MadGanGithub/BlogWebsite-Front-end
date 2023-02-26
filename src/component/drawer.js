import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import { Box } from '@mui/system';



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
      <Box sx={{height:64}} style={{backgroundColor:"black"}}>
      <CardHeader />
      
      </Box>
      
      <Divider />
      <List>
        
          <NavLink to={"/"} style={{textDecoration:"none"}} ><ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='Home' sx={{color:"black"}}/> 
            </ListItemButton>
          </ListItem>
          </NavLink>

          <NavLink to={"/about"} style={{textDecoration:"none"}}><ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon>
                <InfoIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='About' sx={{color:"black"}}/>
            </ListItemButton>
          </ListItem>
           </NavLink>
          

          <NavLink to={"/contact"} style={{textDecoration:"none"}}><ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ContactMailIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='Contact Us' sx={{color:"black"}}/>
            </ListItemButton>
          </ListItem>
          </NavLink>
      </List>
      <Divider/>
      <List>
        
          <NavLink to={"/login"} style={{textDecoration:"none"}} ><ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='LogIn' sx={{color:"black"}}/> 
            </ListItemButton>
          </ListItem>
          </NavLink>

          <NavLink to={"/signup"} style={{textDecoration:"none"}}><ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon>
                <InfoIcon style={list_style}/>
              </ListItemIcon>
              <ListItemText primary='SignUp' sx={{color:"black"}}/>
            </ListItemButton>
          </ListItem>
           </NavLink>
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