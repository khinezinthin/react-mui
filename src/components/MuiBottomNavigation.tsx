import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
};

export default MuiBottomNavigation;
