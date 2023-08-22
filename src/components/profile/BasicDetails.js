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
import { useState } from "react";
import { fromsliceaction } from "../../reduxdata/signupform";

export default function BasicDetails(props) {
  const [age, setAge] = React.useState("");
 const [userdata,setuserdata]=useState({})
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

  const handleNext23 = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    dispatch(fromsliceaction.handlecurrentfrom())
  
    // Dispatch your Redux action or perform any other logic here

  };
  const handleNex = (e) => {
    

  };
  

  const handlePrevious = () => {
    
  };



  const handleSubmit = () => {
    // Handle form submission logic here with formData
    console.log("Form data submitted:", formData);
  };

console.log(props.formData,"bcbdscdc")
  return (
    <Box sx={{ backgroundColor: "#c5dcd4", padding: "20px",minHeight:"100"}}>
      <Typography variant="h5">Register</Typography>
      <Box
        
        sx={{
          mt: 1,

          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box component="form" onSubmit={handleNext23}  sx={{ mt: 3 }}>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="userName"
                required
                fullWidth
                id="userName"
                label="User Name"
                type="text"
                autoFocus
                
                onChange={(e)=>{
                  props.handleChange1(e)
                  setuserdata({...userdata,username:e.target.value})
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                type="email"
                label="Email"
                name="email"
                
                onChange={(e)=>{
                  props.handleChange1(e)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                
                onChange={(e)=>{
                  props.handleChange1(e)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="contact"
                label="Contact"
                name="contact"
                type="number"
             
                onChange={(e)=>{
                  props.handleChange1(e)
                 
                }}
              />
            </Grid>
          </Grid>
          
          <Box sx={{ display: "flex", justifyContent: "space-between",marginTop:"2rem" }}>
        {currentForm !== 1 && (
          <Button variant="outlined" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {currentForm !== 5 ? (
          <Button type="submit"  variant="contained">
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
