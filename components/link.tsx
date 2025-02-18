import React from "react";
import { Button, SxProps, Typography } from "@mui/material";
import Link from "next/link";

interface LinkProps {
  url: string;
  text?: string;
  sxText?: SxProps;
  icon?: any;
  setDisplayDrawerMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomLink: React.FC<LinkProps> = ({
  url,
  text,
  icon,
  setDisplayDrawerMobile,
  sxText,
}) => {
  return (
    <Link
      href={url}
      onClick={() =>
        setDisplayDrawerMobile ? setDisplayDrawerMobile(false) : null
      }
    >
      {icon && icon}
      {text && (
        <Button
          sx={{
            fontSize: 16,
            fontWeight: 500,
            "&:hover": { bgcolor: "transparent" },
            textTransform: "none",
          }}
          disableRipple
        >
          <Typography
            sx={{
              "&:hover": { fontWeight: 900 },
              ...sxText
            }}
          >
            {text}
          </Typography>
        </Button>
      )}
    </Link>
  );
};

export default CustomLink;
