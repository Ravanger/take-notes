import { CloseButtonProps } from "./types"
import { ButtonClose } from "./styles"

export const CloseButton = (props: CloseButtonProps) => (
  <ButtonClose
    onClick={() => {
      props.closeCard()
    }}
  >
    X
  </ButtonClose>
)

export default CloseButton
