import { useDispatch } from "react-redux"
import { Note } from "src/redux/modules/note/noteTypes"
import { loadNotes, deleteNote } from "src/redux/modules/note/noteSlice"

import { DivNoteCard } from "./styles"
import { useEffect } from "react"

interface NotesGridProps {
  notes: Note[]
}

const NotesGrid = (props: NotesGridProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadNotes())
  }, [dispatch])

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
                    dispatch(deleteNote(note.id))
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
