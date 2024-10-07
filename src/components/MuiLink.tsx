import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack direction={"row"} spacing={2} m={2}>
      <Link href={"#"}>Link</Link>
      <Link href={"#"} underline="hover" variant="body2">secondary</Link>
      <Typography variant="h5">
        <Link href={"#"} underline="none">Link</Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
