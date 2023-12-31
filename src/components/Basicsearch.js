import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filtersliceaction } from "../reduxdata/Filter";
export default function Basicsearch() {
  const dispatch=useDispatch()
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [lang, setLang] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "#c5dcd4", padding: "20px" }}>
      <Typography variant="h5">Search for Matches</Typography>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,

          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <FormControl required sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-required-label">
            Looking For
          </InputLabel>
          <Select
            value={gender}
            label="Looking For *"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-required-label">
            Age between
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={age}
            label="Age between *"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <MenuItem value={"20-25"}>20-25</MenuItem>
            <MenuItem value={"25-30"}>25-30</MenuItem>
            <MenuItem value={"30-35"}>30-35</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-required-label">
            Mother Tongue
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={lang}
            label="Mother Tongue *"
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Telugu'}>Telugu</MenuItem>
            <MenuItem value={'Kannada'}>Kannada</MenuItem>
            <MenuItem value={'Hindi'}>Hindi</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <Button
          onClick={() => {
            navigate("/page");
            dispatch(filtersliceaction.addfilters({gender:gender,age:age,lang:lang}))
          }}
          sx={{
            color: "#fff",
            backgroundColor: "#009aaf",
            borderColor: "#008fa2",
            height: 55,
            m: 1,
          }}
        >
          Lets Begin
        </Button>
      </Box>
    </Box>
  );
}
