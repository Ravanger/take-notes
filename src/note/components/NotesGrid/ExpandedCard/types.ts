import { Note } from "src/redux/modules/note/noteTypes"

export interface CardProps {
  closeCard: () => void
  noteData: Note
}
