import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { RiMenu5Fill } from "react-icons/ri";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ListItemIcon } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';


function AppAppBar() {

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }; const [open, setOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeRoundedIcon /> },
    { id: 'aboutus', label: 'About Us', icon: <InfoRoundedIcon /> },
    { id: 'service', label: 'Service', icon: <SettingsRoundedIcon /> },
    { id: 'portfolio', label: 'Portfolio', icon: <BusinessCenterRoundedIcon />  },
  ];

 

  return (
    <>
    <AppBar
      position="fixed"
      variant='regular'
      sx={{  
        bgcolor:'white',
      }}
    >
    
        <Toolbar
          variant="regular"
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxHeight: 40,
            justifyContent: 'space-between',
           
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 0,
              fontSize:'20px'
            }}
          >
        
            <span style={{ color: 'black', fontWeight: '900', fontFamily: 'Poppins, sans-serif' }}>Kayrenn&nbsp;</span>
            <span style={{  fontWeight: '900', fontFamily: 'Poppins, sans-serif',
               background: 'linear-gradient(90deg, rgba(145,72,220,1) 0%, rgba(199,73,200,1) 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent'
             }}>Smetha</span>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5.5, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="text"
                sx={{
                  fontFamily: 'Poppins, sans-serif', color: 'black', textTransform: 'capitalize', padding: '5px', fontSize: '14px',
                  '&:hover': {
                    color: '#4876EE',
                  },
                }}
                size="large"
                endIcon={<ExpandMoreRoundedIcon />}
            
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 5.5,
              alignItems: 'center',
            }}
          >
            <Button
             
              variant="outlined"
              size="large"
              sx={{
                fontFamily: 'Poppins, sans-serif', color: '#9148dc',bgcolor:'#efeef4', textTransform: 'capitalize'
              }}
            >
              Download CV
            </Button>
            <Button
             
             variant="outlined"
             size="large"
             sx={{
               fontFamily: 'Poppins, sans-serif', color: 'white',bgcolor:'#9148dc', textTransform: 'capitalize',
               '&:hover':{
                color:'#9148dc'
               }
             }}
           >
             Contact
           </Button>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <RiMenu5Fill style={{color:'#9148dc'}}/>
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  p: 4,
                  backgroundColor: 'background.default',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon sx={{color:'#9148dc'}}/>
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <Box>
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      variant="text"
                      sx={{
                        fontFamily: 'Poppins, sans-serif', color: 'black', textTransform: 'capitalize', padding: '5px',
                        '&:hover': {
                          color: '#4876EE',
                        },
                      }}
                      size="small"
                 
                    >
                      <ListItemIcon sx={{color:'#9148dc'}}>
                        {item.icon}
                      </ListItemIcon>
                      {item.label}

                    </MenuItem>
                  ))}
                </Box>
                <Divider sx={{ my: 3 }} />
                <Box
            sx={{
              display: 'flex',
              gap: 2.5,
              flexDirection:'column'
            }}
          >
            <Button
             
              variant="outlined"
              size="large"
              sx={{
                fontFamily: 'Poppins, sans-serif', color: '#9148dc',bgcolor:'#efeef4', textTransform: 'capitalize'
              }}
            >
              Download CV
            </Button>
            <Button
             
             variant="outlined"
             size="large"
             sx={{
               fontFamily: 'Poppins, sans-serif', color: 'white',bgcolor:'#9148dc', textTransform: 'capitalize',
               '&:hover':{
                color:'#9148dc'
               }
             }}
           >
             Contact
           </Button>
          </Box>

              </Box>
            </Drawer>
          </Box>
        </Toolbar>
     
    </AppBar>
  
    </>
  );
}




export default AppAppBar;
