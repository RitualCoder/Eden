import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#C0A179",
    },
  },
  typography: {
    allVariants: {
      color: "#FFFFFF",
      fontFamily: ["CenturyGothic", "Avander", "sans-serif"].join(","),
    },

    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "CenturyGothic",
      "Avander",
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontFamily: "CenturyGothic",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
      fontFamily: "CenturyGothic",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontFamily: "CenturyGothic",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontFamily: "CenturyGothic",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontFamily: "CenturyGothic",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontFamily: "CenturyGothic",
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#FFFFFF", // Définit la couleur du texte pour les TextField
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#FFFFFF", // Définit la couleur de la ligne sous le TextField
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#FFFFFF", // Définit la couleur de la ligne sous le TextField après le focus
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#FFFFFF", // Définit la couleur de la ligne sous le TextField au survol
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
      //   CenturyGothic
        @font-face {
          font-family: 'CenturyGothic';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('CenturyGothic'), local('CenturyGothic'), url(./fonts/CenturyGothic.ttf) format('truetype');
        }
      //  Avander
      @font-face {
          font-family: 'Avander';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Avander'), local('Avander'), url(./fonts/Avander.ttf) format('truetype');
        }
      `,
    },
  },
});

export default theme;
