// navigation bar for the left side of the page - should be seen throughout app 

import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// may be implemented later
//import ListItemButton from '@mui/material/ListItemButton';
//import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 200;

 function SideNav() {
    return(
    <Box sx={{ display: 'flex',}}>
    <CssBaseline />
    <AppBar
      
      position="fixed"
      sx={{   bgcolor: '#00acb0', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar >
        <Typography variant="h6" noWrap component="div" >
          New Nav Bar
          {/* implement later */}
          {/* <Button variant='outlined'>Refresh</Button> */}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      sx={{
        backgroundColor: '#cfe8fc',
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
          <ListItem >
            <Link className="navLink" to="/student">
             Students
            </Link>
          </ListItem>

          <ListItem >
          <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined'>Reports</Button>
          </ListItem>

          <ListItem>
          <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined'>Log out </Button>
          </ListItem>

          </List>
      <Divider />
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography paragraph>
        
     </Typography>     
    </Box>
  </Box>
    );
 }

export default SideNav;