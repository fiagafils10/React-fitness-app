import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor="wheat" padding="10px" width="100vw">
      <Typography
        sx={{ fontSize: { lg: "34px", xs: "20px" } }}
        textAlign="center"
        fontWeight={700}
        textTransform="capitalize"
      >
        Made With ❤️ by Fiaga Fils
      </Typography>
    </Box>
  );
};

export default Footer;
