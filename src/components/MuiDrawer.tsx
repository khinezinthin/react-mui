import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const MuiDrawer = () => {
  const [isDrawOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={isDrawOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box width={"250px"} p={2} textAlign={"center"} role="presentation">
          <Typography component={"div"} variant="h5">Drawer</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
