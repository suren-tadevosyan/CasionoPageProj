import styled from "styled-components";

export const HeroWrap = styled.section<{ $bg: string }>`
  min-height: 100vh;
  background: url(${(p) => p.$bg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroInner = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Logo = styled.img`
  width: 160px;
  height: auto;
`;

export const Slot = styled.img`
  width: 240px;
  height: auto;
`;

export const HeroButtonWrap = styled.div`
  margin-top: 6px;
`;