import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#113F67", // Main blue
      light: "#7AA9D8", // Light blue
      contrastText: "#ffffff", // White
    },
    secondary: {
      main: "#67113F", // Redwine
      contrastText: "#ffffff", // White
    },
    info: {
      main: "#2C786C", // Green
      light: "#6CB5A8", // Light green
    },
    error: {
      main: "#DC2F2F", // Red
    },
    success: {
      main: "#2C786C", // Green
    },
    grey: {
      A700: "#525252", // Grey for texts
      A400: "#D9D9D9", // Grey for backgrounds
    },
    text: {
      primary: "#3D3D3D", // Dark Grey
      secondary: "#525252", // Grey for texts
    },
    background:{
      default: "linear-gradient(180deg, #113F67 0%, #227DCD 61%)",
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          padding: "10px 24px",
          borderRadius: "0",
          textTransform: "none",
        },
      },
    },
  },
});
