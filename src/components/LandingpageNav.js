import { Toolbar, AppBar, Typography, Box, Grid, TextField, Menu, MenuItem } from '@mui/material'
import React from 'react'
import logo from '../assets/logo2.png'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import Landingpage from '../components/Landingpage.css';
import PagesdropDown from './PagesdropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo2 from '../assets/mobile.png';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Heropage from './Heropage'
import Featured from './Featured'
const LI = styled('li')({
  listStyleType: 'none',
  color: "white"
})

const MyStyle = styled(NavLink)({
  listStyleType: 'none',
  "&:hover": {
    // backgroundColor:'red',
    color: 'red'
  },
})
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const LandingpageNav = () => {

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  return (
    <>
      <Grid container sx={{ backgroundColor: "rgb(29,30,31)", height: '65px', display: 'flex', justifyContent: 'space-between' }}>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: { xm: 0, sm: 4, lg: '5rem' }, fontSize: { sm: '1rem', lg: '1.5rem' }, fontWeight: 900, color: "white" }} className='typo'>
            Ava
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, fontSize: { sm: '1rem', lg: '1.5rem' }, fontWeight: 900, color: "red" }} className='typo'>
            Cinema
          </Box>
          <Box component='img' src={logo2} alt='' sx={{ width: '100px', height: '40px', display: { xs: 'block', sm: 'none' } }}>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', height: '100%', ml: { xs: 0, lg: '5rem' } }}>
          <MyStyle to='' style={{ textDecoration: 'none' }}>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 700, fontSize: { sm: '1rem' } }}>
              Home
            </Typography>
          </MyStyle>
          <MyStyle to='' style={{ textDecoration: 'none', marginLeft: '1.5rem' }}>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 700, fontSize: { sm: '1rem' } }}>
              Movies
            </Typography>
          </MyStyle>
          <MyStyle to='' style={{ textDecoration: 'none', marginLeft: '1.5rem' }}>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 700, fontSize: { sm: '1rem' } }}>
              Shows
            </Typography>
          </MyStyle>
          <MyStyle to='' style={{ textDecoration: 'none', marginLeft: '1.5rem' }}>
            <PagesdropDown />
          </MyStyle>
        </Grid>
        <Grid item xs={5} lg={4.5} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', height: '100%', mr: { xs: 0, sm: '2.5rem', lg: '5rem' } }}>
          <Box sx={{ display: 'flex', backgroundColor: 'white', display: { xs: 'none', sm: 'block' } }}>
            <input style={{ border: 'none' }} />
            <SearchIcon sx={{ color: 'black' }} />
          </Box>
          <ShoppingCartIcon sx={{ color: 'white', ml: 5, mr: { xs: 2, sm: 0 } }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'block', sm: 'none', } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: 'white', mr: 2 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default LandingpageNav