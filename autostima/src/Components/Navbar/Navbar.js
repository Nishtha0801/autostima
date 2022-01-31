import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Assets/logo.png'
import profile from '../Assets/profile.png'
import axios from '../../axios.js'
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Affirmations', 'Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const history = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState({})
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    console.log(link);
    if (link == "Home") history("/")
    if (link == "Affirmations") history("/dashboard")
    if (link == "Blogs") history("/blogs")
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  let token = localStorage.getItem("token");

  React.useEffect(() => {
    axios.post("/user/getuser", { "jwt": token }).then(data => {
      let obj = data.data.data[0];
      setUser({
        name: obj.name,
        email: obj.email,
        ph: obj.phone
      })
    }).catch(err => {
      console.log(err);
    })
  }, [])



  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none", position: "absolute", top: "0", left: "0" }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: "black" }}
          >
            <img src={logo} style={{ height: "70px", marginTop: "8px" }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)} sx={{ color: "#51B1F7", display: "flex", alignItems: "center", height: "70px" }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} style={{ height: "70px", marginTop: "8px" }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: '#51B1F7', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {token ?
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "20px", color: "white", fontSize: "large" }}>{user?.name}</div>
              <Avatar alt="Remy Sharp" src={profile} />
            </Box> :
            <div >
              <div >Login</div>
              <div >Signup</div>
            </div>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
