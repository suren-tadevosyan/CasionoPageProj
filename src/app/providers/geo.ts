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
    bg: string;
    logo: string;
    slot: string;
    character: string;
  }
> = {
  AM: {
    bg: "/assets/geo-am/bg-stars.png",
    logo: "/assets/geo-am/logo.svg",
    slot: "/assets/geo-am/slot777.png",
    character: "/assets/geo-am/character.png",
  },
  RU: {
    bg: "/assets/geo-ru/bg-stars.png",
    logo: "/assets/geo-ru/logo.svg",
    slot: "/assets/geo-ru/slot777.png",
    character: "/assets/geo-ru/character.png",
  },
  US: {
    bg: "/assets/geo-us/bg-stars.png",
    logo: "/assets/geo-us/logo.svg",
    slot: "/assets/geo-us/slot777.png",
    character: "/assets/geo-us/character.png",
  },
};
