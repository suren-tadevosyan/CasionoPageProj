
import styled from "styled-components";
import { useT } from "../../app/providers/i18n";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  gap: 12px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  text-align: right; 

`;

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const IconBtn = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Img = styled.img`
  width: 52px;
  height: 52px;
`;

export function SocialLinks() {
  const t = useT();

  return (
    <Container>
      <Title>{t("socialMedia")}</Title>

      <Wrap>
        <IconBtn href="#" aria-label="Instagram">
          <Img src="/assets/icons/instagram.png" alt="" />
        </IconBtn>

        <IconBtn href="#" aria-label="Telegram">
          <Img src="/assets/icons/telegram.png" alt="" />
        </IconBtn>

        <IconBtn href="#" aria-label="X">
          <Img src="/assets/icons/x.png" alt="" />
        </IconBtn>

        <IconBtn href="#" aria-label="Email">
          <Img src="/assets/icons/mail.png" alt="" />
        </IconBtn>
      </Wrap>
    </Container>
  );
}
