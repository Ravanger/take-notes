import { motion } from "framer-motion"
import { CardMain } from "./styles"

type CardProps = {
  id: string
  title: string
  backgroundColor: string
  onClick: () => void
}

const Card = (props: CardProps) => {
  return (
    <motion.div
      layout
      css={CardMain(props.backgroundColor)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}
    >
      {props.title}
    </motion.div>
  )
}

export default Card
