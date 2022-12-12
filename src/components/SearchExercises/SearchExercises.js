import React, {useState , useEffect} from 'react';
import { Box, Button, Typography, Stack, TextField } from '@mui/material';
import './SearchExercises.css'
import {exercisesOptions ,fetchData} from '../../utils/fetchData';
import DataCards from '../DataCards/DataCards';




const SearchExercises = ({bodyPart, setBodyPart, exercises, setExercises}) => {

  

  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])
  


  useEffect(() => {
   
    const fetchExercisesData = async() =>{
      const bodyPartsData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions )
      setBodyParts(['all', ...bodyPartsData])

    }
    fetchExercisesData()

  }, [])
  


    const handleSearch = async() =>{
      if(search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions )

        const searchedExercises = exercisesData.filter((exercises) => 
        exercises.name.toLowerCase().includes(search) ||
        exercises.equipment.toLowerCase().includes(search) ||
        exercises.target.toLowerCase().includes(search) ||
        exercises.bodyPart.toLowerCase().includes(search)

        
        )
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        

        
        setSearch('')
        setExercises(searchedExercises)
    


      }
    }





  return (
  
      <Stack sx={{ marginTop: { lg: "400px", xs:'100px' } }} alignItems="center">
        <Typography
          sx={{ fontSize: { lg: "45px", md: "35px", xs: "24px" } }}
          textTransform="uppercase"
          fontWeight="bold"
          textAlign="center"
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>

        <Box width="80%" position="relative" display='flex' justifyContent='center'>
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
              },
              width: "80%",
              maxWidth: "500px",
              height: {
                lg: "60px",
              },
            }}
            variant="filled"
            color="error"
            label="Search Exercises"
            type="text"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          ></TextField>

          <Button
            sx={{
              backgroundColor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", md: "150px" , xs: "100px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              
      
            }}
            color="error"
            variant="contained"
            onClick={() => handleSearch()}
          >
        
            Search
          </Button>
        </Box>

        <Box sx={{ position: "relative", width: "100vw", p: "10px" }}>

          <DataCards
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
            exercises={exercises}
            setExercises={setExercises}
          />
        </Box>

      </Stack>
    
  );
}

export default SearchExercises




