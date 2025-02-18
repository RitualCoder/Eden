import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "@/lib/themes/themeMui";

export default function Footer() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ px: { xs: 3, md: 10 }, py: 5, overflowX: "hidden", mt: 5 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 3,
              py: 2,
            }}
          >
            <Typography
              variant="h2"
              fontSize={20}
              fontWeight={900}
              color={"white"}
              mb={3}
            >
              AIDE
            </Typography>
            <Typography fontSize={16} color={"white"} fontWeight={100}>
              Service client disponible 7j/7, au&nbsp;
              <span style={{ textDecoration: "underline" }}>
                +33 0 00 00 00 00
              </span>
              , par&nbsp;
              <span style={{ textDecoration: "underline" }}>Whatsapp</span>
              &nbsp; ou par email.
            </Typography>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>FAQ</Typography>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Contact</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 3,
              py: 2,
            }}
          >
            <Typography
              variant="h2"
              fontSize={20}
              fontWeight={900}
              color={"white"}
              mb={3}
            >
              MENTIONS LEGALES
            </Typography>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Politique de confidentialité</Typography>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Conditions générales de ventes</Typography>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Politique relative aux cookies</Typography>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Conditions générales d&apos;utilisation</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 3,
              py: 2,
            }}
          >
            <Typography
              variant="h2"
              fontSize={20}
              fontWeight={900}
              color={"white"}
              mb={3}
            >
              PLAN DU SITE
            </Typography>
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography>Accueil</Typography>
            </Link>
            <Link
              href={"/notre-concept"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography>Notre concept</Typography>
            </Link>
            <Link
              href={"/nos-aventures"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography>Nos aventures</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 3,
              py: 2,
            }}
          >
            <Typography
              variant="h2"
              fontSize={20}
              fontWeight={900}
              color={"white"}
            >
              NEWSLETTER
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{ input: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
              <Button>S&apos;ABONNER</Button>
            </Box>
            <Typography color={"gray"} fontSize={12}>
              En saisissant votre adresse e-mail ci-dessus, vous acceptez de
              recevoir notre newsletter donnant accès à nos derniers événements,
              offres et initiatives. Plus de détails sont fournie dans notre{" "}
              <span style={{ textDecoration: "underline", fontWeight: 800 }}>
                politique de confidentialité
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Aligne les éléments tout à gauche et tout à droite
          borderTop: "1px solid #A9A6AA",
          px: { xs: 3, md: 10 },
          py: 2,
          alignItems: "center",
        }}
      >
        <Box display={"flex"}>
          <Typography fontSize={14} mr={2}>
            © 2024 Eden{" "}
          </Typography>
          <Typography fontSize={14}>Français</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            color="primary"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com/"
            target="_blank"
          >
            <XIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
