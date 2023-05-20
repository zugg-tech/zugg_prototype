

import * as React from 'react';
import '../assets/css/Navbar.css';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;
const navItems = ['Home', 'Sign up as Creator', 'Contact Us'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography  style={{marginLeft:'5rem'}} variant="h6" sx={{ my: 2 }}>
        ZUGG
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const theme = createTheme({
    typography: {
     "fontFamily": `"Asap", sans-serif`,
     "fontSize": 32,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    },
    button:{
      label:{
        color:"#757575"
      }
    }
 });

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} style={{background : "white"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <ThemeProvider theme={theme}> */}
          <Typography
            className='Logo'
            marginLeft='7.7rem'
            align='left'
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            color="#EF0078"

            
          >
            ZUGG
          </Typography>
          {/* </ThemeProvider> */}
          
  
          
          <Box paddingRight='4rem' sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,index) => {
              if(index===navItems.length-1){
                return <Button style={{backgroundColor:'#EF0078',color:'white',width:'10rem',height:'2.4rem',marginRight:'2rem',fontFamily:'Open Sans',fontWeight:'700',fontSize:'0.95rem',textTransform:'none'}}>
                  {item}
                </Button>
              }else if(index===1){
                return <Button href='http://tinyurl.com/zuggregistration' className='Button' style={{paddingRight:"3rem",color:"#757575",fontFamily:'Open Sans',textTransform:'none',fontWeight:'700'}} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
              }
              else{
               return <Button className='Button' style={{paddingRight:"3rem",color:"#EF0078",fontFamily:'Open Sans',textTransform:'none',fontWeight:'700'}} key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              }
            }
                             
                
              
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
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