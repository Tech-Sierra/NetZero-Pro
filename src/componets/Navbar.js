import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import profileImg from "./../assets/images/userProfileImg.png";
import { MdSpaceDashboard } from "react-icons/md";
import { CgLoadbarSound } from "react-icons/cg";
import { BsCaretDownSquareFill } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { RiInformationFill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import "./navbar.css";

const CustomAppbar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "black",
});
const pages = [
  "Dashboard",
  "Data Collection",
  "Reduction",
  "Offsetting",
  "Reporting",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <CustomAppbar position="static" className="navbar_container">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/" className="links">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ m: 1, display: "flex", color: "#155EA2" }}
              >
                <MdSpaceDashboard className="navbar_icons"></MdSpaceDashboard>
                Dashboard
              </Button>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ m: 1, display: "flex", color: "#155EA2" }}
            >
              <CgLoadbarSound className="navbar_icons"></CgLoadbarSound>
              Data Collection
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ m: 1, display: "flex", color: "#155EA2" }}
            >
              <BsCaretDownSquareFill className="navbar_icons"></BsCaretDownSquareFill>
              Reduction
            </Button>
            <Link to="/off-setting" className="links">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ m: 1, display: "flex", color: "#155EA2" }}
              >
                <AiOutlineAppstoreAdd className="navbar_icons"></AiOutlineAppstoreAdd>
                Offsetting
              </Button>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ m: 1, display: "flex", color: "#155EA2" }}
            >
              <IoDocumentText className="navbar_icons"></IoDocumentText>
              Reporting
            </Button>
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          <Button sx={{ color: "#155EA2" }}>
            <RiInformationFill></RiInformationFill>
          </Button>
          <p className="user_name">Mayur</p>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profileImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
        </Toolbar>
      </Container>
    </CustomAppbar>
  );
}

export default Navbar;
