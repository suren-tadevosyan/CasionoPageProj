import { Button } from "@mui/material";
import styled from "styled-components";
import { GlobalStyle } from "./app/styles/GlobalStyle";

const Wrapper = styled.div`
  padding: 40px;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Casino Test</h1>
        <Button variant="contained">Works</Button>
      </Wrapper>
    </>
  );
};
