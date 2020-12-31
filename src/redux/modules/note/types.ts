export const LOAD_NOTES = "my-app/note/LOAD_NOTES"
export const OPEN_NOTE = "my-app/note/OPEN_NOTE"
export const ADD_NOTE = "my-app/note/ADD_NOTE"
export const SAVE_NOTE = "my-app/note/SAVE_NOTE"
export const CLOSE_NOTE = "my-app/note/CLOSE_NOTE"
export const DELETE_NOTE = "my-app/note/DELETE_NOTE"

export interface Note {
  id: string
  text?: string
}

export interface NoteState {
  notes: Note[]
}

// Note actions
interface LoadNotesAction {
  type: typeof LOAD_NOTES
}

interface OpenNoteAction {
  type: typeof OPEN_NOTE
  payload: Note
}

interface AddNoteAction {
  type: typeof ADD_NOTE
  payload: Note
}

interface SaveNoteAction {
  type: typeof SAVE_NOTE
  payload: Note
}

interface CloseNoteAction {
  type: typeof CLOSE_NOTE
  payload: Note
}

interface DeleteNoteAction {
  type: typeof DELETE_NOTE
  meta: {
    id: string
  }
}

export type NoteActionTypes =
  | LoadNotesAction
  | OpenNoteAction
  | AddNoteAction
  | SaveNoteAction
  | CloseNoteAction
  | DeleteNoteAction
