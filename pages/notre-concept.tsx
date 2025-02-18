import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { boxData } from "../lib/boxData";
import CustomLink from "@/components/link";
import BoxAdventure from "../components/boxAventure";
import AutoScrollingText from "@/components/autoScrollingText";

export default function NosAventures() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
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
            src="images/asset7.png"
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
              EDEN RAVIVE LA <br></br> FLAMME. RENFORCE LA<br></br> COMPLICITÉ.
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
      <Box
        sx={{
          display: { md: "flex" },
          mt: 10,
        }}
      >
        <Box
          component={"img"}
          src="images/asset8.png"
          alt="Image notre concept"
          sx={{
            width: { xs: "50%", md: "25%" },
            ml: { xs: "", md: "15%" },
            justifyContent: "center",
            marginLeft: { xs: "25%" },
            marginBottom: { xs: "10%" },
            marginTop: { xs: "-5%", md: "2%" },
          }}
        ></Box>

        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            fontFamily="Century Gothic"
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: "20px", md: "30px" },
              lineHeight: { xs: "", md: "1.5" },
              fontWeight: "bold",
              ml: { xs: "5%", md: "17%" },
              marginRight: { xs: "5%", md: "15%" },
              marginBottom: { xs: "7%" },
              mt: { md: "7%" },
            }}
          >
            Découvrez Eden, l&apos;application conçue pour raviver la flamme de
            l&apos;amour et renforcer la complicité au sein des couples.
          </Typography>
          <Typography
            fontFamily="Century Gothic"
            sx={{
              fontSize: { xs: "", md: "15px" },
              lineHeight: { xs: "", md: "1.5" },
              ml: { xs: "5%", md: "17%" },
              marginRight: { xs: "5%", md: "19%" },
              marginTop: { xs: "", md: "" },
              mb: { xs: "10%" },
            }}
          >
            Lancée en 2024 depuis Bordeaux, Eden propose une expérience unique
            axée sur la connexion émotionnelle et les moments partagés. Dans un
            monde où les relations peuvent se sentir en perte de connexion, nous
            vous offrons une bouffée d&apos;air frais en proposant des solutions
            uniques pour chacun des couples. De ce fait, chaque couple aura sa
            propre aventure.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          ml: { xs: "5%", md: "15%" },
        }}
      >
        <Typography
          sx={{
            marginRight: { xs: "5%", md: "13%" },
          }}
        >
          Chez Eden, notre mission est de créer un espace où les couples peuvent
          renforcer leur intimité, leur communication et leur confiance,
          éléments essentiels pour une relation harmonieuse. Notre application
          offre une multitude de programmes et de conseils conçus sur mesure
          pour répondre aux besoins de chaque couple. <br />
          <br />
          Le cœur de l&apos;expérience Eden réside dans nos &quot;box
          aventures&quot; personnalisées. Ces boîtes sont remplies
          d&apos;activités, de jeux et de conseils soigneusement sélectionnés
          pour correspondre aux intérêts et aux besoins spécifiques de chaque
          couple. Qu&apos;il s&apos;agisse de raviver la romance, de renforcer
          la connexion émotionnelle ou simplement de passer du bon temps
          ensemble, nos &quot;box aventures&quot; offrent une multitude
          d&apos;options pour enrichir votre relation. <br />
          <br />
          Chaque interaction sur l&apos;application est une opportunité de
          renforcer les liens d&apos;amour et de confiance entre les
          partenaires. Notre système de récompenses encourage les couples à
          investir dans leur relation, les incitant ainsi à progresser ensemble.{" "}
          <br />
          <br />
          Quelle que soit la durée de votre relation, notre application vous
          offre les outils et les ressources nécessaires pour cultiver un amour
          durable et unique. Rejoignez la communauté Eden dès aujourd&apos;hui
          et transformez votre relation en un jardin d&apos;amour et de bonheur.
        </Typography>
      </Box>

      <Box sx={{ mt: 20 }}>
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
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Box sx={{ width: "45%", textAlign: "right" }}>
              {/* AJOUTER TEXTE */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "10%",
              }}
            >
              <Box
                sx={{
                  height: "27px",
                  width: "27px",
                  borderRadius: "50px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
              <Box
                sx={{
                  height: { xs: "200px", md: "360px" },
                  width: "2px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
            </Box>
            <Box sx={{ width: "45%", textAlign: "left", display: "block" }}>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 60 },
                  mt: { xs: 0, md: "-38%" },
                  fontWeight: "bold",
                  color: "#C0A179",
                }}
              >
                OBJECTIF
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "18px" },
                }}
              >
                L&apos;objectif est d&apos;offrir un espace où les couples
                peuvent retrouver l&apos;intimité, la communication et la
                confiance qui sont essentielles à une relation épanouissante.
                Grâce à notre application, vous aurez accès à une variété de
                programmes et de conseils spécialement conçus pour répondre à
                vos besoins.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Box sx={{ width: "45%", textAlign: "right", display: "block" }}>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "60px" },
                  mt: { xs: "-30%", md: "-15%" },
                  fontWeight: "bold",
                  color: "#C0A179",
                }}
              >
                BOX AVENTURES
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "18px" },
                }}
              >
                Le cœur de l&apos;expérience réside dans la création de “box
                aventures” adaptées pour chaque couple. Ces boîtes sont remplies
                d&apos;activités, de jeux et de conseils soigneusement
                sélectionnés pour correspondre aux intérêts et aux besoins
                spécifiques de chaque couple. Les &quot;box aventures&quot;
                s&apos;adaptent à vous et à vos besoins. Que vous cherchiez à
                raviver la romance, à renforcer votre connexion émotionnelle ou
                simplement passer du bon temps avec votre partenaire, les
                &quot;box aventures&quot; offrent une multitude d&apos;options
                pour enrichir votre relation.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "10%",
              }}
            >
              <Box
                sx={{
                  height: "27px",
                  width: "27px",
                  borderRadius: "50px",
                  backgroundColor: "#C0A179",
                }}
              />
              <Box
                sx={{
                  height: "360px",
                  width: "2px",
                  backgroundColor: "#C0A179",
                }}
              />
            </Box>
            <Box sx={{ width: "45%", textAlign: "left" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Box sx={{ width: "45%", textAlign: "right" }}>
              {/* AJOUTER TEXTE */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "10%",
              }}
            >
              <Box
                sx={{
                  height: "27px",
                  width: "27px",
                  borderRadius: "50px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
              <Box
                sx={{
                  height: { xs: "250px", md: "360px" },
                  width: "2px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
            </Box>
            <Box sx={{ width: "45%", textAlign: "left", display: "block" }}>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "60px" },
                  mt: { xs: 0, md: "-25%" },
                  fontWeight: "bold",
                  color: "#C0A179",
                }}
              >
                CULTIVER VOTRE AMOUR
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "18px" },
                }}
              >
                Chaque jour devient une nouvelle aventure à partager avec votre
                moitié. Que vous soyez ensemble depuis des années, à distance,
                ou que vous veniez de vous rencontrer, notre application vous
                offre les outils et les ressources nécessaires pour cultiver un
                amour durable et unique.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Box sx={{ width: "45%", textAlign: "right", display: "block" }}>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 60 },
                  mt: { xs: "-40%", md: "-35%" },
                  fontWeight: "bold",
                  color: "#C0A179",
                }}
              >
                EXPÉRIENCE SUR MESURE
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "18px" },
                }}
              >
                Que vous soyez un couple aventureux à la recherche de sensations
                fortes ou un duo plus réservé en quête de moments calmes et
                intimes, Eden créée une expérience sur mesure pour répondre à
                vos désirs.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "10%",
              }}
            >
              <Box
                sx={{
                  height: "27px",
                  width: "27px",
                  borderRadius: "50px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
              <Box
                sx={{
                  height: { xs: "200px", md: "360px" },
                  width: "2px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
              <Box
                sx={{
                  height: "27px",
                  width: "27px",
                  borderRadius: "50px",
                  backgroundColor: "#C0A179",
                }}
              ></Box>
            </Box>
            <Box sx={{ width: "45%", textAlign: "left" }}>
              {/* AJOUTER TEXTE */}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Box sx={{ width: "45%", textAlign: "right" }}>
              {/* AJOUTER TEXTE */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "10%",
              }}
            ></Box>
            <Box sx={{ width: "45%", textAlign: "left", display: "block" }}>
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 60 },
                  mt: { xs: "-30%", md: "-12%" },
                  fontWeight: "bold",
                  color: "#C0A179",
                }}
              >
                REJOIGNEZ-NOUS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "18px" },
                }}
              >
                Rejoignez-nous aujourd&apos;hui et commencez à construire un
                avenir plus brillant ensemble.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          bgcolor: "#c0a179",
          mt: 10,
          px: 5,
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 25, md: 35 },
            fontWeight: "bold",
          }}
        >
          NOS VALEURS
        </Typography>
        <AutoScrollingText
          words={[
            "Confiance",
            "Consentement",
            "Créativité",
            "Respect",
            "Plaisir",
            "Partage",
          ]}
        />
      </Box>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "40px" },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            LES AVENTURES EDEN
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: { xs: "2%", md: "2%" },
              fontSize: { xs: "10px", md: "20px" },
            }}
          >
            Découvrez toutes les box
          </Typography>
        </Box>

        <BoxAdventure
          title={boxData[0].title}
          subtitle={boxData[0].subtitle}
          imageSrc="/images/asset4.jpeg"
          imageAlt={boxData[0].imageAlt}
          link={boxData[0].link}
        />
        <CustomLink url="/nos-aventures" text="TOUT VOIR" />
      </Box>
    </Box>
  );
}
