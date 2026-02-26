import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useApp } from "../../app/providers/AppProvider";
import { geoTheme } from "../../app/providers/geo";

const Btn = styled(Button)<{
  $from: string;
  $to: string;
  $hoverFrom: string;
  $hoverTo: string;
}>`
  background: linear-gradient(90deg, ${(p) => p.$from} 0%, ${(p) => p.$to} 100%);
  color: #ffffff;
  font-weight: 600;
  border-radius: 10px;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
      90deg,
      ${(p) => p.$hoverFrom} 0%,
      ${(p) => p.$hoverTo} 100%
    );
  }
`;

export function GradientButton(props: React.ComponentProps<typeof Button>) {
  const { state } = useApp();
  const t = geoTheme[state.geo].button;

  return (
    <Btn
      {...props}
      $from={t.from}
      $to={t.to}
      $hoverFrom={t.hoverFrom}
      $hoverTo={t.hoverTo}
    />
  );
}