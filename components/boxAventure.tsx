import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonComponent } from "./button";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = styled("img")<ImageProps>(({ src, alt }) => ({
  width: 368,
  height: 263,
  zIndex: 0,
  position: "relative",
  src,
  alt,
}));

interface TitleProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Title = styled(Typography)<TitleProps>(({ variant, theme }) => ({
  textAlign: "center",
  marginBottom: "10px",
  marginTop: "80%",
  color: "#FFF",
  ...theme.typography[variant],
}));

const Container = styled(Box)({
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const Container2 = styled(Box)({
  border: "2px solid #C0A179",
  width: 338,
  height: 382,
  zIndex: 0,
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  alignItems: "center",
});

const Container3 = styled(Box)({
  display: "flex",
  backgroundColor: "black",
  height: "46px",
  width: "270px",
  position: "absolute",
  flexDirection: "column",
  marginTop: "105%",
  zIndex: 90,
  alignItems: "center",
});

const Subtitle = styled(Typography)({
  fontSize: "14px",
  textAlign: "center",
  color: "#FFF",
});

interface BoxAdventureProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

function BoxAdventure({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: BoxAdventureProps) {
  return (
    <Container>
      <Image src={imageSrc} alt={imageAlt} />
      <Container2>
        <Container3 />
        <Title variant="h5">{title}</Title>
        <Subtitle variant="h3">{subtitle}</Subtitle>
      </Container2>
      <Box zIndex={91}>
        <ButtonComponent
          sx={{ mt: 14.5, width: "181px", height: "46px" }}
          url="/"
          text="DÉCOUVRIR LA BOX"
        />
      </Box>
    </Container>
  );
}

export default BoxAdventure;
