import { css } from "@emotion/core"
import Link from "next/link"

type CardProps = {
  id: string
  title: string
  backgroundColor: string
}

const Card = (props: CardProps) => {
  return (
    <Link href={`/note/${encodeURIComponent(props.id)}`}>
      <a>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            border: thin solid black;
            width: 10rem;
            height: 15rem;
            margin: 1rem;
            padding: 1rem;
            border-radius: 0.4em;
            background-color: ${props.backgroundColor};
          `}
        >
          {props.title}
        </div>
      </a>
    </Link>
  )
}

export default Card
