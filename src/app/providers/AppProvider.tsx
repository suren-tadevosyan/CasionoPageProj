import React, { createContext, useContext, useMemo, useReducer } from "react";
import type { Geo, Locale } from "./geo";
import { getLocaleByGeo } from "./geo";
import { detectInitialGeo } from "./geo";

type State = {
  geo: Geo;
  locale: Locale;
  isGameOpen: boolean;
};

type Action =
  | { type: "SET_GEO"; geo: Geo }
  | { type: "OPEN_GAME" }
  | { type: "CLOSE_GAME" };

const detectedGeo = typeof window !== "undefined" ? detectInitialGeo() : "US";

const initialState: State = {
  geo: detectedGeo,
  locale: getLocaleByGeo(detectedGeo),
  isGameOpen: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_GEO":
      localStorage.setItem("geo", action.geo);
      return {
        ...state,
        geo: action.geo,
        locale: getLocaleByGeo(action.geo),
      };
    case "OPEN_GAME":
      return { ...state, isGameOpen: true };
    case "CLOSE_GAME":
      return { ...state, isGameOpen: false };
    default:
      return state;
  }
}

const AppCtx = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
