import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [dark, setDark] = useState(false);

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDark(e.target.checked);
  };

  //   console.log(dark);
  return (
    <Box>
      <FormControlLabel
        label="dark mode"
        control={
          <Switch checked={dark} onChange={handleSwitch} color="success" />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
