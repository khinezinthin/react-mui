import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MuiBox = () => {
  return (
    <Paper sx={{ padding: "32px", margin: "32px" }} elevation={6}>
      {/* stack ka flex lo myo  */}
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* box ka div lo pl  */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            padding: "16px",
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          hello world
        </Box>

        <Box
          display={"flex"}
          width="100px"
          height="100px"
          bgcolor={"success.light"}
          p={2}
        >
          hello world
        </Box>
      </Stack>

      {/* grid container htl hmr grid item shi  */}
      {/* grid item ta khu hmr 12 shi breakpoint a lite pay ya */}
      {/* breakpoint ka (min) -> a htet  */}
      <Grid container my={4} columnSpacing={1} rowSpacing={2}>
        <Grid item xs={6} sm={4}>
          <Box bgcolor={"primary.light"} p={2}>
            {" "}
            item 1
          </Box>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Box bgcolor={"primary.light"} p={2}>
            {" "}
            item 2
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor={"primary.light"} p={2}>
            {" "}
            item 3
          </Box>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Box bgcolor={"primary.light"} p={2}>
            {" "}
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiBox;
