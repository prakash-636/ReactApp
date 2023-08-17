import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const data = [
  { name: "John", gender: "Male", age: 25, category: "A" },
  { name: "Jane", gender: "Female", age: 30, category: "B" },
  { name: "Alex", gender: "Non-binary", age: 28, category: "A" },
  { name: "Michael", gender: "Male", age: 35, category: "C" },
  { name: "Emily", gender: "Female", age: 22, category: "B" },
  { name: "Chris", gender: "Male", age: 40, category: "C" },
  // Add more data items here
];

function FilterCards() {
  const [ageGroup, setAgeGroup] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");

  const filteredData = data.filter((item) => {
    if (ageGroup && item.age !== ageGroup) return false;
    if (category && item.category !== category) return false;
    if (gender && item.gender !== gender) return false;
    return true;
  });

  return (
    <div>
      <FormControl>
        <InputLabel>Age Group</InputLabel>
        <Select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value={25}>25-30</MenuItem>
          <MenuItem value={30}>31-40</MenuItem>
          {/* Add more age groups */}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="A">Category A</MenuItem>
          <MenuItem value="B">Category B</MenuItem>
          {/* Add more categories */}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Non-binary">Non-binary</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {filteredData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Gender: {item.gender}</Typography>
                <Typography>Age: {item.age}</Typography>
                <Typography>Category: {item.category}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FilterCards;
