import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import styled from "@emotion/styled";
import NotesIcon from "@mui/icons-material/Notes";
import { ImageAspectRatio } from "@mui/icons-material";

const StyledTypography = styled(Typography)({
  textAlign: "justify",
  color: "#72727d",
  fontSize: "18px",
  lineHeight: "28px",
  fontWeight: 400,
});

function Why() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "0 auto",
        // boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Add your box shadow value
      }}
    >
      <Box
        sx={{
          //   boxShadow: "5px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography
          component="div"
          variant="h4"
          align="center"
          sx={{
            fontSize: "40px",
            lineHeight: "50px",
            color: "#333",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          Why Choose GVR ?
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={{ marginBottom: "60px" }}
        >
          Genuine Profiles | Safe & Secure | Detailed Family Information
        </Typography>
      </Box>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          boxShadow: "none",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <CardContent sx={{ flex: "1 0 auto", maxWidth: 750 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <NotesIcon
                sx={{ color: "red", width: "50px", marginLeft: "5px" }}
              />
              <Typography
                component="div"
                variant="h6"
                align="left"
                sx={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#333",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                Get Complete Family Information
                <StyledTypography>
                  You will find detailed family information in every profile.
                  Knowing the family will help you take the next step with
                  confidence
                </StyledTypography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <NotesIcon
                sx={{ color: "red", width: "50px", marginLeft: "5px" }}
              />
              <Typography
                component="div"
                variant="h6"
                align="left"
                sx={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#333",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                Get Matches from your Community
                <StyledTypography>
                  With over 80 community sites, you can find a Match from your
                  community. Finding a Match based on caste and religion made
                  easy.
                </StyledTypography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <NotesIcon
                sx={{ color: "red", width: "50px", marginLeft: "5px" }}
              />
              <Typography
                component="div"
                variant="h6"
                align="left"
                sx={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#333",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                Enable your search without any barrier
                <StyledTypography>
                  Embark on your journey to find your perfect match now
                  available in multiple languages
                </StyledTypography>
              </Typography>
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{
            flexBasis: "30%",
            cursor: "pointer",
            marginLeft: { xs: "0px", sm: "40px" },
          }}
          image="https://img2.sangam.com/assets/promotional-video/d-new.svg"
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
}

export default Why;
