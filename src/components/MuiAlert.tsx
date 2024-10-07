import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2} mt={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>This is a success Alert.
      </Alert>

      <Alert severity="info" variant="filled">
        This is an info Alert.
      </Alert>

      <Alert
        severity="warning"
        variant="outlined"
        onClose={() => alert("close")}
      >
        This is a warning Alert.
      </Alert>

      <Alert
        severity="error"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        This is an error Alert.
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
