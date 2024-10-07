import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["html", "css", "js", "php"];

const SkillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skillObj, setSkillObj] = useState<Skill | null>(null);
//   console.log(skillObj);
  return (
    <Stack spacing={2} width={"250px"}>
      {/* string */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label={"skills"} />}
        value={value}
        onChange={(_e: any, newValue: string | null) => setValue(newValue)}
        freeSolo
        // freeSolo ka option htl ma shi ll newValue htae lox ya
      />

      {/* obj  */}
      <Autocomplete
        options={SkillsOption}
        renderInput={(params) => <TextField {...params} label={"skills obj"} />}
        value={skillObj}
        onChange={(_e: any, newValue: Skill | null) => setSkillObj(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
