import React, { useState } from "react";
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
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import FavoriteIcon from "@mui/icons-material/Favorite";
import DetailPage from "./DetailPage";
import { Link } from "react-router-dom";
import { display } from "@mui/system";

const initialData = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 28,
    "gender": "Male",
    "occupation": "Software Engineer",
    "education": "Master's in Computer Science",
    "location": "New York",
    "height": "5'11\"",
    "community": "Christian",
    "interests": ["Hiking", "Photography", "Reading"],
    "description": "I'm a tech enthusiast who loves exploring the outdoors and capturing moments through my camera lens.",
    "profilePicture": "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 26,
    "gender": "Female",
    "occupation": "Doctor",
    "education": "MD in Internal Medicine",
    "location": "Los Angeles",
    "height": "5'6\"",
    "community": "Hindu",
    "interests": ["Cooking", "Traveling", "Yoga"],
    "description": "Passionate about healing and wellness. I enjoy experimenting with recipes and exploring new places.",
    "profilePicture": "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
  },
  {
    "id": 3,
    "name": "Alex Johnson",
    "age": 30,
    "gender": "Male",
    "occupation": "Business Analyst",
    "education": "MBA",
    "location": "Chicago",
    "height": "6'0\"",
    "community": "Jewish",
    "interests": ["Playing Guitar", "Cooking", "Movies"],
    "description": "A numbers person with a creative side. I find joy in both analyzing data and strumming my guitar.",
    "profilePicture": "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
  },
  {
    "id": 4,
    "name": "Emily Lee",
    "age": 24,
    "gender": "Female",
    "occupation": "Graphic Designer",
    "education": "Bachelor's in Fine Arts",
    "location": "San Francisco",
    "height": "5'4\"",
    "community": "Buddhist",
    "interests": ["Painting", "Meditation", "Dancing"],
    "description": "Expressing myself through art and movement. I find beauty in the smallest details of life.",
    "profilePicture": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg"
  }
]


const ListingPage = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("");
  const [selectedId, setSelectedId] = useState(null); // Holds the selected card's ID
  const [location, setLocation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [gender, setGender] = useState('');

  const toggleFavorite = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSelectedId(null); // Clear selected ID when filtering
  };

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  const filteredData = data.filter((item) =>{
    if (location && item.location !== location) return false;
    if (occupation && item.occupation !== occupation) return false;
    if (gender && item.gender !== gender) return false;
    return true;

  }
  );

  return (
    <Box padding={"10px"}>

     
      <Grid item xs={12} sm={6} md={4} >

      <FormControl  sx={{ m: 1,minWidth:100}}>
        <InputLabel>Location</InputLabel>
        <Select value={location} label="Location" onChange={e => setLocation(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value={"New York"}>New York</MenuItem>
          <MenuItem value={"Los Angeles"}>Los Angeles</MenuItem>
          <MenuItem value={"Chicago"}>Chicago</MenuItem>
        </Select>
      </FormControl>

      <FormControl  sx={{ m: 1, minWidth: 100 }}>
        <InputLabel>occupation</InputLabel>
        <Select value={occupation} label="occupation *" onChange={e => setOccupation(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Business Analyst">MBA</MenuItem>
          <MenuItem value="Doctor">Doctor</MenuItem>
          {/* Add more categories */}
        </Select>
      </FormControl>

      <FormControl required sx={{ m: 1, minWidth: 100 }}>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} label="Gender" onChange={e => setGender(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          
        </Select>
      </FormControl>
      </Grid>
      <Grid container spacing={2}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Link
              to={`/detail/${item.id}`}
              style={{ textDecoration: "none" }}
              state={item}
            >
              <Card
                onClick={() => handleCardClick(item.id)}
                style={{ cursor: "pointer" }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={item.profilePicture}
                  alt="green iguana"
                />
                <CardContent>
                  <Box sx={{display:"flex",justifyContent:"space-between"}}> 
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.gender}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    Age: {item.age} | Location: {item.location} | Caste:{" "}
                    {item.community}
                  </Typography>
                  
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={
                      <FavoriteIcon
                        color={item.isFavorite ? "error" : "inherit"}
                      />
                    }
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {item.isFavorite
                      ? "Remove from Favorites"
                      : "Add to Favorites"}
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      {selectedId !== null && (
        <DetailPage
          selectedCard={filteredData.find((item) => item.id === selectedId)}
        />
      )}
    </Box>
  );
};

export default ListingPage;
