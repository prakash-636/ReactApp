import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { Box, Button } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
export default function DetailContainer() {
  const dispatch=useDispatch()
  const currentForm1=useSelector(state=>state.signup.counterFrom)

  console.log(currentForm1,"djbceoujhcbuhvcbvuchbvihbevihb")

  const [formData, setFormData] = useState({
    
  });

  

  const handleChange = (e) => {
    console.log(formData,"kb")
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  return (
    <Box sx={{ backgroundColor: "#c5dcd4", padding: "20px" ,minHeight:"100vh"}}>
      {currentForm1 === 1 && (
        <BasicDetails formData={formData} handleChange1={handleChange}  />
      )}
      {currentForm1 === 2 && (
        <FormOne formData={formData} handleChange={handleChange} />
      )}
      {currentForm1 === 3 && (
        <FormTwo formData={formData} handleChange={handleChange} />
      )}
      {currentForm1 === 4 && (
        <FormThree formData={formData} handleChange={handleChange} />
      )}
      {currentForm1 === 5 && (
        <FormFour formData={formData} handleChange={handleChange} />
      )}
     
    </Box>
  );
}
