import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
`;

export const App = () => {
  return (
    <Wrapper>
      <h1>Casino Test</h1>
      <Button variant="contained">Works</Button>
    </Wrapper>
  );
};