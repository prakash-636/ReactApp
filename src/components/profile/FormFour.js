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
import { useNavigate } from "react-router-dom";
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
import { fromsliceaction } from "../../reduxdata/signupform";

export default function FormFour(props) {
  const [age, setAge] = React.useState("");
const navigate=useNavigate()
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

  const handleNext = (e) => {

e.preventDefault()
console.log(props.formData,"darshan kb")
dispatch(fromsliceaction.adddata(props.formData))
 const userdata={
  username:props.formData.userName,
  email:props.formData.email,
  password:props.formData.password,
  age:props.formData.age,
  profilePicture:props.formData.photo,
  gender:props.formData.gender,
  DOB:props.formData.dob,
  JobType:props.formData.JobType,
  caste:{
    casteid:"2",
    castename:props.formData.casteName,
    description:props.formData.casteDesc
  },
  parents:{
    parentsId:"2",
    fathername:props.formData.fatherName,
    mothername:props.formData.motherName
  },
  adress:{
    adressId:"2",
    city:props.formData.city,
    state:props.formData.state,
    postalCode:props.formData.pinCode,
    country:props.formData.country
  }
 }
 navigate("/page",{replace:"true"})
 dispatch(fromsliceaction.adddata(userdata))
  console.log(userdata,"jnbwiudbweidbewbewiudbewdub")
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
      <Typography variant="h5">Address</Typography>
      <Box
       
        sx={{
          mt: 1,

          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box component="form" onSubmit={handleNext}  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="city"
                required
                fullWidth
                id="City"
                label="City"
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
                id="State"
                label="State"
                name="state"
                autoComplete="family-name"
                onChange={(e)=>{
                  props.handleChange(e)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="pincode"
                label="Pin Code"
                name="pinCode"
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
                id="country"
                label="Country"
                name="country"
                autoComplete="countary"
                onChange={(e)=>{
                  props.handleChange(e)
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
          <Button  variant="contained">
            Next
          </Button>
        ) : (
          <Button
          type="submit"
            
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
