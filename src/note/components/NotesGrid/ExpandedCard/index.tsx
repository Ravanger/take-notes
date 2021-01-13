import { CardProps } from "./types"
import { DivDimBackground } from "./styles"
import { CloseButton } from "./CloseButton"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import useNotesDispatch from "src/redux/modules/note/useNotesDispatch"

export const ExpandedCard = (props: CardProps) => {
  const { dispatchSaveNote } = useNotesDispatch()

  return (
    <DivDimBackground onClick={props.closeCard}>
      <div onClick={(event) => event.stopPropagation()}>
        <CloseButton closeCard={props.closeCard} />
        <h1>{props.noteData.title}</h1>
        <ReactQuill
          defaultValue={props.noteData.text}
          onChange={(content) => {
            if (content !== props.noteData.text) {
              dispatchSaveNote({
                ...props.noteData,
                text: content,
              })
            }
          }}
        />
      </div>
    </DivDimBackground>
  )
}

export default ExpandedCard
