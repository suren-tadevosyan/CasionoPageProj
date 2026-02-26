import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useApp } from "./providers/AppProvider";
import { getThemeByGeo } from "./providers/theme";
import { HomePage } from "../pages/HomePage/HomePage";

export function App() {
  const { state } = useApp();
  const theme = React.useMemo(() => getThemeByGeo(state.geo), [state.geo]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}