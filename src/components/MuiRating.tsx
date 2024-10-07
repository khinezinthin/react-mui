import { Box, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleRate = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  console.log(value);
  return (
    <Box>
      <Rating value={value} onChange={handleRate} precision={0.5} /> <br />
      <Rating
        value={value}
        onChange={handleRate}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <br />
      {/* initial value (3) */}
      <Rating value={value} onChange={handleRate} precision={0.5} readOnly />
      <br />
      <Rating
        value={value}
        onChange={handleRate}
        precision={0.5}
        highlightSelectedOnly
      />
      <br />
    </Box>
  );
};

export default MuiRating;
