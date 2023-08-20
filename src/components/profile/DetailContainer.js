import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { Box, Button } from "@mui/material";

export default function DetailContainer() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  const handlePrevious = () => {
    setCurrentForm(currentForm - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here with formData
    console.log("Form data submitted:", formData);
  };

  return (
    <Box sx={{ backgroundColor: "#c5dcd4", padding: "20px" }}>
      {currentForm === 1 && (
        <BasicDetails formData={formData} handleChange={handleChange} />
      )}
      {currentForm === 2 && (
        <FormOne formData={formData} handleChange={handleChange} />
      )}
      {currentForm === 3 && (
        <FormTwo formData={formData} handleChange={handleChange} />
      )}
      {currentForm === 4 && (
        <FormThree formData={formData} handleChange={handleChange} />
      )}
      {currentForm === 5 && (
        <FormFour formData={formData} handleChange={handleChange} />
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {currentForm !== 1 && (
          <Button variant="outlined" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {currentForm !== 5 ? (
          <Button onClick={handleNext} variant="contained">
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            
            variant="contained"
            
          >
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
}
