import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from '../../assets/images/banner.png';
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        mb:{lg:"100px"}
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="bold" fontSize='26px'>
        Fitness Club
      </Typography>

      <Typography
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        textTransform="uppercase"
        fontWeight="bold"
      >
        sweat, smile <br />
        and repeat
      </Typography>
      <Typography lineHeight='35px' fontSize='22px' mb={3}>check out the most effective exercices</Typography>

      <Button variant="contained" color="error" href='#exercices' sx={{bgcolor:'#FF2625', padding:'10px'}}>
        Explore Exercises
      </Button>
      <img src={HeroBannerImage} className='hero-banner-img' alt='banner wallpaper'/>
    </Box>
  );
};

export default HeroBanner;
