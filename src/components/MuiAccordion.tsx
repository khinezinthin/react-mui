import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  // console.log(expanded)
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptatibus vero aliquid voluptatem doloremque. Eligendi eos eius
            fugit obcaecati voluptatibus cum, neque repellat quod magnam.
            Architecto, quis? Illum, laborum reiciendis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptatibus vero aliquid voluptatem doloremque. Eligendi eos eius
            fugit obcaecati voluptatibus cum, neque repellat quod magnam.
            Architecto, quis? Illum, laborum reiciendis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptatibus vero aliquid voluptatem doloremque. Eligendi eos eius
            fugit obcaecati voluptatibus cum, neque repellat quod magnam.
            Architecto, quis? Illum, laborum reiciendis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
