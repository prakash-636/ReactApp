import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Browse() {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "35px" }}>
        Browse Matrimonial Profiles by
      </Typography>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: 460,
            width: 410,
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            margin: "25px",
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "40px",
              fontWeight: 400,
              color: "#333",
              lineHeight: "50px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            Mother Tongue
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginBottom: "60px" }}
          >
            Hindi | Marathi | Punjabi | Tamil | Telugu | Bengali | Gujarati |
            Urdu | Kannada | Odia | Malayalam | Marwari | Sindhi | English |
            Assamese | Bhojpuri | Konkani | Rajasthani | Garhwali | Maithili |
            Haryanavi | Tulu
          </Typography>
        </Card>

        <Card
          sx={{
            height: 460,
            width: 410,
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            margin: "25px",
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "40px",
              fontWeight: 400,
              color: "#333",
              lineHeight: "50px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            Jobs
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginBottom: "60px" }}
          >
            If like thousands of couples, you too met your one-and-only on
            Sangam.com, we'd love to hear all about it. It's our favorite part
            of what we do!If like thousands of couples, you too met your
            one-and-only on Sangam.com, we'd love to hear all about it. It's our
            favorite part of what we do!If like thousands of couples, you too
            met your one-and-only on Sangam.com
          </Typography>
        </Card>

        <Card
          sx={{
            height: 460,
            width: 410,
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            margin: "25px",
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "40px",
              fontWeight: 400,
              color: "#333",
              lineHeight: "50px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            City
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginBottom: "60px" }}
          >
            Mumbai | Delhi | Bengaluru | Pune | Hyderabad | Kolkata | Chennai |
            Lucknow | Ahmedabad | Nagpur | Jaipur | Patna | Kanpur | Noida |
            Indore | Surat | Gurgaon | Ghaziabad | Ludhiana | Bhopal
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default Browse;
