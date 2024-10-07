import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  const [toggle, setToggle] = useState<string | null>(null);
  const [toggle2, setToggle2] = useState<string[]>([]);

  const handleToggle = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setToggle(newAlignment);
  };

  const handleToggle2 = (
    _event: React.MouseEvent<HTMLElement>,
    newToggle: string[]
  ) => {
    setToggle2(newToggle);
  };

  // console.log(toggle);
  return (
    <Stack spacing={4} sx={{border:1}}>
      {/* varient 3 myo => text | contained | outlined  */}
      <Stack
        direction={"row"}
        justifyContent="start"
        alignContent={"center"}
        spacing={2}
      >
        <Button variant="text">Text</Button>
        {/* testing with customize  */}
        <Button variant="contained" sx={{bgcolor: 'green'}}>Contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      {/* color 6 myo => primary | secondary | error | warning | info | success*/}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      {/* size 3 myo => small | medium | large  */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="error" size="large">
          Error
        </Button>
      </Stack>

      {/* icon 2 myo => btn htl icon par tr => startIcon | endIcon  */}
      {/* icon only btn => IconButton component htl ko use chin tae icon htae */}
      <Stack direction={"row"} spacing={2}>
        {/* disableElevation => disable shadow 
        disableRipple => disable click effect  */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          disableElevation
          disableRipple
        >
          send
        </Button>
        <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
          send
        </Button>
        <IconButton aria-label="delete" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* ButtonGroup component htl hmr btn */}
      {/* orientation a si sin => vertical | horizontal  */}
      <Stack direction={"row"} spacing={2}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          aria-label="button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <Stack>
          <ToggleButtonGroup
            value={toggle}
            exclusive
            onChange={handleToggle}
            aria-label="text alignment"
            color="success"
            orientation="vertical"
          >
            <ToggleButton value="html" aria-label="html">
              html
            </ToggleButton>
            <ToggleButton value="css" aria-label="css">
              css
            </ToggleButton>
            <ToggleButton value="js" aria-label="js">
              js
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack>
          <ToggleButtonGroup value={toggle2} onChange={handleToggle2}>
            <ToggleButton value={"html"}>html</ToggleButton>
            <ToggleButton value={"css"}>css</ToggleButton>
            <ToggleButton value={"js"}>js</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
