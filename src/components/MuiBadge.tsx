import { Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack direction={"row"} spacing={2} m={4}>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>

      {/* 0 so default not show  */}
      <Badge badgeContent={0} color="secondary">
        <MailIcon color="action" />
      </Badge>
      {/* 0 pya zay chin yin showZero prop */}
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon color="action" />
      </Badge>

      {/* max default ka 99  */}
      <Badge badgeContent={100} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={100} max={999} color="secondary">
        <MailIcon color="action" />
      </Badge>

      {/* dot ma pya zay chin yin invisible prop  */}
      <Badge variant="dot" color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge variant="dot" color="secondary" invisible={true}>
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
