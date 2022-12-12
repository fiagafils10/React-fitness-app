import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import ExercisesCards from '../ExercicesCards/ExercicesCards'

import {exercisesOptions, fetchData} from '../../utils/fetchData';

const Exercises = ({ setExercises, exercises, bodyPart }) => {

    const [currentPage, setCurrentPage] = useState(1) // on met le state a '1' parceque la page par defaut c'est un;

    const exercisesPerPage = 9 // le nombre d'exercise que l'on veut par page 

    const indexOfLastExercise = currentPage * exercisesPerPage ; // index du dernier exercise sera egal au numero de la page multiplier par le nombre d'exercise par page

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage ; // l'index du premier exercise sera egale a l'index du dernier exercise moins le nombre du d'exercise par page

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) =>{
      setCurrentPage(value)
      window.scrollTo({top:1800, behavior:'smooth'})
    }


useEffect ( ()=> {
    const fetchExercisesData = async()=>{
          let exerciseData = []

          if(bodyPart === 'all') {
            exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions )
            
          }
          else{
            exerciseData =  await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
            
          }


          setExercises(exerciseData)
  
    }

    fetchExercisesData()
}, [bodyPart])

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
      <ExercisesCards key={index} exercise={exercise} /> 

        ))}



      </Stack>

      <Stack mt='100px' alignItems='center'>
        {currentExercises.length >= exercisesPerPage  && (
            <Pagination 
              color="standard"
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisesPerPage)} // le nombre de page sera egal au plus grand nombre de page total divise par 9
              page={currentPage}
              onChange={paginate} // sous le capot  Pagination va renvoyer onChange = {(e, value)=> paginate}
              size='large'
            />
        ) }
      </Stack>
    </Box>
  );
};

export default Exercises;
