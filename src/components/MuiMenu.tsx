import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="auth-menu-button"
        onClick={handleClick}
        aria-controls={open ? "auth-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<KeyboardArrowDown />}
      >
        Menu Dropdown
      </Button>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{vertical: "top", horizontal: "right"}}
      >
        <MenuItem onClick={handleClose}>Log in</MenuItem>
        <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default MuiMenu;
