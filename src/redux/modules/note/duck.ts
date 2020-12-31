import {
  LOAD_NOTES,
  OPEN_NOTE,
  ADD_NOTE,
  SAVE_NOTE,
  CLOSE_NOTE,
  DELETE_NOTE,
} from "./types"
import { NoteState, Note, NoteActionTypes } from "./types"

const initialState: NoteState = {
  notes: [],
}

// Reducer
export const reducer = (
  state = initialState,
  action: NoteActionTypes
): NoteState => {
  switch (action.type) {
    case ADD_NOTE:
      return { notes: [...state.notes, action.payload] }
    case SAVE_NOTE:
    case CLOSE_NOTE:
      const saveIndex = state.notes.findIndex(
        (note) => note.id === action.payload.id
      )
      let notesArray = [...state.notes]
      notesArray[saveIndex] = action.payload
      return { notes: notesArray }
    case DELETE_NOTE:
      return { notes: state.notes.filter((note) => note.id !== action.meta.id) }
    case LOAD_NOTES:
    case OPEN_NOTE:
    default:
      return state
  }
}

// Action Creators
export const loadNotes = (): NoteActionTypes => {
  return { type: LOAD_NOTES }
}

export const openNote = (note: Note): NoteActionTypes => {
  return { type: OPEN_NOTE, payload: note }
}

export const addNote = (note: Note): NoteActionTypes => {
  return { type: ADD_NOTE, payload: note }
}

export const saveNote = (note: Note): NoteActionTypes => {
  return { type: SAVE_NOTE, payload: note }
}

export const closeNote = (note: Note): NoteActionTypes => {
  return { type: CLOSE_NOTE, payload: note }
}

export const deleteNote = (id: string): NoteActionTypes => {
  return { type: DELETE_NOTE, meta: { id: id } }
}

export default reducer
