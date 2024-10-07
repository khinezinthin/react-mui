import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>

            <ListItemText primary="list item 1" secondary="secondary" />
          </ListItemButton>
        </ListItem>
        <Divider/>

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <DraftsIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="list item 2" secondary="secondary" />
        </ListItem>
        <Divider/>

        <ListItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="list item 3" secondary="secondary" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
