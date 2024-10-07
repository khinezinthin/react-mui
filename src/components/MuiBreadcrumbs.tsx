import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsBeforeCollapse={2}
      >
        <Link href={"#"} underline="none">
          home
        </Link>
        <Link href={"#"} underline="none">
          about
        </Link>
        <Link href={"#"} underline="none">
          contact
        </Link>
        <Typography color={"text.primary"}>Active</Typography>
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link href={"#"} underline="none">
          home
        </Link>
        <Link href={"#"} underline="none">
          about
        </Link>
        <Link href={"#"} underline="none">
          contact
        </Link>
        <Typography color={"text.primary"}>Active</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
