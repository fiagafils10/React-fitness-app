import React from "react";

import { Button, Stack } from "@mui/material";

import {
  all,
  back,
  cardio,
  chest,
  lowerArm,
  lowerLeg,
  neck,
  shoulder,
  upperArm,
  upperLeg,
  waist,
} from "../../assets/images";

const BodyPart = ({ item, index, setBodyPart, bodyPart }) => {
  const imgTab = [
    all,
    back,
    cardio,
    chest,
    lowerArm,
    lowerLeg,
    neck,
    shoulder,
    upperArm,
    upperLeg,
    waist,
  ];

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      position="relative"
      zIndex="10"
      overflow="hidden"
      sx={{
        width: "100%",
        // maxWidth: "300px",
        height: {
          xs: "400px",
          lg: "600px",
        },
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <img
          src={imgTab[index]}
          alt={` ${item} ' exercises illustration'`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "1",
          }}
        />
      </div>

      <Button
        variant="contained"
        color="error"
        sx={
          bodyPart === item
            ? {
                bgcolor: "#000",
                padding: "10px",
                width: "250px",
                position: "absolute",
                zIndex: "100000",
              }
            : {
                bgcolor: "#FF2625",
                padding: "10px",
                width: "250px",
                position: "absolute",
                zIndex: "100000",
              }
        }
      >
        {item}
      </Button>
    </Stack>
  );
};

export default BodyPart;
