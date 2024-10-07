import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [name, setName] = useState<string>("");
  return (
    <Stack spacing={4}>
      {/* varient => outlined | filled | standard  */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>

      {/* color => primary | secondary | error | warning | info | success  */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="outlined secondary"
          variant="outlined"
          color="secondary"
          size="small"
        />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="form input"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name}
          helperText={name ? `don't share` : "required"}
        />
        <TextField
          type="password"
          helperText="don't share your password"
          label="password"
        />
        <TextField label="read only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* input htl unit ta khu khu a tay pay htr => InputProps => startAdornment  */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
