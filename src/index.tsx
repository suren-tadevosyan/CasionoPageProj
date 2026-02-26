import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./app/providers/AppProvider";
import { App } from "./app/App"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);