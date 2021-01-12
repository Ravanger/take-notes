import styled from "styled-components"

export const DivDimBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  > div {
    z-index: 100;
    min-height: 20rem;
    background-color: white;
    margin: 2rem;
  }
`
