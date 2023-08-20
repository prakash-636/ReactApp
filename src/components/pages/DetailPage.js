import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import { padding } from "@mui/system";

const DetailPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();
  const formattedPhoneNumber = location.state.whatsApp;
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;

  return (
    <Box padding={"50px"}>
      <CardMedia
        component="img"
        image={location.state.profilePicture}
        alt="No Picture"
      />
      <CardContent>
        
          <Typography variant="h6">Name : {location.state.name}</Typography>
          <Typography>Gender : {location.state.gender}</Typography>
        
        <Typography variant="body2" color="textSecondary">
          Age: {location.state.age} | Location: {location.state.location} |
          Caste: {location.state.community}
        </Typography>

        <Typography paddingTop={2}>Job : {location.state.occupation}</Typography>
        <Typography>Education : {location.state.education}</Typography>
        <Typography>Location : {location.state.location}</Typography>
        <Typography>Height : {location.state.height}</Typography>
        <Typography>Interests : {location.state.interests}</Typography>

        <Typography>Description : {location.state.description}</Typography>
        <div style={{ display: 'flex', justifyContent: 'center',padding:"20px" }}>
      
          <Button sx={{padding:"10px",background:"#319d75"}} 
            component={Link}
            to={whatsappUrl}
            target="_blank"
            variant="contained"
          >
            Whats App
          </Button>
          </div>
        
      </CardContent>
    </Box>
  );
};

export default DetailPage;
