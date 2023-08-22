import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { fromsliceaction } from "../../reduxdata/signupform";
import {
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Container,
  CssBaseline,
} from "@mui/material";

export default function FormThree(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const dispatch=useDispatch()


  const currentForm=useSelector(state=>state.signup.counterFrom)

  console.log(currentForm,"djbceoujhcbuhvcbvuchbvihbevihb")

  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const handleNext = () => {
dispatch(fromsliceaction.handlecurrentfrom())



 
    
  };

  const handlePrevious = () => {
    dispatch(fromsliceaction.previousfrom())
  };



  const handleSubmit = () => {
    // Handle form submission logic here with formData
    console.log("Form data submitted:", formData);
  };
  return (
    <Box sx={{ backgroundColor: "#c5dcd4", padding: "20px" }}>
      <Typography variant="h5">Family Details</Typography>
      <Box
        
        sx={{
          mt: 1,

          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box component="form"  onSubmit={handleNext} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="fatherName"
                required
                fullWidth
                id="fatherName"
                label="Father Name"
                autoFocus
                onChange={(e)=>{
                  props.handleChange(e)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="MotherName"
                label="Mother Name"
                name="MotherName"
                autoComplete="family-name"
                onChange={(e)=>{
                  props.handleChange(e)
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="CasteName"
                label="Caste Name"
                name="casteName"
                autoComplete="caste-name"
                onChange={(e)=>{
                  props.handleChange(e)
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="casteDesc"
                label="caste Description"
                type="caste Description"
                id="casteDesc"
                autoComplete="caste Description"
                onChange={(e)=>{
                  props.handleChange(e)
                }}
              />
            </Grid>
            
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between",marginTop:"2rem"}}>
    
    {currentForm !== 1 && (
      <Button variant="outlined" onClick={handlePrevious}>
        Previous
      </Button>
    )}
    {currentForm !== 5 ? (
      <Button type="submit" variant="contained">
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
      </Box>
    </Box>
  );
}
