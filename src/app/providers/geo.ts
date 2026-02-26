export type Geo = "AM" | "RU" | "US";
export type Locale = "hy" | "ru" | "en";

export const GEO_LIST: {
  value: Geo;
  label: string;
  flag: string;
}[] = [
  { value: "AM", label: "Armenia", flag: "/assets/flags/am.png" },
  { value: "RU", label: "Russia", flag: "/assets/flags/ru.png" },
  { value: "US", label: "United States", flag: "/assets/flags/us.svg" },
];

export function getLocaleByGeo(geo: Geo): Locale {
  switch (geo) {
    case "AM":
      return "hy";
    case "RU":
      return "ru";
    case "US":
      return "en";
    default:
      return "en";
  }
}

export const geoAssets: Record<
  Geo,
  {
    logo: string;
    slot: string;
    character: string;
  }
> = {
  AM: {
    logo: "/assets/geo-am/logo.svg",
    slot: "/assets/geo-am/slot777.png",
    character: "/assets/geo-am/character.png",
  },
  RU: {
    logo: "/assets/geo-ru/logo.svg",
    slot: "/assets/geo-ru/slot777.png",
    character: "/assets/geo-ru/character.png",
  },
  US: {
    logo: "/assets/geo-us/logo.svg",
    slot: "/assets/geo-us/slot777.png",
    character: "/assets/geo-us/character.png",
  },
};
