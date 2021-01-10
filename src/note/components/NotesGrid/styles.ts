import styled from "styled-components"

export const DivNoteCard = styled.div`
  background-color: ${(props) => props.color || "revert"};
`

export const DivDimBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`
