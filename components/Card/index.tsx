import { CardMain } from "./styles"

type CardProps = {
  id: string
  title: string
  backgroundColor: string
  onClick: () => void
}

const Card = (props: CardProps) => {
  return (
    <div css={CardMain(props.backgroundColor)} onClick={props.onClick}>
      {props.title}
    </div>
  )
}

export default Card
