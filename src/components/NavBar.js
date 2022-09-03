import React from "react";
import logo from "../assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const pages = ["Libros de Texto", "Infantiles", "Novelas"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="warning">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={logo} alt="Logo" style={{width: 50, margin: 5}} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: {xs: "none", md: "flex"},
              fontFamily: "Fredoka One",
              fontWeight: 100,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            A.E. Store
          </Typography>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: {xs: "flex", md: "none"},
              flexGrow: 1,
              fontFamily: "Fredoka One",
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            AE Store
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex"},
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Fredoka One",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Tooltip title="Ver Carrito de Compras">
          <IconButton color="inherit">
            <ShoppingCartTwoToneIcon fontSize="large"/>
          </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
