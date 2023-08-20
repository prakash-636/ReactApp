import React, { useState } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Pets } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Button, Modal, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Sigin from "./Sigin";

const StyledAppBar = styled(AppBar)({
  background: "#29aa7a",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [open, setOpen] = useState(false);
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        {/* <Icons>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c244980/virat-kohli.jpg"
          />
        </Icons>
        <UserIcons onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c244980/virat-kohli.jpg"
          />
          <Typography>Virat</Typography>
        </UserIcons> */}
        <Button sx={{ color: "white" }} onClick={handleOpenModal}>
          Login
        </Button>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            p: 2,
          }}
        >
          <button
            style={{ float: "right", border: "none", background: "none" }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </button>

          <Sigin />
        </Paper>
      </Modal>
    </StyledAppBar>
  );
};

export default Navbar;
