import { Avatar, Chip, Icon, Stack } from "@mui/material";
import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipDelete: string) => {
    setChips(chips => chips.filter(chip => chip !== chipDelete))
  };
  return (
    <Stack direction={"row"} spacing={1} mt={2}>
      <Chip label="chip" color="primary" icon={<FaceIcon />} />
      <Chip
        label="chip outline"
        variant="outlined"
        avatar={<Avatar>K</Avatar>}
        color="secondary"
        icon={<FaceIcon />}
      />

      <Chip label="chip" color="success" onClick={() => alert()} />
      <Chip
        label="delete"
        color="error"
        onClick={() => alert()}
        onDelete={() => alert("delete")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
