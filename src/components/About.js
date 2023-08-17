import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        backgroundColor: "#d18b8b",
        borderRadius: "25px",
        padding: "5px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "40px",
          fontWeight: 500,
          color: "#333",
          lineHeight: "50px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        ABOUT GVR
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          color: "#51505d",
          lineHeight: "32px",
          marginBottom: "40px",
          Width: "100px",
          textAlign: "center",
        }}
      >
        If like thousands of couples, you too met your one-and-only on
        Sangam.com, we'd love to hear all about it. It's our favorite part of
        what we do!If like thousands of couples, you too met your one-and-only
        on Sangam.com, we'd love to hear all about it. It's our favorite part of
        what we do!If like thousands of couples, you too met your one-and-only
        on Sangam.com
      </Typography>
    </Box>
  );
}

export default About;
