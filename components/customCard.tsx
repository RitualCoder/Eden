import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

interface CustomCardProps {
  imageSrc: string;
  title: string;
  text: string;
  buttonText: string;
}

const CustomCard = ({ imageSrc, title, text, buttonText }: CustomCardProps) => {
  const router = useRouter();
  const [displayTextButton, setDisplayTextButton] = useState(false);
  const [displayShadow, setDisplayShadow] = useState(false);
  const [displayText, setDisplayText] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        height: "200px",
        pb: 5,
        overflow: "hidden",
        zIndex: 3,
      }}
      onMouseEnter={() => {
        setTimeout(() => {
        }, 500);
        setTimeout(() => {
          setDisplayText(true);
        }, 200);
        setDisplayShadow(true);
        setDisplayTextButton(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setDisplayTextButton(false);
        }, 450);
        setTimeout(() => {
          setDisplayText(false);
        }, 200);
        setDisplayShadow(false);
      }}
    >
      <Box component={"img"} src={imageSrc} sx={{ height: "100px" }} />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      {displayText && (
        <Box
          sx={{
            zIndex: 2,
            position: "absolute",
            height: "100%",
            width: "100%",
            p: 3,
          }}
        >
          <Typography fontSize={14}>{text}</Typography>
          <Box
            sx={{
              zIndex: 2,
              position: "absolute",
              bottom: 13,
              right: 20,
              cursor: "pointer",
            }}
            onClick={() => router.push("/nos-aventures")}
          >
            En savoir plus <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
          </Box>
        </Box>
      )}
      <Box sx={{ position: "absolute", bottom: 0, right: 15 }}>
        <Box
          component={"button"}
          sx={{
            transform: displayShadow ? "scale(50)" : "scale(1)",

            borderRadius: 50,
            transition: "0.5s ease-in-out",
            bgcolor: "#C0A179",
            border: "none",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {displayTextButton ? (
            <Typography lineHeight={1.2} padding={0} color={"#C0A179"}>
              -
            </Typography>
          ) : (
            <Typography lineHeight={1.2} padding={0}>
              +
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
