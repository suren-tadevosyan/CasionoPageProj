import React from "react";
import { HeroSection } from "../../widgets/hero/HeroSection";
import { BottomSection } from "../../widgets/bottom/BottomSection";
import { GameModal } from "../../shared/ui/GameModal";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BottomSection />
      <GameModal />
    </>
  );
}