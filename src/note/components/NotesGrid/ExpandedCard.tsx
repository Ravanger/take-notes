import { CardProps } from "./types"
import { DivBlurredBackground } from "./styles"

export const ExpandedCard = (props: CardProps) => {
  return (
    <DivBlurredBackground onClick={props.closeCard}>
      {props.noteData.title}
    </DivBlurredBackground>
  )
}

export default ExpandedCard
