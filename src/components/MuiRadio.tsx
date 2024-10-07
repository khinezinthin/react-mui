import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
  const [gender, setGender] = useState<string>("");
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
    // console.log(gender);
  return (
    <div>
      <FormControl error>
        <FormLabel id="radio-buttons-group-label">Gendar</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          value={gender}
          // defaultValue={'male'}
          onChange={handleGender}
          row
        >
          <FormControlLabel
            value="female"
            control={<Radio color="secondary" size="small" />}
            label="Female"
          />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>invalid</FormHelperText>
      </FormControl>
    </div>
  );
};

export default MuiRadio;
