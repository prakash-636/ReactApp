import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";
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

export default function FormThree() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "#c5dcd4", padding: "20px" }}>
      <Typography variant="h5">Family Details</Typography>
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
        <Box component="form" noValidate sx={{ mt: 3 }}>
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
              />
            </Grid>
            
          </Grid>
          
        </Box>
      </Box>
    </Box>
  );
}
