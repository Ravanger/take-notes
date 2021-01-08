import { Note } from "src/redux/modules/note/noteTypes"

interface NotesGridProps {
  notes: Note[]
  loadNotesAction: () => void
}

const NotesGrid = (props: NotesGridProps) => {
  return (
    <>
      <div>
        {props.notes && props.notes.length > 0
          ? props.notes.map((note, index) => <h1 key={index}>{note.title}</h1>)
          : "EMPTY"}
      </div>
      <button onClick={props.loadNotesAction}>Load</button>
    </>
  )
}

export default NotesGrid
