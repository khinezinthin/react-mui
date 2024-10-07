import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle={"copy"} />
      <SpeedDialAction icon={<SaveIcon />} tooltipTitle={"save"} tooltipOpen/>
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle={"print"} />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
