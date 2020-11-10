import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { ModalMain } from "./styles"

type ModalProps = {
  isVisible: boolean
  id: string
  title: string
  backgroundColor: string
  closeModal: () => void
}

const Modal = (props: ModalProps) => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })

  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      props.closeModal()
    }
  }

  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          key="modal"
          ref={cardRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          css={ModalMain(props.backgroundColor)}
        >
          <h1>{props.id}</h1>
          <p>{props.title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
