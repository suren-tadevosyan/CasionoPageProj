import { useApp } from "../../app/providers/AppProvider";
import { geoAssets } from "../../app/providers/geo";
import { useT } from "../../app/providers/i18n";
import { HeroWrap, HeroInner, Logo, Slot, HeroButtonWrap } from "./Hero.styles";
import { GradientButton } from "../../shared/ui/GradientButton";

export function HeroSection() {
  const { state, dispatch } = useApp();
  const t = useT();
  const assets = geoAssets[state.geo];

  return (
    <HeroWrap>
      <HeroInner>
        <Logo src={assets.logo} alt="Casino Royale" />
        <Slot src={assets.slot} alt="777" />
        <HeroButtonWrap>
          <GradientButton
            size="large"
            onClick={() => dispatch({ type: "OPEN_GAME" })}
            sx={{ width: 240, height: 48 }}
          >
            {t("openGame")}
          </GradientButton>
        </HeroButtonWrap>
      </HeroInner>
    </HeroWrap>
  );
}
