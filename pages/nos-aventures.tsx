import React, { useRef } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "@/lib/themes/themeMui";
import BoxAdventure from "../components/boxAventure";
import { boxData } from "../lib/boxData";

export default function NosAventures() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "380px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <section>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: { xs: "auto", md: "60vh" },
            width: "100%",
          }}
        >
          <Box
            component={"img"}
            src="images/NosAventures.png"
            alt="Image nos aventures"
            sx={{
              width: { xs: "180%", md: "100%" },
              overflow: { xs: "hidden", md: "visible" },
              transform: { md: "translateY(-15%)", xs: "translateX(-20%)" },
              justifyContent: "center",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              color="white"
              marginBottom={-5}
              fontFamily="Avander"
              sx={{ fontSize: { xs: 25, sm: 35, md: 45, lg: 55 } }}
            >
              NOS AVENTURES
            </Typography>
          </Box>
        </Box>
      </section>
      <IconButton
        size="large"
        sx={{
          transform: "translateY(-50%)",
          bgcolor: "#C0A179",
          "&:hover": { backgroundColor: "#AE925B" },
        }}
        onClick={handleScrollToBottom}
      >
        <KeyboardArrowDownIcon color="primary" />
      </IconButton>
      <Box ref={bottomRef} />

      <section>
        <Box
          sx={{
            textAlign: "center",
            pt: { md: 12, xs: 5 },
            maxWidth: "md",
            alignItems: "center",
            px: { xs: 5, md: 10 },
          }}
        >
          <Typography
            color={"white"}
            variant="h5"
            sx={{
              color: "white",
              fontSize: { xs: 28, md: 38 },
              mb: 2,
              fontWeight: 700,
            }}
          >
            LES AVENTURES EDEN
          </Typography>
          <Typography color={"white"} fontSize={16} mb={12}>
            Découvrez toutes les box
          </Typography>
        </Box>
      </section>
      <section>
        <Grid
          container
          sx={{ maxWidth: { xl: "lg", lg: "md", md: "xs" } }}
          rowSpacing={10}
        >
          {boxData.map((box, index) => (
            <Grid
              item
              xs={12}
              md={6}
              xl={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <BoxAdventure
                title={box.title}
                subtitle={box.subtitle}
                imageSrc={box.imageSrc}
                imageAlt={box.imageAlt}
                link={box.link}
              />
            </Grid>
          ))}
        </Grid>
      </section>
      <section style={{ width: "100%", marginTop: 60 }}>
        <Box
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 1, md: 3 },
            bgcolor: "#c0a179",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 15, md: 25 },
              ml: { xs: 3, md: 3 },
              mr: { xs: 3, md: 3 },

              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
              lineHeight: { xs: 2, md: 2 },
            }}
          >
            &quot;Explorez, partagez, connectez-vous. <br /> Laissez Eden être le
            guide de vos plus belles aventures à deux.&quot;
          </Typography>
        </Box>
      </section>
    </Box>
  );
}
