export const LOAD_NOTES = "my-app/note/LOAD_NOTES"
export const OPEN_NOTE = "my-app/note/OPEN_NOTE"
export const ADD_NOTE = "my-app/note/ADD_NOTE"
export const SAVE_NOTE = "my-app/note/SAVE_NOTE"
export const CLOSE_NOTE = "my-app/note/CLOSE_NOTE"
export const DELETE_NOTE = "my-app/note/DELETE_NOTE"

export interface Note {
  id: string
  title: string
  text?: string
  backgroundColor?: string
}

export interface NoteState {
  notes: Note[]
}
