import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleSelectCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleSelectCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value)
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box width={200} marginBottom={5}>
        <TextField
          label="select country"
          select
          value={country}
          onChange={handleSelectCountry}
          fullWidth
        >
          <MenuItem value="mm">myanmar</MenuItem>
          <MenuItem value="jp">japan</MenuItem>
          <MenuItem value="kr">korea</MenuItem>
        </TextField>
      </Box>

      <Box width={200}>
        <TextField
          label="select countries"
          select
          value={countries}
          onChange={handleSelectCountries}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
        >
          <MenuItem value="mm">myanmar</MenuItem>
          <MenuItem value="jp">japan</MenuItem>
          <MenuItem value="kr">korea</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MuiSelect;
