import { CardProps } from "./types"
import { DivDimBackground } from "./styles"

export const ExpandedCard = (props: CardProps) => {
  return (
    <DivDimBackground onClick={props.closeCard}>
      <div>{props.noteData.title}</div>
    </DivDimBackground>
  )
}

export default ExpandedCard
