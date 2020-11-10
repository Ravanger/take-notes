import { css } from "@emotion/core"

export const CardMain = (backgroundColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: thin solid black;
  width: 10rem;
  height: 15rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.4em;
  background-color: ${backgroundColor};
`
