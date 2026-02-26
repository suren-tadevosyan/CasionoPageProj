import styled from "styled-components";

export const HeroWrap = styled.section`
  min-height: 100svh;
  min-height: 100vh;

  background: linear-gradient(90deg, #06225d 0%, #02011f 100%);

  background-image: url("/assets/bg-stars.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

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
