import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box width={300}>
      <Card>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhaD3UbF3D6jvjq8-pcKbEMT4M45jIPIlJg&s"
          alt="apple"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            nulla, mollitia voluptatem ullam nisi magnam quasi esse asperiores
            adipisci quisquam velit aperiam eos quos quidem iste debitis
            exercitationem repellat qui.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
