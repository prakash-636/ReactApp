import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../styles/common.css";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:'pic3.jpeg',
  },
  {
    label: "Bird",
    imgPath:'pic2.jpeg',},
  {
    label: "Bali, Indonesia",
    imgPath:'pic4.jpeg',},
  {
    label: "Goč, Serbia",
    imgPath:'pic1.jpeg',},
];

function Sliderpost() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        Width: "100%",
        flexGrow: 1,
        margin: "0 auto", // Center horizontally
        padding: "0px", // Add padding for better spacing
        justifyContent: "center",
        "@media (max-width: 600px)": {
          maxWidth: "100%", // Full width on small screens
        },
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className="centered-container">
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ justifyContent: "center" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default Sliderpost;
