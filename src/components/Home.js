import React from "react";
import { Box } from "@mui/material";
import Sliderpost from "./Sliderpost";
import About from "./About";
import Why from "./Why";
import Stories from "./Stories";
import Browse from "./Browse";
import Basicsearch from "./Basicsearch";

function Home() {
  return (
    <Box
      sx={{
        Width: "100%",
        backgroundColor: "#c5dcd4",
        padding: "20px",
        flexGrow: 1,
        margin: "0 auto", // Center horizontally
        padding: "10px", // Add padding for better spacing
        justifyContent: "center",
        textAlign: "center",
        "@media (max-width: 600px)": {
          maxWidth: "100%", // Full width on small screens
        },
      }}
    >
      <Sliderpost />
      <Basicsearch />
      <Why />
      <Stories />

      <Browse />

      <About />
    </Box>
  );
}

export default Home;
