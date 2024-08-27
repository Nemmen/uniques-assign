import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Designer from "../assets/Designer.png";
import wave from "../assets/wave.jpg";
import { blueGrey } from "@mui/material/colors";
import bulding from "../assets/building.avif";
import "../App.css";

const Hero = ({header}) => {
  return (
    <Box
     
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: { xs: "40vh", md: "94vh" },
          alignItems: "center",
          backgroundImage: `url(${wave})`,
          backgroundSize: "cover",
          backgroundPositionY: { xs: 100, md: 350 },
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              color: "#000",
              textAlign: "center",

              fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
            }}
          >
            Welcome to {header}
            <span style={{ color: "#016F6B" }}>Manage</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "300",
              color: "#000",
              mt: 3,
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2rem" },
            }}
          >
            Your Ultimate Platform for Seamless Institute Management
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
