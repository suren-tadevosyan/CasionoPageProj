import { useApp } from "../../app/providers/AppProvider";
import { geoAssets, geoTheme } from "../../app/providers/geo";
import { useT } from "../../app/providers/i18n";

import { DownloadCard } from "./DownloadCard";
import { LanguageSelect } from "./LanguageSelect";
import { SocialLinks } from "./SocialLinks";

import {
  BottomWrap,
  BottomInner,
  Character,
  InfoCol,
  SwitcherCol,
  DownloadCol,
  RowWithIcon,
  Icon,
  Badge18,
  SmallText,
} from "./Bottom.styles";

export function BottomSection() {
  const { state } = useApp();
  const t = useT();
  const assets = geoAssets[state.geo];
  const theme = geoTheme[state.geo];

  return (
    <BottomWrap $from={theme.bottom.from} $to={theme.bottom.to}>
      <BottomInner>
        <Character src={assets.character} alt="character" />

        <DownloadCol>
          <DownloadCard />
        </DownloadCol>

        <InfoCol>
          <RowWithIcon>
            <Icon src="/assets/icons/18+.png" alt="18+" />
            <Badge18>{t("only18")}</Badge18>
          </RowWithIcon>

          <RowWithIcon>
            <Icon src="/assets/icons/license.png" alt="license" />
            <SmallText>
              Casino is certified by the Anjouan Gaming Authority
            </SmallText>
          </RowWithIcon>
        </InfoCol>

        <SwitcherCol>
          <LanguageSelect />
          <SocialLinks />
        </SwitcherCol>
      </BottomInner>
    </BottomWrap>
  );
}
