import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@/lib/themes/themeMui";

const FAQ = ({ data }: any) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: { md: 40, xs: 20 } }}
      >
        {data.title}
      </Typography>
      {data.rows.map((row: any, index: number) => (
        <Accordion key={index} sx={{ bgcolor: "black", mb: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            sx={{
              backgroundColor: "black",
              color: "white",
              textAlign: "left",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: { md: 20, xs: 18 } }}>
              {row.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography sx={{ color: "#A9A6AA" }}>{row.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
