import { CardProps } from "./types"
import { DivDimBackground } from "./styles"
import { CloseButton } from "./CloseButton"

export const ExpandedCard = (props: CardProps) => {
  return (
    <DivDimBackground onClick={props.closeCard}>
      <div onClick={(event) => event.stopPropagation()}>
        {props.noteData.title}
        <CloseButton closeCard={props.closeCard} />
      </div>
    </DivDimBackground>
  )
}

export default ExpandedCard
