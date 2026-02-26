
import styled from "styled-components";
import { useT } from "../../app/providers/i18n";
import { CasinoLogo, DownloadIcon, Subtitle, Title } from "./Bottom.styles";
import { GradientButton } from "../../shared/ui/GradientButton";

const Card = styled.div`
  padding: 18px;
  border: 1px dashed rgba(255, 168, 81, 0.6);
  border-radius: 14px;
  background: rgba(8, 12, 40, 0.55);
  min-width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export function DownloadCard() {
  const t = useT();

  return (
    <Card>
      <Row>
        <CasinoLogo src="/assets/logo.svg" alt="Casino Royale" />
        <Title>{t("downloadTitle")}</Title>
        <Subtitle>{t("downloadSubtitle")}</Subtitle>

        <GradientButton sx={{ width: 250, height: 58 }}>
          <DownloadIcon src="/assets/icons/download.svg" />
          {t("installApp")}
        </GradientButton>
      </Row>
    </Card>
  );
}
