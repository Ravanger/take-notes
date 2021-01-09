import { useEffect, useState } from "react"

import { Note } from "src/redux/modules/note/noteTypes"
import useNotesDispatch from "src/redux/modules/note/useNotesDispatch"
import { DivNoteCard } from "./styles"
import { NotesGridProps } from "./types"
import { ExpandedCard } from "./ExpandedCard"

const NotesGrid = (props: NotesGridProps) => {
  const [openNote, setOpenNote] = useState<Note | undefined>(undefined)
  const { dispatchLoadNotes, dispatchDeleteNote } = useNotesDispatch()

  useEffect(() => {
    dispatchLoadNotes()
  }, [dispatchLoadNotes])

  const isValid = props.notes && props.notes.length > 0

  return (
    <>
      {isValid && (
        <div>
          {props.notes.map((note, index) => (
            <DivNoteCard
              key={index}
              color={note.backgroundColor}
              onClick={() => {
                if (!openNote) setOpenNote(note)
              }}
            >
              <h2>{note.title}</h2>
              {note.text ? <p>{note.text}</p> : null}
              <button
                onClick={(event) => {
                  event.stopPropagation()
                  dispatchDeleteNote(note.id)
                }}
              >
                Delete
              </button>
            </DivNoteCard>
          ))}
        </div>
      )}
      {openNote && (
        <ExpandedCard
          closeCard={() => setOpenNote(undefined)}
          noteData={openNote}
        />
      )}
    </>
  )
}

export default NotesGrid
