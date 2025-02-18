import { Box, Drawer, IconButton, useMediaQuery } from "@mui/material";
import EdenIcon from "./icons/edenIcon";
import React from "react";
import { ButtonComponent } from "./button";
import CustomLink from "./link";
import theme from "@/lib/themes/themeMui";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

export default function NavBar() {
  const [displayBackgroundColor, setDisplayBackgroundColor] =
    React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();
  const currentUrl = router.asPath;

  const [displayDrawerMobile, setDisplayDrawerMobile] = React.useState(false);

  const handleScroll = (e: any) => {
    setDisplayBackgroundColor(window.scrollY > 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderDesktop = () => {
    return (
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: displayBackgroundColor
            ? "rgba(0, 0, 0, 0.9)"
            : "transparent",
          height: "80px",
          py: 1,
          px: 8,
          zIndex: 100,
          transition: "background-color 0.3s ease",
        }}
        onScroll={(e) => handleScroll(e)}
      >
        {/* Contenu à gauche */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <CustomLink url="/" icon={<EdenIcon size={55} />} />

          <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
            <CustomLink
              url="/notre-concept"
              text="NOTRE CONCEPT"
              sxText={{
                fontWeight: currentUrl === "/notre-concept" ? 1000 : 400,
              }}
            />

            <CustomLink
              url="/nos-aventures"
              text="NOS AVENTURES"
              sxText={{
                fontWeight: currentUrl === "/nos-aventures" ? 1000 : 400,
              }}
            />
          </Box>
        </Box>

        {/* Contenu à droite */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ButtonComponent url="/" text="Télécharger l'app" />
        </Box>
      </Box>
    );
  };

  const renderMobile = () => {
    return (
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "rgba(0, 0, 0, 0.9)",
          height: "80px",
          py: 1,
          px: 4,
          zIndex: 100,
          transition: "background-color 0.3s ease",
        }}
        onScroll={(e) => handleScroll(e)}
      >
        <CustomLink url="/" icon={<EdenIcon size={55} />} />

        {/* Contenu à gauche */}
        <IconButton>
          <MenuIcon
            fontSize="large"
            sx={{ color: "white" }}
            onClick={() => setDisplayDrawerMobile(true)}
          />
        </IconButton>

        <Drawer
          PaperProps={{
            sx: { width: "100%", bgcolor: "black" },
          }}
          open={displayDrawerMobile}
          onClose={() => setDisplayDrawerMobile(false)}
          anchor="top"
        >
          <IconButton sx={{ position: "absolute", right: 10, top: 10 }}>
            <CloseIcon
              fontSize="medium"
              sx={{ color: "white" }}
              onClick={() => setDisplayDrawerMobile(false)}
            />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 5,
              gap: 3,
            }}
          >
            <Box mb={3}>
              <CustomLink
                url="/"
                icon={<EdenIcon size={55} />}
                setDisplayDrawerMobile={setDisplayDrawerMobile}
              />
            </Box>

            <CustomLink
              url="/notre-concept"
              text="NOTRE CONCEPT"
              setDisplayDrawerMobile={setDisplayDrawerMobile}
            />

            <CustomLink
              url="/nos-aventures"
              text="NOS AVENTURES"
              setDisplayDrawerMobile={setDisplayDrawerMobile}
            />

            <CustomLink
              url="/"
              text="Télécharger l'application"
              setDisplayDrawerMobile={setDisplayDrawerMobile}
            />
          </Box>
        </Drawer>
      </Box>
    );
  };

  return isMobile ? renderMobile() : renderDesktop();
}
