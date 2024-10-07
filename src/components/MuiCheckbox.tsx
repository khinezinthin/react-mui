import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [language, setLanguage] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  // console.log(language);

  const handleLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.checked);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    // console.log(index)
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  // console.log(skills);
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={language}
              onChange={handleLanguage}
            />
          }
          label="html"
        />
      </FormGroup>

      <Checkbox
        checked={language}
        onChange={handleLanguage}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        color="secondary"
      />

      <br />

      <FormControl error>
        <FormLabel>skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="html"
                checked={skills.includes("html")}
                onChange={handleSkillsChange}
              />
            }
            label="html"
          />

          <FormControlLabel
            control={
              <Checkbox
                value="css"
                checked={skills.includes("css")}
                onChange={handleSkillsChange}
              />
            }
            label="css"
          />

          <FormControlLabel
            control={
              <Checkbox
                value="js"
                checked={skills.includes("js")}
                onChange={handleSkillsChange}
              />
            }
            label="js"
          />
        </FormGroup>
        <FormHelperText>invalid</FormHelperText>
      </FormControl>
    </>
  );
};

export default MuiCheckbox;
