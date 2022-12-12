import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExercicesCards = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercises/${exercise.id}`}
    id='exerciseCard'
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          
            sx={{
         
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography textTransform='capitalize' color='black'  fontWeight='bold' textAlign='center'  >
          {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExercicesCards;
