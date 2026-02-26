
import { FormControl, MenuItem, Select, Box } from "@mui/material";
import { useApp } from "../../app/providers/AppProvider";
import { GEO_LIST, Geo } from "../../app/providers/geo";

export function LanguageSelect() {
  const { state, dispatch } = useApp();

  const currentGeo = GEO_LIST.find((g) => g.value === state.geo);

  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <Select
        value={state.geo}
        onChange={(e) =>
          dispatch({ type: "SET_GEO", geo: e.target.value as Geo })
        }
        sx={{
          background: "#FFFFFF1A",
          borderRadius: "8px",
          color: "#fff",
          height: 44,

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            gap: "10px",
          },
        }}
        renderValue={() => (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={currentGeo?.flag}
              alt={currentGeo?.label}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            {currentGeo?.label}
          </Box>
        )}
      >
        {GEO_LIST.map((g) => (
          <MenuItem
            key={g.value}
            value={g.value}
            sx={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <img
              src={g.flag}
              alt={g.label}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            {g.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}