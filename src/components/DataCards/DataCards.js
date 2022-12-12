import React from 'react';
import { Box } from '@mui/material';
import BodyPart from '../BodyPart/BodyPart';

import Slider from "react-slick";


    


const DataCards = ({ data, setBodyPart, bodyPart}) => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}
    
    >
    {data.map((item, index) => (
      <Box {...settings}
        key={item.id || item} 
        sx={{
          mr:{
            
            xs:'0%',
            lg:'100%',
          },
          ml:{
            
            xs:'5%',
            sm:'30%',
          },
          maxWidth:'80%',
          display:'flex',
          justifyContent:'center',
          background:'black',
          border:'1px solid white'
        }}
        
      >
         <BodyPart index={index} item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> 
        
    
      </Box>

))}
  </Slider>
)
  
};

export default DataCards;

