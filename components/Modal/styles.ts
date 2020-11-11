import { css } from "@emotion/core"

export const ModalMain = (backgroundColor: string) => css`
  width: 80%;
  height: 80%;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 1em;
  background-color: ${backgroundColor};
`
