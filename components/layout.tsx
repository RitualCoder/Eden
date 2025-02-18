import { Box } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "./header";
import Footer from "./footer";
import React from "react";

interface AppBarAndDrawerProps {
  children: ReactNode;
}
export default function Layout({ children }: AppBarAndDrawerProps) {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
}
