import React from "react";
import AppleIcon from "./icons/appleIcon";
import PlayStoreIcon from "./icons/playStoreIcon";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const appleUrl: string = "https://apps.apple.com/fr/";
const androidUrl: string = "https://play.google.com/store";

interface StoreButtonProps {
  platform: "ios" | "android";
}

const StoreButton = ({ platform }: StoreButtonProps) => {
  const getStoreIcon = () => {
    if (platform === "ios") {
      return <AppleIcon size={30} />;
    } else if (platform === "android") {
      return <PlayStoreIcon size={30} />;
    }
  };

  const getStoreUrl = () => {
    if (platform === "ios") {
      return appleUrl;
    } else if (platform === "android") {
      return androidUrl;
    }
  };

  const getStoreName = () => {
    if (platform === "ios") {
      return "l'App Store";
    } else if (platform === "android") {
      return "Google Play";
    }
  };

  const getSentence = () => {
    if (platform === "ios") {
      return "Télécharger dans";
    } else if (platform === "android") {
      return "Disponible sur";
    }
  };

  const storeUrl = getStoreUrl();

  return (
    <Link href={storeUrl || ""} target="_blank">
      <Button
        variant="contained"
        sx={{
          borderRadius: 3,
          bgcolor: "transparent",
          border: "0.5px solid white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          minWidth: "180px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ transform: "translateY(6%)" }}>{getStoreIcon()}</Box>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <Typography fontSize={10} sx={{ transform: "translateY(20%)" }}>
              {getSentence()}
            </Typography>
            <Typography fontSize={20} sx={{ transform: "translateY(-7%)" }}>
              {getStoreName()}
            </Typography>
          </Box>
        </Box>
      </Button>
    </Link>
  );
};

export default StoreButton;
