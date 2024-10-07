import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const MuiNavbar = () => {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <CatchingPokemon />
          </IconButton>
          <Typography component={"div"} variant="h5" sx={{ flexGrow: 1 }}>Pokemon App</Typography>

          <Stack direction={"row"} spacing={2}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
  );
};

export default MuiNavbar;
