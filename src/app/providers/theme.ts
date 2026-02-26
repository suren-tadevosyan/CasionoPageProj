import { createTheme } from "@mui/material/styles";
import type { Geo } from "./geo";

export function getThemeByGeo(_: Geo) {
  return createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#050A25",
        paper: "#0B1234",
      },
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: '"SF Pro Display", Inter, Arial, sans-serif',
    },
  });
}