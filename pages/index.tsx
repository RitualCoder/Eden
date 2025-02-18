import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import React from "react";
import { ButtonComponent } from "@/components/button";
import StoreButton from "@/components/storeButton";
import { data } from "../lib/dataFAQ";
import FAQ from "@/components/faq";
import CustomCard from "@/components/customCard";
import theme from "@/lib/themes/themeMui";

export default function HomePage() {
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
        minWidth: "380px",
        overflow: "hidden",
      }}
    >
      <section>
        <Box
          sx={{
            position: "relative",
            height: "80vh",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Box
            component={"img"}
            src="images/Accueil.jpeg"
            alt="Image acceuil"
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
              right: { md: 30, xs: 20 },
              bottom: { xs: 70, md: 50 },
              textAlign: "right",
              mb: 3,
            }}
          >
            <Box sx={{ ml: { xs: 3, md: 3 } }}>
              <Typography
                variant="h1"
                color={"white"}
                fontFamily={"Avander"}
                sx={{ fontSize: { xs: 30, md: 60 } }}
              >
                DECOUVREZ
              </Typography>
              <Typography
                variant="h1"
                color={"white"}
                fontFamily={"Avander"}
                sx={{ fontSize: { xs: 25, md: 50 } }}
              >
                NOS AVENTURES
              </Typography>
            </Box>

            <IconButton
              size="large"
              sx={{
                bgcolor: "#C0A179",
                mt: 2,
                "&:hover": { backgroundColor: "#AE925B" },
              }}
              onClick={handleScrollToBottom}
            >
              <KeyboardArrowDownIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
        <Box ref={bottomRef} />
      </section>

      <section>
        <Box
          sx={{
            textAlign: "center",
            pt: { md: 15, xs: 5 },
            maxWidth: { lg: "1000px", md: "md", xs: "xs" },
            alignItems: "center",
            px: { xs: 5, md: 10 },
          }}
        >
          <Typography
            color={"white"}
            variant="h5"
            sx={{ color: "white", fontSize: { xs: 28, md: 38 }, mb: 2 }}
          >
            EDEN C&apos;EST QUOI ?
          </Typography>
          <Typography color={"white"} fontSize={16}>
            Découvrez Eden, votre allié pour raviver la passion et renforcer vos
            liens. Avec nos &quot;box aventures&quot; sur mesure, explorez des
            expériences uniques conçues spécialement pour vous. Rejoignez-nous
            dès maintenant pour un avenir rempli de complicité et d&apos;amour.
          </Typography>
          <ButtonComponent
            url={"/notre-concept"}
            text={"NOTRE CONCEPT"}
            sx={{ mt: 5 }}
          />
        </Box>
      </section>

      {!isMobile && (
        <section>
          <Box
            sx={{
              display: "flex",
              maxWidth: "1000px",
              px: 10,
              mt: 20,
              alignItems: "center",
              gap: 10,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Typography color={"white"} variant="h5">
                EDEN NE FAITE PLUS QU&apos;UN AVEC VOTRE MOITIÉ
              </Typography>
              <Typography color={"white"} fontSize={16}>
                Eden unit les cœurs et les âmes. Nos &quot;box aventures&quot;
                ravivent la flamme de l&apos;amour, explorant de nouveaux
                horizons ensemble. Découvrez une connexion profonde, où vous ne
                faites plus qu&apos;un, dans une danse éternelle d&apos;amour et
                de complicité.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <StoreButton platform="ios" />
                <StoreButton platform="android" />
              </Box>
            </Box>
            <Box
              component={"img"}
              src="images/iPhonePicture.png"
              sx={{ height: "60vh" }}
            />
          </Box>
        </section>
      )}

      {isMobile && (
        <section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: 5,
              mt: 20,
              alignItems: "center",
              textAlign: "center",
              gap: 5,
            }}
          >
            <Typography color={"white"} variant="h5">
              EDEN NE FAITE PLUS QU&apos;UN AVEC VOTRE MOITIÉ
            </Typography>
            <Typography color={"white"} fontSize={16}>
              Eden incarne l&apos;unité et la connexion avec votre partenaire.
              Nos &quot;box aventures&quot; sur mesure vont au-delà des
              activités ordinaires, nourrissant vos liens et ravivant la flamme
              de l&apos;amour. Chaque moment devient une exploration magique, où
              vous découvrez ensemble de nouveaux horizons et explorez votre
              relation. Unifiez vos désirs et vos rêves avec votre partenaire.
              Eden transcende le temps et l&apos;espace, vous permettant de vous
              sentir connectés, même à distance. Que vous soyez ensemble depuis
              des années ou que vous veniez de vous rencontrer, Eden vous offre
              les outils pour tisser des liens durables et significatifs.
              Embarquez dans cette aventure unique et grandissez ensemble dans
              votre amour et votre compréhension mutuelle. Découvrez une
              nouvelle dimension de votre relation, où vous ne faites plus
              qu&apos;un, unissant vos cœurs et vos âmes dans une danse
              éternelle d&apos;amour et de complicité.
            </Typography>

            <Box
              component={"img"}
              src="images/iPhonePicture.png"
              sx={{ height: "60vh" }}
            />

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <StoreButton platform="ios" />
              <StoreButton platform="android" />
            </Box>
          </Box>
        </section>
      )}

      <section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              maxWidth: "md",
              mt: 15,
              alignItems: "center",
              gap: { xs: 5, md: 10 },
              mb: 3,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CustomCard
              imageSrc={"images/asset1.jpeg"}
              title={"DES AVENTURES PERSONNALISÉES"}
              text={
                "Des box sur mesure pour des moments uniques. Explorez ensemble de nouveaux horizons dans votre relation."
              }
              buttonText={"+"}
            />
            <CustomCard
              imageSrc={"images/asset2.png"}
              title={"FAIRE QUELQUE CHOSE POUR L'AUTRE"}
              text={
                "Des gestes d'amour emballés dans des box. Offrez-lui des instants inoubliables."
              }
              buttonText={"+"}
            />
            <CustomCard
              imageSrc={"images/asset3.png"}
              title={"RAVIVER OU ATTISER LE DÉSIR"}
              text={
                "Ravivez la passion, attisez le désir. Des moments ardents à portée de main, dans nos box spécialement conçues pour vous."
              }
              buttonText={"+"}
            />
          </Box>
          <ButtonComponent
            url={"/nos-aventures"}
            text={"DÉCOUVREZ NOS OFFRES"}
            sx={{ mt: 5 }}
          />
        </Box>
      </section>

      <section>
        <Box
          sx={{
            textAlign: "center",
            mt: 15,
            maxWidth: { xs: "xs", md: "md" },
            mx: { xs: 3 },
          }}
        >
          <Typography
            color={"white"}
            variant="h2"
            fontWeight={500}
            sx={{ fontSize: { xs: 30, md: 40 }, mb: 3 }}
          >
            FAQ
          </Typography>
          <FAQ data={data} />
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
            mt: 15,
            mb: 10,
            maxWidth: "md",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { md: 40, xs: 30 }, color: "white" }}
          >
            COMMENCER VOS AVENTURES DÈS MAINTENANT !
          </Typography>
          <Typography color={"white"} fontSize={16} mb={3}>
            Télécharger l&apos;application Eden
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <StoreButton platform="android" />
            <StoreButton platform="ios" />
          </Box>
        </Box>
      </section>
    </Box>
  );
}
