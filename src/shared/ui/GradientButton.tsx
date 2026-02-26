import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GradientButton = styled(Button)`
  background: linear-gradient(90deg, #ff8d6b 0%, #ffba47 100%);
  color: #ffffff;
  font-weight: 600;
  border-radius: 10px;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(90deg, #ff7c55 0%, #ffb033 100%);
  }
`;