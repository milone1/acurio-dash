import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import SocialAuth from "../components/SocialAuth";
import Logo from "../../components/Logo";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

const Login = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle >
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>

            </Typography>
          </HeadingStyle>

          <Box >
            <SocialAuth />
          </Box>  

          <LoginForm setAuth={setAuth} />

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            ¿no tiene ninguna cuenta?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/signup">
              Registrese
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;