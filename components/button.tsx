import React from "react";
import { Button, ButtonProps, SxProps } from "@mui/material";
import Link from "next/link";

interface ButtonComponentProps extends ButtonProps {
  url: string;
  text: string;
  sx?: SxProps;
}

export const ButtonComponent = ({ url, text, sx, ...buttonProps }: ButtonComponentProps) => {
  return (
    <Link href={url}>
      <Button
        variant="contained"
        sx={{
          borderRadius: "0px",
          bgcolor: "#C0A179",
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.02)",
            color: "#C0A179",
          },
          color: "white",
          transition: "0.2s",
          ...sx,
        }}
        {...buttonProps}
      >
        {text}
      </Button>
    </Link>
  );
};
