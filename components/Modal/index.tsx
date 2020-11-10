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
  const ref = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      props.closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          css={ModalMain(props.backgroundColor)}
          ref={ref}
        >
          <h1>{props.id}</h1>
          <p>{props.title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
