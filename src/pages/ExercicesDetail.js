import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';

import {exercisesOptions, fetchData}  from '../utils/fetchData'
import Detail from '../components/Detail/Detail';

const ExercicesDetail = () => {

  const [exerciseDetail, setexerciseDetail] = useState({})


  const {id} = useParams()

  useEffect(()=> {
    const fetchExeciseData = async () =>{

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
 

      const exerciseDetailData =  await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);

      setexerciseDetail(exerciseDetailData)




    } 
    fetchExeciseData()
  }, [id])

  


  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
        <Detail exerciseDetail={exerciseDetail}/>
    </Box>
  )
}

export default ExercicesDetail 