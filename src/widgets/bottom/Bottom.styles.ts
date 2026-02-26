import styled from "styled-components";

export const BottomWrap = styled.section`
  background: linear-gradient(90deg, #02011f 0%, #06225d 100%);
  padding: 40px 32px;
`;

export const BottomInner = styled.div`
  margin: 0 auto;

  display: grid;
  grid-template-columns: 220px 340px 1fr 260px;
  grid-template-areas: "char download info switch";
  gap: 32px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "download"
      "switch"
      "info";
    text-align: center;
    gap: 24px;
  }
`;

export const Character = styled.img`
  grid-area: char;
  width: 180px;
  height: auto;
  justify-self: start;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DownloadCol = styled.div`
  grid-area: download;

  @media (max-width: 1200px) {
    justify-self: center;
  }
`;

export const InfoCol = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-self: start;

  @media (max-width: 1200px) {
    flex-direction: row;
    justify-self: center;
    align-items: flex-start;
    justify-content: center;
    gap: 28px;
    margin-top: 52px;
  }

  @media (max-width: 480px) {
    flex-direction: column !important;
  }
`;

export const RowWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1200px) {
    width: 287px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
  }
`;
export const SwitcherCol = styled.div`
  grid-area: switch;
  justify-self: end;
  display: flex;
  flex-direction: column;
  gap: 108px;
  align-items: flex-end;

  @media (max-width: 1200px) {
    justify-self: center;
    align-items: center;
    gap: 60px;
  }
`;

export const Badge18 = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
`;

export const SmallText = styled.div`
  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.65);
  @media (max-width: 1200px) {
    max-width: 180px;
  }
`;

export const Icon = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;

  @media (max-width: 1200px) {
  }
`;

export const Title = styled.div`
  font-family:
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-weight: 800;
  font-size: clamp(22px, 2.5vw, 32px);
  line-height: 1.2;
  color: #ffffff;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-family:
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
`;

export const DownloadIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 12px;
`;

export const CasinoLogo = styled.img`
  width: 175px;
  height: 80px;
  object-fit: contain;
`;
