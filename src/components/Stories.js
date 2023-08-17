import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";

function Stories() {
  return (
    <Box>
      {" "}
      <Typography
        variant="h4"
        sx={{
          fontSize: "40px",
          fontWeight: 500,
          color: "#333",
          lineHeight: "50px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Over 40,000+ Happy Stories
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          color: "#51505d",
          lineHeight: "32px",
          marginBottom: "50px",
          Width: "100px",
          textAlign: "center",
        }}
      >
        If like thousands of couples, you too met your one-and-only on
        Sangam.com, we'd love to hear all about it. It's our favorite part of
        what we do!
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
        <MultiActionAreaCard />
      </Box>
    </Box>
  );
}

export default Stories;
