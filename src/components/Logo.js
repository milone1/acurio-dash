import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="https://acuriorestaurantes.net/favicon.ico" alt="logo" width={150} height={150}
        />
      </Link>
    </Box>
  );
};

export default Logo;