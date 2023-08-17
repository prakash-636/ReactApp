import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
const DetailPage = () => {
  const { id } = useParams();
  const location=useLocation()
  console.log(location.state.id);

  return (
    <Box padding={"50px"}>
      <CardMedia
                  component="img"
                  image={location.state.profilePicture}
                  alt="green iguana"
                />
                <CardContent>
                  <Box sx={{display:"flex",justifyContent:"space-between"}}> 
                  <Typography variant="h6">{location.state.name}</Typography>
                  <Typography>{location.state.gender}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    Age: {location.state.age} | Location: {location.state.location} | Caste:{" "}
                    {location.state.community}
                  </Typography>
                  <Typography>{location.state.occupation}</Typography>
                  <Typography>{location.state.education}</Typography>
                  <Typography>{location.state.location}</Typography>
                  <Typography>{location.state.height}</Typography>
                  <Typography>{location.state.interests}</Typography>
                 
                  <Typography>{location.state.description}</Typography>
                  
                  
                </CardContent>
    </Box>
  );
};

export default DetailPage;
