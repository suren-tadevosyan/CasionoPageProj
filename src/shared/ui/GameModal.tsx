
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { useApp } from "../../app/providers/AppProvider";
import { GAME_URL } from "../constants/game";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CloseBtn = styled(IconButton)`
  position: absolute !important;
  top: 12px;
  right: 12px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.45) !important;
`;

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

export function GameModal() {
  const { state, dispatch } = useApp();

  return (
    <Dialog
      fullScreen
      open={state.isGameOpen}
      onClose={() => dispatch({ type: "CLOSE_GAME" })}
    >
      <Wrap>
        <CloseBtn onClick={() => dispatch({ type: "CLOSE_GAME" })} aria-label="Close">
          <CloseIcon />
        </CloseBtn>
        <Frame src={GAME_URL} allow="fullscreen" />
      </Wrap>
    </Dialog>
  );
}