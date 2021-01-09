import { Note } from "src/redux/modules/note/noteTypes"

export interface NotesGridProps {
  notes: Note[]
}

export interface CardProps {
  closeCard: () => void
  noteData: Note
}
