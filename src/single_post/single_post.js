import React from 'react'
import AppBar from "../component/appbar.js";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); 

  const bread_style={
    marginTop:80,
    marginLeft:20,
    marginBottom:20
  };

const single_post = () => {
  return (
    <div>
      <AppBar/>
      <div className="bread" style={bread_style}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" label="Contact Us" icon={<ContactMailIcon fontSize="small" />}/>
        
      </Breadcrumbs>
      </div>
      
    </div>
  )
}

export default single_post
