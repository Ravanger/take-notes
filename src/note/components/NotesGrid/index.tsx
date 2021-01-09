import { useEffect } from "react"

import { Note } from "src/redux/modules/note/noteTypes"
import useNotesDispatch from "src/redux/modules/note/useNotesDispatch"
import { DivNoteCard } from "./styles"

interface NotesGridProps {
  notes: Note[]
}

const NotesGrid = (props: NotesGridProps) => {
  const { dispatchLoadNotes, dispatchDeleteNote } = useNotesDispatch()

  useEffect(() => {
    dispatchLoadNotes()
  }, [dispatchLoadNotes])

  const isValid = props.notes && props.notes.length > 0

  return (
    <>
      <div>
        {isValid
          ? props.notes.map((note, index) => (
              <DivNoteCard
                key={index}
                color={note.backgroundColor}
                onClick={() => console.log("Open ", note.id)}
              >
                <h2>{note.title}</h2>
                {note.text ? <p>{note.text}</p> : null}
                <button
                  onClick={() => {
                    dispatchDeleteNote(note.id)
                  }}
                >
                  Delete
                </button>
              </DivNoteCard>
            ))
          : "EMPTY"}
      </div>
    </>
  )
}

export default NotesGrid
